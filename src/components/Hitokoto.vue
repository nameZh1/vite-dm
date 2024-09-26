<script setup lang="ts" name="hitokoto">
import { hitokotoAPI } from "@/services/common";
import { onMounted, onUnmounted, ref } from "vue";

// 传参
const props = defineProps({
  x: {
    type: String,
    default: "50%",
  },
  y: {
    type: String,
    default: "50%",
  },
});
// 逐个打字效果
const displayedText = ref("loading...");
const useTypingEffect = (text: string, delay: number = 500) => {
  displayedText.value = "";
  let index = 0;
  interval.value = setInterval(() => {
    if (index < text.length) {
      displayedText.value += text[index];
      index++;
    } else {
      displayedText.value = "";
      index = 0;
      // clearInterval(interval);
    }
  }, delay);
};

// 一言对象
interface Hitokoto {
  commit_from: string;
  created_at: string;
  creator: string;
  creator_uid: string;
  from: string;
  from_who: string;
  hitokoto: string;
  id: string;
  length: string;
  reviewer: string;
  type: string;
  uuid: string;
}
const HitokotoObj = ref<Hitokoto>();
const updateInt = ref();
const interval = ref();
const getHitokotoObj = () => {
  hitokotoAPI().then((res) => {
    HitokotoObj.value = res.data;
    useTypingEffect(
      `${HitokotoObj.value!.hitokoto}   ---${HitokotoObj.value!.from_who}    `,
      200
    );
  });
};
onMounted(() => {
  getHitokotoObj();

  // updateInt.value = setInterval(() => {
  //   getHitokotoObj
  // }, 1000 * 6)
});

onUnmounted(() => {
  clearInterval(updateInt.value);
  clearInterval(interval.value);
});
</script>

<template>
  <div
    class="hitokoto-container position-fixed event-none translate-x-50 translate-y-50"
    :style="{ left: x, top: y, transform: 'translate(-50%, -150%)' }"
  >
    {{ displayedText }}
  </div>
</template>

<style scoped lang="scss">
.hitokoto-container {
  font-size: 16px;
  color: var(--el-text-color-primary);
  font-weight: bolder;
}
</style>
