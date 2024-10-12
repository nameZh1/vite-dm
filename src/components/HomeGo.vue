<script setup lang="ts" name="homeGo">
import { computed, onMounted, onUnmounted, ref } from "vue";

// 传参
const props = defineProps({
  x: {
    type: String,
    default: "50%",
  },
  y: {
    type: String,
    default: "50%",
  },
});

const scrollContainer = ref<HTMLElement | null>(null); // 用于获取 homeGo-container

const scrollY = ref(0);

const handleScroll = () => {
  if (scrollContainer.value) {
    scrollY.value = scrollContainer.value.scrollTop; // 获取容器的滚动位置
  }
};

const blurStyle = computed(() => {
  const blurAmount = Math.min(scrollY.value / 100, 10); // 控制模糊程度，最大值为 10px
  // const opacity = Math.min(scrollY.value / 500, 0.8); // 控制透明度，最大值为 0.8
  return {
    backdropFilter: `blur(${blurAmount}px)`,
    // opacity: `${opacity}`,
  };
});
onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', handleScroll); // 监听滚动事件
  }
});

onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('scroll', handleScroll); // 移除滚动事件监听
  }
});
</script>

<template>
  <div class="homeGo-container" ref="scrollContainer" @scroll="handleScroll">
    <div :style="blurStyle">
      <div class="homeGo-container-bg"></div>
      <slot name="main" :style="blurStyle"> </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.homeGo-container {
  // width: 100vw;
  height: 100vh;
  background-image: url("@/assets/img/bg.png");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;

  &-bg {
    // width: 100vw;
    height: 200vh;
    flex-shrink: 0;
  }

  /* 自定义整个滚动条 */
  &::-webkit-scrollbar {
    width: 12px;
    /* 设置滚动条的宽度 */
  }

  /* 自定义滚动条轨道 */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    /* 设置轨道的背景颜色 */
  }

  /* 自定义滚动条的滑块（thumb） */
  &::-webkit-scrollbar-thumb {
    background: #888;
    /* 设置滑块的背景颜色 */
  }

  /* 当滑块悬停或活动时自定义滚动条的滑块 */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
    /* 设置滑块在悬停状态下的背景颜色 */
  }



}
</style>
