<template>
  <div style="padding-top:30px;padding-left: 15%">
    <el-tabs :tab-position="tabPosition" @tab-click="handleClick">
<!--      tab1:新建训练文件-->
      <el-tab-pane label="新建训练" class="item-color">
<!-- trainStatus为200，可以训练-->
        <div style="padding-left:5%;padding-right: 10%"  v-if="trainStatus === 200">
          <el-form>
            <el-form-item>
              <span style="font-size: x-large;color: black;float:left">上传有缺陷图片</span>
            </el-form-item>

            <el-form-item>
              <el-upload
                ref="upload"
                class="upload-demo"
                action="http://47.98.232.219:5000/data_upload?pic_type=0"
                list-type="text"
                :auto-upload="false"
                multiple
                :on-change="handleChange1"
                :on-success="handleAvatarSuccess"
                :file-list="fileList1">
                <el-button slot="trigger" size="small" type="primary" plain>选取文件</el-button>
                <el-button style="margin-left: 10px" size="small" type="danger" plain @click="removeAll1">全部移除</el-button>
                <el-button style="margin-left: 30px" size="small" type="success" plain @click="upLoad">点击上传({{this.fileList1.length}})</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，至少50张，每张不超过2M</div>
              </el-upload>
            </el-form-item>

            <el-form-item>
              <el-divider></el-divider>
            </el-form-item>

            <el-form-item>
              <span style="font-size: x-large;color: black;float:left">上传无缺陷图片（训练）</span>
            </el-form-item>

            <el-form-item>
              <el-upload
                ref="upload"
                class="upload-demo"
                multiple
                :auto-upload="false"
                list-type="text"
                action="http://47.98.232.219:5000/data_upload?pic_type=1"
                :on-change="handleChange2"
                :on-success="handleAvatarSuccess"
                :file-list="fileList2">
                <el-button slot="trigger" size="small" type="primary" plain>选取文件</el-button>
                <el-button style="margin-left: 10px" size="small" type="success" plain @click="upLoad">点击上传({{this.fileList2.length}})</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，至少50张，每张不超过2M</div>
              </el-upload>
            </el-form-item>

<!--            检测-->
            <el-form-item>
              <el-divider></el-divider>
            </el-form-item>

            <el-form-item>
              <span style="font-size: x-large;color: black;float:left">上传有缺陷图片（检测）</span>
            </el-form-item>
            <el-form-item>
              <el-upload
                ref="upload"
                class="upload-demo"
                multiple
                :auto-upload="false"
                list-type="text"
                action="http://47.98.232.219:5000/data_upload?pic_type=2"
                :on-change="handleChange3"
                :on-success="handleAvatarSuccess"
                :file-list="fileList3">
                <el-button slot="trigger" size="small" type="primary" plain>选取文件</el-button>
                <el-button style="margin-left: 10px" size="small" type="success" plain @click="upLoad">点击上传({{this.fileList3.length}})</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，至少50张，每张不超过2M</div>
              </el-upload>
            </el-form-item>

            <el-form-item>
              <el-divider></el-divider>
            </el-form-item>

            <el-form-item>
              <span style="font-size: x-large;color: black;float:left">上传无缺陷图片（检测）</span>
            </el-form-item>
            <el-form-item>
              <el-upload
                ref="upload"
                class="upload-demo"
                multiple
                :auto-upload="false"
                list-type="text"
                action="http://47.98.232.219:5000/data_upload?pic_type=3"
                :on-change="handleChange4"
                :on-success="handleAvatarSuccess"
                :file-list="fileList4">
                <el-button slot="trigger" size="small" type="primary" plain>选取文件</el-button>
                <el-button style="margin-left: 10px" size="small" type="success" plain @click="upLoad">点击上传({{this.fileList4.length}})</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，至少50张，每张不超过2M</div>
              </el-upload>
            </el-form-item>

            <el-form-item>
              <el-button type="success" plain>开始训练</el-button>
            </el-form-item>

          </el-form>
        </div>
        <!-- trainStatus为400，不可以训练-->
        <div style="padding-left:5%;padding-right: 10%;height: 300px" v-else>
          <span>请稍候...</span>
        </div>
      </el-tab-pane>

<!--tab2：已有的训练文件-->
      <el-tab-pane label="训练文件">
<!--下拉框 -->
<el-select v-model="value" placeholder="请选择" @change="function2(value)">
<el-option
  v-for="(item,index) in files"
  :key="index"
  :value="item"
  :label="item">
<!--<span style="float: left">{{ item }}</span>-->
<!-- <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span> -->
</el-option>
</el-select>
<!-- 上传图片  -->
<div style="margin-top:20px;padding-right: 10%">
<el-upload
class="upload-demo" name="photo"
  ref="upload1"
  :action="UploadUrl()"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  list-type="picture"
  :auto-upload="false"
  :on-success="handleAvatarSuccess1"
  >
<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
</el-upload>
<!--  检测结果 -->
<div style="height: 100px">
<div  v-for="n in num" style="margin:10px 0 0 0px;">{{result[n-1]}}</div>
</div>
</div>

</el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
  import HelloWorld from "./HelloWorld";
  export default {
    name: 'TrainingPage',
    components: {HelloWorld},
    data() {
      return {
        tabPosition:'left',
        fileList1: [],
        fileList2: [],
        value: '',//选中的文件名
        fileList3: [],
        fileList4: [],
        fileList: [],
        files: [],
        status: -1,//-1为禁用状态
        trainStatus: '',
        label: '',
        key: '',
  result: [],
  num: 0,
      }
    },
    mounted() {
      this.getTrain();
    },
    methods: {
      //列表变化
      handleChange1(file, fileList) {
        if(fileList.length>100){
          this.$message.error('最多上传100张！');
          this.fileList1 = fileList.slice(-100);
        }else{
          this.fileList1 = fileList;
        }
      },
      handleChange2(file, fileList) {
        if(fileList.length>100){
          this.$message.error('最多上传100张！');
          this.fileList2 = fileList.slice(-100);
        }else{
          this.fileList2 = fileList;
        }
      },
      handleChange3(file, fileList) {
        if(fileList.length>100){
          this.$message.error('最多上传100张！');
          this.fileList3 = fileList.slice(-100);
        }else{
          this.fileList3 = fileList;
        }
      },
      handleChange4(file, fileList) {
        if(fileList.length>100){
          this.$message.error('最多上传100张！');
          this.fileList4 = fileList.slice(-100);
        }else{
          this.fileList4 = fileList;
        }
      },


      //图片上传
      upLoad() {
        this.$refs.upload.submit();
      },

      //清空列表
      removeAll1() {
        this.fileList1=[];
      },
      removeAll2() {
        this.fileList2=[];
      },
      removeAll3() {
        this.fileList3=[];
      },
      removeAll4() {
        this.fileList4=[];
      },
      //上传训练文件
      submitUpload() {
        if(this.status == -1){
          console.log('1123');
  this.$message.error('请选择训练文件！');
  }else{
          console.log(this.status);
  this.$refs.upload1.submit();
  }
      },
      //图片上传成功后
      handleAvatarSuccess1(response, file, fileList) {
        //response
        console.log(response);
  this.result[this.num] = "检测结果: " + response.msg;
  this.num = this.num+1;
  console.log(this.num);
  console.log(this.result[0]);
      },
  handleAvatarSuccess(response, file, fileList) {
  //response
  console.log(response);
  this.$message.success('上传成功！');
  },

  handleRemove(file, fileList) {
  console.log(file, fileList);
  },

      handlePreview(file) {
        console.log(file);
      },
      beforeUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        const isMr50 = this.fileList1.length >=50 ;

        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        if(!isMr50) {
          this.$message.error('至少需要50张图片！');
        }
        if(!(isJPG && isLt2M && isMr50)){
          this.$message.error('格式错误');
        }
        return isJPG && isLt2M && isMr50;
      },
      //判断可否训练
      getTrain() {
        this.$axios
          .get('http://47.98.232.219:5000/to_train')
          .then(response => {
            console.log(response);
            this.trainStatus = response.status;
            console.log(this.trainStatus);
          })
          .catch(function (error) { // 请求失败处理
            console.log(error);
          });
      },
      getWeights() {
        this.$axios
          .get('http://47.98.232.219:5000/get_weights')
          .then(response => {
            console.log(response);
            this.files = response.data.data;
          })
          .catch(function (error) { // 请求失败处理
            console.log(error);
          });
      },
      handleClick(tab, event) {
        if (tab.label === '训练文件') {
          this.getWeights();
  }
  },
  function2(value){
        console.log(value);
        this.status = 1;
  },
  UploadUrl: function () {
  return "http://47.98.232.219:5000/upload_pic?pic_class=" + this.value;
  }
    }
  }
</script>


<style>
  .el-tabs__item.is-active{
    color:rgb(73,178,82) !important;
  }
  .el-tabs__active-bar {
    background-color: rgb(73, 178, 82);
  }
  .el-tabs__item:hover {
    color: rgb(73, 178, 82) !important;
  }

</style>
