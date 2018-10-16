<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4"><div class="grid-content bg-purple-light">排名</div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple-light">分类名</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light">阅读数</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4"><div class="grid-content bg-purple">1</div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple">玄幻</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">100000</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4"><div class="grid-content bg-purple">2</div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple">言情</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">11000</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
