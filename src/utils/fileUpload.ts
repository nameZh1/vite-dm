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

export const fileUpload = (param: TriggerFileUploadParams = {}) => {
  const { multiple = false, fileSize = 2, fileAccept = '' } = param;

  return new Promise((resolve, reject) => {
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

    async function handleFileChange(event: Event): Promise<void> {
      try {
        const formDatas = [];
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
            formDatas.push(formData);
          }
        }
        resolve(formDatas)
      } catch (error) {
        reject(error)
      } finally {
        // 移除事件监听器
        input.removeEventListener('change', handleFileChange);
        input.remove();
      }
    }
  })








};