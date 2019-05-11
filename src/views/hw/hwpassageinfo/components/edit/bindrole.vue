<template>
  <div class="from-wrapper">
    <el-dialog
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      title="角色绑定"
      center
      modal
      :modal-append-to-body="loading"
      @open="handleOpen">
      <el-form ref="formData" :model="formData" :rules="rules" size="mini" label-position="right" label-width="90px">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="用户角色" prop="id">
              <el-select v-model="formData.id" placeholder="请选择用户角色">
                <el-option
                  v-for="item in roleids"
                  :key="item.label"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
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
import { list, bindRole, getRoleId } from '@/api/system/sysrole'
export default {
  name: 'SysBindRole',
  components: {
  },
  props: {
    dialogVisible: {
      type: Boolean,
      required: true
    },
    row: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      loading: false,
      roleid: '',
      formData: {
        id: ''
      },
      rules: {
        id: [{ required: true, trigger: 'blur', message: '角色不能为空' }]
      },
      roleids: []
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
      this.$emit('closeDialog')
    },
    handleOpen () {
      console.log('开启')
      this.rolelist()
      this.getRoleId()
      this.$nextTick(() => {
        this.$refs['formData'].clearValidate()
      })
    },
    rolelist () {
      this.roleids = []
      list().then(res => {
        if (res.errcode === 0) {
          res.data.tableData.forEach(e => {
            this.roleids.push({ value: e.id + '', label: e.rolename })
          })
        }
      })
    },
    getRoleId () {
      getRoleId({ userid: this.row.id }).then(res => {
        if (res.errcode === 0) {
          this.formData.id = res.data + ''
        }
      })
    },
    onSubmit () {
      console.log(this.formData.birthday)
      this.$refs['formData'].validate((valid) => {
        if (valid) {
          this.loading = true
          bindRole(this.formData).then(res => {
            this.loading = false
            if (res.errcode === 0) {
              this.handleClose()
              this.$message({
                showClose: true,
                message: res.errmsg,
                type: 'success'
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
