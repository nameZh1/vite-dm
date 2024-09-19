// src/hooks/useChat.ts
import { ref, watch, onMounted } from 'vue';

interface Message {
  fromMe: boolean;
  content: string;
}

export function useChat(history: Message[] = [{ fromMe: false, content: '你好！' }]) {

  const messages = ref(history);

  const newMessage = ref('');
  const chatMessages = ref<HTMLElement | null>(null);

  const sendMessage = () => {
    if (newMessage.value.trim() !== '') {
      messages.value.push({ fromMe: true, content: newMessage.value });
      newMessage.value = '';
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    if (chatMessages.value) {
      chatMessages.value.scrollTop = chatMessages.value.scrollHeight;
    }
  };

  watch(messages, () => {
    scrollToBottom();
  });

  onMounted(() => {
    scrollToBottom();
  });

  return {
    messages,
    newMessage,
    sendMessage,
    chatMessages,
  };
}
