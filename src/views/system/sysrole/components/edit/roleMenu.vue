<template>
  <div class="from-wrapper">
    <el-dialog
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      title="角色关联菜单"
      center
      modal
      width="60%"
      :modal-append-to-body="loading"
      @open="handleOpen">
      <el-form ref="formData" size="mini" label-position="right" label-width="110px">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-tree
              :data="data"
              show-checkbox
              default-expand-all
              :default-checked-keys="menukeys"
              node-key="menuid"
              :indent="indent"
              ref="tree"
              highlight-current
              :props="defaultProps">
            </el-tree>
          </el-col>
        </el-row>
        <el-row class="buttonaddclass" :gutter="20">
          <el-col :span="24">
            <el-form-item>
              <el-button size="small" :loading="loading" type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { rolebindmenu } from '@/api/system/sysrole'
import { treeAllList, getMenuListByRoleId } from '@/api/system/sysmenu'
export default {
  name: 'SysRoleMenu',
  components: {
  },
  props: {
    dialogVisible: {
      type: Boolean,
      required: true
    },
    row: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      loading: false,
      menukeys: [],
      keystemp: [],
      indent: 40,
      defaultProps: {
        children: 'childlist',
        label: 'menuname'
      },
      data: []
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
      this.treeAllList()
    },
    treeAllList () {
      treeAllList().then(res => {
        if (res.errcode === 0) {
          this.data = res.data
          this.getMenuListByRoleId()
        }
      })
    },
    getMenuListByRoleId () {
      this.keystemp = []
      this.menukeys = []
      getMenuListByRoleId({ roleid: this.row.id }).then(res => {
        if (res.errcode === 0) {
          console.log(res.data)
          res.data.forEach(e => {
            if (e.childlist.length > 0) {
              e.childlist.forEach(m => {
                this.keystemp.push(m.menuid)
              })
            } else {
              this.keystemp.push(e.menuid)
            }
          })
          this.menukeys = Object.assign([], this.menukeys, this.keystemp)
        }
      })
    },
    onSubmit () {
      console.log(this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys()))
      this.loading = true
      rolebindmenu({ menuids: this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys()), roleid: this.row.id }).then(res => {
        this.loading = false
        if (res.errcode === 0) {
          this.handleClose()
          this.$message({
            showClose: true,
            message: res.errmsg,
            type: 'success'
          })
          this.$store.dispatch('setMenuData')
        } else {
          this.$message({
            showClose: true,
            message: res.errmsg,
            type: 'error'
          })
        }
      })
    }
  }
}
</script>

<style scoped>
  .from-wrapper {
  }
</style>
