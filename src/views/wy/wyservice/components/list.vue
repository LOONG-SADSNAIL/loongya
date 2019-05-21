<template>
  <div class="homeMainContent">
    <div class="iboxTitle">
      家政管理
    </div>
    <el-row class="homeMainRow">
      <el-col class="homeMainRowColLeft" :span="4">
        <OrganTreeList
          @getOrganno="getOrganno"
        />
      </el-col>
      <el-col class="homeMainRowColRight" :span="20">
        <div class="homeMainRowColRightTable">
          <el-row class="homeMainTableSearch">
            <el-col :span="2">
              <el-button v-if="menuedit === '1' || menuedit === '2'" class="buttonaddclass" size="mini" type="primary" @click="handleAdd">新增</el-button>
            </el-col>
            <!--==================================列表查询===========start===================================== -->
            <el-col :span="18">
              <el-form :inline="true" :model="formInline" class="homeMainRowRightForm">
                <el-form-item> <!-- ==============todo 2===============-->
                  <el-input size="mini" v-model="formInline.name" placeholder="请输入服务名称"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button size="mini" type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
                </el-form-item>
              </el-form>
            </el-col>
            <!--==================================列表查询===========end===================================== -->
            <!--==================================列表头部选择器===========start===================================== -->
            <el-col class="homeSearchHeaderChange" :span="2">
              <el-dropdown
                :hide-on-click="false"
                @visible-change="visibleChangeClick">
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
            element-loading-background="rgba(0, 0, 0, 0.2)"
            border
            fit
            :row-class-name="tableRowClassName"
            ref="singleTable"
            :data="tableData"
            @sort-change="sortChange"
            :default-sort = "{prop: 'id', order: 'ascending'}"
            style="width: 100%">
            <!-- ==============todo 3===============-->
            <el-table-column
              class="edit-class"
              width="150"
              fixed="right"
              align="center">
              <template slot="header">
                操作
              </template>
              <template slot-scope="scope">
                <!-- ==============todo 4===============-->
                <WyServiceEdit
                  :row="scope.row"
                  @getList="getList"
                />
              </template>
            </el-table-column>
<!--              <el-table-column-->
<!--                type="index"-->
<!--                sortable-->
<!--                show-overflow-tooltip-->
<!--                resizable-->
<!--              />-->
            <el-table-column
              v-for="header in showTableHeader"
              :key="header.prop"
              :prop="header.prop"
              :width="header.width"
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
    <EditModel
      :dialog-visible="dialogFormVisible"
      @closeDialog="closeDialog"
    />
  </div>
</template>

<script>
// ==============todo5
import { list } from '@/api/wy/wyservice'
import WyServiceEdit from './edit/wyServiceEdit'
import OrganTreeList from '@/views/system/sysbaseorgan/components/organTreeList'
import EditModel from './edit/add'
export default {
  name: 'WyServiceList',
  components: { // ==============todo6
    OrganTreeList,
    WyServiceEdit,
    EditModel
  },
  data () {
    return {
      dialogFormVisible: false,
      menuedit: this.$store.state.menuedit,
      checkList: [],
      formInline: { // ==============todo7
        title: '',
        rows: 10,
        page: 1,
        orderby: 'id',
        asc: 'ascending',
        total: 0,
        organno: localStorage.getItem('organno'),
        id: ''
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
      this.formInline.organno = organno
      this.getList()
    },
    onSubmit () { // 查询提交
      this.formInline.id = '' // ==============todo9
      this.getList()
    },
    handleAdd () {
      console.log('新增')
      this.dialogFormVisible = true
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
    closeDialog () {
      this.dialogFormVisible = false
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
</style>
