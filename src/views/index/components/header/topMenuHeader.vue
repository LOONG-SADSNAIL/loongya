<template>
    <el-menu v-if="menuData.length>0"
      style="margin-left: -8px;"
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#2f4050"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item v-for="menu in menuData" :key="menu.menuid" :index="menu.menuid+''">{{menu.menuname}}</el-menu-item>
    </el-menu>
  </template>

<script>

export default {
  name: 'TopMenuHeader',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    activeIndex () {
      return this.$store.state.active_menu_index
    },
    menuData () {
      return this.$store.state.menu_data
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$store.dispatch('setActiveMenuIndex', { 'index': key })
      const menu = this.$store.getters.getMenuItem
      if (menu && menu.childlist.length > 0) {
        const subMenuIndex = menu.childlist[0].menuid
        this.$store.dispatch('setActiveSubMenuIndex', { 'subMunuIndex': subMenuIndex })
      }
    }
  }
}
</script>
<style>
  .el-menu-demo {
    padding-left: 0px;
  }
  .el-menu-demo .el-menu-item {
    height: 40px !important;
    float: right !important;
    line-height: 41px !important;
  }
</style>
