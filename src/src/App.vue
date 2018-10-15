<template>
  <div id="app">
    <el-container>
      <Header></Header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <div>
          © 2018  xiaoshuozhijia
        </div>
        <div>
          Powered by xiaoshuozhijia
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',

  components: {
    Header
  },

  data () {
    return {
      activeIndex: '2',
      search: ''
    }
  },

  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 1020px;
  margin: 0 auto;
}

.el-footer {
  font-size: 11px;
}
</style>
