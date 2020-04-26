<template>
  <div class="C_content">
    <div style="color:#01f2ff;font-size: 20px;padding-top:17px;padding-left:16px;">污染要素排名</div>
    <div
      style="padding-top:9px;font-size:16px;line-height:22px;text-align:center;color:#fff"
    >AQI城市污染排名</div>
    <div style="width:100%;height:100%;min-height:340px" ref="f_left"></div>
  </div>
</template>
<script>
import echarts from "echarts";
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
      let myEcharts = echarts.init(this.$refs.f_left);
      myEcharts.setOption({
        tooltip: {
          trigger: "item",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "10%",
          right: "10%",
          bottom: "35%",
          top: "10%",
          containLabel: true
        },
        xAxis: {
          show: false,
          type: "value",
          boundaryGap: [0, 0.01],
          axisLine: {
            show: false,
            lineStyle: {
              // 坐标线
              color: "#fff"
            }
          }
        },
        yAxis: {
          axisTick: {
            show: false //不显示刻度
          },
          type: "category",
          data: ["8","7","6", "5", "4", "3", "2", "1"],
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff" // 纵坐标文字颜色
            }
          }
        },
        series: [
          {
            name: "AQI城市污染排名",
            type: "bar",
            data: [
              {name:'扬州',value:40203},
              {name:'镇江',value:70203},
              {name:'泰州',value:100203},
              {name:'徐州',value:200203},
              {name:'宿迁',value:300203},
              {name:'淮安',value:400203},
              {name:'盐城',value:500203},
              {name:'连云港',value:600203},
            ]
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
// .city_content{
//   width: 100%;
//   height: 100%;
//   .f1 {
//     width: 292px;
//     height: 16px;
//     background-color: aqua;
//     margin-top: 10px;
//     margin-left: 20px;
//   }
// }
</style>
