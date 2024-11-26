
<script setup lang="ts" name="css">
import { defineAsyncComponent } from 'vue';

const CardList = defineAsyncComponent(() => import('./card/CardList.vue'))
</script>
<template>
  <div class="w100p h100p">
    <CardList />
  </div>
</template>

<style lang="scss">
</style>
