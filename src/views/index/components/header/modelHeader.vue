<template>
  <el-header class="homeHeader">
    <el-button v-on:click="changeCollapse" class="change-class" >
      <svg-icon  icon-class="menuTop"/>
    </el-button>
    <el-menu v-if="menuData.length>0"
             :default-active="activeIndex"
             class="homeHeaderMenu"
             mode="horizontal"
             @select="handleSelect"
             background-color="#252a2f"
             text-color="#fff"
             active-text-color="#ffd04b">
      <el-menu-item v-for="menu in menuData" :key="menu.menuid" :index="menu.menuid+''">{{menu.menuname}}</el-menu-item>
    </el-menu>
    <div class="homeHeaderUserHead">
      <div class="">
        <el-dropdown @command="handleCommand">
          <img class="el-dropdown-link homeHead" :src="headerImg" width="50px" height="40px" alt="头像">
          <el-dropdown-menu  slot="dropdown">
            <el-dropdown-item command="username">
              {{roleName}}{{userName}}
            </el-dropdown-item>
            <el-dropdown-item command="userinfo">个人资料</el-dropdown-item>
            <el-dropdown-item command="changepass" >修改密码</el-dropdown-item>
            <el-dropdown-item command="safelayout" divided>安全退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </el-header>
</template>
<script>
import Img from '@/assets/img/header/boy.gif'
export default {
  name: 'ModelAside',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    headerImg () {
      // this.$store.state.headerImg |
      return Img
    },
    userName () {
      // this.$store.state.userName |
      return '张三'
    },
    roleName () {
      // this.$store.state.roleName |
      return '超级管理员'
    },
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
    handleCommand (command) {
      // this.$message('click on item ' + command)
      if (command === 'userinfo') {
      } else if (command === 'changepass') {
        this.$store.dispatch('setPasswordVisible', true)
      } else if (command === 'safelayout') {
        this.$store.dispatch('LogOut').then(res => {
          if (res.errcode === 0) {
            this.$router.push('/login')
          }
        })
      }
    },
    changeCollapse () {
      if (this.isCollapse) {
        this.$store.dispatch('setIsCollapse', false)
      } else {
        this.$store.dispatch('setIsCollapse', true)
      }
    },
    handleSelect (key, keyPath) {
      console.log(key + '' + keyPath)
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
</style>
