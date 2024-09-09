<script setup lang="ts">
import { ref } from 'vue';

const currentTheme = ref('theme-light');

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'theme-dark' ? 'theme-light' : 'theme-dark';
};
</script>

<template>
  <el-button class="change_btn" @click="toggleTheme">Change Theme</el-button>
  <router-view :class="[currentTheme, 'allStyle_control']" />
</template>

<style lang="scss">
@use './style/theme/theme-dark.scss' as dark;
@use './style/theme/theme-light.scss' as light;

.change_btn {
  position: fixed;
  right: 0;
  margin: 10px;
  top: 0;
}

.allStyle_control {
  background-color: var(--el-bg-color-page);
  color: var(--el-text-color-primary);
  transition: all .5s;
}

.theme-dark {
  @include dark.theme;
}

.theme-light {
  @include light.theme;
}
</style>
