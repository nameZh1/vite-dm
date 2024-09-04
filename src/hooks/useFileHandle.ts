import { UPLOAD } from '@/utils/apiClient'
import { AxiosProgressEvent } from 'axios';

export interface TriggerFileUploadParams {
  multiple: boolean;
}

export const triggerFileUpload = (param: TriggerFileUploadParams): void => {
  const { multiple } = param;

  // 创建一个隐藏的 input 元素
  const input: HTMLInputElement = document.createElement('input');
  input.type = 'file';
  input.accept = '.jpg';
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
        if (file.size > 2 * 1024 * 1024) {
          alert(`文件 "${file.name}" 大小不能超过2MB`);
          continue;
        }

        const formData = new FormData();
        formData.append('file', file);

        // 创建通知元素
        const notification = createNotification(file.name, file.size);

        try {
          const response = await UPLOAD({
            url: 'https://jsonplaceholder.typicode.com/posts/',
            data: formData,
            onUploadProgress: (event: AxiosProgressEvent) => { // 使用 AxiosProgressEvent 类型
              if (event.total) {
                const percentComplete = Math.round((event.loaded / event.total) * 100);
                updateNotification(notification, percentComplete, '上传中...');
              }
            }
          });

          if (response.status === 200) {
            updateNotification(notification, 100, '上传完成');
          } else {
            updateNotification(notification, 100, '上传失败');
          }
        } catch (error) {
          updateNotification(notification, 100, '上传失败');
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
      <p><strong>状态:</strong> <span class="zh1-status">上传中...</span></p>
    `;

    // 将通知插入到容器中
    container.appendChild(notification);
    return notification;
  }

  function updateNotification(notification: HTMLElement, progress: number, status: string): void {
    const progressElement = notification.querySelector('.zh1-progress') as HTMLElement;
    const statusElement = notification.querySelector('.zh1-status') as HTMLElement;

    if (progressElement) {
      progressElement.innerText = `${progress}%`;
    }

    if (statusElement) {
      statusElement.innerText = status;
    }
  }

  function removeNotification(notification: HTMLElement): void {
    setTimeout(() => {
      notification.remove();
    }, 1000);
  }

  function addStyles(): void {
    const style = document.createElement('style');
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
      }
      .zh1-notification p {
        margin: 5px 0;
        font-size: 14px;
      }
      .zh1-notification strong {
        font-weight: bold;
      }
    `;
    document.head.appendChild(style);
  }
};
