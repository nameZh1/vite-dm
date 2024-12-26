<script setup lang="ts" name="test">
import { arrayToObject, formatDate } from '@/utils';
import { reactive, ref } from 'vue';

const form = reactive({
  name: '',
  region: '',
  date1: '' as any,
  date2: '',
  delivery: '0',
  type: [],
  resource: '',
  desc: ''
})
const isEdit = ref(true)
</script>
<template>
  <div class="mb20">
    <span>编辑：</span>
    <el-switch v-model="isEdit"></el-switch>
  </div>

  <el-form ref="formRef" :model="form" label-width="80px">
    <el-form-item label="活动名称">
      <el-input v-if="isEdit" v-model="form.name"></el-input>
      <span v-else>{{ form.name }}</span>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-if="isEdit" v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
      <span v-else>{{ arrayToObject([{ value: 'shanghai', label: '区域一' }], 'value')[form.region].label }}</span>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker v-if="isEdit" type="date" placeholder="选择日期" v-model="form.date1"
          style="width: 100%;"></el-date-picker>
        <span v-else>{{ formatDate(form.date1) }}</span>
      </el-col>
    </el-form-item>
    <el-form-item label="即时配送">
      <el-switch v-if="isEdit" active-value="0" inactive-value="1" v-model="form.delivery"></el-switch>
      <span v-else>{{ arrayToObject([{ value: '0', label: '开启' }, { value: '1', label: '关闭' }],
        'value')[form.delivery].label }}</span>
    </el-form-item>
    <el-form-item label="活动性质">
      <el-checkbox-group v-if="isEdit" v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动" value="type" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
      <span v-else>{{ form.type.join(',') }}</span>
    </el-form-item>
    <el-form-item label="特殊资源">
      <el-radio-group v-if="isEdit" v-model="form.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
      <span v-else>{{ form.resource }}</span>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss"></style>
