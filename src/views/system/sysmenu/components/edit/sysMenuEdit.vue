<template>
  <div>
    <el-button
      style="font-size: 20px;"
      @click="handleAdd"
      type="text">
      <svg-icon  icon-class="add"/>
    </el-button>
    <el-button
      style="font-size: 20px;"
      @click="handleUpdate"
      type="text">
      <svg-icon  icon-class="update"/>
    </el-button>
    <el-button
      :loading="loading"
      style="font-size: 20px;"
      @click="handleDelete"
      type="text">
      <svg-icon  icon-class="delete"/>
    </el-button>
    <add-menu
      :dialogVisible="dialogFormVisible"
      :readonly="readonly"
      :row="rowin"
      @closeDialog="closeDialog"
      @getList="getList"
    />
  </div>
</template>

<script>
import AddMenu from './add'
import { del } from '@/api/system/sysmenu'
export default {
  name: 'SysMenuEdit',
  components: {
    AddMenu
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
      rowin: {}
    }
  },
  created () {
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    handleAdd () {
      console.log('新增')
      this.dialogFormVisible = true
      this.rowin = {}
    },
    handleUpdate () {
      console.log('修改')
      this.dialogFormVisible = true
      this.rowin = this.row
    },
    handleDelete () {
      console.log('删除')
      this.loading = true
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
    },
    handleUpdatePassword () {
      console.log('修改密码')
    },
    closeDialog () {
      this.dialogFormVisible = false
    },
    getList () {
      this.$emit('getList')
    }
  }
}
</script>
<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .dropdown-class {
    margin-left: 0px !important;
  }
  .el-dialog {
    z-index: 4000;
  }
</style>
