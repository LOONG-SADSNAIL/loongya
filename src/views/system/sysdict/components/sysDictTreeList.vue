<template>
  <div class="sysuser-div-one">
    <div class="sysuser-one-heading">
      字典
    </div>
    <div class="sysuser-one-tree">
      <el-tree
        ref="tree"
        :props="defaultProps"
        :load="loadNode"
        lazy
        highlight-current
        node-key="organno"
        :current-node-key="currentId"
        accordion
        :indent="indent"
        @node-click="handleNodeClick"></el-tree>
    </div>
  </div>
</template>

<script>
import { treeList } from '@/api/system/sysdict'
export default {
  name: 'SysDictTreeList',
  components: {
  },
  data () {
    return {
      indent: 20,
      currentId: '0',
      data: [{ name: '顶级', id: '0' }],
      defaultProps: {
        label: 'name',
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
        this.$emit('getPid', 0)
        return resolve([{ name: '顶级', id: 0 }])
      }
      treeList({ pid: node.data.id }).then(res => {
        if (res.errcode === 0) {
          resolve(res.data)
        }
      })
    },
    handleNodeClick (data) {
      this.$emit('getPid', data.id)
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
