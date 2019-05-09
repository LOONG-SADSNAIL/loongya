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
            <el-form-item label="菜单名称" prop="menuname">
              <el-input v-model.trim="formData.menuname" :readonly="readonly" placeholder="请输入菜单名称"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="菜单id" prop="menuid">
              <el-input v-model.trim="formData.menuid" :readonly="readonly" placeholder="请输入菜单id"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="父级菜单id" prop="upperno">
              <el-select v-model="formData.upperno" placeholder="请选择">
                <el-option
                  v-for="item in menuList"
                  :key="item.menuid"
                  :label="item.menuname"
                  :value="item.menuid">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
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
              <el-select v-model="formData.icon" :readonly="readonly" placeholder="请选择">
                <el-option
                  v-for="item in dictList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.code">
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
import { edit, treeList } from '@/api/system/sysmenu'
import { treeList as dictTreeList } from '@/api/system/sysdict'
export default {
  name: 'SysMenu',
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
      menuList: [],
      dictList: [],
      formData: {
        id: '',
        menuname: '',
        menuid: '',
        upperno: '',
        url: '',
        remarks: '',
        icon: ''
      },
      rules: {
        menuname: [{ required: true, trigger: 'blur', message: '菜单名不能为空' }],
        menuid: [{ required: true, trigger: 'blur', message: '菜单id不能为空' }],
        icon: [{ required: true, trigger: 'blur', message: '菜单图标不能为空' }]
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
      this.getMenuList()
      this.getDictList()
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
    },
    getMenuList () {
      treeList({ menuid: 'M' }).then(res => {
        if (res.errcode === 0) {
          res.data.unshift({
            menuid: 'M',
            menuname: '顶级'
          })
          this.menuList = res.data
        }
      })
    },
    getDictList () {
      dictTreeList({ pid: 69 }).then(res => {
        if (res.errcode === 0) {
          this.dictList = res.data
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
