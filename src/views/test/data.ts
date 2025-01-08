import { Nodes, Edges, Layouts } from "v-network-graph";

const nodes: Nodes = {
  node1: { name: "Node 1" },
  node2: { name: "Node 2" },
  node3: { name: "Node 3" },
  node4: { name: "Node 4" },
};

const edges: Edges = {
  edge1: { source: "node1", target: "node2" },
  edge2: { source: "node2", target: "node3" },
  edge3: { source: "node3", target: "node4" },
};

const layouts: Layouts = {
  nodes: {
    node1: { x: 100, y: 100 },
    node2: { x: 200, y: 200 },
    node3: { x: 300, y: 100 },
    node4: { x: 400, y: 200 },
  },
};

const myData = {
  code: 0,
  msg: null,
  data: [
    {
      id: "1",
      name: "集百优11",
      zoneData: [
        {
          name: "防火墙",
          data: [
            {
              name: "测试防火墙",
            },
          ],
        },
        {
          name: "交换机",
          data: [
            {
              name: "新增编辑交换机1",
            },
            {
              name: "交换机00",
            },
          ],
        },
        {
          name: "信令服务器",
          data: [
            {
              name: "信令11",
            },
          ],
        },
        {
          name: "服务器",
          data: [
            {
              name: "NPU服务器1",
            },
            {
              name: "NPU服务器2",
            },
            {
              name: "NPU服务器3",
            },
            {
              name: "NPU服务器4",
            },
          ],
        },
        {
          name: "摄像机",
          data: [
            {
              name: "sdk002",
            },
            {
              name: "onvif001",
            },
            {
              name: "onvif0021",
            },
            {
              name: "rtsp0011",
            },
            {
              name: "新增摄像机测试",
            },
            {
              name: "新SDK",
            },
          ],
        },
        {
          name: "网络设备",
          data: [
            {
              name: "测试网闸",
            },
          ],
        },
        {
          name: "其它设备",
          data: [
            {
              name: "test",
            },
            {
              name: "123",
            },
            {
              name: "新增1",
            },
            {
              name: "dfsdd",
            },
            {
              name: "解码器-黎斐",
            },
          ],
        },
        {
          name: "智能监测设备",
          data: [
            {
              name: "激光雷达设备A",
            },
            {
              name: "震动光纤1",
            },
            {
              name: "震动光纤11",
            },
          ],
        },
      ],
      children: [
        {
          id: "2",
          name: "站点",
          zoneData: [
            {
              name: "信令服务器",
              data: [
                {
                  name: "j100y9115NPU330028001",
                },
                {
                  name: "信令服务器11",
                },
                {
                  name: "信令服务器12",
                },
              ],
            },
          ],
          children: [],
        },
      ],
    },
  ],
  ok: true,
};

export default {
  nodes,
  edges,
  layouts,
  myData,
};
