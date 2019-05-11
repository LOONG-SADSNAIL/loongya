<template>
  <div>
    <el-tooltip class="item" effect="dark" content="角色关联菜单" placement="top-start">
      <el-button
        class="tableButtonClass"
        v-if="menuedit === 'true'"
        @click="handleRoleMenu"
        size="medium"
        type="text">
        <svg-icon  icon-class="roleMenu"/>
      </el-button>
    </el-tooltip>
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
    <add-role
      :dialogVisible="dialogFormVisible"
      :readonly="readonly"
      :row="rowin"
      @closeDialog="closeDialog"
      @getList="getList"
    />
    <role-menu
      :dialogVisible="dialogRoleMenuVisible"
      :row="rowin"
      @closeDialog="closeDialog"
    />
  </div>
</template>

<script>
import AddRole from './add'
import RoleMenu from './roleMenu'
import { del } from '@/api/system/sysrole'
export default {
  name: 'SysRoleEdit',
  components: {
    AddRole,
    RoleMenu
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
      dialogRoleMenuVisible: false,
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
    handleRoleMenu () {
      this.dialogRoleMenuVisible = true
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
      this.dialogRoleMenuVisible = false
    },
    getList () {
      this.$emit('getList')
    }
  }
}
</script>
<style>
</style>
