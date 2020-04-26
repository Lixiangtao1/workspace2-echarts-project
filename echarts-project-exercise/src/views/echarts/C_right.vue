<template>
  <div class="C_right_container">
    <div style="color:#01f2ff;font-size: 20px;padding-top:17px;padding-left:16px;">
      模式预报
      <span style="color:#fff;font-size:16px;line-height:22px;padding-left:24px;">南京</span>
    </div>
    <div style="width:100%;height:50%;min-height:283px" ref="chartBar"></div>
    <!-- 折线统计图 -->
    <div style="color:#01f2ff;font-size: 20px;padding-top:22px;padding-left:16px;">
      实况
      <span style="color:#fff;font-size:16px;line-height:22px;padding-left:24px;">南京</span>
    </div>
    <div style="width:100%;height:50%;min-height:283px" ref="chartBar2"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.initEcharts1();
    this.initEcharts2();
  },
  methods: {
    initEcharts1() {
      let myEcharts = echarts.init(this.$refs.chartBar);
      var posList = [
        "left",
        "right",
        "top",
        "bottom",
        "inside",
        "insideTop",
        "insideLeft",
        "insideRight",
        "insideBottom",
        "insideTopLeft",
        "insideTopRight",
        "insideBottomLeft",
        "insideBottomRight"
      ];
      myEcharts.setOption({
        color: ["#00f3ff", "#dfa55a"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          top: -5,
          right: 15,
          textStyle: { color: "#fff", fontSize: "14px" },
          data: [{ name: "中央" }, { name: "华东" }]
        },
        xAxis: [
          {
            show:true,
            axisLabel: {// 坐标轴坐标字体
              textStyle: {
                color: "#fff"
              }
            },
            axisLine: { //坐标线配置
              show: true,
              lineStyle: {
                // 坐标线
                color: "#979797"
              }
            },
            type: "category",
            axisTick: { show: true },
            data: ["01/04", "01/05", "01/06", "01/07", "01/08"]
          }
        ],
        yAxis: [
          {
            type: "value",  //数值轴,用于连续的数据
            name: "AQI",
            axisLine: { //坐标线配置
              show: true,
              lineStyle: {
                color: "#979797"
              }
            },
            nameTextStyle: {
              color: "#fff",
              fontSize: "14px",
              fontStyle: "normal"
            },
            axisLabel: { //设置坐标轴
              textStyle: {
                color: "#fff"
              }
            },
            max: 100, //设置坐标的刻度
            splitNumber: 5,
            // max/ splitNumber=y 轴值间隔

            splitLine: { // 刻度线的样式
              lineStyle: {
                type: "dashed",
                color: "#979797"
              }
            }
          }
        ],
        series: [
          {
            name: "中央",
            type: "bar",
            barWidth: 15,
            // label: labelOption,
            data: [58, 57, 78, 38, 64]
          },
          {
            name: "华东",
            type: "bar",
            barWidth: 15,
            // label: labelOption,
            data: [48, 70, 58, 45, 82]
          }
        ]
      });
    },
    initEcharts2() {
      let myEcharts2 = echarts.init(this.$refs.chartBar2);
      myEcharts2.setOption({
        tooltip: {
          trigger: "axis",
        },
        legend: {
          top: -5,
          right: 35,
          textStyle: { color: "#fff", fontSize: "14px" },
          data:['实况']
        },
        xAxis: {
          axisLabel: {
            // 坐标轴坐标字体
            textStyle: {
              color: "#fff"
            }
          },
          type: "category",
          boundaryGap: false,
          data: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00"]
        },
        yAxis: {
          type: "value",
          name: "AQI",
          max: 100,
          splitNumber: 5,
          axisLabel: {
            textStyle: {
              color: "#fff",
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              // 坐标线
              color: "#979797"
            },
          },
          splitLine: {
            // 刻度线的样式
            lineStyle: {
              type: "dashed",
              color: "#979797"
            }
          }
        },
        series: [
          {
            data: [20, 38, 20, 42, 35, 57, 40, 39, 40, 20, 40],
            type: "line",
            name: "实况",
            areaStyle: {},
            itemStyle: {
				      normal: {
                color: '#8cd5c2', //改变折线点的颜色
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                          offset: 0, color: '#01f2ff' // 0% 处的颜色
                        }, {
                          offset: 0.5, color: '#01f2ff' // 100% 处的颜色
                        }, {
                          offset: 1, color: '#01f2ff' // 100% 处的颜色
                        }]
                ), 
				      	lineStyle: {
				      		color: '#01f2ff' //改变折线颜色
				      	}
				      }
			      },
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
  .C_right_container{
    min-height: 614px;
  }
</style>
