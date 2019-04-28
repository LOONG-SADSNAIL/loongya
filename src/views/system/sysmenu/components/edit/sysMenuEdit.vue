<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <svg-icon icon-class="edit"/>
    </span>
    <el-dropdown-menu class="dropdown-class" slot="dropdown">
      <el-dropdown-item  title="新增">
        <el-button
          style="font-size: 20px;"
          @click="handleAdd"
          type="text">
          <svg-icon  icon-class="add"/>
        </el-button>
      </el-dropdown-item>
      <el-dropdown-item  title="修改">
        <el-button
          style="font-size: 20px;"
          @click="handleUpdate"
          type="text">
          <svg-icon  icon-class="update"/>
        </el-button>
      </el-dropdown-item>
      <el-dropdown-item  title="删除">
        <el-button
          style="font-size: 20px;"
          @click="handleDelete"
          type="text">
          <svg-icon  icon-class="delete"/>
        </el-button>
      </el-dropdown-item>
      <el-dropdown-item  title="修改密码">
        <el-button
          style="font-size: 20px;"
          @click="handleUpdatePassword"
          type="text">
          <svg-icon  icon-class="updatepassword"/>
        </el-button>
      </el-dropdown-item>
    </el-dropdown-menu>
    <AddUser
      :dialog-visible="dialogFormVisible"
      :readonly="readonly"
      @closeDialog="closeDialog"
      :row="row"
    />
  </el-dropdown>
</template>

<script>
import AddUser from './add'
export default {
  name: 'SysMenuEdit',
  components: {
    AddUser
  },
  props: {
    row: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      readonly: false,
      dialogFormVisible: false,
      formLabelWidth: '120px'
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
    },
    handleUpdate () {
      console.log('修改')
    },
    handleDelete () {
      console.log('删除')
    },
    handleUpdatePassword () {
      console.log('修改密码')
    },
    closeDialog () {
      this.dialogFormVisible = false
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
