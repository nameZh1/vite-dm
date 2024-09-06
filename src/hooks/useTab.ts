import { ref, reactive, onMounted, watch } from 'vue';
import axios, { AxiosResponse } from 'axios';

interface TableData {
  // 定义你的表格数据结构
  id: number;
  name: string;
  // 更多字段...
}

interface Pagination {
  currentPage: number;
  pageSize: number;
  total: number;
}

interface FetchParams {
  page: number;
  size: number;
}

interface UseTabOptions {
  apiUrl: string;
  defaultPageSize?: number;
}

export function useTab(options: UseTabOptions) {
  const tableData = ref<TableData[]>([]);
  const loading = ref(false);
  const pagination = reactive<Pagination>({
    currentPage: 1,
    pageSize: options.defaultPageSize || 10,
    total: 0,
  });

  const fetchTableData = async (params: FetchParams) => {
    loading.value = true;
    try {
      const response: AxiosResponse<{ data: TableData[]; total: number }> = await axios.get(options.apiUrl, {
        params: {
          page: params.page,
          size: params.size,
        },
      });
      tableData.value = response.data.data;
      pagination.total = response.data.total;
    } catch (error) {
      console.error('Error fetching table data:', error);
    } finally {
      loading.value = false;
    }
  };

  // 当分页变化时重新获取数据
  watch(
    () => pagination.currentPage,
    (newPage) => {
      fetchTableData({ page: newPage, size: pagination.pageSize });
    }
  );

  // 初始化时获取表格数据
  onMounted(() => {
    fetchTableData({ page: pagination.currentPage, size: pagination.pageSize });
  });

  // 改变分页时的函数
  const handlePageChange = (newPage: number) => {
    pagination.currentPage = newPage;
  };

  const handlePageSizeChange = (newSize: number) => {
    pagination.pageSize = newSize;
    fetchTableData({ page: pagination.currentPage, size: newSize });
  };

  return {
    tableData,
    pagination,
    loading,
    handlePageChange,
    handlePageSizeChange,
  };
}
