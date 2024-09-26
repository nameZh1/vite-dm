import { ref } from 'vue';

export function useTypingEffect(text: string, delay: number = 500) {
  const displayedText = ref("");

  const typeText = () => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        displayedText.value += text[index];
        index++;
      } else {
        clearInterval(interval);
      }
    }, delay);
  };

  // onMounted(() => {
  //   typeText();
  // });

  return { displayedText, typeText };
}