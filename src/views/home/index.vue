<script setup lang="ts" name="home">
import { markRaw, reactive } from 'vue';
import { Menu } from '@/models/home';
import Map from '@/views/map/index.vue'
import Login from '@/admin/login/index.vue'


const info = reactive({
  title: 'tool',
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
    }
  ],
  pickHandle: (item) => {
    menu.pickMenu = item
  }
})
</script>

<template>
  <el-container class="w100v h100v">
    <el-header>{{ info.title }}</el-header>
    <el-container>
      <el-aside class='home-container-menu'>
        <ol class='home-container-menu-item' v-for="menuItem in menu.menuList" :key="menuItem.id"  @click="menu.pickHandle(menuItem)">
          {{ menuItem.name }}
        </ol>
      </el-aside>
      <el-main>
        <component :is="menu.pickMenu.component" />
      </el-main>
    </el-container>
    <el-footer>footer</el-footer>
  </el-container>
</template>

<style scoped lang="scss">
.home-container-menu {
  width: 200px;
  &-item {
    padding: 10px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    &:hover {
      background-color: #f5f5f5;
    }
  }
}
</style>
