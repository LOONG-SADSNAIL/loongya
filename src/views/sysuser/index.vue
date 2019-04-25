<template>
  <div class="sysuser" v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)" >
    <el-container>
      <div class="main-header-class">
        <div class="ibox-title">
          <h5>用户管理</h5>
        </div>
        <div class="main-content-class">
          <el-row class="sysuser-row">
            <el-col :span="4">
              <div class="sysuser-div-one">
                <div class="sysuser-one-heading">
                  组织机构
                </div>
                <div class="sysuser-one-tree">
                  <el-tree :data="data"
                           :props="defaultProps"
                           default-expand-all
                           highlight-current
                           node-key="id"
                           :current-node-key="currentId"
                           accordion
                           :indent="indent"
                           @node-click="handleNodeClick"></el-tree>
                </div>
              </div>
            </el-col>
            <el-col :span="20">
              <div class="sysuser-div-two">
                <list/>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
import list from './components/list'
export default {
  name: 'Sysuser',
  components: {
    list
  },
  data () {
    return {
      loading: false,
      indent: 30,
      currentId: 0,
      data: [{
        id: -1,
        name: '顶级',
        children: [{
          id: 0,
          name: '总公司',
          children: [{
            id: 1,
            name: '产品研发部'
          }, {
            id: 2,
            name: '运营部'
          }, {
            id: 3,
            name: '市场部'
          }, {
            id: 4,
            name: '综合管理部'
          }, {
            id: 5,
            name: '人事部'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>
<style>
  .sysuser ,.sysuser .main-header-class {
    height: 100%;
    width:100%;
  }
  .sysuser .main-content-class {
    height: 95%;
    width:100%;
    background-color: #ffffff;
    color: inherit;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px 0px;
  }
  .sysuser .main-header-class> span{
    text-aligin: left !important;
  }
  .sysuser .main-content-class {
  }
  .ibox-title h5 {
    height: 3%;
    width: 100%;
    display: inline-block;
    font-size: 14px;
    padding: 0;
    text-overflow: ellipsis;
    float: left;
  }
  .ibox-title {
    background-color: #ffffff;
    border-color: #e7eaec;
    border-style: solid solid none;
    border-width: 4px 0px 0;
    padding: 6px 16px;
    min-height: 19px;
  }
  .sysuser .sysuser-row {
    width: 100%;
    height: 99%;
    pading:20px;
    position: relative;
  }
  .sysuser .sysuser-row  .sysuser-div-two {
      height: 100%;
      width: 100%;
  }
  .sysuser .sysuser-row .sysuser-div-one{
    min-height: 200px;
    width:100%;
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
  }
  .sysuser .sysuser-row .sysuser-one-heading{
    color: #333;
    background-color: #f5f5f5;
    border-color: #ddd;
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
  }

  .sysuser .sysuser-row .sysuser-one-tree{
    font-size: 13px;
    padding: 10px;
    z-index: 999999;
  }

</style>
