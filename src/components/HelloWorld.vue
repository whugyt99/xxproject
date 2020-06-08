
<template>
  <div style="margin-top: 20px">
    <el-row style="margin-left: 30px">
      <el-col :span="6" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card style="text-align: center">

          <!--            图标-->
          <div style="font-size: 60px;text-align: center">
            <el-avatar :fit="fit" :size="120">img</el-avatar>
            <!--            <i class="el-icon-mobile-phone"></i>-->
          </div>

          <!--        类型名称  -->
<!--          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">-->
          <div style="">
            <span>缺陷检测类型</span>
          </div>

          <!--          详细介绍-->
          <div class="bottom clearfix" style="padding-bottom: 50px">
            <time class="time">{{ msg }}</time>
<!--              <el-button type="text" class="button">操作按钮</el-button>-->
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '缺陷描述',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
