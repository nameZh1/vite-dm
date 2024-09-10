import * as maptalks from 'maptalks';
import { reactive, ref } from 'vue';

/**
 * 根据 JSON 数据渲染形状
 * @param map - 要添加到的地图
 * @param jsonData - 包含形状信息的 JSON 数据
 */
export function renderShapesFromJSON(jsonData: any, map: maptalks.Map) {
  // 添加建筑平面图层并传入空数组作为 geometries 参数
  const layers = jsonData.layers;
  const layerResMap = reactive({} as Record<string, maptalks.VectorLayer>);
  Object.keys(layers).forEach((key) => {
    const buildingLayer = new maptalks.VectorLayer(key, []).addTo(map);
    layerResMap[key] = buildingLayer;
    const shapes = layers[key].shapes;
    shapes.forEach((shape: any) => {
      switch (shape.type) {
        case 'polygon':
          new maptalks.Polygon(shape.coordinates, {
            symbol: shape.options
          }).addTo(buildingLayer);
          break;

        case 'line':
          new maptalks.LineString(shape.coordinates, {
            symbol: shape.options
          }).addTo(buildingLayer);
          break;

        case 'point':
          // symbol
          new maptalks.Marker(shape.coordinate, {
            symbol: shape.options
          }).addTo(buildingLayer);

          // 浮动图标 绑定在地图
          // var marker = new maptalks.ui.UIMarker(shape.coordinate, {
          //   'draggable': true,
          //   'single': false,
          //   'content': '<div class="text_marker">HTML Marker</div>'
          // });
          // marker.addTo(map).show();

          break;

        default:
          console.error('Unknown shape type:', shape.type);
      }
    });
    layerResMap[key].hide()
  })
  return layerResMap;
}
