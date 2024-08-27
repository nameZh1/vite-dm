import * as maptalks from 'maptalks';

/**
 * 根据 JSON 数据渲染形状
 * @param layer - 要添加到的图层
 * @param jsonData - 包含形状信息的 JSON 数据
 */
export function renderShapesFromJSON(layer: maptalks.VectorLayer, jsonData: any) {
  const shapes = jsonData.shapes;

  shapes.forEach((shape: any) => {
    switch (shape.type) {
      case 'polygon':
        new maptalks.Polygon(shape.coordinates, {
          symbol: shape.options
        }).addTo(layer);
        break;

      case 'line':
        new maptalks.LineString(shape.coordinates, {
          symbol: shape.options
        }).addTo(layer);
        break;

      case 'point':
        new maptalks.Marker(shape.coordinate, {
          symbol: shape.options
        }).addTo(layer);
        break;

      default:
        console.error('Unknown shape type:', shape.type);
    }
  });
}
