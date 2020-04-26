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
import jiangsuJson2 from "./jiangsu2.json";
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
          show: true,
          trigger: "item",
          formatter: "{b}<br/>{c}"
          // formatter: function(params) {
            // debugger
            // console.log(params);  //params.value
            // return params.name;
            // let result = '';
            // result = params.name;
            // result += "<br/>" + params.dataIndex; 
            // return result;
          // }
        },
        visualMap: {
          //地图的图例配置
          left: 20,
          min: 0,
          max: 100,
          text: ["AQI"],
          textStyle: {
            fontSize: "16px",
            color: "#fff"
          },
          realtime: false,
          calculable: true,
          inRange: {
            //设置图例颜色进度
            color: [
              "#7e0023",
              "#99004c",
              "#ff0000",
              "#ff7e00",
              "#ffff01",
              "#00f900"
            ]
          }
        },
        series: [
          {
            zoom: 1.0, //放在 series中(调整地图大小)
            type: "map",
            mapType: "jiangsu",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                }
                // areaStyle: {
                //   color: "green"
                // }
              },
              emphasis: { label: { show: true } }
            },
            data: [
              { name: "南京市", value: 85 },
              { name: "苏州市", value: 55 },
              { name: "无锡市", value: 12 },
              { name: "常州市", value: 65 },
              { name: "镇江市", value: 35 },
              { name: "徐州市", value: 45 },
              { name: "连云港市", value: 79 },
              { name: "宿迁市", value: 14 },
              { name: "淮安市", value: 56 },
              { name: "盐城市", value: 75 },
              { name: "南通市", value: 33 },
              { name: "扬州市", value: 66 },
              { name: "泰州市", value: 58 }
            ]
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
