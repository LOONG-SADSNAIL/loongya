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
            <el-form-item label="小区名称" prop="villagename">
              <el-autocomplete
                class="autoCompleteClass"
                v-model="villageName"
                :fetch-suggestions="querySearch"
                placeholder="请输入小区名称"
                @select="handleSelect"
              ></el-autocomplete>
            </el-form-item>
          </el-col>
          <!--<el-col :span="12">
            <el-form-item label=苑撞 prop="upperno">
              <el-select v-model="formData.upperno" placeholder="请选择苑撞">
                <el-option
                  v-for="item in menuList"
                  :key="item.menuid"
                  :label="item.menuname"
                  :value="item.menuid">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>-->
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="url" prop="url">
              <el-input v-model.trim="formData.url" :readonly="readonly" placeholder="请输入url"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="备注" prop="remarks">
              <el-input v-model.trim="formData.remarks" :readonly="readonly" placeholder="请输入备注"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="菜单图标" prop="icon">
              <el-input v-model.trim="formData.icon" :readonly="readonly" placeholder="请输入菜单图标"/>
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
import { edit } from '@/api/system/sysmenu'
import { list } from '@/api/hovillage/hovillage'
export default {
  name: 'tjuser',
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
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      loading: false,
      villageName: '',
      organno: localStorage.getItem('organno'),
      restaurants: [],
      formData: {
        id: 0,
        villagename: '',
        menuid: '',
        upperno: '',
        url: '',
        remarks: '',
        icon: ''
      },
      rules: {
        villagename: [{ required: true, trigger: 'blur', message: '小区不能为空' }],
        menuid: [{ required: true, trigger: 'blur', message: '苑撞不能为空' }],
        icon: [{ required: true, trigger: 'blur', message: '单元室不能为空' }]
      }
    }
  },
  computed: {
    svgs () {
      const files = require.context('@/icons/svg', false, /\.svg$/).keys()
      return files
    }
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
    },
    querySearch (queryString, cb) {
      this.restaurants = []
      list({ villageName: queryString, organno: this.currentno }).then(res => {
        if (res.errcode === 0) {
          res.data.tableData.forEach(e => {
            this.restaurants.push({ value: e.name, id: e.id })
          })
        }
        cb(this.restaurants)
      })
    },
    handleSelect (item) {
      console.log(item)
      this.formData.id = item.id
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
