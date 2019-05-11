<template>
  <div class="from-wrapper updatepasswordclass">
    <el-dialog
      :visible.sync="passwordVisible"
      :before-close="handleClose"
      title="修改密码"
      center
      width="400px"
      modal
      :modal-append-to-body="loading"
      @open="handleOpen">
      <el-form ref="formData" :model="formData" :rules="rules" size="mini" label-position="right" label-width="90px">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="密码" prop="password">
              <el-input v-model.trim="formData.password" placeholder="请输入密码"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="重复密码" prop="repeatPassword">
              <el-input v-model.trim="formData.repeatPassword" placeholder="请再次输入密码"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button size="small" :loading="loading" type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { updatepassword } from '@/api/system/sysuser'
export default {
  name: 'SysUserUpdatePassword',
  components: {
  },
  props: {
    passwordVisible: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      loading: false,
      formData: {
        password: '',
        repeatPassword: ''
      },
      rules: {
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 9, message: '长度在 3 到 9 个字符', trigger: 'blur' }
        ],
        repeatPassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { min: 3, max: 9, message: '长度在 3 到 9 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
  },
  mounted () {
  },
  created () {
  },
  methods: {
    handleClose () {
      console.log('关闭')
      this.$store.dispatch('setPasswordVisible', false)
    },
    handleOpen () {
      console.log('开启')
    },
    onSubmit () {
      if (this.formData.password !== this.formData.repeatPassword) {
        this.$message.error('两次密码不相等')
        return false
      }
      this.$refs['formData'].validate((valid) => {
        if (valid) {
          this.loading = true
          updatepassword(this.formData).then(res => {
            this.loading = false
            if (res.errcode === 0) {
              this.handleClose()
              this.$message({
                showClose: true,
                message: res.errmsg,
                type: 'success'
              })
              this.$store.dispatch('LogOut').then(res => {
                if (res.errcode === 0) {
                  this.$router.push('/login')
                }
              })
            } else {
              this.$message({
                showClose: true,
                message: res.errmsg,
                type: 'error'
              })
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
