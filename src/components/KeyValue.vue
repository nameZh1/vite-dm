<script setup lang="ts" name="keyValue">
type keyV = {
  key: string,
  value: string
}

const props = withDefaults(defineProps<{
  data: keyV,
  height: string,
}>(), {
  data: () => ({
    key: 'k',
    value: 'v'
  }),
  height: '40px'
});

</script>

<template>
  <div class="keyValue-container" :style="{height: height}">
    <div>{{ data.key }}</div>
    <div>{{ data.value }}</div>
  </div>
</template>

<style scoped lang="scss">
.keyValue-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  div + div {
    margin-left: 8px;
  }
}
</style>
