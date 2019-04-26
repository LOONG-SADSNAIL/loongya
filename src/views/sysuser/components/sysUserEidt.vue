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
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </el-dropdown>
</template>

<script>
export default {
  name: 'SysDeptTreeList',
  components: {
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
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
</style>
