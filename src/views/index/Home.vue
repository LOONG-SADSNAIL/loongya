<template>
  <el-container direction="vertical" class="home console-base-bar">
    <ModelHeader/>
    <ModelAside/>
    <AppMain/>
    <Updatepassword
      :passwordVisible="passwordVisible"/>
  </el-container>
</template>

<script>
import '@/assets/css/home.scss'
import ModelAside from './components/aside/modelAside.vue'
import ModelHeader from './components/header/modelHeader'
import AppMain from './components/main/appMain'
import Updatepassword from './components/updatepassword'
export default {
  name: 'home',
  components: {
    AppMain,
    ModelAside,
    ModelHeader,
    Updatepassword
  },
  data () {
    return {
    }
  },
  computed: {
    passwordVisible () {
      return this.$store.state.passwordVisible
    }
  },
  methods: {
  }
}
</script>
<style>
</style>
