import { UPLOAD } from '@/utils/apiClient'
import { AxiosProgressEvent } from 'axios';

/**
 * multiple 多选上传
 * fileSize 文件大小限制
 * fileAccept 文件格式限制（后缀名）
 */
export interface TriggerFileUploadParams {
  multiple?: boolean;
  fileSize?: number;
  fileAccept?: string;
}

export const triggerFileUpload = (param: TriggerFileUploadParams = {}): void => {
  const { multiple = false, fileSize = 2, fileAccept = '' } = param;

  // 创建一个隐藏的 input 元素
  const input: HTMLInputElement = document.createElement('input');
  input.type = 'file';
  input.accept = fileAccept;
  input.style.display = 'none';
  input.multiple = multiple;

  // 监听文件选择事件
  input.addEventListener('change', handleFileChange);

  // 将 input 元素添加到 DOM 并触发点击事件
  document.body.appendChild(input);
  input.click();
  input.remove();

  // 添加样式
  addStyles();

  async function handleFileChange(event: Event): Promise<void> {
    const target = event.target as HTMLInputElement;
    const files = target.files;

    if (files && files.length > 0) {
      for (const file of files) {
        if (file.size > fileSize * 1024 * 1024) {
          alert(`文件 "${file.name}" 大小不能超过2MB`);
          continue;
        }

        const formData = new FormData();
        formData.append('file', file);

        // 创建通知元素
        const notification = createNotification(file.name, file.size);

        try {
          const response = await UPLOAD({
            // url: 'https://jsonplaceholder.typicode.com/posts/',
            url: '/api/upload',
            data: formData,
            onUploadProgress: (event: AxiosProgressEvent) => { // 使用 AxiosProgressEvent 类型
              console.log(event, 'onUploadProgress')
              if (event.total) {
                const percentComplete = Math.round((event.loaded / event.total) * 100);
                updateNotification(notification, percentComplete, '上传中...');
              }
            }
          });

          if (response.status === 200) {
            updateNotification(notification, 100, '上传完成');
          } else {
            updateNotification(notification, 0, '上传失败');
          }
        } catch (error) {
          updateNotification(notification, 0, '上传失败');
        } finally {
          removeNotification(notification);
        }
      }
    }
  }

  function createNotification(name: string, size: number): HTMLElement {
    // 检查容器是否已经存在
    let container = document.querySelector('.zh1-notification-container') as HTMLElement;

    // 如果容器不存在，则创建并添加到 body
    if (!container) {
      container = document.createElement('div');
      container.classList.add('zh1-notification-container');
      document.body.appendChild(container);
    }

    // 创建通知元素
    const notification = document.createElement('div');
    notification.classList.add('zh1-notification');
    notification.innerHTML = `
      <p><strong>文件名:</strong> ${name}</p>
      <p><strong>大小:</strong> ${(size / 1024).toFixed(2)} KB</p>
      <p><strong>进度:</strong> <span class="zh1-progress">0%</span></p>
      <div style="display: flex; flex-direction: row; position: relative">
        <div style="position: relative; width: 20px; height: 20px">
        <span class="zh1-notification-loading"></span>
        </div>
        <span class="zh1-status">
          上传中...
        </span>
      </div>
    `;

    // 将通知插入到容器中
    container.appendChild(notification);
    return notification;
  }

  function updateNotification(notification: HTMLElement, progress: number, status: string): void {
    const progressElement = notification.querySelector('.zh1-progress') as HTMLElement;
    const statusElement = notification.querySelector('.zh1-status') as HTMLElement;
    const loadingElement = notification.querySelector('.zh1-notification-loading') as HTMLElement;

    if(status === '上传成功' || status === '上传失败') {
      loadingElement.style.display = 'none';

    } 


    if (progressElement) {
      progressElement.innerText = `${progress}%`;
    }

    if (statusElement) {
      statusElement.innerText = status;
    }
  }

  function removeNotification(notification: HTMLElement, delay: number = 2000, animationDuration: number = 500): void {
    // 等待一定时间后移除通知
    setTimeout(() => {
      notification.style.transition = `all ${animationDuration}ms ease-in-out`; // 动态设置过渡时间
      notification.style.right = '-100%'; // 启动动画
      notification.style.opacity = '0'; // 启动动画
      // 在动画结束后移除元素
      setTimeout(() => {
        notification.remove();
      }, animationDuration);
    }, delay);
  }


  function addStyles(): void {
    if (!document.getElementById('upload-styles')) {
      const style = document.createElement('style');
      style.id = 'upload-styles'; // 设置一个唯一的 ID，防止重复
      style.textContent = `
        .zh1-notification-container {
          position: fixed;
          top: 0;
          right: 0;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          padding: 10px;
        }
        .zh1-notification {
          background: #f0f0f0;
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 4px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          position: relative;
          right: 0;
          top: 0;
          animation: notification-spin .5s ease-in-out;
        }
        
          @keyframes notification-spin {
            0% {
              opacity: 0;
              right: -100%;
              }
            100% {
              opacity: 1;
              right: 0;
              }
          }
        .zh1-notification p {
          margin: 5px 0;
          font-size: 14px;
        }
        .zh1-notification strong {
          font-weight: bold;
        }

.zh1-notification-loading::before {
    position: absolute;
    content: "";
    min-width: 20px;
    min-height: 20px;
    border: 2px solid rgba(0, 0, 0, 0.1); /* 外圈淡色 */
    border-top-color:var(--primary-color); /* 旋转的部分颜色 */
    border-radius: 50%;
    animation: zh1-notification-loading-spin 1s linear infinite; /* 旋转动画 */
  }

/* 旋转动画定义 */
@keyframes zh1-notification-loading-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
      `;
      document.head.appendChild(style);
    }
  }
};


/**
 * URL:下载链接
 * fileName:文件名
 */
export interface TriggerFileDownLoadParams {
  url: string;
  fileName?: string;
}
export const triggerFileDownload = (param: TriggerFileDownLoadParams): void => {
  const { url, fileName='文件' } = param;

  // 创建一个隐藏的 a 元素用于下载
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.download = fileName; // 指定下载文件的名字

  // 将 link 添加到 DOM 并触发点击事件
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // 显示下载通知
  // const notification = createNotification(fileName);
  addStyles();
  createNotification(fileName);

  function createNotification(name: string): HTMLElement {
    let container = document.querySelector('.zh1-notification-container') as HTMLElement;

    // 如果容器不存在，则创建并添加到 body
    if (!container) {
      container = document.createElement('div');
      container.classList.add('zh1-notification-container');
      document.body.appendChild(container);
    }

    // 创建通知元素
    const notification = document.createElement('div');
    notification.classList.add('zh1-notification');
    notification.innerHTML = `
      <p><strong>文件名:</strong> ${name}</p>
      <p><strong>状态:</strong> <span class="zh1-status">下载中...</span></p>
      <div style="display: flex; flex-direction: row; position: relative">
        <div style="position: relative; width: 20px; height: 20px">
        <span class="zh1-notification-loading"></span>
        </div>
        <span class="zh1-status">
          下载中...
        </span>
      </div>
    `;

    container.appendChild(notification);
    
    updateNotification(notification, '下载完成');
    return notification;
  }

  function updateNotification(notification: HTMLElement, status: string): void {
    const statusElement = notification.querySelector('.zh1-status') as HTMLElement;
    const loadingElement = notification.querySelector('.zh1-notification-loading') as HTMLElement;

    if (status === '下载完成') {
      loadingElement.style.display = 'none';
    }

    if (statusElement) {
      statusElement.innerText = status;
    }

    // 2 秒后自动移除通知
    removeNotification(notification);
  }

  function removeNotification(notification: HTMLElement, delay: number = 2000, animationDuration: number = 500): void {
    setTimeout(() => {
      notification.style.transition = `all ${animationDuration}ms ease-in-out`;
      notification.style.right = '-100%';
      notification.style.opacity = '0';
      setTimeout(() => {
        notification.remove();
      }, animationDuration);
    }, delay);
  }

  function addStyles(): void {
    if (!document.getElementById('download-styles')) {
      const style = document.createElement('style');
      style.id = 'download-styles';
      style.textContent = `
        .zh1-notification-container {
          position: fixed;
          top: 0;
          right: 0;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          padding: 10px;
        }
        .zh1-notification {
          background: #f0f0f0;
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 4px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          position: relative;
          right: 0;
          top: 0;
          animation: notification-spin .5s ease-in-out;
        }
        @keyframes notification-spin {
          0% {
            opacity: 0;
            right: -100%;
          }
          100% {
            opacity: 1;
            right: 0;
          }
        }
        .zh1-notification p {
          margin: 5px 0;
          font-size: 14px;
        }
        .zh1-notification strong {
          font-weight: bold;
        }

.zh1-notification-loading::before {
    position: absolute;
    content: "";
    min-width: 20px;
    min-height: 20px;
    border: 2px solid rgba(0, 0, 0, 0.1); 
    border-top-color:var(--primary-color); 
    border-radius: 50%;
    animation: zh1-notification-loading-spin 1s linear infinite;
  }

@keyframes zh1-notification-loading-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
      `;
      document.head.appendChild(style);
    }
  }
};
