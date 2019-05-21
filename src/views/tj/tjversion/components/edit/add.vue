<template>
  <div class="from-wrapper">
    <el-dialog
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      :title="readonly ? '查看' : formData.id ? '编辑' : '新增'"
      center
      modal
      :modal-append-to-body="loading"
      @open="handleOpen">
      <el-form ref="formData" :model="formData" :rules="rules" size="mini" label-position="right" label-width="110px">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="角色名称" prop="rolename">
              <el-input v-model.trim="formData.rolename" :readonly="readonly" placeholder="请输入角色名称"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="是否可编辑" prop="menuedit">
              <el-select v-model="formData.menuedit" placeholder="请选择是否可编辑">
                <el-option
                  v-for="item in menuedit"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="角色说明" prop="description">
              <el-input v-model.trim="formData.description" :readonly="readonly" placeholder="请输入角色说明"/>
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
import { edit } from '@/api/system/sysrole'
export default {
  name: 'SysRoleAdd',
  components: {
  },
  props: {
    dialogVisible: {
      type: Boolean,
      required: true
    },
    readonly: {
      type: Boolean,
      default: false
    },
    row: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      loading: false,
      formData: {
        id: '',
        rolename: '',
        menuedit: '',
        description: ''
      },
      rules: {
        rolename: [{ required: true, trigger: 'blur', message: '角色名不能为空' }],
        menuedit: [{ required: true, trigger: 'blur', message: '是否可编辑不能为空' }]

      },
      menuedit: [{
        value: '0',
        label: '只查询'
      }, {
        value: '1',
        label: '可编辑'
      }, {
        value: '2',
        label: '全部权限'
      }]
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
      this.formData = this.row
      this.$nextTick(() => {
        this.$refs['formData'].clearValidate()
      })
    },
    onSubmit () {
      this.$refs['formData'].validate((valid) => {
        if (valid) {
          this.loading = true
          edit(this.formData).then(res => {
            this.loading = false
            if (res.errcode === 0) {
              this.$emit('getList')
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
