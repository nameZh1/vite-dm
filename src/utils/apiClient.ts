import axios, { AxiosProgressEvent, AxiosRequestConfig, AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    // config.url = import.meta.env.VITE_PROXY_KEY + config.url;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  }, 
  (error) => {
    return Promise.reject(error);
  }
);

interface RequestConfig extends AxiosRequestConfig {
  url: string;
  data?: any;
  file?: File;
  files?: File[];
  fileName?: string;
}

export const GET = async <T = any>({ url, ...config }: RequestConfig): Promise<AxiosResponse<T>> => {
  return api.get(url, config);
};

export const POST = async <T = any>({ url, data, ...config }: RequestConfig): Promise<AxiosResponse<T>> => {
  return api.post(url, data, config);
};

export const PUT = async <T = any>({ url, data, ...config }: RequestConfig): Promise<AxiosResponse<T>> => {
  return api.put(url, data, config);
};

export const DEL = async <T = any>({ url, ...config }: RequestConfig): Promise<AxiosResponse<T>> => {
  return api.delete(url, config);
};

const handleProgress = (e: AxiosProgressEvent) => {
  if (e.total) {
    const progress = Math.round((e.loaded * 100) / e.total);
    console.log(`Progress: ${progress}%`);
  }
};

export const UPLOAD = async <T = any>({ url, file, ...config }: RequestConfig): Promise<AxiosResponse<T>> => {
  const formData = new FormData();
  if (file) {
    formData.append('file', file);
  }

  return api.post(url, formData, {
    ...config,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: handleProgress,
  });
};

export const DOWNLOAD = async ({ url, fileName = '下载文件', ...config }: RequestConfig): Promise<void> => {
  try {
    const response = await api.get(url, {
      ...config,
      responseType: 'blob', // Set response type to 'blob'
      onDownloadProgress: handleProgress, // Handle download progress
    });

    // 创建一个 URL 对象来生成下载链接
    const urlObject = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = urlObject;
    link.download = fileName;
    link.click();

    // 释放对象 URL
    window.URL.revokeObjectURL(urlObject);

    // 处理下载成功
    console.log('下载成功');
  } catch (error) {
    // 处理下载失败
    console.error('下载失败', error);
  }
};



// // GET 请求
// const response = await GET({ url: '/your-endpoint' });

// // POST 请求
// const response = await POST({
//   url: '/your-endpoint',
//   data: { key: 'value' }
// });

// // 单文件上传
// const response = await UPLOAD({
//   url: '/upload-endpoint',
//   file: yourFile
// });

// // 多文件上传
// const response = await UPLOADMULTIPLE({
//   url: '/upload-endpoint',
//   files: [file1, file2]
// });