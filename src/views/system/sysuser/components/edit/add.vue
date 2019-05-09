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
            <el-form-item label="用户类型" prop="usertype">
              <el-select @change="handleChange" v-model="formData.usertype" placeholder="请选择用户类型">
                <el-option
                  v-for="item in usertype"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="登录名称" prop="username">
              <el-input v-model.trim="formData.username" :readonly="readonly" placeholder="请输入登录名称"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="!row.id" :gutter="20">
          <el-col :span="12">
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model.trim="formData.password" :readonly="readonly" placeholder="请输入密码"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="重复密码" prop="repeatPassword">
              <el-input type="password"  v-model.trim="formData.repeatPassword" :readonly="readonly" placeholder="请重新输入密码"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="真实姓名" prop="truename">
              <el-input v-model.trim="formData.truename" :readonly="readonly" placeholder="请输入真实姓名"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="微信号" prop="weixin">
              <el-input v-model.trim="formData.weixin" :readonly="readonly" placeholder="请输入微信号"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="qq号" prop="qq">
              <el-input v-model.trim="formData.qq" :readonly="readonly" placeholder="请输入qq号"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号" prop="mtel">
              <el-input  v-model.trim="formData.mtel" :readonly="readonly" placeholder="请输入手机号"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="身份证号码" prop="idcardno">
              <el-input  v-model.trim="formData.idcardno" :readonly="readonly" placeholder="请输入身份证号码"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="E-mail" prop="email">
              <el-input v-model.trim="formData.email" :readonly="readonly" placeholder="请输入E-mail"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="职务" prop="position">
              <el-input v-model.trim="formData.position" :readonly="readonly" placeholder="请输入职务"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别" prop="sex">
              <el-select  v-model="formData.sex" placeholder="请选择性别">
                <el-option
                  v-for="item in sex"
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
            <el-form-item label="生日" prop="birthday">
              <el-date-picker
                v-model="formData.birthday"
                type="date"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                :default-value="formData.birthday"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="所属部门" prop="dept">
              <el-input v-model.trim="formData.dept" :readonly="readonly" placeholder="请输入所属部门"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">

          <el-col v-if="!row.id && isShow" :span="12">
            <el-form-item label="归属机构" prop="organno">
              <el-autocomplete
                class="autoCompleteClass"
                v-model="fullname"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
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
import { edit } from '@/api/system/sysuser'
import { list, getByOrganno } from '@/api/system/sysbaseorgan'
export default {
  name: 'SysUser',
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
      isShow: true,
      currentno: localStorage.getItem('organno'),
      restaurants: [],
      fullname: '',
      formData: {
        id: '',
        usertype: '',
        username: '',
        password: '',
        repeatPassword: '',
        truename: '',
        weixin: '',
        qq: '',
        mtel: '',
        idcardno: '',
        email: '',
        sex: '',
        birthday: '',
        dept: '',
        position: '',
        organno: ''
      },
      rules: {
        username: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
        usertype: [{ required: true, trigger: 'blur', message: '用户类型不能为空' }],
        password: [{ required: true, trigger: 'blur', message: '密码不能为空' }],
        truename: [{ required: true, trigger: 'blur', message: '真实姓名不能为空' }],
        mtel: [{ required: false, trigger: 'blur', pattern: /^1[3|4|5|7|8|9]\d{9}$/, message: '手机号格式不正确' }],
        organno: [{ required: true, trigger: 'blur', message: '机构归属不能为空' }]
      },
      usertype: [{
        value: '0',
        label: '机构用户'
      }, {
        value: '1',
        label: '普通用户'
      }],
      sex: [{
        value: '男',
        label: '男'
      }, {
        value: '女',
        label: '女'
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
      console.log(this.row)
      this.formData = this.row
      this.getOrganName()
      this.$nextTick(() => {
        this.$refs['formData'].clearValidate()
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
    handleSelect (item) {
      console.log(item)
      this.formData.organno = item.organno
    },
    timeChange (item) {
      console.log(item)
    },
    handleChange (val) {
      if (val === '0') {
        this.isShow = true
      }
      if (val === '1') {
        this.isShow = false
      }
    },
    onSubmit () {
      console.log(this.formData.birthday)
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
