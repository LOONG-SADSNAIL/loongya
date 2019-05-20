<template>
  <div>
    <el-tooltip class="item" effect="dark" content="绑定角色" placement="top-start">
      <el-button
        class="tableButtonClass"
        v-if="menuedit === '1' || menuedit === '2'"
        @click="handleBindRole"
        size="medium"
        type="text">
        <svg-icon  icon-class="bindrole"/>
      </el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="修改" placement="top-start">
      <el-button
        class="tableButtonClass"
        v-if="menuedit === '1' || menuedit === '2'"
        @click="handleUpdate"
        size="medium"
        type="text">
        <svg-icon  icon-class="update"/>
      </el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="删除" placement="top-start">
      <el-button
        :loading="loading"
        class="tableButtonClass"
        v-if="menuedit === '2'"
        size="medium"
        @click="handleDelete"
        type="text">
        <svg-icon  icon-class="delete"/>
      </el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="重置密码" placement="top-start">
      <el-button
        :loading="loading"
        class="tableButtonClass"
        v-if="menuedit === '1' || menuedit === '2'"
        size="medium"
        @click="handleRepeatPassword"
        type="text">
        <svg-icon  icon-class="updatepassword"/>
      </el-button>
    </el-tooltip>
    <add-user
      :dialogVisible="dialogFormVisible"
      :readonly="readonly"
      :row="rowin"
      @closeDialog="closeDialog"
      @getList="getList"
    />
    <bind-role
      :dialogVisible="dialogBindRole"
      :row="rowin"
      @closeDialog="closeDialog"
    />
  </div>
</template>

<script>
import AddUser from './add'
import BindRole from './bindrole'
import { del, repeatpassword } from '@/api/system/sysuser'
export default {
  name: 'SysUserEdit',
  components: {
    AddUser,
    BindRole
  },
  props: {
    row: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      loading: false,
      readonly: false,
      dialogFormVisible: false,
      dialogBindRole: false,
      menuedit: this.$store.state.menuedit,
      rowin: {}
    }
  },
  created () {
    console.log(this.menuedit)
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    handleUpdate () {
      this.dialogFormVisible = true
      this.rowin = this.row
    },
    handleBindRole () {
      console.log('开启角色绑定')
      this.dialogBindRole = true
      this.rowin = this.row
    },
    handleRepeatPassword () {
      this.loading = true
      this.$confirm('是否确定重置密码?', '重置密码', {
        distinguishCancelAndClose: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        repeatpassword(this.row).then(res => {
          this.loading = false
          if (res.errcode === 0) {
            this.$emit('getList')
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
      }).catch(() => {
        this.loading = false
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleDelete () {
      this.loading = true
      this.$confirm('此操作将永久删除该信息, 是否继续?', '删除', {
        distinguishCancelAndClose: true,
        roundButton: true,
        center: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        del(this.row).then(res => {
          this.loading = false
          if (res.errcode === 0) {
            this.$emit('getList')
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
      }).catch(() => {
        this.loading = false
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    closeDialog () {
      this.dialogFormVisible = false
      this.dialogBindRole = false
    },
    getList () {
      this.$emit('getList')
    }
  }
}
</script>
<style>
</style>
