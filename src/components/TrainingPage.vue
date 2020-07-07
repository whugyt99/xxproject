<template>
<div>
<div style="margin-left:170px;margin-right:170px;margin-top:20px">
<el-upload
  action="http://47.98.232.219:5000/pic_test"
  list-type="picture-card"
  :auto-upload="false">
<i slot="default" class="el-icon-plus"></i>
<div slot="file" slot-scope="{file}">
<img
class="el-upload-list__item-thumbnail"
  :src="file.url" alt=""
  >
<span class="el-upload-list__item-actions">
<span
class="el-upload-list__item-preview"
@click="handlePictureCardPreview(file)"
  >
<i class="el-icon-zoom-in"></i>
</span>
<span
          v-if="!disabled"
class="el-upload-list__item-delete"
@click="handleDownload(file)"
  >
<i class="el-icon-download"></i>
</span>
<span
          v-if="!disabled"
class="el-upload-list__item-delete"
@click="handleRemove(file)"
  >
<i class="el-icon-delete"></i>
</span>
</span>
</div>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
<img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
</div>
</div>
</template>
<script>
export default {
  name: 'TrainingPage',
  data () {
  return {
  dialogImageUrl: '',
  dialogVisible: false,
  disabled: false
  }
  },
  methods: {
  handleRemove(file) {
  console.log(file);
  },
  handlePictureCardPreview(file) {
  this.dialogImageUrl = file.url;
  this.dialogVisible = true;
  },
  handleDownload(file) {
  console.log(file);
  }
  }
  }
</script>
<style>

</style>
