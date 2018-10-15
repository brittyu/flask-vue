<template>
    <el-row :gutter="20" class="ad">
      <el-col :span="8">
        <el-card class="box-card" shadow="hover">
          <img src="https://qidian.qpic.cn/qidian_common/349573/f46feb77a9dba9408e9dc210c90bc239/0" alt="">
        </el-card>
      </el-col>
      <el-col :span="8" shadow="hover">
        <el-card class="box-card" shadow="hover">
          <img src="https://qidian.qpic.cn/qidian_common/349573/989b42ffd4389cc480701980944a9f06/0" alt="">
        </el-card>
      </el-col>
      <el-col :span="8" shadow="hover">
        <el-card class="box-card" shadow="hover">
          <img src="https://qidian.qpic.cn/qidian_common/349573/d92a3b5c4e65bf5333254ab48035e760/0" alt="">
        </el-card>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'AdBlock'
}
</script>

<style scoped>
  .ad .el-card__body {
    width: 314px;
    height: 120px;
  }
  .ad .box-card img {
    height: 100%;
    width: 100%;
  }
</style>
