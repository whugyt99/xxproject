<template>
  <div style="margin-left: 10%;margin-top: 30px">
    <div class="header" style="height:70px;">
      <span style="font-size: x-large;color: black;margin:20px 0 0 30px;float:left">新闻公告</span>
    </div>
    <div class="content" >
      <ul>
        <li style="line-height:30px;">
          <el-link :underline="false" href="newsInfo/N0624">停止维护通知</el-link>
        </li>
        <li style="line-height:30px;">
          <el-link :underline="false" href="newsInfo/N0624">关于系统升级的通知</el-link>
        </li>
        <li style="line-height:30px;">
          <el-link :underline="false" href="newsInfo/N0624">缺陷检测分类更新</el-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'NewsPage',
    data() {
      return {}
    },
    methods: {
      //refresh(){
      //this.$router.go(0);
      //},
    }
  }
</script>
<style scoped>
  .el-link:hover {
    color: rgb(73, 178, 82);
  }

</style>
