<template>
  <div>
    <!--<el-button
      style="font-size: 20px;"
      @click="handleAdd"
      type="text">
      <svg-icon  icon-class="add"/>
    </el-button>-->
    <el-button
      style="font-size: 20px;"
      @click="handleUpdate"
      type="text">
      <svg-icon  icon-class="update"/>
    </el-button>
    <!--<el-button
      :loading="loading"
      style="font-size: 20px;"
      @click="handleDelete"
      type="text">
      <svg-icon  icon-class="delete"/>
    </el-button>-->
    <add-user
      :dialogVisible="dialogFormVisible"
      :readonly="readonly"
      :row="row"
      @closeDialog="closeDialog"
    />
  </div>
</template>

<script>
import AddUser from './add'
export default {
  name: 'tjUserDeptTreeList',
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
    // handleAdd () {
    //   console.log('新增')
    //   this.dialogFormVisible = true
    // },
    handleUpdate () {
      console.log('修改')
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
