<script setup lang="ts" name="test">
import { useLazyLoad } from '@/hooks/useLazyLoad';
import { onMounted, ref } from 'vue';

const images = [
  '/src/assets/img/567.JPG',
  '/src/assets/img/567.JPG',
  '/src/assets/img/567.JPG',
  '/src/assets/img/567.JPG',
  '/src/assets/img/567.JPG',
  '/src/assets/img/567.JPG',
  '/src/assets/img/567.JPG',
];

const lazyImage = ref<HTMLImageElement[]>([]);

const { addObserver } = useLazyLoad();

onMounted(() => {
  lazyImage.value.forEach(image => addObserver(image));
});

</script>
<template>
  <div class="w100p h100p position-relative">
    <!-- <el-button class="absolute10-lt" type="primary" @click="test">test</el-button> -->
    <div class="d-flex flex-column">
      <img class="h100v" v-for="image in images" :key="image" :data-src="image" ref="lazyImage" alt="Lazy Image" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
