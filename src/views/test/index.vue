<script setup lang="ts" name="test">
import { computed, reactive, ref } from 'vue';
import { videoPlay } from "vue3-video-play";
import 'vue3-video-play/dist/style.css'
import LivePlayer from '@liveqing/liveplayer-v3' // vue3

const options = reactive({
  width: '800px', //播放器高度
  height: '450px', //播放器高度
  color: "#409eff", //主题色
  title: '', //视频名称
  src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4", //视频源
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false,  //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制
  controlBtns: ['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'pageFullScreen', 'fullScreen'] //显示所有按钮,
})

const options2 = reactive({
  src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", //视频源
  type: 'm3u8', //视频类型
})

const videoUrl = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'

const snapOutside = function (snapData: any) {
  alert(snapData)
}
const mp4URL = computed(() => {
  return `${location.protocol}//${location.host}/video.mp4`
});
const flvURL = computed(() => {
  return `${location.protocol}//${location.host}/video.flv`;
});

const player2 = ref()

const getTime = () => {
  const time = player2.value.getCurrentTime()
  console.log(time, 'ti')
}

</script>
<template>
  <div class="w100p h100p">
    <!-- <videoPlay v-bind="options" poster='https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/ironMan.jpg' /> -->
    <!-- <videoPlay width="800px" title="冰河世纪" :src="options2.src" :type="options2.type" :autoPlay="false" /> -->
    <!-- <div style="width:512px;height:300px;margin:auto">
      <LivePlayer :videoUrl="mp4URL" waterMark="回放演示" />
    </div> -->
    <div style="width:512px;height:300px;margin:auto" class="palyer2">
      <LivePlayer @snapOutside="snapOutside" ref="player2" :videoUrl="flvURL" live digitalZoom waterMark="电子放大" />
    </div>
    <el-button type="primary" @click="getTime">获取时间</el-button>
  </div>
</template>

<style lang="scss"></style>
