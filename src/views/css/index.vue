<script setup lang="ts" name="css">
import { ElMessage } from 'element-plus';
import { defineAsyncComponent, onMounted } from 'vue';
const CardList = defineAsyncComponent(() => import('./card/CardList.vue'))

onMounted(() => {
  // ElMessage({
  //   showClose: true,
  //   message: '来自网络demo，侵删',
  //   type: 'info',
  //   duration: 0
  // })
})
</script>
<template>
  <div class="w100p h100p">
    <span></span>
    <CardList />
  </div>
</template>

<style lang="scss"></style>
