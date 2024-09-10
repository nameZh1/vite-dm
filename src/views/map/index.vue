<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as maptalks from 'maptalks';
import { renderShapesFromJSON } from '@/utils/maptalks';
import { optJson } from './opt';

// 加载变量
const loading = ref(false);

// 图层变量
const mapContainer = ref<HTMLElement | null>(null);
const Map = ref<maptalks.Map>();

const layersMap = ref({} as Record<string, maptalks.VectorLayer>);
const currentLayer = ref('');


onMounted(async () => {
  loading.value = true
  if (mapContainer.value) {
    Map.value = new maptalks.Map(mapContainer.value, {
      center: [0, 0],
      zoom: 14,
      baseLayer: new maptalks.TileLayer('base', {
        urlTemplate: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        subdomains: ['a', 'b', 'c', 'd'],
        attribution: 'wzh'
      })
    });
    // JSON 数据
    const jsonData = optJson;
    // 渲染 JSON 数据中的形状
    layersMap.value = renderShapesFromJSON(jsonData, Map.value as maptalks.Map);
  
    loading.value = false
  }
});

// 切换图层
const changeLayer = (key:any, value: any) => {
  if(currentLayer.value && currentLayer.value!== key) {
    layersMap.value[currentLayer.value].hide();
  }
  if (layersMap.value[key]) {
    layersMap.value[key].show();
  }
  currentLayer.value = key;
};

</script>

<template>
  <div v-loading="loading" class="w100 h100 position-relative">
    <div ref="mapContainer" class="w100 h100"></div>
    <div class="map-container-changeLayer">
      <el-button v-for="(value, key) in layersMap" @click="changeLayer(key, value)">{{ key }}</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.map-container-changeLayer {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
}
</style>
