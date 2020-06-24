<template>
    <el-card class="box-card" shadow="never">
      <div slot="header">联系我们</div>
      <div v-for="(item,i) in contactWay" :key="i" class="text">
        {{item.name + ':' + item.number}}
      </div>
    </el-card>
</template>

<script>
    export default {
        name: "ContractUs",
      data(){
          return {
            contactWay:[
              {name:'办公电话',number:'124456'},
              {name:'公共邮箱',number:''},
              {name:'办公地址',number:''},
              {name:'通讯地址',number:''},
              {name:'邮政编码',number:''},
            ]
          }
      }
    }
</script>

<style scoped>
.box-card{
  width: 480px;
  margin-left: 25%;
  margin-top: 30px;
  border: 0;
}

  .text{
    font-size: 14px;
    color: dimgray;
  }
</style>
