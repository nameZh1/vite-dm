// 导入 Vue 的组合式 API 和 jsPlumb 库
import { ref, onMounted, onUnmounted } from "vue";
import { jsPlumb, jsPlumbInstance } from "jsplumb";

// 定义拓扑节点的数据结构接口
export interface TopoNode {
  info: any; // 节点的信息对象
  id: string; // 节点唯一标识符
  x: number; // 节点在容器中的 X 坐标
  y: number; // 节点在容器中的 Y 坐标
  w: number; // 节点宽度
  h: number; // 节点高度
  icon: string; // 节点图标的路径
  source?: string[]; // 可选：此节点作为源连接到其他节点的 ID 列表
  target?: string[]; // 可选：此节点作为目标被其他节点连接的 ID 列表
  anchors: any[]; // 锚点配置，用于定义连接端点的位置
}

// 定义 useTopo 函数，它是一个自定义 hook，用来管理拓扑图的创建和交互
export function useTopo(nodes: TopoNode[], opt: any = {}) {
  // 创建一个响应式的引用，指向容纳拓扑图的 DOM 元素
  const topoContainerRef = ref<HTMLElement | null>(null);
  // 定义 jsPlumb 实例变量
  let instance: jsPlumbInstance;

  // 当组件挂载完成后执行，初始化 jsPlumb 并渲染所有节点和连接
  onMounted(() => {
    // 初始化 jsPlumb 实例，设置默认样式和其他配置项
    instance = jsPlumb.getInstance({
      Connector: "Bezier", // 使用贝塞尔曲线作为连接线类型
      PaintStyle: { stroke: "#5c96bc", strokeWidth: 2 }, // 设置连接线的颜色和宽度
      HoverPaintStyle: { stroke: "#1e8151", strokeWidth: 2 }, // 设置鼠标悬停时连接线的颜色和宽度
      Endpoint: "Dot", // 端点样式为圆点
      EndpointStyle: { fill: "#5c96bc" }, // 设置端点颜色
      ...opt, // 合并传入的额外配置
    });

    // 设置 jsPlumb 的容器为当前组件内的指定元素
    instance.setContainer(topoContainerRef.value!);

    // 遍历所有节点，创建每个节点的可视化表示
    nodes.forEach((node) => {
      createNode(node);
    });

    // 再次遍历所有节点，根据节点之间的关系创建连接
    nodes.forEach((node) => {
      linkNode(node);
    });
  });

  // 组件卸载前执行，清理 jsPlumb 实例以释放资源
  onUnmounted(() => {
    instance.reset();
  });

  // 辅助函数：创建单个节点的可视化表示
  const createNode = (node: TopoNode) => {
    // 构建节点的 HTML 结构字符串，包括位置、尺寸和图标等信息
    const nodeHTML = `
      <div id="${node.id}" class="topo-node" style="position: absolute; left: ${node.x}px; top: ${node.y}px;">
        <img src="${node.icon}" style="width: ${node.w}px; height: ${node.h}px;" />
        <span>${node.info.name}</span>
        <span class="topo-node-hover">${node.icon}</span>
      </div>
    `;

    // 创建一个临时 div 元素来解析上述 HTML 字符串
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = nodeHTML;

    // 获取解析后的节点元素
    const nodeElement = tempDiv.firstElementChild as HTMLElement;

    // 将节点添加到拓扑图容器中
    topoContainerRef.value?.appendChild(nodeElement);

    // 使节点可以拖动，并且在拖动时更新连接
    instance.draggable(nodeElement);

    // 为节点添加连接端点，允许其成为连接的起点或终点
    node.anchors.forEach((anchor) => {
      instance.addEndpoint(nodeElement, {
        anchor: anchor, // 使用传入的锚点配置
        isSource: true, // 此端点可以作为连接的起点
        isTarget: true, // 此端点可以作为连接的终点
        maxConnections: -1, // 不限制连接数量
        ...opt, // 合并传入的额外配置
      });
    });
  };

  // 辅助函数：根据节点间的关系创建连接
  const linkNode = (node: TopoNode) => {
    // 如果节点有 source 属性，则为每一个 source 创建从该节点到目标节点的连接
    if (node.source) {
      node.source.forEach((sourceId) => {
        instance.connect({
          anchor: node.anchors,
          source: sourceId,
          target: node.id,
          ...opt,
        });
      });
    }

    // 如果节点有 target 属性，则为每一个 target 创建从源节点到该节点的连接
    if (node.target) {
      node.target.forEach((targetId) => {
        instance.connect({
          anchor: node.anchors,
          source: node.id,
          target: targetId,
          ...opt,
        });
      });
    }
  };

  // 返回包含拓扑图容器引用的对象，以便在组件中使用
  return {
    topoContainerRef,
  };
}