<template>
  <el-container direction="vertical" class="home console-base-bar">
    <ModelHeader/>
    <ModelAside/>
    <AppMain/>
  </el-container>
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
</style>
