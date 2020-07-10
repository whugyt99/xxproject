<template>
  <div>
    <div style="margin-left:170px;margin-right:170px;margin-top:20px">
      <span>{{id}}缺陷检测</span>
    </div>
    <div style="margin-left:170px;margin-right:170px;margin-top:20px">
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
        :before-upload="beforeUpload">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <!--        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
      </el-upload>
    </div>
    <div style="margin-left:170px;margin-right:170px;margin-top:20px">
      <span>{{id}}缺陷检测</span>
    </div>
    <div style="margin-left:170px;margin-right:170px;margin-top:20px">
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
        :before-upload="beforeUpload">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      </el-upload>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DefectDetectionPage',
    data() {
      return {
        id: '',
        fileList: []
      }
    },
    mounted() {
      this.getParams();
    },
    methods: {
      getParams() {
        // 取到路由带过来的参数
        this.id = this.$route.query.id;
        console.log(this.id);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },

      handlePreview(file) {
        console.log(file);
      },
      //图片上传
      submitUpload() {
        this.$refs.upload.submit();
      },
      //图片上传成功后
      handleAvatarSuccess(response, file, fileList) {
        //response
        console.log(response);
      },
      beforeUpload(file) {
        return new Promise((resolve, reject) => {
          //let _URL = window.URL || window.webkitURL;
          let isLt2M = file.size / 1024 / 1024 < 2; // 判定图片大小是否小于2MB
          if (isLt2M) {
            resolve(file)
          } else {
            console.log('111');
            const imageConversion = require("image-conversion");
            const es6promise = require('es6-promise').polyfill();
            //console.log(file); // 压缩到400KB,这里的400就是要压缩的大小,可自定义
            imageConversion.compressAccurately(file, 2048).then(res => {
              console.log(res);
              console.log('222');
              resolve(res);
            }).catch((error) => {
              reject(error);
              //throw new Error(error);
              //console.log(error);
            })
          }
          //img.src = _URL.createObjectURL(file);
        })
      },
    }
  }
</script>
<style>

</style>
