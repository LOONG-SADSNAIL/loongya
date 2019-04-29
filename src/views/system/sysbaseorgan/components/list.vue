<template>
  <div class="homeMainContent">
    <div class="iboxTitle">
      <h5>机构管理</h5>
    </div>
    <el-row class="homeMainRow">
      <el-col class="homeMainRowColLeft" :span="4">
        <OrganTreeList
          @getOrganno="getOrganno"
        />
      </el-col>
      <el-col class="homeMainRowColRight" :span="20">
        <div class="homeMainRowColRightTable">
          <el-row>
            <!--==================================列表查询===========start===================================== -->
            <el-col :span="20">
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item>
                  <el-input v-model="formInline.fullname" placeholder="请输入机构名称"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
              </el-form>
            </el-col>
            <!--==================================列表查询===========end===================================== -->
            <!--==================================列表头部选择器===========start===================================== -->
            <el-col class="homeSearchHeaderChange" :span="4">
              <el-dropdown
                :hide-on-click="false"
                @visible-change="visibleChangeClick"
              >
        <span class="homeSearchHeaderChangeSvg">
          <svg-icon icon-class="tablemenu"/>
        </span>
                <el-dropdown-menu class="homeMainRightMenuChange" slot="dropdown">
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
            class="homeMainRightTable"
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
            :default-sort = "{prop: 'createTime', order: 'descending'}"
            style="width: 100%">
            <el-table-column
              class="edit-class"
              width="80"
              fixed="left"
              align="center">
              <template slot="header">
                操作
              </template>
              <template slot-scope="scope">
                <SysBaseOrganEdit
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { list } from '@/api/system/sysbaseorgan'
import OrganTreeList from './organTreeList'
import SysBaseOrganEdit from './edit/sysBaseOrganEdit'
export default {
  name: 'SysUserList',
  components: {
    OrganTreeList,
    SysBaseOrganEdit
  },
  data () {
    return {
      checkList: [],
      formInline: {
        fullname: '',
        rows: 10,
        page: 1,
        orderby: 'organno',
        asc: 'ascending',
        total: 0,
        userorganno: localStorage.getItem('organno'),
        upperno: '001'
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
    getOrganno (organno) {
      console.log(organno)
      this.formInline.upperno = organno
      this.getList()
    },
    onSubmit () { // 查询提交
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
