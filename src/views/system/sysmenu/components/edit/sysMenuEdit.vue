<template>
  <div>
    <el-tooltip class="item" effect="dark" content="修改" placement="top-start">
      <el-button
        class="tableButtonClass"
        v-if="menuedit === 'true'"
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
        v-if="menuedit === 'true'"
        size="medium"
        @click="handleDelete"
        type="text">
        <svg-icon  icon-class="delete"/>
      </el-button>
    </el-tooltip>
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
      menuedit: this.$store.state.menuedit,
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
