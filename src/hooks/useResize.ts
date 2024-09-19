import { ref, onMounted, onUnmounted } from 'vue';

/**
 * 监听窗口大小变化
 * @returns 
 */
export function useResize() {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  const handleResize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  onMounted(() => window.addEventListener('resize', handleResize));
  onUnmounted(() => window.removeEventListener('resize', handleResize));

  return { width, height };
}
