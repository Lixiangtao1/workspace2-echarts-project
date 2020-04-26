<template>
  <div class="Box">
    <div class="box_l">
      <div class="L_top">
        <div class="logo">
          <img src="./../../assets/img/江苏省气象台logo.png" alt="">
          <div class="logo_title" style="">江苏省气象台</div>
        </div>
      </div>
      <div class="L_center">
        <cleft/>
      </div>
      <div class="L_footer">
        <fleft/>
      </div>
    </div>

    <div class="box_c">
      <div class="C_top">江苏环境预报大数据</div>
      <div class="C_center">
        <ccenter/>
      </div>
      <div class="C_footer">
        <fcenter/>
      </div>
    </div>

    <div class="box_r">
      <div class="R_top">
        <div class="time">{{currentDate}}</div>
      </div>
      <div class="R_center">
        <cright/>
      </div>
      <div class="R_footer">
        <fright/>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
// 引入组件
import C_left from "./C_left.vue";
import C_center from "./C_center";
import C_right from "./C_right";
import f_left from "./f_left";
import f_center from "./f_center";
import f_right from "./f_right";
export default {
  components: {
    cleft: C_left,
    ccenter: C_center,
    cright: C_right,
    fleft: f_left,
    fcenter: f_center,
    fright: f_right
  },
  data() {
    return {
      currentDate: moment(new Date()).format("YYYY/MM/DD hh:mm:ss")
    };
  }
};
</script>
<style lang="scss" scoped>
.Box {
  background-color: #021737; 
  width: 100%;
  height: 100%;
  overflow: hidden; //溢出
  .box_l {
    // width: calc(100% - 50px);
    background-color: #021737; 
    width: 25%;
    float: left;
    .L_top {
      height: 92px;
      .logo{
        margin-left: 104px;
        margin-top: 22px;
        width: 50px;
        height: 50px;
        float:left;
      }
      .logo_title{
        width:172px;
        height:42px;
        float:left;
        margin-top:-52px;
        margin-left: 60px;
        line-height:42px;
        font-size:24px;
        color:#fff
      }
    }
    .L_center {
      height: calc(100% - 92px - 342px);
      border: 1px solid #345790;
      border-radius: 4px;
      box-shadow: inset 0 0 16px 1px rgba(55, 171, 151, 0.8);
    }
    .L_footer {
      height: 342px;
      margin-top:16px;
      border: 1px solid #345790;
      border-radius: 4px;
      box-shadow: inset 0 0 16px 1px rgba(55, 171, 151, 0.8);
    }
  }

  .box_c {
    background-color: #021737; 
    width: 50%;
    float: left;
    .C_top {
      height: 92px;
      font-size: 36px;
      line-height: 72px;
      
      color: #fff;
      text-align: center;
      background: url('./../../assets/img/b1.png') no-repeat center top;
    }
    .C_center {
      height: calc(100% - 92px - 342px);
      margin-left:16px;
      margin-right: 16px;
      
      border: 1px solid #345790;
      border-radius: 4px;
      box-shadow: inset 0 0 16px 1px rgba(55, 171, 151, 0.8);
    }
    .C_footer {
      height: 342px;
      margin-top:16px;
      margin-left:16px;
      
      margin-right: 16px;
      border: 1px solid #345790;
      border-radius: 4px;
      box-shadow: inset 0 0 16px 1px rgba(55, 171, 151, 0.8);
    }
  }


  .box_r {
    // width: calc(25%+32px);
    width: 25%;
    background-color: #021737; 
    float: left;
    .R_top {
      height: 92px;
      
      .time {
        width: 296px;
        height: 36px;
        margin-left: 40px;
        color:#fff;
        font-size: 30px;
        line-height: 92px;
        
      }
    }
    .R_center {
      height: calc(100% - 92px - 342px);
      
      border: 1px solid #345790;
      border-radius: 4px;
      box-shadow: inset 0 0 16px 1px rgba(55, 171, 151, 0.8);
    }
    .R_footer {
      height: 342px;
      margin-top:16px;
      
      border: 1px solid #345790;
      border-radius: 4px;
      box-shadow: inset 0 0 16px 1px rgba(55, 171, 151, 0.8);
    }
  }
}
</style>
