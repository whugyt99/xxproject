<template>
  <el-container>
    <el-main>
      <div id="app">
        <div style="background-color: black; height: 300px">
          <span style="font-size: xx-large;color: white;margin:100px 0 0 50px;float: left">手机表面缺陷检测平台</span>
          <el-image :src="imageSrc"
                    style="margin-top:50px;float:right;margin-right:50px;width: 400px; height: auto;max-height: 300px"></el-image>

        </div>

        <div class="navigationBar" id="navigationBar">
          <!--    导航栏 #ffd04b  #2c3e50-->
          <el-menu :default-active="this.$route.path" class="el-menu-demo" router mode="horizontal"
                   :class="{nav_fixed: navigationBarFixed}"
                   @select="handleSelect" active-text-color="rgb(73,178,82)" background-color="white">
            <el-menu-item>
              <el-image :src="imageSrc1" style="width: 120px; height: 60px; margin-top: -10px" disabled></el-image>
            </el-menu-item>
            <el-menu-item class="el-menu-item" v-for="(item,i) in navList" :key="i" :index="item.name"
                          style="margin-bottom: 0">
              {{ item.navItem}}
            </el-menu-item>

            <div style="text-align: right; margin-top: 12px">
              <!--      头像-->
              <i class="el-icon-user" style="margin-top:10px;margin-right: 10px"></i>
              <!--       登录按钮-->
              <el-button type="text" @click="formVisible = true" size="30px" style="margin-right: 25px">注册</el-button>
              <el-dialog style="text-align: left" :visible.sync="formVisible" title="设置key值" width="500px">
                  <el-form  @submit.native.prevent>
                    <el-form-item label="key:">
                      <el-input v-model="key" maxlength="30" minlength="2"
                                show-word-limit clearable
                                style="width: 300px"></el-input>
                    </el-form-item>
                    <el-form-item>（key值是您身份的唯一标志，若遗忘会丢失之前所有的数据信息）</el-form-item>
                    <el-form-item style="text-align: center">
                      <el-button type="primary" @click="register">确 定</el-button>
                      <el-button @click="formVisible = false">取 消</el-button>
                    </el-form-item>
<!--                    <el-form-item label="密码" :label-width="formLabelWidth">-->
<!--                      <el-input type="password" v-model="loginForm.loginPass" autocomplete="off" show-password></el-input>-->
<!--                    </el-form-item>-->
                  </el-form>
                <div slot="footer" class="dialog-footer">

                </div>
              </el-dialog>
            </div>

          </el-menu>

        </div>
        <router-view class="menu-right"/>
      </div>
    </el-main>


    <el-footer height="120px">XX有限公司ⓒ2020</el-footer>
  </el-container>

</template>

<script>
  export default {
    name: 'App',

    data() {
      return {
        navigationBarFixed: '',
        imageSrc: require('../static/image/IMG1.jpg'),
        imageSrc1: require('../static/image/logo.png'),
        navList: [
          {name: '/', navItem: '缺陷检测'},
          {name: '/components/TrainingPage', navItem: '模型训练'},
          {name: '/components/shuju', navItem: '数据统计'},
          {name: '/components/Introduction', navItem: '产品说明'},
          {name: '/components/NewsPage', navItem: '新闻资讯'},
          {name: '/components/ContactUs', navItem: '联系我们'},
        ],
        formVisible: false,
        key: '',
      };
    },

    mounted() {
      window.addEventListener("scroll", this.handleScroll)
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll)
    },

    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },

      handleScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var offsetTop = document.querySelector('#navigationBar').offsetTop
        if (scrollTop > offsetTop) {
          this.navigationBarFixed = true
        } else {
          this.navigationBarFixed = false
        }
        // console.log(scrollTop)
      },

      register(){
        //设置key
        if(this.key !== '') {
          console.log("key success");
          this.setCookie('key', this.key, 7);
          console.log("cookie success");
          this.$axios.get('http://192.168.3.3:8080/store_key?ukey=' + this.key)
            .then(response => {
              if (response.data.state === 200) {
                console.log("key绑定成功！");
                this.$message.success("key设置成功");
                this.formVisible = false;
              } else {
                this.$message.error("key值重复，请重新选择");
              }
            })
            .catch(function (error) {
              console.log(error);
            })
        }
      }

    }
  }
</script>

<style>
  #app scoped {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .nav_fixed {
    position: fixed;
    background-color: #Fff;
    top: 0;
    z-index: 999;
  }

  .el-menu-demo {
    width: 100%;
    margin-top: 0;
  }

  /* 导航栏的间距等样式 */
  .el-menu-item {
    padding: 0 50px;
    font-size: 16px;
  }

  .el-footer {
    background-color: rgb(45, 46, 48);
    color: white;
    text-align: center;
    line-height: 120px;
    font-size: 14px;
  }

  .el-main {
    padding: 0 0 30px;
    min-height: calc(100vh - 120px);
  }
</style>
