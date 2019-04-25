<template>
    <el-row >
      <el-col :span="24">
        <div class="aside-f" >
          <div class="aside-f-conent" >
            <div class="aside-f-1">
              <img :src="headerImg" alt="头像">
            </div>
            <div class="aside-f-2">
              {{userName}}
            </div>
            <div class="aside-f-3">
              <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link">
                      {{roleName}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                <el-dropdown-menu  slot="dropdown">
                  <el-dropdown-item command="userinfo">个人资料</el-dropdown-item>
                  <el-dropdown-item command="changepass" >修改密码</el-dropdown-item>
                  <el-dropdown-item command="safelayout" divided>安全退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>

            </div>
          </div>
        </div>
      </el-col>
    </el-row>
</template>

<script>

import Img from '@/assets/img/header/boy.gif'

export default {
  name: 'TopAside',
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
    }
  },
  methods: {
    handleCommand (command) {
      // this.$message('click on item ' + command)
      if (command === 'userinfo') {
      } else if (command === 'changepass') {
      } else if (command === 'safelayout') {
        this.$store.dispatch('LogOut').then(res => {
          if (res.errcode === 0) {
            this.$router.push('/login')
          }
        })
      }
    }
  }
}
</script>
<style>
  .el-dropdown-menu {
    margin-left: 20px !important;
    padding-left: 20px;
  }
</style>
