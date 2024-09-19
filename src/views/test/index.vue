<script setup lang="ts" name="test">
import { ElMessage } from 'element-plus';
import { onMounted, ref, computed } from 'vue';
import { fileUpload } from '../../utils/fileUpload';


// 弹框展示标识
const dialogTableVisible = ref(false);
// 表格数据
const tableData = ref([
  {
    name: '张三',
    age: 18,
    multiple: true,
    data: [],
    key: '张',
    index: 0
  },
  {
    name: '李四',
    age: 20,
    multiple: false,
    data: [],
    key: '李',
    index: 1
  },
  {
    name: '王五',
    age: 22,
    multiple: true,
    data: [],
    key: '王',
    index: 2
  },
]);

/**
 * 表格操作(获取文件)
 * @param rows 表格选中行
 * @param multiple 是否允许文件多选
 */
const handleUpload = async (rows: any, multiple: boolean = false) => {
  // console.log(rows)
  // return 
  const formDatas = await fileUpload({ multiple: multiple }) as any[]
  formDatas.forEach((formDataItem: any) => {
    fileToRow(formDataItem, rows)
  })
};
// 文件归属
const fileToRow = async (formtDate: any, rows: any) => {
  // 遍历表格数据，判断文件名是否包含表格数据的key
  for (let i = 0; i < rows.length; i++) {
    if (formtDate.get('file').name.includes(rows[i].key)) {
      ElMessage.success(rows[i].key)

      // tableData.value[rows[i].index].data.push({
      //   name: formtDate.get('file').name,
      //   data: formtDate.get('file')
      // })
      tableData.value[rows[i].index].data[0] = {
        name: formtDate.get('file').name,
        data: formtDate.get('file')
      } as never
      break;
    } else if (i === rows.length - 1) {
      // 文件名异常
      ElMessage.warning(`文件名异常：${formtDate.get('file').name}`)
    }
  }


};

// 删除
const handleDelet = (row: any) => {
  console.log(tableData.value[row.index].data)
  // tableData.value[row.index].data = []
}


// 表格多选
const selectRows = ref([]);
const multiple = computed(() => {
  return selectRows.value.length > 0;
})
const handleSelectionChange = (val: any) => {
  selectRows.value = val;
}




// 点击按钮时调用该函数
const test = () => {
  dialogTableVisible.value = true;
};

onMounted(() => {
});
</script>
<template>
  <div class="test-container">
    <el-button type="primary" @click="test">test</el-button>
    <el-dialog title="测试" v-model="dialogTableVisible">
      <el-button type="primary" class="mb10" :disabled="!multiple"
        @click="handleUpload(selectRows, true)">批量上传</el-button>
      <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="180">
        </el-table-column>
        <el-table-column prop="data" label="数据">
          <template #default="{ row }">
            <template v-for="(item, index) in row.data">
              <!-- <a>{{ item.name }}</a> -->
              <el-image style="width: 100px; height: 100px" :src="item.data" fit="fill" />
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="action" label="操作">
          <template #default="{ row }">
            <template v-if="row.data.length > 0">
              <el-button type="primary" @click="handleDelet(row)">删除</el-button>
            </template>
            <template v-else>
              <el-button v-if="row.multiple" type="primary" @click="handleUpload([row], true)">批量上传</el-button>
              <el-button v-else type="primary" @click="handleUpload([row])">单选上传</el-button>
            </template>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.test-container {
  width: 100%;
  height: 100%;
}
</style>
