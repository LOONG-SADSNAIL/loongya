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
      <el-form ref="formData" :model="formData" :rules="rules" size="mini" label-position="right" label-width="90px">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="名称" prop="name">
              <el-input v-model.trim="formData.name" :readonly="readonly" placeholder="请输入名称"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="提示" prop="tips">
              <el-input v-model.trim="formData.tips" :readonly="readonly" placeholder="请输入提示"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="值" prop="code">
              <el-input v-model.trim="formData.code" :readonly="readonly" placeholder="请输入值"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="排序" prop="num">
              <el-input v-model.trim="formData.num" :readonly="readonly" placeholder="请输入排序"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="父级id" prop="pid">
              <el-select v-model="formData.pid" placeholder="请选择">
                <el-option
                  v-for="item in dictList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button :loading="loading" type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { edit, treeList } from '@/api/system/sysdict'
export default {
  name: 'SysDict',
  components: {
  },
  props: {
    dialogVisible: {
      type: Boolean,
      required: true
    },
    readonly: {
      type: Boolean,
      required: true
    },
    row: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      loading: false,
      dictList: [],
      formData: {
        id: 0,
        name: '',
        pid: '',
        tips: '',
        num: '',
        code: ''
      },
      rules: {
        name: [{ required: true, trigger: 'blur', message: '名称不能为空' }],
        pid: [{ required: true, trigger: 'blur', message: '父id不能为空' }],
        code: [{ required: true, trigger: 'blur', message: '值不能为空' }]
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
      this.$emit('closeDialog')
    },
    handleOpen () {
      console.log('开启')
      this.formData = this.row
      this.getDictList()
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
    },
    getDictList () {
      treeList({ pid: 0 }).then(res => {
        if (res.errcode === 0) {
          res.data.unshift({
            id: 0,
            name: '顶级'
          })
          this.dictList = res.data
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
