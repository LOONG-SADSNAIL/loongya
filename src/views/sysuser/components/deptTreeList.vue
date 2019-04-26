<template>
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
</template>

<script>
import { treeList } from '@/api/system/sysdept'
export default {
  name: 'SysDeptTreeList',
  components: {
  },
  data () {
    return {
      indent: 30,
      currentId: 0,
      data: [],
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
  mounted () {
    this.getTreeList()
  },
  methods: {
    getTreeList () {
      treeList({}).then(res => {
        if (res.errcode === 0) {
          this.data = this.packddata(res.data)
          console.log(this.data)
        }
      })
    },
    packddata (resData) {
      const children = resData
      const zongbuobj = {}
      zongbuobj.children = children
      zongbuobj.id = 1
      zongbuobj.name = '总部'
      const zongbu = []
      zongbu.push(zongbuobj)
      const dingji = {}
      dingji.id = -1
      dingji.name = '顶级'
      dingji.children = zongbu
      const data = []
      data.push(dingji)
      return data
    },
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>
<style>
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
