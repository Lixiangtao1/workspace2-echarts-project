<template>
  <div class>
    <div style="color:#01f2ff;font-size: 20px;padding-top:17px;padding-left:16px;">城市AQI实况</div>
    <div style="width:100%;height:100%;min-height:614px;" ref="map_chart"></div>
  </div>
</template>
<script>
import echarts from "echarts";
import "echarts/map/js/province/jiangsu";
import $ from "jquery";
// import jiangsuJson from "./jiangsu.json";
import jiangsuJson2 from "./jiangsu2.json"
export default {
  data() {
    return {};
  },
  created() {

  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      let myChart = echarts.init(this.$refs.map_chart);
      echarts.registerMap("jiangsu", jiangsuJson2);
      myChart.setOption({
        tooltip: {
          // show: true, 默认为true
          trigger: "item",
          formatter: "{b}<br/> {c}",
          // formatter: "{c}"
        },
        visualMap: { //地图的图例配置 
          left: 20,
          min: 0,
          max: 100,
          text: ['AQI'],
          textStyle: {
            fontSize: '16px',
            color: '#fff'
          },
          realtime: false,
          calculable: true,
          inRange: { //设置图例颜色进度
            color: ['#7e0023', '#99004c', '#ff0000', '#ff7e00', '#ffff01', '#00f900']
          }
        },
        series: [
          {
            zoom: 1.0, //放在 series中(调整地图大小)
            type: "map",
            mapType: "jiangsu",
            itemStyle: {
              normal: { label: { show: true } },
              emphasis: { label: { show: true } }
            },
            data: [
              { name: "南京", value: '45' },
              { name: "苏州", value: '45' },
              { name: "无锡", value: '45'},
              { name: "常州", value: '45' },
              { name: "镇江", value: '45' },
              { name: "徐州", value: '45' },
              { name: "连云港", value: '45'},
              { name: "宿迁", value: '45' },
              { name: "淮安", value: '45' },
              { name: "盐城", value: '45' },
              { name: "南通", value: '45' },
              { name: "扬州", value: '45' },
              { name: "泰州", value: '45' }
            ],
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
