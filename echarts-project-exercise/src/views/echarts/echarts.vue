<template>
  <div class="container">
       <!-- 头部 -->
    <div class="top">
      <div class="left">
        <!-- 图标  -->
        <!-- <span class="el-icon-s-operation"></span> -->
        <div class="logo">
          <img src="./../../assets/img/江苏省气象台logo.png" alt="">
        </div>
        <div style="width:172px;height:42px;float:left;padding-top:22px;padding-left: 10px;line-height:42px;font-size:24px;color:#fff">江苏省气象台</div>
      </div>
      <div class="center">
        江苏环境预报大数据
      </div>
      <div class="right">
        {{currentDate}}
      </div>
    </div>

    <!-- 内容区 -->
    <div class="content">
      <div class="C_left"><cleft/></div>
      <div class="C_center"><ccenter/></div>
      <div class="C_right"><cright/></div>
    </div>
    <!-- footer -->
    <div style="height:16px;background-color: #202123;"></div>

    <div class="content">
      <div class="C_left box"><fleft/></div>
      <div class="C_center box"><fcenter/></div>
      <div class="C_right box"><fright/></div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
// 引入组件
import C_left from './C_left.vue'
import C_center from './C_center'
import C_right from './C_right'
import f_left from './f_left'
import f_center from './f_center'
import f_right from './f_right'
export default {
  components: {
    cleft: C_left,
    ccenter: C_center,
    cright: C_right,
    fleft: f_left,
    fcenter: f_center,
    fright: f_right
  },
  data () {
    return {
      currentDate: moment(new Date()).format('YYYY/MM/DD hh:mm:ss')
    }
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
    .container{
      // display: flex;
      .top{
        height: 92px;
        display: flex;
        background-color: #202123;
        .left{
          float: left;
          flex: 1;
          .logo{
            margin-left: 104px;
            margin-top: 22px;
            width: 50px;
            height: 50px;
            float:left;
          }
        }
        .center{
          float: left;
          flex: 2;
          font-family:AliHYAiHei-Beta;
          font-size: 36px;
          color: #fff;
          text-align: center;
          padding-top: 12px;
          background: url('./../../assets/img/b1.png') no-repeat center top;
        }
        .right{
          float: right;
          flex: 1;
          color:#fff;
          font-size: 30px;
          line-height: 36px;
          padding-top:22px;
          padding-right: 0px;
        }
      }

      .content{
        display: flex;
        height: 614px;
        background-color: #202123;
        // .content_top{
          // float: left;
          .C_left{
            margin-left:16px;
            height: 614px;
            flex: 1;
            background-color: #202123;
            float: left;
            border:1px solid #345790;
            border-radius: 4px;
            box-shadow: inset 0 0 16px 1px rgba(55,171,151,0.80);
          }
          .C_center{
            height: 614px;
            flex: 2;
            float: left;
            margin:0 16px;
            background-color: #202123;
            border:1px solid #345790;
            border-radius: 4px;
            box-shadow: inset 0 0 16px 1px rgba(55,171,151,0.80);
          }
          .C_right{
            height: 614px;
            flex: 1;
            float: left;
            background-color: #202123;
            border:1px solid #345790;
            border-radius: 4px;
            box-shadow: inset 0 0 16px 1px rgba(55,171,151,0.80);
          }
          .box{
            height: 400px;
          }
      }

      .footer{
        display: flex;
        height: 614px;
        background-color: #202123;
        // .f_left{
        //   margin-left:16px;
        //   height: 614px;
        //   flex: 1;
        //   background-color: #202123;
        //   float: left;
        //   border:1px solid #345790;
        //   border-radius: 4px;
        //   box-shadow: inset 0 0 16px 1px rgba(55,171,151,0.80);
        // }
      
      }
    }
</style>
