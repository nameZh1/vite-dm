// hooks/useRecorder.ts
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

interface Recording {
  name: string;
  url: string;
}

export function useRecorder() {
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

  return {
    isRecording,
    recordings,
    startRecording,
    stopRecording,
    playRecording,
    deleteRecording,
    audioPlayer, // 暴露音频播放器 ref
  };
}
