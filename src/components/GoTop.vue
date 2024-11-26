<script setup lang="ts">
// 定义一个方法，用于滚动到页面顶部
const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
    <div class="goTop-container" @click="goToTop">
        返回到低端
    </div>
</template>

<style lang="scss" scoped>
.goTop-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    z-index: 9999999;
    border-radius: 8px;
    background-color: var(--el-color-primary);
    color: var(--el-text-color-primary);
    cursor: pointer;
    transition: all .5s;

    &:hover {
        background-color: var(--el-text-color-primary);
        color: var(--el-color-primary);
    }
}
</style>