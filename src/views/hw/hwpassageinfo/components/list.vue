<template>
  <div class="homeMainContent">
    <div class="iboxTitle">
      货道管理
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
            <!--==================================列表查询===========start===================================== -->
            <el-col :span="18">
              <el-form :inline="true" :model="formInline" class="homeMainRowRightForm">
                <el-form-item>
                  <el-input  size="mini" v-model="formInline.username" placeholder="请输入用户姓名"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button size="mini" type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
                </el-form-item>
              </el-form>
            </el-col>
            <!--==================================列表查询===========end===================================== -->
          </el-row>
          <!--==================================列表头部选择器===========end===================================== -->
          <!-- ============================列表start=================rgba(0, 0, 0, 0.2)==========================-->
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
            :default-sort = "{prop: 'terminalno', order: 'asccending'}"
            style="width: 100%;">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-table
                  :data="props.row.goodslist"
                  style="width: 100%;">
                  <el-table-column
                    label="商品名称"
                    width="150"
                    prop="goodsname">
                  </el-table-column>
                  <el-table-column
                    label="统计"
                    prop="payflag">
                    <template slot-scope="scope">
                      <el-progress
                        :text-inside="true"
                        :stroke-width="18"
                        v-if="parseFloat(scope.row.payflag)>=50"
                        color="green"
                        :percentage="parseFloat(scope.row.payflag)">
                      </el-progress>
                      <el-progress
                        :text-inside="true"
                        :stroke-width="18"
                        v-if="parseFloat(scope.row.payflag)<50&&parseFloat(scope.row.payflag)>=30"
                        color="blue"
                        :percentage="parseFloat(scope.row.payflag)">
                      </el-progress>
                      <el-progress
                        :text-inside="true"
                        :stroke-width="18"
                        v-if="parseFloat(scope.row.payflag)<30"
                        color="red"
                        :percentage="parseFloat(scope.row.payflag)">
                      </el-progress>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-table-column>
            <el-table-column
              type="index"
              width="150"
              label="序号">
            </el-table-column>
            <el-table-column
              sortable
              label="终端号"
              prop="terminalno">
            </el-table-column>
            <el-table-column
              sortable
              label="终端名称"
              prop="tername">
            </el-table-column>
            <el-table-column
              label="终端地址"
              sortable
              prop="address">
            </el-table-column>
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
import { list } from '@/api/hw/hwpassageinfo'
import OrganTreeList from '@/views/system/sysbaseorgan/components/organTreeList'
export default {
  name: 'HwTerminalinfoList',
  components: {
    OrganTreeList
  },
  data () {
    return {
      dialogFormVisible: false,
      menuedit: this.$store.state.menuedit,
      formInline: {
        username: '',
        rows: 10,
        page: 1,
        orderby: 'terminalno',
        asc: 'asccending',
        total: 0,
        organno: '001'
      },
      loading: false,
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
          this.tableData = res.data.tableData
          this.formInline.total = parseInt(res.data.total)
        }
      })
    },
    getOrganno (organno) {
      this.formInline.organno = organno
      this.getList()
    },
    onSubmit () { // 查询提交
      this.getList()
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
