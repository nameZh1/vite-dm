
import img from './1.png'
export const optJson = {
  layers: {
    "layer1": {
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
            // markerHtml: '<div class="custom-html-marker">复杂 HTML 内容</div>',
            markerFill: '#1abc9c',
            markerLineColor: '#34495e',
            markerLineWidth: 2,
            markerWidth: 10,
            markerHeight: 10,
            textName: 'Hello1',
            textFaceName: 'monospace'
          }
        }
      ],
    },
    "layer2": {
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
        }
      ],
    }
  }
}

