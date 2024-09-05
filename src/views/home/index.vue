<script setup lang="ts" name="home">
import { markRaw, reactive, onMounted } from 'vue';
import { Menu } from '@/models/home';
import Map from '@/views/map/index.vue'
import Log from '@/views/log/index.vue'
import Test from '@/views/test/index.vue'
import Login from '@/admin/login/index.vue'


const info = reactive({
  title:  import.meta.env.VITE_APP_NAME,
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
    <el-header>{{ info.title }}</el-header>
    <el-container>
      <el-aside class='home-container-menu'>
        <ol :class="{'home-container-menu-item pointer':true, 'home-container-menu-item-pick': menuItem === menu.pickMenu}" v-for="menuItem in menu.menuList" :key="menuItem.id"  @click="menu.pickHandle(menuItem)">
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
    border-bottom: 1px solid #fff;
    // cursor: pointer;
    &:hover {
      background-color: #999;
      border:1px solid #999;
      border-bottom: 1px solid #999;
    }
    &-pick{
      background-color: #999;
      border:1px solid #999;
      border-bottom: 1px solid #999;
    }
  }
}
</style>
