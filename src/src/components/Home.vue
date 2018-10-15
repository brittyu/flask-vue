<template>
  <div>
    <AnnouncementBlock></AnnouncementBlock>
    <AdBlock></AdBlock>
    <HotBlock></HotBlock>
    <NewBlock></NewBlock>
  </div>
</template>

<script>
import HotBlock from './HotBlock.vue'
import AnnouncementBlock from './AnnouncementBlock.vue'
import AdBlock from './AdBlock.vue'
import NewBlock from './NewBlock.vue'

export default {

  components: {
    HotBlock,
    AnnouncementBlock,
    AdBlock,
    NewBlock
  },

  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  a {
    text-decoration: none;
    color: #399cff;
  }
  a:hover {
    color: #475669;
    size: 10px;
  }
  .el-card__body {
    padding: 5px !important;
  }
</style>
