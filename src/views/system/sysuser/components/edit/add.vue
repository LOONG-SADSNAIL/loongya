<template>
  <div class="from-wrapper">
    <el-dialog
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      :title="readonly ? '查看' : formData.id ? '编辑' : '新增'"
      width="800px"
      @open="handleOpen">
      <el-form ref="ruleForm" :model="formData" :rules="rules" size="mini" label-position="right" label-width="90px">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="用户名" prop="name">
              <el-input v-model.trim="formData.username" :readonly="readonly" placeholder="用户名" @keyup.enter.native="onSubmit"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用户名" prop="name">
              <el-input v-model.trim="formData.username" :readonly="readonly" placeholder="用户名" @keyup.enter.native="onSubmit"/>
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
export default {
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
        username: ''
      },
      rules: {
        username: [{ required: true, trigger: 'blur', message: '用户名不能为空' }]
      }
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    handleClose () {
      console.log('关闭')
      this.$emit('closeDialog', 'model')
    },
    handleOpen () {
      console.log('开启')
      this.formData.username = this.row.username
      this.$nextTick(() => {
        this.$refs['formData'].clearValidate()
      })
    },
    onSubmit () {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.loading = true
          this.loading = false
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  .el-select, .el-date-editor, .el-cascader {
    width: 100%;
  }
  .avatar-uploader >>> .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader >>> .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }
</style>
