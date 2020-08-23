<template>
  <div style="padding-top:30px;padding-left: 15%">
    <el-tabs :tab-position="tabPosition" @tab-click="handleClick" v-model="tabActiveName">
      <!--      tab1:新建训练文件-->
      <el-tab-pane label="新建训练" class="item-color" name="first">
        <!-- trainStatus为200，可以训练-->
        <div style="padding-left:5%;padding-right: 10%" v-if="trainStatus = 200">
          <el-form>
            <el-form-item>
              <span>提示：因为资源有限，请在10分钟内完成图片上传并点击训练</span>
            </el-form-item>
            <el-form-item>
              <span style="font-size: x-large;color: black;float:left">上传有缺陷图片（训练）</span>
            </el-form-item>
            <el-form-item>
              <el-upload
                ref="upload1"
                class="upload-demo" name="photo"
                action="http://47.98.232.219:5000/data_upload?pic_type=2"
                list-type="text"
                :auto-upload="false"
                multiple
                :before-upload="beforeUpload"
                :on-change="handleChange1"
                :on-remove="handleRemove1"
                :on-success="handleAvatarSuccess"
                :file-list="fileList1">
                <el-button slot="trigger" size="small" type="primary" plain>选取文件</el-button>
                <el-button style="margin-left: 10px" size="small" type="danger" plain @click="removeAll1()">全部移除
                </el-button>
                <el-button style="margin-left: 30px" size="small" type="success" plain @click="upLoad1()">
                  点击上传({{this.fileList1.length}})
                </el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，至少50张，每张不超过2M</div>
              </el-upload>
            </el-form-item>

            <el-form-item>
              <el-divider></el-divider>
            </el-form-item>

            <!--            无缺陷（训练）-->
            <el-form-item>
              <span style="font-size: x-large;color: black;float:left">上传无缺陷图片（训练）</span>
            </el-form-item>

            <el-form-item>
              <el-upload
                ref="upload2"
                class="upload-demo" name="photo"
                multiple
                :auto-upload="false"
                list-type="text"
                action="http://47.98.232.219:5000/data_upload?pic_type=3"
                :on-change="handleChange2"
                :before-upload="beforeUpload"
                :on-remove="handleRemove2"
                :on-success="handleAvatarSuccess"
                :file-list="fileList2">
                <el-button slot="trigger" size="small" type="primary" plain>选取文件</el-button>
                <el-button style="margin-left: 10px" size="small" type="danger" plain @click="removeAll2()">全部移除
                </el-button>
                <el-button style="margin-left: 30px" size="small" type="success" plain @click="upLoad2()">
                  点击上传({{this.fileList2.length}})
                </el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，至少50张，每张不超过2M</div>
              </el-upload>
            </el-form-item>

            <!--            检测-->
            <el-form-item>
              <el-divider></el-divider>
            </el-form-item>
            <!--有缺陷（检测）-->
            <el-form-item>
              <span style="font-size: x-large;color: black;float:left">上传有缺陷图片（检测）</span>
            </el-form-item>
            <el-form-item>
              <el-upload
                ref="upload3"
                class="upload-demo" name="photo"
                multiple
                :auto-upload="false"
                list-type="text"
                action="http://47.98.232.219:5000/data_upload?pic_type=0"
                :before-upload="beforeUpload"
                :on-remove="handleRemove3"
                :on-change="handleChange3"
                :on-success="handleAvatarSuccess"
                :file-list="fileList3">
                <el-button slot="trigger" size="small" type="primary" plain>选取文件</el-button>
                <el-button style="margin-left: 10px" size="small" type="danger" plain @click="removeAll3()">全部移除
                </el-button>
                <el-button style="margin-left: 30px" size="small" type="success" plain @click="upLoad3()">
                  点击上传({{this.fileList3.length}})
                </el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，至少50张，每张不超过2M</div>
              </el-upload>
            </el-form-item>

            <el-form-item>
              <el-divider></el-divider>
            </el-form-item>

            <!--            无缺陷（检测）-->
            <el-form-item>
              <span style="font-size: x-large;color: black;float:left">上传无缺陷图片（检测）</span>
            </el-form-item>
            <el-form-item>
              <el-upload
                ref="upload4"
                class="upload-demo" name="photo"
                multiple
                :auto-upload="false"
                list-type="text"
                action="http://47.98.232.219:5000/data_upload?pic_type=1"
                :before-upload="beforeUpload"
                :on-remove="handleRemove4"
                :on-change="handleChange4"
                :on-success="handleAvatarSuccess"
                :file-list="fileList4">
                <el-button slot="trigger" size="small" type="primary" plain>选取文件</el-button>
                <el-button style="margin-left: 10px" size="small" type="danger" plain @click="removeAll4()">全部移除
                </el-button>
                <el-button style="margin-left: 30px" size="small" type="success" plain @click="upLoad4()">
                  点击上传({{this.fileList4.length}})
                </el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，至少50张，每张不超过2M</div>
              </el-upload>
            </el-form-item>

            <el-form-item>
              <span>请输入训练文件名：</span>
              <el-input
                type="text"
                style="width: 220px;margin-left: 10px"
                placeholder="请输入内容"
                v-model="fileName"
                maxlength="20"
                show-word-limit
              >
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="success" plain :disabled="fileName === ''" @click="train">开始训练</el-button>
            </el-form-item>

<!--            结果显示-->
            <el-form-item>
              <span>{{trainResult}}</span>
            </el-form-item>


          </el-form>
        </div>
        <!-- trainStatus为400，不可以训练-->
        <div style="padding-left:5%;padding-right: 10%;height: 300px" v-else>
          <span>请稍候...</span>
        </div>
      </el-tab-pane>

      <!--tab2：已有的训练文件-->
      <el-tab-pane label="训练文件" name="second">
        <div style="padding-left:5%;padding-right: 10%">
          <!--下拉框 -->
<span>请选择权重文件：</span>
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
              ref="upload"
              :action="UploadUrl()"
              :file-list="fileList"
              list-type="picture"
              :auto-upload="false"
              :on-success="handleAvatarSuccess1"
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
        tabActiveName: 'first',
        tabPosition: 'left',
        fileName: '',
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
        trainResult:'',
      }
    },
    mounted() {
      this.getTrain();
    },
    methods: {
      //列表变化
      handleChange1(file, fileList) {
        this.fileList1 = fileList;
      },
      handleChange2(file, fileList) {
        this.fileList2 = fileList;
      },
      handleChange3(file, fileList) {
        this.fileList3 = fileList;
      },
      handleChange4(file, fileList) {
        this.fileList4 = fileList;
      },

      handleRemove1(file, fileList) {
        this.fileList1 = fileList;
      },
      handleRemove2(file, fileList) {
        this.fileList2 = fileList;
      },
      handleRemove3(file, fileList) {
        this.fileList3 = fileList;
      },
      handleRemove4(file, fileList) {
        this.fileList4 = fileList;
      },

      //点击上传按钮
      upLoad1() {
        if (this.fileList1.length < 50) {
          this.$message.error('至少上传50张图片！');
        } else {
          this.$refs.upload1.submit();
        }
      },
      upLoad2() {
        if (this.fileList2.length < 50) {
          this.$message.error('至少上传50张图片！');
        } else {
          this.$refs.upload2.submit();
        }
      },
      upLoad3() {
        if (this.fileList3.length < 50) {
          this.$message.error('至少上传50张图片！');
        } else {
          this.$refs.upload3.submit();
        }
      },
      upLoad4() {
        if (this.fileList4.length < 50) {
          this.$message.error('至少上传50张图片！');
        } else {
          this.$refs.upload4.submit();
        }
      },

      //清空列表
      removeAll1() {
        this.fileList1 = [];
        this.$refs.upload1.clearFiles();
      },
      removeAll2() {
        this.fileList2 = [];
        this.$refs.upload2.clearFiles();
      },
      removeAll3() {
        this.fileList3 = [];
        this.$refs.upload3.clearFiles();
      },
      removeAll4() {
        this.fileList4 = [];
        this.$refs.upload4.clearFiles();
      },

      //图片上传成功后
      handleAvatarSuccess(response, file, fileList) {
        //response
        console.log(response);
        if (response.state === 200) {
          // this.$message.success('上传成功！');
        } else {
          this.$message.error(response.msg);
        }
      },
      beforeUpload(file) {
        const isJPG = (file.type === 'image/jpeg') || (file.type === 'image/png') || (file.type === 'image/bmp');
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传图片格式错误!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      //点击开始训练
      train(){
        this.$axios
          //http://47.98.232.219:5000/get_trained?in_time= &weight=
          .get('http://47.98.232.219:5000/get_trained?in_time='+Date.parse(new Date())/1000+'&weight='+this.fileName+'.h5')
          .then(response => {
            if(response.data.state === 300){
              this.$message.error('时间超过10分钟');
              this.$router.push('/');
            }else if(response.data.state === 400){
              this.trainResult = response.data.msg;
            }else if(response.data.state === 200){
              this.$alert('请在\'训练文件\'界面使用生成的权重文件','训练成功',{
                confirmButtonText: '确定',
                callback: action => {
                  this.tabActiveName = 'second';
                  this.getWeights();
                  this.removeAll1();
                  this.removeAll2();
                  this.removeAll3();
                  this.removeAll4();
                  this.trainResult = '';
                  this.fileName = '';
                }
              });
            }
            console.log(response);
          })
          .catch(function (error) { // 请求失败处理
            console.log(error);
          });
      },


      //TAB---2
      handleAvatarSuccess1(response, file, fileList) {
        //response
        console.log(response);
  if(response.state === 200){
  if(response.data === 0){
  this.result[this.num] = "检测结果: 检测成功，此图片是缺陷图片！";
  }else{
  this.result[this.num] = "检测结果: 检测成功，此图片是正常图片！";
  }
  }else{
  this.result[this.num] = "检测失败！";
  }
        this.num = this.num + 1;
        console.log(this.num);
        console.log(this.result[0]);
      },
      //上传训练文件
      submitUpload() {
        if (this.status === -1) {
          console.log('1123');
          this.$message.error('请选择训练文件！');
        } else {
          console.log(this.status);
          this.$refs.upload.submit();
        }
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      //判断可否训练
      getTrain() {
        this.$axios
          .get('http://47.98.232.219:5000/to_train')
          .then(response => {
            console.log(response);
            this.trainStatus = response.data.state;
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
      function2(value) {
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
