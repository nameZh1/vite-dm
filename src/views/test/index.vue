<template>
  <div ref="cytoscapeContainer"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import cytoscape from "cytoscape";
import myData from "./data"; // 确保路径正确
import img from "@/assets/img/567.jpg";

// 创建一个引用，用于挂载 Cytoscape 实例
const cytoscapeContainer = ref<HTMLElement | null>(null);

// 解析数据并生成 Cytoscape 的元素定义
function parseData(
  data: any[],
  startX = 0,
  startY = 0,
  parNodeId?: string
): [any[], number, number] {
  if (!Array.isArray(data)) return [[], 0, 0];

  const elements: any[] = [];
  let maxX = startX;
  let maxY = startY;

  data.forEach((item, index) => {
    if (!item) return; // 如果项为空或未定义，则跳过

    // 创建顶级父节点，并设定其位置
    const nodeId = item.id || item.name;
    const nodeX = startX + index * 300; // 水平间隔
    elements.push({
      group: "nodes",
      data: { id: nodeId, label: item.name },
      position: { x: nodeX, y: startY },
    });

    // 初始化 zoneData 的起始位置
    let zoneY = startY + 50; // 给定一些额外空间给 zoneData 元素
    let zoneMaxWidth = 0;

    // 计算当前层所有 zoneData 的最大宽度
    const maxZoneWidth = item.zoneData
      ? Math.max(
          ...item.zoneData.map((zone: any) =>
            Array.isArray(zone.data) ? zone.data.length * 150 + 250 : 0
          )
        )
      : 0;

    // 用于存储上一个 zoneData 的第一个 data 子元素的 ID
    let prevFirstDataId = "";

    // 上个树节点id
    let treeNodeId = "";

    // 处理 zoneData 下的元素，使它们垂直分布并居中
    if (Array.isArray(item.zoneData)) {
      let prevZoneId = ""; // 用于存储前一个 zoneData 的 ID
      item.zoneData.forEach((zone: any, zoneIndex: any) => {
        const zoneId = `${nodeId}-${zone.name}`;
        // 计算每个 zoneData 的中心位置
        const zoneCenterOffset =
          (maxZoneWidth - (zone.data?.length ?? 0) * 150 - 100) / 2;
        const zoneX = nodeX + 50 + zoneCenterOffset; // 基于最大宽度居中

        elements.push({
          group: "nodes",
          data: { id: zoneId, label: zone.name, parent: nodeId },
          position: { x: zoneX, y: zoneY + zoneIndex * 100 }, // 垂直间隔
        });

        // 如果不是第一个 zoneData，则添加前一个 zoneData 到当前 zoneData 的边
        if (prevZoneId) {
          if (zoneIndex <= 3) {
            elements.push({
              group: "edges",
              data: {
                id: `${prevZoneId}-${zoneId}-edge`,
                source: prevZoneId,
                target: zoneId,
              },
            });
          }
        } else {
          treeNodeId = zoneId;
          if (parNodeId) {
            elements.push({
              group: "edges",
              data: {
                id: `${parNodeId}-${zoneId}-edge`,
                source: parNodeId,
                target: zoneId,
              },
            });
          }
        }

        // 更新 prevZoneId 为当前 zoneId
        prevZoneId = zoneId;

        let dataMaxX = zoneX;

        // 将每个分类下的 data 作为子节点添加到对应的复合节点中，并使它们水平分布
        if (Array.isArray(zone.data) && zone.data.length > 0) {
          let firstDataId = "";
          zone.data.forEach((subItem: any, subIndex: any) => {
            const subItemId = `${zoneId}-${subItem.name}`;
            elements.push({
              group: "nodes",
              data: { id: subItemId, label: subItem.name, parent: zoneId },
              position: {
                x: zoneX + 100 + subIndex * 150,
                y: zoneY + zoneIndex * 100,
              }, // 水平间隔
              classes: "icon-node",
            });

            // 记录第一个 data 子元素的 ID（仅记录一次）
            if (subIndex === 0) {
              firstDataId = subItemId;
            }
          });

          // 如果有上一个 zoneData 的第一个 data 子元素 ID，则创建边
          if (index > 0 && prevFirstDataId && firstDataId) {
            elements.push({
              group: "edges",
              data: {
                id: `${prevFirstDataId}-${firstDataId}-edge`,
                source: prevFirstDataId,
                target: firstDataId,
              },
            });
          }

          // 更新 prevFirstDataId 为当前 zoneData 的第一个 data 子元素 ID
          prevFirstDataId = firstDataId;
        }

        dataMaxX = Math.max(dataMaxX, zoneX + (zone.data?.length ?? 0) * 150);
        zoneMaxWidth = Math.max(zoneMaxWidth, dataMaxX - zoneX);
        maxY = Math.max(maxY, zoneY + zoneIndex * 100);
      });

      // 更新当前 X 坐标以避免 zoneData 复合节点之间的重叠
      maxX = Math.max(maxX, nodeX + zoneMaxWidth);
    }

    // 递归添加 children 中的子节点
    if (Array.isArray(item.children) && item.children.length > 0) {
      const [childElements, childMaxX, childMaxY] = parseData(
        item.children,
        maxX + 100,
        0,
        treeNodeId
      );
      elements.push(...childElements);
      maxX = Math.max(maxX, childMaxX);
      maxY = Math.max(maxY, childMaxY);
    }
  });

  console.log("Elements after parsing item:", elements);
  return [elements, maxX, maxY];
}

onMounted(() => {
  if (cytoscapeContainer.value) {
    console.log("myData:", myData); // 调试：检查数据是否正确加载

    // 假设这是从 API 或其他地方获取的数据
    const apiData = myData.myData;

    // 检查 apiData 是否存在并且有正确的格式
    if (apiData && Array.isArray(apiData.data)) {
      const [elements, ,] = parseData(apiData.data);
      console.log("Final elements:", elements); // 调试：检查最终的元素列表

      // 初始化 Cytoscape 实例
      const cy = cytoscape({
        container: cytoscapeContainer.value,
        elements: elements,
        style: [
          // 定义样式
          {
            selector: "node",
            style: {
              label: "data(label)",
              // "text-opacity": 0, // 默认情况下文本透明度为0，即不可见
            },
          },
          {
            selector: ":parent", // 选择所有是父节点的节点
            style: {
              "text-halign": "left", // 复合框（父节点）内的文本居左对齐
              "text-margin-x": 10, // 为文本添加一些左边距以避免文本紧贴边框
              "text-valign": "top", // 文本垂直对齐方式
              "font-size": 14,
            },
          },
          {
            selector: "edge",
            style: {
              width: 3,
              "line-color": "#ccc",
              "target-arrow-color": "#ccc",
              "target-arrow-shape": "triangle",
            },
          },
          {
            selector: ".icon-node", // 选择带有图标样式的节点
            style: {
              "background-image": img, // 使用本地图片路径
              "background-fit": "contain", // 图像适应节点大小
              "background-repeat": "no-repeat", // 防止图像重复
              width: 30, // 设置节点宽度
              height: 30, // 设置节点高度
              label: "", // 确保标签数据可用
              "border-width": 0, // 可选：移除边框
              "background-opacity": 1, // 确保背景图像是可见的
              "background-position-x": "50%", // 居中背景图像
              "background-position-y": "50%",
              "text-opacity": 0, // 默认情况下文本透明度为0，即不可见
              "z-index": 2, // 确保文本在图标之上
            },
          },
          {
            selector: ".icon-node:hover", // 当鼠标悬停在带有图标样式的节点上时
            style: {
              "text-opacity": 1, // 文本透明度变为1，即可见
              label: "data(label)", // 确保标签数据可用
            },
          },
        ],
        layout: {
          name: "preset", // 使用预设布局，意味着我们自己定义节点位置
        },
      });

      // 在初始化后立即应用布局
      cy.ready(() => {
        cy.fit(); // 调整视图以适应所有节点
      });

      // 确保每次窗口大小改变时也重新计算位置
      window.addEventListener("resize", () => {
        cy.fit();
      });
    } else {
      console.error("Invalid or missing data structure.");
    }
  } else {
    console.error("Cytoscape container is not mounted.");
  }
});
</script>

<style scoped>
/* 添加一些样式 */
div {
  width: 100%;
  height: 100vh; /* 使用 viewport height 使 div 铺满整个视口高度 */
  /* background: url('@/assets/img/567.jpg'); */
}
</style>
