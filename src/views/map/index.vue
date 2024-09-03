<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as maptalks from 'maptalks';
import { renderShapesFromJSON } from '@/utils/maptalks';
import img from './1.png'

const mapContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  if (mapContainer.value) {
    const map = new maptalks.Map(mapContainer.value, {
      center: [0, 0],
      zoom: 14,
      baseLayer: new maptalks.TileLayer('base', {
        urlTemplate: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        subdomains: ['a', 'b', 'c', 'd'],
      })
    });

    // 添加建筑平面图层并传入空数组作为 geometries 参数
    const buildingLayer = new maptalks.VectorLayer('building', []).addTo(map);

    // JSON 数据
    const jsonData = {
      "shapes": [
        {
          "type": "polygon",
          "coordinates": [
            [0, 0],
            [0.01, 0],
            [0.01, 0.01],
            [0, 0.01]
          ],
          "options": {
            "lineColor": "#34495e",
            "lineWidth": 3,
            "polygonFill": "#1abc9c",
            "polygonOpacity": 0.6
          }
        },
        {
          "type": "line",
          "coordinates": [
            [0.01, 0.01],
            [0.02, 0.01],
            [0.02, 0.02]
          ],
          "options": {
            "lineColor": "#e74c3c",
            "lineWidth": 3
          }
        },
        {
          "type": "point",
          "coordinate": [0.01, 0.02],
          "options": {
            "textFaceName": "monospace",
            "textName": "Hello",
            "markerFill": "#1abc9c",
            "markerLineColor": "#34495e",
            "markerLineWidth": 2,
            "markerWidth": 10,
            "markerHeight": 10,
          }
        },
        {
          "type": "point",
          "coordinate": [0, 0.02],
          "options": {
            'markerFile': img,
            'markerWidth': 28,
            'markerHeight': 28,
            'markerDx': 0,
            'markerDy': 0,
            'markerOpacity': 1
          }
        },
        {
          "type": "point",
          "coordinate": [0.01, 0.01],
          "options": {
            // markerFileName: 'icon-url', // 或使用 markerFill 等属性
            markerFill: '#1abc9c',
            markerLineColor: '#34495e',
            markerLineWidth: 2,
            markerWidth: 10,
            markerHeight: 10,
            textName: 'Hello',
            textFaceName: 'monospace'
          }
        }
      ]
    };

    // 渲染 JSON 数据中的形状
    renderShapesFromJSON(buildingLayer, jsonData);

  }
});
</script>

<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
}
</style>
