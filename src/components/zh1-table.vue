<script lang="ts" setup>
import { useTab } from '@/hooks/useTab';
import { onMounted } from 'vue';

const { tableData, pagination, loading, handlePageChange, handlePageSizeChange } = useTab({
  apiUrl: '/xxx', // 假设你有一个API
  defaultPageSize: 10,
});

onMounted(() => {
  // setTimeout(() => {
  //   tableData.value = [
  //     {
  //       id: 1,
  //       name: 'wzh'
  //     }
  //   ]
  // }, 3000)
})

</script>

<template>
  <div class="zh1Tab-container">
    <div class="zh1Tab-container-tab">
      <el-table :data="tableData" v-loading="loading">
        <el-table-column prop="id" label="ID" />
        <el-table-column prop="name" label="Name" />
        <!-- 其他列 -->
      </el-table>
    </div>
    <div class="zh1Tab-container-page">
      <el-pagination  layout="prev, pager, next" :current-page="pagination.currentPage" :page-size="pagination.pageSize" :total="pagination.total"
        @current-change="handlePageChange" @size-change="handlePageSizeChange" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.zh1Tab-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  &-tab {
    flex: 1;
  }
  &-page {
    flex-shrink: 0;
  }
}
</style>