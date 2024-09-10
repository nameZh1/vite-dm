import { ref, onUnmounted, getCurrentInstance } from 'vue';


/**
 * 防抖的目的是让某个函数在指定时间内没有再次调用时才执行。
 * or 一秒钟有100辆车要过，只能过1辆
 * @param fn  防抖函数 
 * @param delay  防抖时长
 * @returns 
 */
export function useDebounce<T>(fn: (args: T) => void, delay: number) {
  const timer = ref<ReturnType<typeof setTimeout> | null>(null);
  const debouncedFn = (args: T) => {
    console.log(timer.value)
    if (timer.value) {
      clearTimeout(timer.value);
    }
    timer.value = setTimeout(() => {
      fn(args);
    }, delay);
    console.log(timer.value)
  };
  // 检查当前是否在组件的 setup() 函数中
  if (getCurrentInstance()) {
    onUnmounted(() => {
      if (timer.value) {
        clearTimeout(timer.value);
      }
    });
  }
  return debouncedFn;
}




/**
 * 节流的目的是在指定时间内只允许函数执行一次。
 * or 最快速度，一秒钟也只能过1辆车
 * @param fn 节流函数
 * @param delay 节流时长
 * @returns 
 */

export function useThrottle<T>(fn: (args: T) => void, delay: number) {
  const lastCallTime = ref(0);
  const timer = ref<ReturnType<typeof setTimeout> | null>(null);
  const throttledFn = (args: T) => {
    const now = Date.now();
    if (now - lastCallTime.value >= delay) {
      lastCallTime.value = now;
      fn(args);
    } else if (!timer.value) {
      timer.value = setTimeout(() => {
        lastCallTime.value = Date.now();
        fn(args);
        timer.value = null;
      }, delay - (now - lastCallTime.value));
    }
  };
  // 检查当前是否在组件的 setup() 函数中
  if (getCurrentInstance()) {
    onUnmounted(() => {
      if (timer.value) {
        clearTimeout(timer.value);
      }
    });
  }
  return throttledFn;
}


/*-----------------------------------------------------
                        调用实例（防抖节流同）
-------------------------------------------------------
注意：useX方法返回防抖函数，需要提前定义好，才不会导致每次都
是新建方法，导致timer无法重置
-------------------------------------------------------
// 创建防抖函数
const debouncedFn = useDebounce((par: string) => {
  ElMessage.success('wzh ' + par);
  console.log('防抖函数触发:', par);
}, 1000);

// 点击按钮时调用该函数
const test = () => {
  debouncedFn('222'); // 调用防抖函数
};
-------------------------------------------------------*/