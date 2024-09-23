<script setup lang="ts" name="test">
import { useTopo } from '@/hooks/useTopo';


const nodes = [
  {
    info: {
      name: '防火墙名称'
    }, id: 'index1', x: 400, y: 100, w: 50, h: 50, icon: '/src/assets/img/567.JPG', anchors: ['Bottom', 'Top'], source: [], target: ['index2']
  },
  {
    info: {
      name: '交换机名称'
    }, id: 'index2', x: 400, y: 200, w: 50, h: 50, icon: '/src/assets/img/567.JPG', anchors: ['Bottom', 'Top'], source: [], target: ['index3']
  },

  {
    info: {
      name: '路由器名称'
    }, id: 'index3', x: 400, y: 300, w: 50, h: 50, icon: '/src/assets/img/567.JPG', anchors: ['Bottom', 'Top'], source: [], target: ['index4']
  },
  {
    info: {
      name: '信令服务器名称'
    }, id: 'index4', x: 400, y: 400, w: 50, h: 50, icon: '/src/assets/img/567.JPG', anchors: ['Bottom', 'Top'], source: [], target: ['index5', 'index6','index7','index8','index9','index10']
  },

  {
    info: {
      name: '摄像机名称'
    }, id: 'index5', x: 100, y: 600, w: 50, h: 50, icon: '/src/assets/img/567.JPG', anchors: ['Bottom', 'Top'], source: [], target: []
  },

  {
    info: {
      name: '网络设备名称'
    }, id: 'index6', x: 200, y: 600, w: 50, h: 50, icon: '/src/assets/img/567.JPG', anchors: ['Bottom', 'Top'], source: [], target: []
  },


  {
    info: {
      name: '其他设备名称'
    }, id: 'index7', x: 300, y: 600, w: 50, h: 50, icon: '/src/assets/img/567.JPG', anchors: ['Bottom', 'Top'], source: [], target: []
  },
  {
    info: {
      name: '智能检测设备名称'
    }, id: 'index8', x: 400, y: 600, w: 50, h: 50, icon: '/src/assets/img/567.JPG', anchors: ['Bottom', 'Top'], source: [], target: []
  },
  {
    info: {
      name: '终端名称'
    }, id: 'index9', x: 500, y: 600, w: 50, h: 50, icon: '/src/assets/img/567.JPG', anchors: ['Bottom', 'Top'], source: [], target: []
  },
  {
    info: {
      name: '终端名称'
    }, id: 'index10', x: 600, y: 600, w: 50, h: 50, icon: '/src/assets/img/567.JPG', anchors: ['Bottom', 'Top'], source: [], target: []
  },

];

const { topoContainerRef } = useTopo(nodes, {
  Endpoint: 'Blank',
  Connector: 'Flowchart',
  overlays: [
    // 添加箭头
    ["Arrow", { width: 10, length: 12, location: 1, direction: 1, }],
  ]
});

</script>
<template>
  <div class="w100p h100p position-relative">
    <div ref="topoContainerRef" class="topo-container"></div>
    <div style="position: absolute; top: 0; border: 1px solid red; width: 700px; height: 700px;">1</div>
  </div>
</template>

<style lang="scss">
.topo-container {
  width: 100%;
  height: 500px;
  position: relative;
}

.topo-node {
  width: 50px;
  height: 50px;
  text-align: center;
  cursor: pointer;


  &-hover {
    border-radius: 5px;
    background-color: #5555556b;
    padding: 10px;
    opacity: 0;
    transition: all 0.5s;
  }

  &:hover {
    .topo-node-hover {
      opacity: 1;
    }
  }
}
</style>
