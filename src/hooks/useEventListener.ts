import { onMounted, onUnmounted } from 'vue';

export function useEventListener(event: string, callback: EventListener) {
  onMounted(() => window.addEventListener(event, callback));
  onUnmounted(() => window.removeEventListener(event, callback));
}
