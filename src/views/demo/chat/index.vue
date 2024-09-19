<script setup lang="ts" name="test">
import { onMounted } from 'vue';
import { useChat } from '@/hooks/useChat';

const { messages, newMessage, sendMessage, chatMessages } = useChat();

// 点击按钮时调用该函数
const test = () => {

};

onMounted(() => {
});
</script>
<template>
  <div class="w100p h100p position-relative">
    <!-- <el-button class="absolute10-lt" type="primary" @click="test">test</el-button> -->
    <div class="w500 h500 d-flex flex-column justify-center align-center">
      <!-- 消息展示区 -->
      <div class="flex-fill w100p" ref="chatMessages">
        <div v-for="(message, index) in messages" :key="index"
          :class="{ 'text-right': message.fromMe, 'text-left': !message.fromMe }">
          <div>{{ message.content }}</div>
        </div>
      </div>

      <!-- 输入框和发送按钮 -->
      <div class="flex-shrink  d-flex flex-row">
        <el-input v-model="newMessage" placeholder="输入消息..." @keyup.enter="sendMessage" />
        <el-button type="primary" @click="sendMessage">发送</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
