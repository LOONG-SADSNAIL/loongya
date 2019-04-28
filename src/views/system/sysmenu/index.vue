<template>
  <div class="sysuser" v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)" >
    <el-container>
      <div class="main-header-class">
        <div class="ibox-title">
          <h5>菜单管理</h5>
        </div>
        <list/>
      </div>
    </el-container>
  </div>
</template>

<script>
import list from './components/list'
import '@/assets/css/appmain.css'
export default {
  name: 'SysMenu',
  components: {
    list
  },
  data () {
    return {
      loading: false
    }
  },
  created () {
  },
  computed: {
  },
  methods: {

  }
}
</script>
<style>
</style>
