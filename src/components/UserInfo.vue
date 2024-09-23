<script setup lang="ts" name="userInfo">
import { reactive } from 'vue';
import img from '@/assets/img/567.jpg';


// defineProps<{ msg?: string }>()
const userInfo = reactive({
  name: '张三',
  img: img,
  age: 18,
  sex: '男',
  address: '北京',
  phone: '18888888888',
  email: 'EMAIL',
  qq: '18888888888',
})
</script>

<template>
  <div class="w100p h100p d-flex flex-wrap pd10 userInfo-container">
    <img :src="userInfo.img" alt="" />
    <div class="d-flex flex-wrap pd30 userInfo-container-info">
      <keyValue :data="{ key: '名字:', value: userInfo.name }" />
      <keyValue :data="{ key: '年龄:', value: userInfo.age }" />
      <keyValue :data="{ key: '性别:', value: userInfo.sex }" />
      <keyValue :data="{ key: '手机:', value: userInfo.phone }" />
      <keyValue :data="{ key: '邮箱:', value: userInfo.email }" />
      <keyValue :data="{ key: '扣扣:', value: userInfo.qq }" />
    </div>
    <!-- <div>
      <el-button type="primary">修改</el-button>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
$rowH: 200px;
$borderRadius: 15px;

.userInfo-container {
  img {
    width: auto;
    height: $rowH;
    border-radius: $borderRadius;
    margin: 0 20px;
  }

  &-info {
    height: $rowH;
    background-color: var(--secondary-color);
    transition: background-color 0.5s;
    border-radius: $borderRadius;

    &:hover {
      background-color: var(--primary-color);
    }

    div+div {
      margin-left: 20px;
    }
  }
}
</style>
