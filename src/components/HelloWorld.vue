
<template>
  <div style="margin-top: 20px">
    <el-row style="margin-left: 50px">
      <el-col :span="6" v-for="(item,i) in defectTypes" :key="i" :offset="1">
        <el-card style="text-align: center;height: 340px;margin-top: 40px"
                 :body-style="{padding: '30px'}" class="el-card">

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
          <div class="bottom" style="padding-bottom: 40px">
            <span>{{ item.details }}</span>
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
        {imgSrc:'../static/image/缺陷类型/崩边1.jpg' ,name:'崩边', details:'切割面不平整的现象\n 合格标准：≦0.02mm2,允许2个，\n或≦0.03mm2,允许1个'},
        {imgSrc:'../static/image/缺陷类型/亮点1.jpg' ,name:'亮点', details:'合格标准：≦0.01mm2,允许1个'},
        {imgSrc:'../static/image/缺陷类型/内污.jpg' ,name:'内污', details:'合格标准：\n白色:≦0.02mm2,允许2个,间距大于 5mm.\n黑色:≦0.05mm2.'},
        {imgSrc:'../static/image/缺陷类型/内污.jpg' ,name:'内污', details:'合格标准：\n白色:≦0.02mm2,允许2个,间距大于 5mm.\n黑色:≦0.05mm2.'},
        {imgSrc:'../static/image/缺陷类型/内污.jpg' ,name:'内污', details:'合格标准：\n白色:≦0.02mm2,允许2个,间距大于 5mm.\n黑色:≦0.05mm2.'},
        {imgSrc:'../static/image/缺陷类型/内污.jpg' ,name:'内污', details:'合格标准：\n白色:≦0.02mm2,允许2个,间距大于 5mm.\n黑色:≦0.05mm2.'},
        {imgSrc:'../static/image/缺陷类型/内污.jpg' ,name:'内污', details:'合格标准：\n白色:≦0.02mm2,允许2个,间距大于 5mm.\n黑色:≦0.05mm2.'},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-card {
    white-space: pre-line;
  }

  .bottom {
    margin-top: 17px;
    line-height: 20px;
    color: #999;
    font-size: 13px;
  }
  .el-card:hover .bottom{
    color: rgb(73,178,82);
  }

  /*.clearfix:before,*/
  /*.clearfix:after {*/
  /*  display: table;*/
  /*  content: "";*/
  /*}*/

  /*.clearfix:after {*/
  /*  clear: both*/
  /*}*/
</style>
