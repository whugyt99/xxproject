
<template>
  <div style="margin-top: 20px">
    <el-row style="margin-left: 50px">
      <el-col :span="6" v-for="(item,i) in defectTypes" :key="i" :offset="i > 0 ? 2 : 0">
        <el-card style="text-align: center;max-height: 350px" :body-style="{padding: '30px'}">

          <!--            图标-->
<!--          <el-popover placement="top-end" trigger="hover">-->
<!--              <el-avatar :fit="fit" :size="220" :src=item.imgSrc>img</el-avatar>-->
            <div style="font-size: 60px;text-align: center">
              <el-avatar :fit="fit" :size="120" :src=item.imgSrc>img</el-avatar>
            </div>
<!--          </el-popover>-->


          <!--        类型名称  -->
          <div style="">
            <span>{{item.name}}</span>
          </div>

          <!--          详细介绍-->
          <div class="bottom clearfix" style="padding-bottom: 40px">
            <time class="time">{{ item.details }}</time>
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
      fit: 'fill',
      defectTypes: [
        {imgSrc:'../static/image/缺陷类型/崩边1.jpg' ,name:'崩边', details:'切割面不平整的现象\n\r' +
            '≦0.02mm2,允許2個，或≦0.03mm2,允许1个'},
        {imgSrc:'../static/image/缺陷类型/亮点1.jpg' ,name:'亮点', details:'因为自身原因，以及受切割工具及速度影响，导致切割面不平整，出现翻卷、毛边等现象'},
        {imgSrc:'../static/image/缺陷类型/内污.jpg' ,name:'内污', details:'因为自身原因，以及受切割工具及速度影响，导致切割面不平整，出现翻卷、毛边等现象'},
      ]
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
    margin-top: 17px;
    line-height: 17px;
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
