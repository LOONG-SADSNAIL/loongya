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
    <add-notice
      :dialogVisible="dialogFormVisible"
      :readonly="readonly"
      :row="rowin"
      @closeDialog="closeDialog"
      @getList="getList"
    />
  </div>
</template>

<script>
import AddNotice from './add'
import { del } from '@/api/system/sysnotice'
export default {
  name: 'SysNoticeEdit',
  components: {
    AddNotice
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
      this.dialogFormVisible = true
      this.rowin = {}
    },
    handleUpdate () {
      this.dialogFormVisible = true
      this.rowin = this.row
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
    },
    getList () {
      this.$emit('getList')
    }
  }
}
</script>
<style>
</style>
