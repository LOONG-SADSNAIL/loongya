<template>
  <div class="login" v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)" >
    <el-container>
      <el-header>
        <el-row>
          <el-col class="header-first" :span="12">
              <h1 class="headerLogo"><a title="后台管理系统" target="_self" href="#"><img alt="logo" src="@/assets/img/logo.png"></a></h1>
          </el-col>
          <el-col class="header-second" :span="12">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1"><router-link to="/">公司官网</router-link></el-menu-item>
              <el-menu-item index="2"><router-link to="/">关于我们</router-link></el-menu-item>
              <el-menu-item index="3"><router-link to="/">开发团队</router-link></el-menu-item>
              <el-menu-item index="4"><router-link to="/">意见反馈</router-link></el-menu-item>
              <el-menu-item index="5"><router-link to="/">帮助</router-link></el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <div class="main-class">
        <el-main>
          <div class="login-aside">
            <div class="o-box-up"></div>
            <div class="o-box-down">
              <div class="login-title-class">登录</div>
              <el-form :model="loginForm" :rules="rules" ref="loginForm"  status-icon class="login-form-class">
                <el-form-item prop="username">
                  <el-input type="text" placeholder="请输入账号" v-model="loginForm.username" autocomplete="on"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input type="password" placeholder="请输入密码" v-model="loginForm.password" autocomplete="on"></el-input>
                </el-form-item>
                <el-button class="login-button-class" type="primary" @click="submitForm('loginForm')">提交</el-button>
              </el-form>
            </div>
          </div>
        </el-main>
      </div>
      <el-footer>
        <el-row>
          <el-col class="header-first" :span="24">
              <p>轻松互连 版权所有  Copyright 2015-2015  Corporation, All Rights Reserved</p>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import '@/assets/css/login.scss'
export default {
  name: 'Login',
  components: {
  },
  data () {
    return {
      activeIndex: '1',
      loading: false,
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 9, message: '长度在 3 到 9 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 9, message: '长度在 3 到 9 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm).then((res) => {
            this.loading = false
            if (res.errcode === 0) {
              this.$router.push({ path: this.redirect || '/' })
            } else {
              this.$message({
                type: 'error',
                message: res.data || '登录失败!'
              })
            }
          }).catch(() => {
            this.loading = false
          })
        } else {
          this.$message({ showClose: true, message: '提交失败', type: 'success' })
          return false
        }
      })
    },
    handleSelect (key, path) {
      console.log(key + '' + path)
    }
  }
}
</script>
