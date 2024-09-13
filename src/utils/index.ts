/**
 * 一般工具方法
 */

/**
 * 对象重置
 * date: 2024年9月13日
 * author: zh1
 * @param obj 重置对象
 */
export function reSetObj(obj: any) {
  if (!obj) return;
  const type = typeof (obj);
  switch (type) {
    case 'object':
      if (Array.isArray(obj)) {
        obj = [];
        obj.length = 0;
      } else {
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            obj[key] = '';
          }
        }
      }
      break;
    case 'string':
      obj = '';
      break;
    case 'number':
      obj = 0;
      break;
    // case 'boolean':
    //   obj = false;
    //   break;
    default:
      obj = null;
      break;
  }
  return obj;

}


/**
 * 时间格式化
 * @param date 时间对象
 * @param format 格式
 * @returns 
 */
export const formatDate = (date: Date, format: string = 'YYYY-MM-DD'): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return format
    .replace('YYYY', year.toString())
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}