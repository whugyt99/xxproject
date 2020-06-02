<template>
  <div id="app">
<!--    导航栏-->
    <div style="background-color: #2c3e50;text-align: center;height: 150px">
      <span style="font-size: xx-large;color: white; margin-top: 10px"><b>xx小分队</b></span>

      <el-menu :default-active="this.$route.path" class="el-menu-demo" router mode="horizontal"
               @select="handleSelect" text-color="#fff" active-text-color="#ffd04b" background-color="#2c3e50">
        <el-menu-item class="el-menu-item" v-for="(item,i) in navList" :key="i" :index="item.name" style="margin-bottom: 0px">
          {{ item.navItem}}
        </el-menu-item>
      </el-menu>
    </div>

    <el-image :src="imageSrc" style="width: 100%; height: 250px;background-color: #2c3e50"></el-image>



    <router-view class="menu-right"/>
  </div>
</template>

<script>
export default {
  name: 'App',

  data(){
    return {
      imageSrc: '../static/image/test3.jpeg',
      navList: [
        {name: '/', navItem: '缺陷检测'},
        {name: '/components/HelloWorld', navItem: '模型训练'},
        {name: '/components/Manager', navItem: '产品说明'},
        {name: '/components/PostMission', navItem: '新闻资讯'},
        {name: '/components/PostMission', navItem: '联系我们'},
      ],
    };
  },

  methods:{
    handleSelect(key,keyPath){
      console.log(key,keyPath);
    }
  }
}
</script>

<style>
#app scoped{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .el-menu-demo{
    width: 100%;
    /*margin-bottom: -100px;*/
    margin-top: 45px;
    /*height: 200px;*/
    /*background-image: url("../static/image/test2.jpeg");*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
    /*background-color: #545c64*/
  }

  /* 导航栏的间距等样式 */
  .el-menu-item {
    padding: 0 62px;
    font-size: 16px;
  }
</style>
