<script setup lang="ts">
import { onMounted, ref } from "vue";
import { prettyLog } from "./utils/prettyLog";

// 主题切换
const currentTheme = ref("theme-light");
const toggleTheme = () => {
  currentTheme.value =
    currentTheme.value === "theme-dark" ? "theme-light" : "theme-dark";
};

// say hi
const log = prettyLog();

onMounted(() => {
  log.sayHi();
});
</script>

<template>
  <!-- <el-button class="change_btn" @click="toggleTheme">切换主题</el-button> -->
  <!-- <HomeGo> -->
  <!-- <template #main> -->
  <router-view :class="[currentTheme, 'allStyle_control']" />
  <!-- </template> -->
  <!-- </HomeGo> -->
</template>

<style lang="scss">
@use "./style/theme/theme-dark.scss" as dark;
@use "./style/theme/theme-light.scss" as light;

.change_btn {
  position: fixed;
  right: 0;
  margin: 10px;
  top: 0;
  z-index: 9999999;
}

.allStyle_control {
  // background-color: var(--el-bg-color-page);
  color: var(--el-text-color-primary);
  transition: all 0.5s;
}

.theme-dark {
  @include dark.theme;
}

.theme-light {
  @include light.theme;
}
</style>
