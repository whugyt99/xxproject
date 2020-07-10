<template>
  <div style="padding-top:30px;padding-left: 15%">
    <el-tabs :tab-position="tabPosition">
<!--      tab1:新建训练文件-->
      <el-tab-pane label="新建训练" class="item-color">
        <div style="padding-left:5%;padding-right: 10%">
          <el-form>
            <el-form-item>
              <span style="font-size: x-large;color: black;float:left">上传有缺陷图片</span>
            </el-form-item>

            <el-form-item>
              <el-upload
                ref="upload"
                class="upload-demo"
                action="http://47.98.232.219:5000/pic_test"
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

            <el-form-item><el-divider></el-divider></el-form-item>

            <el-form-item>
              <span style="font-size: x-large;color: black;float:left">上传无缺陷图片</span>
            </el-form-item>

            <el-form-item>
              <el-upload
                class="upload-demo"
                multiple
                :auto-upload="false"
                list-type="picture"
                action="http://47.98.232.219:5000/pic_test"
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
      </el-tab-pane>

<!--tab2：已有的训练文件-->
      <el-tab-pane label="训练文件"></el-tab-pane>
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
      }
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

      //图片上传成功后
      handleAvatarSuccess(response, file, fileList) {
        //response
        console.log(response);
      },
    }
  }
</script>


<style>
  .el-tabs_item{
    background-color:#cccccc !important;
    color:#666666 !important;
    margin: 5px !important;
  }
  .el-tabs--card>.el-tabs_header.el-tabs_item.is-active{
    color:rgb(73,178,82) !important;
  }
</style>
