<template>
  <div class="main-content-class">
    <el-row class="sysuser-row">
      <el-col :span="4">
        <!-- ==============todo 1===============-->
        <MenuTreeList
          @getMenuid="getMenuid"
        />
      </el-col>
      <el-col :span="20">
        <div class="sysuser-div-two">
          <div class="sysUserList">
            <el-row>
              <!--==================================列表查询===========start===================================== -->
              <el-col :span="20">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item> <!-- ==============todo 2===============-->
                    <el-input v-model="formInline.menuname" placeholder="请输入菜单名称"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                  </el-form-item>
                </el-form>
              </el-col>
              <!--==================================列表查询===========end===================================== -->
              <!--==================================列表头部选择器===========start===================================== -->
              <el-col class="main-header-right-class" :span="4">
                <el-dropdown
                  :hide-on-click="false"
                  @visible-change="visibleChangeClick"
                >
          <span class="el-dropdown-link">
            <svg-icon icon-class="tablemenu"/>
          </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-checkbox-group v-model="checkList">
                      <el-dropdown-item  v-for="item in tableHeader" :key="item.prop">
                        <el-checkbox :label="item.label"></el-checkbox>
                      </el-dropdown-item>
                    </el-checkbox-group>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
            </el-row>
            <!--==================================列表头部选择器===========end===================================== -->
            <!-- ============================列表start===========================================-->
            <el-table
              v-loading="loading"
              element-loading-text="拼命加载中"
              element-loading-spinner="el-icon-loading"
              element-loading-background="rgba(0, 0, 0, 0.8)"
              border
              fit
              :row-class-name="tableRowClassName"
              ref="singleTable"
              :data="tableData"
              @sort-change="sortChange"
              :default-sort = "{prop: 'menuid', order: 'ascending'}"
              style="width: 100%">
              <!-- ==============todo 3===============-->
              <el-table-column
                class="edit-class"
                width="80"
                fixed="left"
                align="center">
                <template slot="header">
                  操作
                </template>
                <template slot-scope="scope">
                  <!-- ==============todo 4===============-->
                  <SysMenuEdit
                    :row="scope.row"
                  />
                </template>
              </el-table-column>
              <el-table-column
                type="index"
                sortable
                show-overflow-tooltip
                resizable
              />
              <el-table-column
                v-for="header in showTableHeader"
                :key="header.prop"
                :prop="header.prop"
                sortable
                resizable
                show-overflow-tooltip
                :label="header.label"
              />
            </el-table>
            <!-- ============================列表 end===========================================-->
            <!-- ============================分页 start===========================================-->
            <el-pagination
              class="page-class"
              @size-change="pageHandleSizeChange"
              @current-change="pageHandleCurrentChange"
              :current-page="formInline.page"
              :page-size="formInline.rows"
              layout="total, sizes, prev, pager, next, jumper"
              :total="formInline.total">
            </el-pagination>
            <!-- ============================分页 end===========================================-->
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// ==============todo5
import { list } from '@/api/system/sysmenu'
import MenuTreeList from './sysMenuTreeList'
import SysMenuEdit from './edit/sysMenuEdit'
export default {
  name: 'SysDictList',
  components: { // ==============todo6
    MenuTreeList,
    SysMenuEdit
  },
  data () {
    return {
      checkList: [],
      formInline: { // ==============todo7
        menuname: '',
        rows: 10,
        page: 1,
        orderby: 'menuid',
        asc: 'ascending',
        total: 0,
        menuid: ''
      },
      loading: false,
      showTableHeader: [{}], // 列表头部实际显示数据
      tableHeader: [], // 列表头部数据 从后台获取
      tableData: [], // 列表数据 从后台获取
      currentRow: null
    }
  },
  created () {
  },
  computed: {
  },
  mounted () {
    // this.getList()
  },
  methods: {
    getList (page) { // 列表获取
      this.loading = true
      if (page) {
        this.formInline.page = page
      } else {
        this.formInline.page = 1
      }
      list(this.formInline).then(res => {
        this.loading = false
        if (res.errcode === 0) {
          this.tableHeader = res.data.tableHeader
          this.tableData = res.data.tableData
          this.formInline.total = parseInt(res.data.total)
          this.handleShowHeader()
        }
      })
    },
    getMenuid (menuid) { // ==============todo8
      console.log(menuid)
      this.formInline.menuid = menuid
      this.getList()
    },
    onSubmit () { // 查询提交
      this.formInline.menuid = '' // ==============todo9
      this.getList()
    },
    handleShowHeader () { // 列表头部显示处理
      let showHeaders = []
      if (this.checkList.length > 0) {
        showHeaders = this.tableHeader.filter(e => this.checkList.indexOf(e.label) >= 0)
      } else {
        showHeaders = this.tableHeader.filter(e => e.isShow)
        showHeaders.forEach(e => {
          this.checkList.push(e.label)
        })
      }
      this.showTableHeader = showHeaders
    },
    visibleChangeClick () { // 列表头部选择器
      this.showTableHeader = this.tableHeader.filter(e => this.checkList.indexOf(e.label) >= 0)
    },
    sortChange ({ column, prop, order }) { // 排序显示
      this.formInline.orderby = prop
      this.formInline.asc = order
      this.getList()
    },
    pageHandleSizeChange (val) { // 分页 每页大小修改
      this.formInline.rows = val
      this.getList()
    },
    pageHandleCurrentChange (val) { // 当前页修改
      this.formInline.page = val
      this.getList(val)
    },
    tableRowClassName ({ row, rowIndex }) { // 列表样式显示
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
  }
}
</script>
<style>
  .sysUserList {
    height: 100%;
    width: 97%;
    padding-left:20px;
    padding-right: 20px;
    margin-bottom: 30px;
  }
  .sysUserList .el-row {
    height: 38px;
    width: 100%;
  }
  .page-class {
    margin-bottom:30px;
  }
</style>
