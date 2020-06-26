<template>
<div>
<div class="header"style="height:70px;">
<span style="font-size: x-large;color: black;margin:30px 0 0 50px;float:left">新闻公告</span>
</div>
<div class="content" style="margin-left:20px">
<ul>
<li style="line-height:30px;"><el-link :underline="false" href="newsInfo/N0624">停止维护通知</el-link></li>
<li style="line-height:30px;"><el-link :underline="false" href="newsInfo/N0624">关于系统升级的通知</el-link></li>
<li style="line-height:30px;"><el-link :underline="false" href="newsInfo/N0624">缺陷检测分类更新</el-link></li>
</ul>
</div>
</div>
</template>
<script>
export default {
  name: 'NewsPage',
  data () {
  return {

  }
  },
  methods:{
  //refresh(){
  //this.$router.go(0);
  //},
  }
  }
</script>
<style scoped>
.el-link:hover{
color:rgb(73,178,82);
  }

</style>
