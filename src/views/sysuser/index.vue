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
              <DeptTreeList/>
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
import DeptTreeList from './components/deptTreeList'
export default {
  name: 'Sysuser',
  components: {
    list,
    DeptTreeList
  },
  data () {
    return {
      loading: false
    }
  },
  created () {
  },
  computed: {
  },
  methods: {

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
</style>
