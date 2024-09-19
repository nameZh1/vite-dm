<script setup lang="ts" name="home">
import { markRaw, reactive, onMounted } from 'vue';
import { Menu } from '@/models/home';
import Map from '@/views/map/index.vue'
import Log from '@/views/log/index.vue'
import Test from '@/views/test/index.vue'
import Login from '@/admin/login/index.vue'


const info = reactive({
  title: import.meta.env.VITE_APP_NAME,
  footer: ''
})

const menu = reactive<Menu>({
  pickMenu: {
    id: '1',
    name: 'map',
    component: markRaw(Map)
  },
  menuList: [
    {
      id: '1',
      name: 'map',
      component: markRaw(Map)
    },
    {
      id: '2',
      name: 'login',
      component: markRaw(Login)
    },
    {
      id: '3',
      name: 'log',
      component: markRaw(Log)
    },
    {
      id: '4',
      name: 'test',
      component: markRaw(Test)
    }
  ],
  pickHandle: (item) => {
    menu.pickMenu = item
  }
})
onMounted(() => {
  menu.pickMenu = menu.menuList[0]
})
</script>

<template>
  <el-container class="w100v h100v">
    <el-header class="d-flex flex-row justify-center align-center text-bold font20">
      <el-image class="w35 h35 mr20 card-shadow pointer" src="/src/assets/img/567.JPG" fit="contain" />
      <div>{{ info.title }}</div>
    </el-header>
    <el-container>
      <el-aside class='home-container-menu'>
        <ol
          :class="{ 'home-container-menu-item pointer transition-all text-bold': true, 'home-container-menu-item-pick': menuItem === menu.pickMenu }"
          v-for="menuItem in menu.menuList" :key="menuItem.id" @click="menu.pickHandle(menuItem)">
          {{ menuItem.name }}
        </ol>
      </el-aside>
      <el-main class="home-container-main">
        <transition name="fade" mode="out-in">
          <component :is="menu.pickMenu.component" />
        </transition>
      </el-main>
    </el-container>
    <el-footer class="d-flex flex-row justify-center align-center">footer</el-footer>
  </el-container>
</template>

<style scoped lang="scss">
.home-container {
  background-color: var(--el-bg-color-page);
  color: var(--el-text-color-primary);

  &-menu {
    width: 200px;
    margin-left: 20px;
    border-radius: 8px;
    background-color: var(--el-bg-color);

    &-item {
      padding: 10px;

      &:hover {
        background-color: var(--el-color-primary);
        color: var(--el-text-color-primary);
      }

      &-pick {
        background-color: var(--el-color-primary);
        color: var(--el-text-color-primary);
      }
    }
  }

  &-main {
    border-radius: 8px;
    margin: 0 20px;
    padding: 0;
    background-color: var(--el-bg-color);
  }

}

/* 定义过渡动画效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
