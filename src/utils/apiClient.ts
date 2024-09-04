import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-url.com/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
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
    onUploadProgress: (e) => {
      if (e.total) {
        const progress = Math.round((e.loaded * 100) / e.total);
        console.log(`Upload progress: ${progress}%`);
      }
    },
  });
};

export const UPLOADMULTIPLE = async <T = any>({ url, files, ...config }: RequestConfig): Promise<AxiosResponse<T>> => {
  const formData = new FormData();
  if (files && files.length > 0) {
    files.forEach((file, i) => {
      formData.append(`file${i}`, file);
    });
  }

  return api.post(url, formData, {
    ...config,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: (e) => {
      if (e.total) {
        const progress = Math.round((e.loaded * 100) / e.total);
        console.log(`Upload progress: ${progress}%`);
      }
    },
  });
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