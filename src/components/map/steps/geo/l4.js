/* eslint-disable no-unused-vars */

import bgImg from '../../assets/bg.png';

// 最顶层的地图
export default {
  // 基础配置
  'S0.1': (preOption, { level }) => {
    return {
      show: level === 4,
      id: 'S4',
      zlevel: 4,
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
  'S0.2': (preOption, { coordsMap, name, level }) => {
    return {
      map: level === 4 ? name : '湖北省',
      boundingCoords: coordsMap[name].boundingCoords,
    };
  },
  // 绘制背景/阴影
  'S1.1': (preOption, action) => {
    return {
      itemStyle: {
        color: {
          image: bgImg,
          repeat: 'no-repeat',
        },
        borderWidth: 3,
        borderColor: '#fff',
      },
    };
  },
};
