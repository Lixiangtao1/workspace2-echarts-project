<template>
  <div class="C_content">
    <div style="color:#01f2ff;font-size: 20px;padding-top:17px;padding-left:16px;">数据到达率</div>
    <div class="zhoubao">
      <!-- <div style="float:left;width:44px;height:180px;background-color:#1e335e;border:1px solid #505b6c;margin-top:73px;margin-left:106px;">
        <span style="display:block;font-size:20px;line-height:27px;margin:63px 12px;color:#fff;">周报</span>
      </div> -->
      <div style="width:100%;height:100%;min-height:342px" ref="f_center"></div>
    </div>

    <div class="baowen">
      <div style="width:100%;height:100%;min-height:342px" ref="f_center2"></div>
    </div>
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
    this.initEcharts2();
  },
  methods: {
    initEcharts() {
      let myEcharts = echarts.init(this.$refs.f_center);
      myEcharts.setOption({
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {  //图例的配置
          bottom: 30,
          data: ['未到达率', '到达率'],
          textStyle: {
            color: '#fff'
          }
        },
        color:['#fbd44b','#55b19f'],
        series: [
            {
                name: '',
                type: 'pie',
                radius: '65%', // 调整饼状图的大小
                center: ['50%', '45%'],  // 饼状图的位置
                label: {
                  position: 'inner'
                },
                data: [
                    {value: 135, name: '未到达率'},
                    {value: 1548, name: '到达率'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      })
    },
    initEcharts2() {
      let myEcharts = echarts.init(this.$refs.f_center2);
      myEcharts.setOption({
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          bottom: 30,
          data: ['未到达率', '到达率'],
          textStyle: {
            color: '#fff'
          }
        },
        color: ['#fbd44b', '#e09cbc'],
        series: [
            {
              name: '',
              type: 'pie',
              radius: '65%',
              center: ['50%', '45%'],  //饼状图的位置
              label: {
                position: 'inner'
              },
              data: [
                  {value: 20, name: '未到达率'},
                  {value: 80, name: '到达率'}
              ],
              emphasis: {
                  itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
            }
        ]
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.C_content{
  width: 100%;
  .zhoubao{
    float: left;
    width: 50%;
    margin-top: -42px;
  }
  .baowen{
    float: left;
    width:50%;
    margin-top: -42px;
  }
}
  
</style>
