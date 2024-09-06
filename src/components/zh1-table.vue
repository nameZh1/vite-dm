<script lang="ts" setup>
import { useTab } from '@/hooks/useTab';
import { computed, onMounted } from 'vue';
import EmptyPage from '@/components/EmptyPage.vue';

const { tableData, pagination, loading, handlePageChange, handlePageSizeChange } = useTab({
  apiUrl: '/xxx', // 假设你有一个API
  defaultPageSize: 10,
});

// 是否有数据
const hasData = computed(() => {
  return tableData.value.length > 0
})


onMounted(() => {})

</script>

<template>
  <div v-if="hasData" class="zh1Tab-container">
    <div class="zh1Tab-container-tab">
      <el-table :data="tableData" v-loading="loading">
        <el-table-column prop="id" label="ID" />
        <el-table-column prop="name" label="Name" />
        <!-- 其他列 -->
      </el-table>
    </div>
    <div class="zh1Tab-container-page">
      <el-pagination layout="prev, pager, next" :current-page="pagination.currentPage" :page-size="pagination.pageSize"
        :total="pagination.total" @current-change="handlePageChange" @size-change="handlePageSizeChange" />
    </div>
  </div>
  <EmptyPage v-else />
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
    min-height: 50px;
  }
}
</style>