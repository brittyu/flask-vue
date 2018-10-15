<template>
    <el-row :gutter="20">
      <el-col :span="18">
        <el-carousel indicator-position="outside" height="250px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="6" class="announcement">
        <el-row>
          <el-col>公告</el-col>
          <el-col><a href="#">[公告]2018年作家高研班</a></el-col>
          <el-col><a href="#">[公告]2018年作家高研班</a></el-col>
          <el-col><a href="#">[公告]2018年作家高研班</a></el-col>
          <el-col><a href="#">[公告]2018年作家高研班</a></el-col>
          <el-col><a href="#">[公告]2018年作家高研班</a></el-col>
          <el-col><a href="#">[公告]2018年作家高研班</a></el-col>
        </el-row>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'AnnouncementBlock'
}
</script>

<style scoped>
  .announcement {
    margin-top: 0px;
    border: solid 1px #e6e6e6;
    padding-top: 7px;
  }
  .announcement .el-row .el-col {
    margin-bottom: 11.5px;
  }
</style>
