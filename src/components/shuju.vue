<template>
<div style="padding-top:30px;padding-left: 15%">
<el-tabs :tab-position="tabPosition" v-model="tabActiveName" @tab-click="handleClick">
<!--      tab1:历史数据-->
<el-tab-pane label="历史数据" class="item-color" name="first">
</el-tab-pane>

<!--tab2：我的数据-->

<el-tab-pane label="我的数据" name="second">

<div>111</div>
<canvas id="canvas_circle" width="500" height="300">
                浏览器不支持canvas
            </canvas>

</el-tab-pane>

</el-tabs>
</div>
</template>

<script>
  //import HelloWorld from "./HelloWorld";

    export default {
  name: 'shuju',
  //components: {Schart},
  data() {
  return {
  tabActiveName: 'first',
  tabPosition: 'left',
  myresult: [],
  allresult: [],
  num: 0,
  mlength:'',
  rate:'',
  defectNum:0,
  }
  },

  mounted() {
this.getallresult();
//this.init();

  },
  methods: {
      //获取全部检测结果
  getallresult() {
  this.$axios
  .get('http://192.168.3.3:8080/get_all_result')
  .then(response => {
  console.log(response);
  this.allresult = response.data.data;
  console.log(this.allresult);
  })
  .catch(function (error) { // 请求失败处理
  console.log(error);
  });
  },

  //获取用户检测结果
getresult() {
  this.$axios
  .get('http://192.168.3.3:8080/get_ones_result?ukey=gary')
  .then(response => {
  console.log(response);
  this.myresult = response.data.data;
    console.log(this.myresult);
    //console.log(this.myresult[0].pictype);
    //console.log(this.myresult.length);
    this.mlength = this.myresult.length;
    console.log(this.mlength);
  })
  .catch(function (error) { // 请求失败处理
  console.log(error);
  });
  },

  handleClick(tab, event) {
          if (tab.label === '我的数据') {
            this.getresult();
            console.log('1111');
            console.log(this.num);
            console.log(this.mlength);
            //this.drawchart();
//为什么不按顺序来，我晕了


          }
        },

  drawCircle(canvasId, data_arr, color_arr, text_arr)
    {
    var c = document.getElementById(canvasId);
    var ctx = c.getContext("2d");

    var radius = c.height / 2 - 20; //半径
    var ox = radius + 20, oy = radius + 20; //圆心

    var width = 30, height = 10; //图例宽和高
    var posX = ox * 2 + 20, posY = 30;   //
    var textX = posX + width + 5, textY = posY + 10;

    var startAngle = 0; //起始弧度
    var endAngle = 0;   //结束弧度
    for (var i = 0; i < data_arr.length; i++)
    {
    //绘制饼图
    endAngle = endAngle + data_arr[i] * Math.PI * 2; //结束弧度
    ctx.fillStyle = color_arr[i];
    ctx.beginPath();
    ctx.moveTo(ox, oy); //移动到到圆心
    ctx.arc(ox, oy, radius, startAngle, endAngle, false);
    ctx.closePath();
    ctx.fill();
    startAngle = endAngle; //设置起始弧度

    //绘制比例图及文字
    ctx.fillStyle = color_arr[i];
    ctx.fillRect(posX, posY + 20 * i, width, height);
    ctx.moveTo(posX, posY + 20 * i);
    ctx.font = 'bold 12px 微软雅黑';    //斜体 30像素 微软雅黑字体
    ctx.fillStyle = color_arr[i]; //"#000000";
    var percent = text_arr[i] + "：" + 100 * data_arr[i] + "%";
    ctx.fillText(percent, textX, textY + 20 * i);
    }
    },

    init() {
    //绘制饼图
    //比例数据和颜色
    var data_arr = [0.25, 0.25, 0.5];
    var color_arr = ["#67C23A", "#409EFF", "#E6A23C"];
    var text_arr = ["第一季度", "第二季度", "第三季度"];

    this.drawCircle("canvas_circle", data_arr, color_arr, text_arr);
    },
    //我的数据-我的检测正确率
    drawchart(){

    console.log(this.mlength);
    while(this.num < this.mlength){
    if(this.myresult[num].pictype === 0){//0是缺陷图片
    this.defectNum = this.defectNum + 1;
    }
    this.num++;
    }
    this.rate = this.defectNum / this.mlength;
    console.log(this.defectNum);
    console.log(this.rate);

    var data_arr = [this.rate, 1-this.rate];
    var color_arr = ["#67C23A", "#E6A23C"];
    var text_arr = ["第一季度", "第二季度"];
    this.drawCircle("canvas_circle", data_arr, color_arr, text_arr);
    },
  }
  }
</script>


<style>
  .el-tabs__item.is-active {
    color: rgb(73, 178, 82) !important;
    }

    .el-tabs__active-bar {
    background-color: rgb(73, 178, 82);
    }

    .el-tabs__item:hover {
    color: rgb(73, 178, 82) !important;
    }

</style>
