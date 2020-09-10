<template>
<div style="padding-top:30px;padding-left: 15%">
<el-tabs :tab-position="tabPosition" v-model="tabActiveName" @tab-click="handleClick">
<!--      tab1:历史数据-->
<el-tab-pane label="历史数据" class="item-color" name="first">
<!--历史数据扇形图-->
<canvas id="canvas_circle1" width="420" height="240">
                浏览器不支持canvas
            </canvas>
</el-tab-pane>

<!--tab2：我的数据-->
<el-tab-pane label="我的数据" name="second">
<div style="margin:20px 170px 0 170px">
      <el-form ref="form">
        <el-form-item label="your key:">
          <el-input v-model="key" maxlength="30" minlength="2"
                    show-word-limit clearable
                    style="width: 300px"></el-input>
                    <el-button type="primary" @click="inputKey()">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
<!--我的数据表格-->
 <el-table
    :data="tableData"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="test_time"
      label="时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="ukey"
      label="KEY"
      width="180">
    </el-table-column>
    <el-table-column
      prop="pictype"
      label="检测结果(0为缺陷)">
    </el-table-column>

  </el-table>

<!--我的数据扇形图-->
<canvas id="canvas_circle" width="420" height="240">
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
  mlength:'',
  alength:'',
  rate:'',
  rate1:'',
  defectNum:0,
  defectNum1:0,
   tableData: [],
   key: this.getCookie('key'),
  }
  },

  mounted() {
  this.getresult();
  this.getallresult();
  console.log("key为："+this.key);
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
  this.alength = this.allresult.length;
      console.log(this.alength);
      if(this.alength!= 0){
          this.drawchart1();
          }
  })
  .catch(function (error) { // 请求失败处理
  console.log(error);
  });
  },

  //获取用户检测结果
getresult() {
  this.$axios
  .get('http://192.168.3.3:8080/get_ones_result?ukey='+ this.key)
  .then(response => {
  console.log(response);
  this.myresult = response.data.data;
  this.tableData = this.myresult;
    console.log(this.myresult);
    //console.log(this.myresult[0].pictype);
    //console.log(this.myresult.length);
    this.mlength = this.myresult.length;
    console.log(this.mlength);
    if(this.mlength!= 0){
    this.drawchart();
    }
  })
  .catch(function (error) { // 请求失败处理
  console.log(error);
  });
  },

  handleClick(tab, event) {
          if (tab.label === '我的数据') {
            //this.getresult();
            //console.log('1111');
            //console.log(this.num);
            //console.log(this.mlength);
            //this.drawchart();



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
    var num = 0;
    console.log(this.mlength);
    while(num < this.mlength){
    if(this.myresult[num].pictype === 0){//0是缺陷图片
    this.defectNum = this.defectNum + 1;
    }
    num++;
    }
    this.rate = this.defectNum / this.mlength;
    console.log(this.defectNum);
    console.log(this.rate);

    var data_arr = [this.rate, 1-this.rate];
    var color_arr = ["#67C23A", "#E6A23C"];
    var text_arr = ["缺陷图片", "正常图片"];
    this.drawCircle("canvas_circle", data_arr, color_arr, text_arr);
    },
    //历史数据-我的检测正确率
        drawchart1(){
        var num = 0;
        console.log(this.alength);
        while(num < this.alength){
        if(this.allresult[num].pictype === 0){//0是缺陷图片
        this.defectNum1 = this.defectNum1 + 1;
        }
        num++;
        }
        this.rate1 = this.defectNum1 / this.alength;
        console.log(this.defectNum1);
        console.log(this.rate1);

        var data_arr = [this.rate1, 1-this.rate1];
        var color_arr = ["#67C23A", "#E6A23C"];
        var text_arr = ["缺陷图片", "正常图片"];
        this.drawCircle("canvas_circle1", data_arr, color_arr, text_arr);
        },
    inputKey(){
    this.setCookie('key',this.key,7);
    console.log("key reserve success");
    console.log(this.key);
    this.getresult();
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
