import { ref, onUnmounted, getCurrentInstance } from 'vue';


/**
 * 防抖的目的是让某个函数在指定时间内没有再次调用时才执行。
 * @param fn  防抖函数 
 * @param delay  防抖时长
 * @returns 
 */
export function useDebounce<T>(fn: (args: T) => void, delay: number) {
  debugger
  const timer = ref<ReturnType<typeof setTimeout> | null>(null);

  const debouncedFn = (args: T) => {
    if (timer.value) {
      clearTimeout(timer.value);
    }

    timer.value = setTimeout(() => {
      fn(args);
    }, delay);
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
 * @param fn 
 * @param delay 
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
