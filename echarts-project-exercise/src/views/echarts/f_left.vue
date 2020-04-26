<template>
  <div class="C_content">
    <div style="color:#01f2ff;font-size: 20px;padding-top:17px;padding-left:16px;">污染要素排名</div>
    <div
      style="padding-top:9px;font-size:16px;line-height:22px;text-align:center;color:#fff"
    >AQI城市污染排名</div>
    <!-- <div style="width:100%;height:100%;min-height:340px" ref="f_left"></div> -->
    <div class="H_z">
      <!-- 1 -->
      <div class="H_z1">
        <span>1</span>
        <div class="C_1"></div>
        <div style="color:#fff;font-size:14px;float:right;margin-top:-5px;margin-right:-54px">连云港</div>
      </div>
      <!-- 2 -->
      <div class="H_z1">
        <span>2</span>
        <div class="C_2"></div>
        <div style="color:#fff;font-size:14px;float:right;margin-top:-5px;margin-right:-41px">盐城</div>
      </div>
      <!-- 3 -->
      <div class="H_z1">
        <span>3</span>
        <div class="C_3"></div>
        <div style="color:#fff;font-size:14px;float:right;margin-top:-15px;margin-right:-41px">淮安</div>
      </div>
      <!-- 4 -->
      <div class="H_z1">
        <span>4</span>
        <div class="C_4"></div>
        <div style="color:#fff;font-size:14px;float:right;margin-top:-15px;margin-right:-41px">宿迁</div>
      </div>
      <!-- 5 -->
      <div class="H_z1">
        <span>5</span>
        <div class="C_5"></div>
        <div style="color:#fff;font-size:14px;float:right;margin-top:-15px;margin-right:-41px">徐州</div>
      </div>
      <!-- 6 -->
      <div class="H_z1">
        <span>6</span>
        <div class="C_6"></div>
        <div style="color:#fff;font-size:14px;float:right;margin-top:-15px;margin-right:-41px">扬州</div>
      </div>
      <!-- 7 -->
      <div class="H_z1">
        <span>7</span>
        <div class="C_7"></div>
        <div style="color:#fff;font-size:14px;float:right;margin-top:-15px;margin-right:-41px">镇江</div>
      </div>
      <!-- 8 -->
      <div class="H_z1">
        <span>8</span>
        <div class="C_8"></div>
        <div style="color:#fff;font-size:14px;float:right;margin-top:-15px;margin-right:-41px">泰州</div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      data:[
        { name: '连云港', value: 100},
        { name: '盐城', value: 90},
        { name: '淮安', value: 88},
        { name: '宿迁', value: 85},
        { name: '徐州', value: 80},
        { name: '泰州', value: 70},
        { name: '镇江', value: 50},
        { name: '扬州', value: 50}
      ]
    };
  },
  created() {
    
  },
  mounted() {
    // this.initEcharts();
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
.H_z1 {
  width: 220px;
  height: 10px;
  margin-top: 20px;
  margin-left: 40px;
  background-color: #4c4c4c;
  span{
    display:block;
    color:#fff;
    float: left;
    margin-left: -15px;
    margin-top:-7px;
  }
  .C_1 {
    width: 90%;
    height: 10px;
    float: left;
    background-color: aqua;
  }
  .C_2 {
    width: 80%;
    height: 10px;
    float: left;
    background-color: aqua;
  }
  .C_3 {
    width: 70%;
    height: 10px;
    background-color: aqua;
  }
  .C_4 {
    width: 65%;
    height: 10px;
    background-color: aqua;
  }
  .C_5 {
    width: 60%;
    height: 10px;
    background-color: aqua;
  }
  .C_6 {
    width: 30%;
    height: 10px;
    background-color: aqua;
  }
  .C_7 {
    width: 20%;
    height: 10px;
    background-color: aqua;
  }
  .C_8 {
    width: 10%;
    height: 10px;
    background-color: aqua;
  }
}
</style>
