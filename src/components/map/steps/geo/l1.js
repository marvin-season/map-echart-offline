/* eslint-disable no-unused-vars */
import bgImg from '../../assets/bg.png';

// 最底层的地图
export default {
  // 基础配置
  'S0.1': (preOption, { name, level }) => {
    return {
      show: true,
      silent: true,
      id: 'S1',
      zlevel: 1,
      roam: true,
      label: {
        normal: {
          show: true,
        },
      },
      zoom: 0.85,
    };
  },
  // 地图层级
  'S0.2': (preOption, { coordsMap, name }) => {
    return {
      map: '中国',
      boundingCoords: coordsMap[name].boundingCoords,
    };
  },
  // 绘制背景/阴影
  'S1.1': (preOption, { level, name }) => {
    switch (level) {
      // 在第二层的时候，绘制湖北省背景
      case 2:
        return {
          itemStyle: {
            color: 'transparent',
            borderColor: '#414753', // 边界颜色,
            borderWidth: 2,
          },
          regions: [
            {
              name,
              selected: true,
            },
          ],
          select: {
            itemStyle: {
              shadowColor: '#0B7FD1',
              shadowBlur: 5,
              shadowOffsetX: 10,
              shadowOffsetY: 20,
            },
          },
        };

      default:
        return {
          itemStyle: {
            color: 'transparent',
          },
        };
    }
  },
};
