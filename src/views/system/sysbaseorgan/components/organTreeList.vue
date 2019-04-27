<template>
  <div class="sysuser-div-one">
    <div class="sysuser-one-heading">
      组织机构
    </div>
    <div class="sysuser-one-tree">
      <el-tree
        ref="tree"
        :props="defaultProps"
        :load="loadNode"
        lazy
        highlight-current
        node-key="organno"
        :current-node-key="currentno"
        accordion
        :indent="indent"
        @node-click="handleNodeClick"></el-tree>
    </div>
  </div>
</template>

<script>
import { treeList } from '@/api/system/sysbaseorgan'
export default {
  name: 'SysDeptTreeList',
  components: {
  },
  data () {
    return {
      indent: 20,
      currentno: '001',
      data: [{ fullname: '轻松环品', organno: '001' }],
      defaultProps: {
        label: 'fullname',
        isLeaf: 'leaf'
      }
    }
  },
  created () {
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    loadNode (node, resolve) {
      if (node.level === 0) {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        this.$emit('getOrganno', userInfo.organno)
        return resolve([{ fullname: localStorage.getItem('organname'), organno: userInfo.organno }])
      }
      treeList({ upperno: node.data.organno }).then(res => {
        if (res.errcode === 0) {
          resolve(res.data)
        }
      })
    },
    handleNodeClick (data) {
      this.$emit('getOrganno', data.organno)
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
    z-index: 999;
  }
</style>
