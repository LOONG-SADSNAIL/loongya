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
                  <el-input  size="mini" v-model="formInline.terminalno" placeholder="请输入终端号"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input  size="mini" v-model="formInline.tername" placeholder="请输入终端名称"></el-input>
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
          <table class="passagetableclass"
                 v-loading="loading"
                 element-loading-text="拼命加载中"
                 element-loading-spinner="el-icon-loading"
                 element-loading-background="rgba(0, 0, 0, 0.2)">
            <thead class="passagetableclasshead">
            <th style="width:12%">序号</th>
            <th style="width:22%">终端号</th>
            <th style="width:22%">终端名称</th>
            <th style="width:22%">终端地址</th>
            <th style="width:22%">操作</th>
            </thead>
            <tbody class="passagetableclassbody">
            <tr v-for="(item, index) in tableData" :key="item.terminalno">
              <td colspan="5" class="passagetableclassbodytd" :class="index%2===0?'colorone':'colortwo'">
                <table class="passagetableclass">
                  <tr class="passagetableclassbodyChild">
                    <td style="width:12%">{{ index+1 }}</td>
                    <td style="width:22%">{{item.terminalno}}</td>
                    <td style="width:22%">{{item.tername}}</td>
                    <td style="width:22%">{{item.address}}</td>
                    <td style="width:22%">查看详情</td>
                  </tr>
                  <tr  class="goodslistclass">
                    <td style="width:12%;border-left: 1px solid #EBEEF5;border-right: 1px solid #EBEEF5;">商品统计</td>
                    <td colspan="4" style="text-align: left;width: 88%">
                      <div style="width:25%" class="divgoodslistclass" v-for="child in item.goodslist" :key="child.goodsname" >
                        {{child.goodsname}}:
                        <div>
                          <el-progress :text-inside="true" :stroke-width="18" v-if="parseInt(child.payflag) >= 50" :percentage="parseInt(child.payflag)" color="green"></el-progress>
                          <el-progress :text-inside="true" :stroke-width="18" v-if="parseInt(child.payflag) >= 20 && parseInt(child.payflag) < 50" :percentage="parseInt(child.payflag)" color="#c75d03"></el-progress>
                          <el-progress :text-inside="true" :stroke-width="18" v-if="parseInt(child.payflag) < 20 && parseInt(child.payflag) > 0" :percentage="parseInt(child.payflag)" color="red"></el-progress>
                          <el-progress :text-inside="true" :stroke-width="18" v-if="parseInt(child.payflag) == 0" :percentage="0" color="red"></el-progress>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            </tbody>
          </table>
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
        terminalno: '',
        tername: '',
        rows: 100,
        page: 1,
        orderby: 'passageno',
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
  table{ border-collapse: collapse;}
  .passagetableclass {
    width:100%;
  }
  .passagetableclasshead {
    width:100%;
  }
  .passagetableclasshead th {
    height: 43px;
    margin:0px;
    border: 1px solid #EBEEF5
  }
  .passagetableclassbodyChild {
    text-align:center;
    width:100%;
    height:50px;
  }
  .passagetableclassbodyChild td{
    border-left: 1px solid #ded6d6;
    border-bottom:  1px solid #EBEEF5

  }
  .passagetableclassbody{
    text-align:center;
  }
  .passagetableclassbody>tr{
    height: 87px;
    width:100%;
  }
  .passagetableclassbodytd {
    border-bottom: 1px solid #EBEEF5
  }
  .goodslistclass {
    width:100%;
  }
  .divgoodslistclass{
    float: left;
    padding-left: 20px;
    padding-right: 20px;
  }
   .divgoodslistclass .el-progress-bar__outer{
    border-radius: 0px ;
  }
   .divgoodslistclass .el-progress-bar__inner{
    border-radius: 0px ;
  }
  .el-progress-bar__outer {
    background-color: #d0d0de !important;
  }
  .colorone {
    background-color: #fdf5e6;
  }
  .colorTwo {
    background-color: #409EFF;
  }
</style>
