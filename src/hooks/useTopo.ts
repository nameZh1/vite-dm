import { ref, onMounted, onUnmounted } from 'vue';
import { jsPlumb, jsPlumbInstance } from 'jsplumb';

interface TopoNode {
  info: any;
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  icon: string;
  source?: string[];
  target?: string[];
  anchors: any[];
}

export function useTopo(nodes: TopoNode[], opt: any = {}) {
  const topoContainerRef = ref<HTMLElement | null>(null);
  let instance: jsPlumbInstance;

  onMounted(() => {
    // 初始化 jsPlumb 实例
    instance = jsPlumb.getInstance({
      Connector: 'Bezier',
      PaintStyle: { stroke: '#5c96bc', strokeWidth: 2 },
      HoverPaintStyle: { stroke: '#1e8151', strokeWidth: 2 },
      Endpoint: 'Dot',
      EndpointStyle: { fill: '#5c96bc' },
      ...opt
    });

    instance.setContainer(topoContainerRef.value!);

    // 渲染节点和连接
    nodes.forEach((node) => {
      createNode(node);
    });

    // 渲染节点之间的连线
    nodes.forEach((node) => {
      if (node.source) {
        node.source.forEach((sourceId) => {
          instance.connect({
            anchor: node.anchors,
            // anchors: ['Bottom', 'Top'],
            source: sourceId,
            target: node.id,
            ...opt
          });
        });
      }

      if (node.target) {
        node.target.forEach((targetId) => {
          instance.connect({
            anchor: node.anchors,
            // anchors: ['Bottom', 'Top'],
            source: node.id,
            target: targetId,
            ...opt
          });
        });
      }
    });
  });

  onUnmounted(() => {
    // 清理 jsPlumb 实例
    instance.reset();
  });

  const createNode = (node: TopoNode) => {
    // 创建节点的 HTML 字符串
    const nodeHTML = `
      <div id="${node.id}" class="topo-node" style="position: absolute; left: ${node.x}px; top: ${node.y}px;">
        <img src="${node.icon}" style="width: ${node.w}px; height: ${node.h}px;" />
        <span>${node.info.name}</span>
        <span class="topo-node-hover">${node.icon}</span>
      </div>
    `;

    // 创建一个临时的 div 元素以解析 HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = nodeHTML;

    // 获取解析后的节点元素
    const nodeElement = tempDiv.firstElementChild as HTMLElement;

    // 将节点添加到容器中
    topoContainerRef.value?.appendChild(nodeElement);

    // 设置节点可拖动
    instance.draggable(nodeElement);

    // 为节点添加连接端点
    node.anchors.forEach(anchor => {
      instance.addEndpoint(nodeElement, {
        anchor: anchor, // 使用传入的锚点
        isSource: true,
        isTarget: true,
        maxConnections: -1,
        ...opt
      });
    });
  };


  return {
    topoContainerRef,
  };
}
