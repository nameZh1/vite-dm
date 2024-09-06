<script setup lang="ts">
</script>

<template>
  <div class="page404-container">
    <div class="page404-container-box">
      <h1 class="page404-container-box-status">404</h1>
      <img class="page404-container-box-img" src="@/assets/gif/567.gif" mode="scaleToFill" />
      <h2>页面不知道走哪去了......</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page404-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;


  &-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background: radial-gradient(circle, #5fc4ff, #ffffff00);
    background: radial-gradient(circle, #5fc4ff, #ffffff00, #ffffff00);
    padding: 200px;

    h1 {
      font-size: 100px;
      color: #999;
    }

    h2 {
      font-size: 30px;
      color: #999;
    }

    &-status {}

    &-img {
      height: 100px;
      animation: spin567 15s linear infinite;
    }

    @keyframes spin567 {
      0% {
        transform: translateX(-100px)
      }

      49% {
        transform: translateX(100px) rotateY(0)
      }

      50% {
        transform: translateX(100px) rotateY(180deg)
      }

      100% {
        transform: translateX(-100px) rotateY(180deg)
      }
    }
  }
}
</style>
