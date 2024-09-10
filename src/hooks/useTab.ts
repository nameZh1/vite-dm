import { ref, reactive, onMounted, watch } from 'vue';
import axios, { AxiosResponse } from 'axios';

interface TableData {
  // 定义你的表格数据结构
  id: number;
  name: string;
  [key: string]: number | string | boolean;
  // 更多字段...
}

interface Pagination {
  currentPage: number;
  pageSize: number;
  total: number;
}

interface FetchParams {
  page?: number;
  size?: number;
}

interface UseTabOptions {
  apiUrl?: string;
  defaultPageSize?: number;
  autoApi?: boolean;
  isPage?: boolean;
}

export function useTab(options: UseTabOptions) {
  const { autoApi = true, defaultPageSize, apiUrl, isPage = true } = options
  const tableData = ref<TableData[]>([]);
  const loading = ref(false);
  const pagination = reactive<Pagination>({
    currentPage: 1,
    pageSize: defaultPageSize || 10,
    total: 0,
  });
  const searchQuery = ref({});

  const fetchTableData = async (params?: FetchParams) => {
    loading.value = true;
    try {
      if (apiUrl) {
        const response: AxiosResponse<{ data: TableData[]; total: number }> = await axios.get(apiUrl, {
          params: {
            page: params?.page || pagination.currentPage,
            size: params?.size || pagination.pageSize,
            ...searchQuery.value,
          },
        });
        tableData.value = response.data.data || [];
        pagination.total = response.data.total || 0;
      } else {
        tableData.value = [{ id: 1, name: 'John Doe' }];
        // tableData.value = [];
        pagination.total = Number(tableData.value.length);
      }
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
    autoApi && fetchTableData({ page: pagination.currentPage, size: pagination.pageSize });
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
    searchQuery,
    tableData,
    pagination,
    loading,
    fetchTableData,
    handlePageChange,
    handlePageSizeChange,
  };
}
