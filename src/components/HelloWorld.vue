<template>
  <div style="margin-top: 20px">
    <el-row style="margin-left: 50px">
      <el-col :span="6" v-for="(item,i) in defectTypes" :key="i" :offset="1">
        <div style="cursor:pointer" @click="insurance(item.name, item.value)">
          <el-card style="text-align: center;height: 340px;margin-top: 40px"
                   :body-style="{padding: '30px'}" class="el-card" shadow="hover">

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
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        fit: 'fill',
        id: '',
  value:'',
        defectTypes: [
          {imgSrc: '../static/image/缺陷类型/崩边.jpg', name: '崩边', details: '合格标准：\n≦0.02mm²,允许2个，\n或≦0.03mm²,允许1个', value: 1},
          {imgSrc: '../static/image/缺陷类型/亮点.jpg', name: '亮点', details: '合格标准：\n≦0.01mm²,允许1个' , value: 2},
          {imgSrc: '../static/image/缺陷类型/内污.jpg', name: '内污', details: '合格标准：\n白色:≦0.02mm²,允许2个,间距大于 5mm.\n黑色:≦0.05mm².' , value: 3},
          {imgSrc: '../static/image/缺陷类型/缺墨.jpg', name: '缺墨', details: '合格标准：\n接收孔/菜单孔缺墨，透光：高度≦0.03mm,点状按≦0.03mm²,允许1个\n边缘缺墨：≦0.03mm²，允许一个' , value: 4},
          {imgSrc: '../static/image/缺陷类型/视划.jpg', name: '视窗区划伤', details: '合格标准：\n长度<10mm,允许5条，不可交叉，明显度依签样；\n不可有视窗区反面垂直于短边划伤\n' , value: 5},
          {imgSrc: '../static/image/缺陷类型/视压.jpg', name: '视窗区压伤', details: '合格标准：\n长度<10mm,允许1条,程度按签样判定.\n' , value: 6},
          {imgSrc: '../static/image/缺陷类型/牙.jpg', name: '牙边', details: '合格标准：\n视窗区牙边：高度≦0.05mm，或单个牙缺≦0.02mm²\nAR孔 & PROX牙边：高度≦0.03mm.\n' , value: 7},
          {imgSrc: '../static/image/缺陷类型/油划.jpg', name: '油墨区划伤', details: '合格标准：\n≦0.01mm²,允许1个' , value: 8},//TODO
          {imgSrc: '../static/image/缺陷类型/油压.jpg', name: '油墨区压伤', details: '合格标准：\n≦0.08mm²,允许2个, 间距大于5mm.' , value: 0},
          {imgSrc: '../static/image/缺陷类型/油压痕.jpg', name: '油墨区压痕', details: '合格标准：\n长度<10mm,允许1条,程度按签样判定.' , value: 10},
        ]
      }
    },

    methods: {
      insurance(id, value) {
        this.$router.push({
          path: '/components/DefectDetectionPage',
          query: {
            id: id,
  value: value
          }
        })
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

  .el-card:hover .bottom {
    color: rgb(73, 178, 82);
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
