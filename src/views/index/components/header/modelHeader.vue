<template>
  <el-header>
    <div class="header_f">
      <el-button v-on:click="changeCollapse" class="change-class" >
        <svg-icon  icon-class="menu-top"/>
      </el-button>
    </div>
    <div class="header_s">
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
    </div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </el-header>
</template>

<script>
export default {
  name: 'ModelAside',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    },
    activeIndex () {
      return this.$store.state.active_menu_index
    },
    menuData () {
      return this.$store.state.menu_data
    }
  },
  methods: {
    changeCollapse () {
      if (this.isCollapse) {
        this.$store.dispatch('setIsCollapse', false)
      } else {
        this.$store.dispatch('setIsCollapse', true)
      }
    },
    handleSelect (key, keyPath) {
      this.$store.dispatch('setActiveMenuIndex', { 'index': key })
      // const menu = this.$store.getters.getMenuItem
      // if (menu && menu.childlist.length > 0) {
      //   const subMenuIndex = menu.childlist[0].menuid
      //   this.$store.dispatch('setActiveSubMenuIndex', { 'subMunuIndex': subMenuIndex })
      // }
    }
  }
}
</script>
<style>
  .home .header_f .change-class {
    padding: 0;
    border:none;
    background: none;
    font-size: 33px;
  }
  .el-menu-demo {
    padding-left: 0px;
  }
  .el-menu-demo .el-menu-item {
    height: 40px !important;
    float: right !important;
    line-height: 41px !important;
  }
</style>
