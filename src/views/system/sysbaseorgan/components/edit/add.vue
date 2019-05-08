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
        <el-row v-if="!row.id" :gutter="20">
          <el-col :span="12">
            <el-form-item label="登录账号" prop="username">
              <el-input v-model="formData.username" :readonly="readonly" placeholder="请输入登录账号"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="真实姓名" prop="truename">
              <el-input v-model="formData.truename" :readonly="readonly" placeholder="请输入真实姓名"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="!row.id" :gutter="20">
          <el-col  :span="12">
            <el-form-item label="登录密码" prop="password">
              <el-input type="password" v-model="formData.password" :readonly="readonly" placeholder="请输入登录密码"/>
            </el-form-item>
          </el-col>
          <el-col v-if="!row.id" :span="12">
            <el-form-item label="手机号码" prop="mtel">
              <el-input v-model="formData.mtel" :readonly="readonly" placeholder="请输入手机号码"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="机构名称" prop="fullname">
              <el-input v-model="formData.fullname" :readonly="readonly" placeholder="请输入机构名称"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="机构简称" prop="shortname">
              <el-input v-model="formData.shortname" :readonly="readonly" placeholder="请输入机构简称"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="法人代表" prop="organlegal">
              <el-input v-model="formData.organlegal" :readonly="readonly" placeholder="请输入法人代表"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系人" prop="contacter">
              <el-input v-model="formData.contacter" :readonly="readonly" placeholder="请输入联系人"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="联系电话" prop="contacttel">
              <el-input v-model="formData.contacttel" :readonly="readonly" placeholder="请输入联系电话"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="公司地址" prop="address">
              <el-input v-model="formData.address" :readonly="readonly" placeholder="请输入公司地址"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="!row.id" :gutter="20">
          <el-col :span="12">
            <el-form-item label="机构归属" prop="organno">
              <el-autocomplete
                class="autoCompleteClass"
                v-model="fullname"
                :fetch-suggestions="querySearch"
                placeholder="请输入归属机构名称"
                @select="handleSelect"
              ></el-autocomplete>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button class="buttonClass" :loading="loading" type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { edit, list, getByOrganno } from '@/api/system/sysbaseorgan'
import { getUserByOrganno } from '@/api/system/sysuser'
export default {
  name: 'SysBaseorgan',
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
        username: '',
        password: '',
        truename: '',
        mtel: '',
        fullname: '',
        shortname: '',
        organlegal: '',
        contacter: '',
        contacttel: '',
        address: '',
        organno: ''
      },
      rules: {
        username: [{ required: true, trigger: 'blur', message: '姓名不能为空' }],
        password: [{ required: true, trigger: 'blur', message: '密码不能为空' }],
        mtel: [{ required: true, trigger: 'blur', pattern: /^1[3|4|5|7|8|9]\d{9}$/, message: '手机号格式不正确' }],
        truename: [{ required: true, trigger: 'blur', message: '真实姓名不能为空' }],
        fullname: [{ required: true, trigger: 'blur', message: '机构名称不能为空' }],
        contacter: [{ required: true, trigger: 'blur', message: '联系人不能为空' }],
        contacttel: [{ required: true, trigger: 'blur', pattern: /^1[3|4|5|7|8|9]\d{9}$/, message: '联系人电话格式不正确' }],
        organno: [{ required: true, trigger: 'blur', message: '机构归属不能为空' }]
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
      // this.formData = { id: '' }
      console.log('开启')
      if (this.row.id) {
        this.formData = Object.assign({}, this.formData, this.row)
        console.log(this.formData)
        this.getUserByOrganno()
      }
      this.getOrganName()
      this.$nextTick(() => {
        this.$refs['formData'].clearValidate()
      })
    },
    getUserByOrganno () {
      getUserByOrganno({ organno: this.formData.organno }).then(res => {
        if (res.errcode === 0 && res.data) {
          this.formData.username = res.data.username
          this.formData.truename = res.data.truename
          this.formData.mtel = res.data.mtel
          this.formData = Object.assign({}, this.formData, {
            username: res.data.username,
            mtel: res.data.mtel,
            truename: res.data.truename
          })
        }
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
      getByOrganno({ organno: this.formData.organno ? this.formData.organno : this.currentno }).then(res => {
        if (res.errcode === 0 && res.data) {
          this.fullname = res.data.fullname
          this.formData = Object.assign({}, this.formData, {
            organno: res.data.organno
          })
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
