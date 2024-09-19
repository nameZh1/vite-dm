<script setup lang="ts" name="test">
import { ElMessage } from 'element-plus';
import { onMounted, ref } from 'vue';

interface Recording {
  name: string;
  url: string;
}

const isRecording = ref(false);
const recordings = ref<Recording[]>([]);
const mediaRecorder = ref<MediaRecorder | null>(null);
const audioChunks: Blob[] = [];
const audioPlayer = ref<HTMLAudioElement | null>(null);

// 开始录音
const startRecording = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder.value = new MediaRecorder(stream);

    mediaRecorder.value.ondataavailable = (event) => {
      audioChunks.push(event.data); // 收集录音片段
    };

    mediaRecorder.value.onstop = () => {
      const blob = new Blob(audioChunks, { type: 'audio/webm' });
      const url = URL.createObjectURL(blob);

      recordings.value.push({
        name: `录音_${new Date().toLocaleTimeString()}`,
        url,
      });

      audioChunks.length = 0; // 清空片段
    };

    mediaRecorder.value.start();
    isRecording.value = true;
  } catch (err) {
    ElMessage.error('无法访问麦克风');
    console.error('Error accessing microphone:', err);
  }
};

// 停止录音
const stopRecording = () => {
  if (mediaRecorder.value && mediaRecorder.value.state !== 'inactive') {
    mediaRecorder.value.stop();
    isRecording.value = false;
  }
};

// 播放录音
const playRecording = (recording: Recording) => {
  if (audioPlayer.value) {
    audioPlayer.value.src = recording.url;
    audioPlayer.value.play();
  }
};

// 删除录音
const deleteRecording = (index: number) => {
  recordings.value.splice(index, 1);
  ElMessage.success('录音文件已删除');
};

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
        <el-table-column label="操作">
          <template #default="scope">
            <el-button @click="playRecording(scope.row)">播放</el-button>
            <el-button type="danger" @click="deleteRecording(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 播放音频 -->
      <audio ref="audioPlayer" controls></audio>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
