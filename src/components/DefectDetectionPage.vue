<template>
<div>
<div style="margin-left:170px;margin-right:170px;margin-top:20px">
<span>{{id}}缺陷检测</span>
</div>
<div style="margin-left:170px;margin-right:170px;margin-top:20px">
<el-upload
class="upload-demo" name="photo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  list-type="picture">
<el-button size="small" type="primary">点击上传</el-button>
<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
</div>
</template>
<script>
export default {
  name: 'DefectDetectionPage',
  data () {
  return {
id:'',
  }
  },
  mounted () {
  this.getParams();
  },
  methods: {
  getParams(){
  // 取到路由带过来的参数
  this.id = this.$route.query.id;
  console.log(this.id);
  },
  }
  }
</script>
<style>

</style>
