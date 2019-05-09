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
            <el-form-item label="标题" prop="title">
              <el-input v-model.trim="formData.title" :readonly="readonly" placeholder="请输入标题"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="内容" prop="content">
              <el-input v-model.trim="formData.content" :readonly="readonly" placeholder="请输入内容"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="通知权限" prop="organno">
              <el-autocomplete
                class="autoCompleteClass"
                v-model="fullname"
                :fetch-suggestions="querySearch"
                placeholder="请输入机构名称"
                @select="handleSelect"
              ></el-autocomplete>
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
import { edit } from '@/api/system/sysnotice'
import { list, getByOrganno } from '@/api/system/sysbaseorgan'
export default {
  name: 'SysNoticeAdd',
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
      currentno: localStorage.getItem('organno'),
      restaurants: [],
      fullname: '',
      formData: {
        id: '',
        title: '',
        type: '',
        organno: '',
        content: ''
      },
      rules: {
        title: [{ required: true, trigger: 'blur', message: '标题不能为空' }],
        content: [{ required: true, trigger: 'blur', message: '内容不能为空' }],
        organno: [{ required: true, trigger: 'blur', message: '权限不能为空' }]
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
      const { id, title, organno, content } = this.row
      this.formData = { id, title, organno, content }
      this.getOrganName()
      this.$nextTick(() => {
        this.$refs['formData'].clearValidate()
      })
    },
    querySearch (queryString, cb) {
      this.restaurants = []
      list({ fullname: queryString, userorganno: this.currentno }).then(res => {
        if (res.errcode === 0) {
          res.data.tableData.forEach(e => {
            this.restaurants.push({ value: e.fullname, organno: e.organno })
          })
        }
        cb(this.restaurants)
      })
    },
    getOrganName () {
      getByOrganno({ organno: this.formData.organno }).then(res => {
        if (res.errcode === 0 && res.data) {
          this.fullname = res.data.fullname
          this.formData.organno = res.data.organno
        }
      })
    },
    handleSelect (item) {
      console.log(item)
      this.formData.organno = item.organno
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
