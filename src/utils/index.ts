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

/**
 * 随机生成uuid
 * @returns 
 */
export function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * 字符串首字母大写
 * @param str 字符串
 * @returns 
 */
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 深拷贝对象
 * @param obj 要克隆的对象
 * @returns 
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * 数组转对象
 * @param arr 
 * @param keyField key
 * @returns 
 */
export function arrayToObject(arr: any[], keyField: string) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }
  if (typeof keyField !== 'string') {
    throw new Error('Key field must be a string');
  }

  return arr.reduce((obj, item) => {
    if (item.hasOwnProperty(keyField)) {
      obj[item[keyField]] = { ...item }; // 或者直接赋值 item 如果不需要深拷贝
    } else {
      console.warn(`Item missing the key field ${keyField}:`, item);
    }
    return obj;
  }, {});
}