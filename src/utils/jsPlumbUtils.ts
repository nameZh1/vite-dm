import { jsPlumb } from "jsplumb";

// 定义节点的接口
interface TopoNode {
  info: { name: string };
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  icon: string;
  anchors?: any[];
}

// 初始化 jsPlumb 实例
export function initJsPlumb(containerId: HTMLElement, options: any = {}) {
  const defaultOptions = {
    Connector: ["Flowchart", { cornerRadius: 5 }],
    PaintStyle: { stroke: "#5c96bc", strokeWidth: 2 },
    HoverPaintStyle: { stroke: "#1e8151", strokeWidth: 2 },
    Endpoint: ["Dot", { radius: 5 }],
    EndpointStyle: { fill: "#5c96bc" },
    Container: containerId,
  };

  return jsPlumb.getInstance({ ...defaultOptions, ...options });
}

// 添加节点
export function addNode(jsPlumbInstance: any, node: TopoNode) {
  // 创建节点元素
  const nodeElement = document.createElement("div");
  nodeElement.id = node.id;
  nodeElement.className = "topo-node";
  nodeElement.style.position = "absolute";
  nodeElement.style.left = `${node.x}px`;
  nodeElement.style.top = `${node.y}px`;
  nodeElement.innerHTML = `
    <img src="${node.icon}" style="width: ${node.w}px; height: ${node.h}px;" />
    <span>${node.info.name}</span>
  `;

  // 将节点添加到容器中
  jsPlumbInstance.getContainer()?.appendChild(nodeElement);

  // 设置拖拽功能
  jsPlumbInstance.draggable(nodeElement);

  // 如果有锚点，则添加端点
  if (node.anchors) {
    node.anchors.forEach((anchor) => {
      jsPlumbInstance.addEndpoint(nodeElement, {
        anchor,
        isSource: true,
        isTarget: true,
        maxConnections: -1,
      });
    });
  }
}

// 连接节点
export function connectNodes(
  jsPlumbInstance: any,
  sourceId: string,
  targetId: string,
  options: any = {}
) {
  jsPlumbInstance.connect({
    source: sourceId,
    target: targetId,
    ...options,
  });
}

// 删除节点及其所有连接
export function removeNode(jsPlumbInstance: any, nodeId: string) {
  const nodeEl = document.getElementById(nodeId);
  if (nodeEl) {
    // 删除与该节点相关的所有连接
    jsPlumbInstance.detachAllConnections(nodeEl);
    // 移除节点本身
    jsPlumbInstance.remove(nodeEl);
  }
}

// 更新节点位置
export function updateNodePosition(
  jsPlumbInstance: any,
  nodeId: string,
  newX: number,
  newY: number
) {
  const nodeEl = document.getElementById(nodeId);
  if (nodeEl) {
    nodeEl.style.left = `${newX}px`;
    nodeEl.style.top = `${newY}px`;

    // 更新jsPlumb中的连接位置
    jsPlumbInstance.revalidate(nodeEl);
  }
}

// 清理 jsPlumb 实例
export function cleanupJsPlumb(jsPlumbInstance: any) {
  jsPlumbInstance.reset();
}
