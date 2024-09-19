<script setup lang="ts" name="test">
import { useRecorder } from '@/hooks/useRecorder';
import { onMounted } from 'vue';

const {
  isRecording,
  recordings,
  startRecording,
  stopRecording,
  playRecording,
  deleteRecording,
  audioPlayer,
} = useRecorder();

// 点击按钮时调用该函数
const test = () => {

};

onMounted(() => {
});
</script>
<template>
  <div class="w100 h100 position-relative">
    <!-- <el-button class="absolute10-lt" type="primary" @click="test">test</el-button> -->
    <div>
      <el-button type="primary" @click="startRecording" :disabled="isRecording">开始录音</el-button>
      <el-button type="danger" @click="stopRecording" :disabled="!isRecording">停止录音</el-button>

      <el-table :data="recordings" v-if="recordings.length">
        <el-table-column prop="name" label="录音文件名" />
        <el-table-column prop="name" label="录音文件">
          <template #default="{ row }">
            <audio ref="audioPlayer" controls>
              <source :src="row.url" type="audio/webm" />
            </audio>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template #default="scope">
            <el-button @click="playRecording(scope.row)">播放</el-button>
            <el-button type="danger" @click="deleteRecording(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 播放音频 -->
      <!-- <audio ref="audioPlayer" controls></audio> -->
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
