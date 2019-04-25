<template>
  <div class="home">
    <el-container>
      <ModelAside/>
      <el-container class="inline-container">
        <ModelHeader/>
        <AppMain/>
        <el-footer>
          <div class="footer-class">
            @2019-2020 easylink
          </div>
        </el-footer>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import '@/assets/css/home.scss'
import ModelAside from './components/aside/modelAside.vue'
import ModelHeader from './components/header/modelHeader'
import AppMain from './components/main/appMain'

export default {
  name: 'home',
  components: {
    AppMain,
    ModelAside,
    ModelHeader
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style>
  .home .el-footer {
    width: 100%;
    border-top: 1px solid rgb(47, 64, 80) ;
    position:fixed;
    bottom: 0px;
    right: 0px;
    height: 3%!important;
    text-align: right;
    line-height: 30px;
    font-size: 10px;
    background: rgba(249, 243, 255, 0.01);
    z-index:20;
  }
</style>
