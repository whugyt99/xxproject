<template>
  <div>
    <div style="margin-left:170px;margin-right:170px;margin-top:20px">
      <span>{{id}}缺陷检测</span>
    </div>
    <div style="margin-left:170px;margin-right:170px;margin-top:20px">
      <el-upload
        class="upload-demo" name="photo"
        ref="upload"
        :limit="number"
        action="http://47.98.232.219:5000/upload_pic"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        list-type="picture"
        :auto-upload="false"
        :on-success="handleAvatarSuccess">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
        fileList: [],
        number:1,
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
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleAvatarSuccess(response, file, fileList) {
        //response
        console.log(response);
      }
    }
  }
</script>
<style>

</style>
