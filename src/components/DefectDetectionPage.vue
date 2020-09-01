<template>
  <div>
    <div style="margin-left:170px;margin-right:170px;margin-top:20px;font-size: x-large">
      <span>{{id}}缺陷检测</span>
    </div>
    <div style="margin:20px 170px 0 170px">
      <el-form ref="form">
<!--        <el-form-item label="本次检测是否保存数据？">-->
<!--          <el-radio v-model="radio" label="yes">保存</el-radio>-->
<!--          <el-radio v-model="radio" label="no">不保存</el-radio>-->
<!--        </el-form-item>-->
        <el-form-item label="your key:">
          <el-input v-model="key" maxlength="30" minlength="2"
                    show-word-limit clearable
                    style="width: 300px"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div style="margin-left:170px;margin-right:170px;margin-top:20px">
      <el-upload
        class="upload-demo" name="photo"
        ref="upload"
        :action="UploadUrl()"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        list-type="picture"
        :auto-upload="false"
        :on-success="handleAvatarSuccess"
      >
        <el-button slot="trigger" size="small" type="primary">选取图片</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">开始检测</el-button>
      </el-upload>
      <!--  检测结果 -->
      <div style="height: 100px">
        <div v-for="n in num" style="margin:10px 0 0 0;">{{result[n-1]}}</div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'DefectDetectionPage',
    data() {
      return {
        id: '',
        value: '',
        fileList: [],
        pic_class: '',
        url: '',
        result: [],
        num: 0,
        key: this.getCookie('key'),
        //label: '',
      }
    },
    mounted() {
      this.getParams();
      //this.UploadUrl();
    },
    methods: {
      getParams() {
        // 取到路由带过来的参数
        this.id = this.$route.query.id;
        console.log(this.id);
        this.value = this.$route.query.value;
        console.log(this.value);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },

      handlePreview(file) {
        console.log(file);
      },
      //图片上传
      submitUpload() {
        if(this.key !== ''){
          this.setCookie('key',this.key,7);
          console.log("key reserve success");
          this.$refs.upload.submit();
        }else{
          this.$alert('请先输入key，或者点击导航栏中\'注册\'按钮进行注册', 'key不能为空', {
            confirmButtonText: '确定',
          });
        }

      },
      //图片上传成功后
      handleAvatarSuccess(response, file, fileList) {
        //response
        console.log(response);
        if (response.state === 200) {
          if (response.data === 0) {
            this.result[this.num] = "检测结果: 检测成功，此图片是缺陷图片！";
          } else {
            this.result[this.num] = "检测结果: 检测成功，此图片是正常图片！";
          }
        } else {
          this.result[this.num] = "检测失败，图片类型错误！";
        }
        //this.result[this.num] = "检测结果: " + response.msg;
        this.num = this.num + 1;
        console.log(this.num);
        //console.log(this.result[0]);
      },

      UploadUrl: function () {
        return "http://192.168.3.3:8080/upload_pic?pic_class=" + this.value + "&ukey=" + this.key;
      }
    }
  }
</script>
<style>
</style>
