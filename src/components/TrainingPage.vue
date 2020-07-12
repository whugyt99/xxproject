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
                list-type="picture"
                :auto-upload="false"
                multiple
                :on-change="handleChange"
                :on-success="handleAvatarSuccess"
                :file-list="fileList1">
                <el-button slot="trigger" size="small" type="primary" plain>选取文件</el-button>
                <el-button style="margin-left: 10px" size="small" type="success" plain @click="upLoad1">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>

            <el-form-item>
              <el-divider></el-divider>
            </el-form-item>

            <el-form-item>
              <span style="font-size: x-large;color: black;float:left">上传无缺陷图片</span>
            </el-form-item>

            <el-form-item>
              <el-upload
                ref="upload"
                class="upload-demo"
                multiple
                :auto-upload="false"
                list-type="picture"
                action="http://47.98.232.219:5000/data_upload?pic_type=1"
                :on-change="handleChange"
                :on-success="handleAvatarSuccess"
                :file-list="fileList2">
                <el-button slot="trigger" size="small" type="primary" plain>选取文件</el-button>
                <el-button style="margin-left: 10px" size="small" type="success" plain @click="upLoad2">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
<div style="margin-top:20px">
<el-upload
class="upload-demo" name="photo"
  ref="upload"
  action="http://47.98.232.219:5000/pic_test"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  list-type="picture"
  :auto-upload="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeUpload"
  :disabled="status ==-1?true:false">
<el-button slot="trigger" size="small" type="primary" disabled>选取文件</el-button>
<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
</el-upload>
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
        value: '',
        fileList: [],
        files: [],
        status: -1,//-1为禁用状态
        trainStatus: '',
        label: '',
        // value: '',
        key: '',
      }
    },
  mounted () {
  this.getTrain();
  },
    methods: {
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      },

      //有缺陷图片上传
      upLoad1(){
        this.$refs.upload.submit();
      },

      //无缺陷图片上传
      upLoad2(){
        this.$refs.upload.submit();
      },

      //上传训练文件
      submitUpload() {
        this.$refs.upload.submit();
      },
      //图片上传成功后
      handleAvatarSuccess(response, file, fileList) {
        //response
        console.log(response);
      },

  handleRemove(file, fileList) {
  console.log(file, fileList);
  },

  handlePreview(file) {
  console.log(file);
  },
  beforeUpload(file) {

  },
  //判断可否训练
  getTrain(){
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
  getWeights(){
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
  handleClick(tab, event){
        if(tab.label == '训练文件'){
          this.getWeights();
  }
  },
  function2(value){
        console.log(value);
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
