import { ref, onMounted, onUnmounted } from 'vue';

export function useLazyLoad() {
  // 定义观察的元素数组
  const elements = ref<HTMLElement[]>([]);
  // IntersectionObserver 的实例
  const observer = ref<IntersectionObserver | null>(null);

  // 添加一个元素到观察队列
  const addObserver = (element: HTMLElement) => {
    if (observer.value) {
      observer.value.observe(element);
    }
  };

  // 处理元素进入视口的逻辑
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLImageElement;
        // 当元素进入视口时，将 data-src 赋值给 src
        target.src = target.dataset.src as string;
        // 停止观察该元素
        observer.value?.unobserve(target);
      }
    });
  };

  // 组件挂载时，创建 IntersectionObserver 实例
  onMounted(() => {
    observer.value = new IntersectionObserver(handleIntersection, {
      root: null, // 使用视口作为根
      threshold: 0.1, // 当元素显示 10% 时触发
    });

    // 给每个收集到的元素添加观察
    elements.value.forEach(addObserver);
  });

  // 组件卸载时，停止所有观察
  onUnmounted(() => {
    observer.value?.disconnect();
  });

  // 返回元素和添加观察的函数
  return {
    elements,
    addObserver,
  };
}
