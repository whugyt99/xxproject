<template>
  <div id="app">
<!--    导航栏-->
    <el-menu :default-active="this.$route.path" class="el-menu-demo" router mode="horizontal"
             @select="handleSelect" text-color="#fff" active-text-color="#ffd04b" background-color="#545c64">

      <el-menu-item class="el-menu-item" v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem}}
      </el-menu-item>

    </el-menu>

    <router-view class="menu-right"/>
  </div>
</template>

<script>
export default {
  name: 'App',

  data(){
    return {
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
  .el-menu-demo{
    height: 60px;
    width: 100%;
    float: right;
    background-color: #545c64
  }
  /*!* 点击出来的下划线进行隐藏 *!*/
  /*.el-menu-item.is-active {*/
  /*  border-bottom: none!important;*/
  /*  color: rgba(0,0,0,0);*/
  /*}*/
  /*!* 整体的下划线进行隐藏 *!*/
  /*.el-menu>.el-menu--horizontal{*/
  /*  border-bottom: none;*/
  /*}*/
  /* 导航栏的间距等样式 */
  .el-menu-item {
    padding: 0 62px;
    font-size: 16px;
  }
</style>
