<template>
  <div class="C_content">
    <div style="color:#01f2ff;font-size: 20px;padding-top:17px;padding-left:16px;">城市污染天气统计</div>
    <div class="S_l">
      <span style="display:block;float:left;color:#fff;font-size:14px;line-height:20px;">城市</span>
      <select name="" class="S_l1">
        <option value="1">南京</option>
        <option value="2">苏州</option>
      </select>
    </div>
    <div class="S_r">
      <!-- <span style="display:block;float:left;color:#fff;font-size:14px;line-height:20px;padding-left:70px;">时间</span>
      <el-date-picker
        v-model="searchDate"
        type="month"
        >
      </el-date-picker> -->
    </div>
    <div style="width:100%;height:100%;min-height:584px" ref="chart"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      searchDate:''
    };
  },
  created() {

  },
  mounted() {
    this.initEcharts()
  },
  methods: {
    initEcharts() {
      let myEcharts = echarts.init(this.$refs.chart);
      myEcharts.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{c}天 ({d}%)"
        },
        legend: {  //图例
          bottom: 40,
          // left: "center",
          textStyle: {color: '#7299e4',fontSize: '16px',paddingLeft:'73px'},
          data: [
            { name: '重度',icon:'circle'},
            { name: '优',icon:'circle'},
            { name: '中度',icon:'circle'},
            { name: '轻度',icon:'circle'},
            { name: '良',icon:'circle'},
            { name: '严重',icon:'circle'},
            { name: '其它',icon:'circle'}
          ]
        },
        color: ['#99004c','#ff0000','#0ceac0','#ffbd57','#eae00c'],
        series: [
          {
            type: "pie",
            radius: "70%",  // 饼状图大小配置
            center: ["50%", "50%"],  // 饼状图位置配置
            selectedMode: "single", //选中模式
            label: {
              position: 'inner',
              formatter: "{c}天"
            },
            color: ['#99004c','#ff0000','#0ceac0','#ffbd57','#eae00c','#7e0023','#fff'],
            data: [
              { value: 1, name: "重度"},
              { value: 4, name: "优" },
              { value: 4, name: "中度"},
              { value: 5, name: "轻度"},
              { value: 16, name: "良"},
              { value: '', name: "严重"},
              { value: '', name: "其它"},
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          },
          {
            name: '',
            type: 'pie',
          
            label: { //富文本设置
              formatter: '{per|{d}%}',
              rich: {    
              }
            },
            data: [
              {value: 1},
              {value: 4},
              {value: 4},
              {value: 5},
              {value: 16}
            ]
          }
        ]
      })
    }
  }
};

</script>
<style lang="scss" >
  .C_content{
    .S_l{
      margin-top: 30px;
      margin-left: 24px;
      .S_l1 {
        float:left;
        width:60px;
        height:26px;
        text-align: center;
        text-align-last: center; 
        line-height:24px;
        margin-left:8px;
        border:1px solid #01f2ff;
        color:#01f2ff;
        background-color:#021737;
      }
    }
    // .S_r {
    //   .el-date-editor.el-input, .el-date-editor .el-input__inner{
    //     float: left;
    //     width: 60px;
    //     height: 24px;
    //     margin-left: 8px;
    //     font-size: 14px;
    //     text-align: center;
    //     vertical-align: center;
    //     // border: 1px solid #01f2ff;
    //     color:#fff;
    //     background-color:#021737;
    //   }
    //   .el-input__inner {
    //     background-color: #021737;
    //     height: 24px;
    //   }
    // }
  }
</style>
