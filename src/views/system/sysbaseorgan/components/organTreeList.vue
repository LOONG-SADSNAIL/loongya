<template>
  <div class="homeMainRowColLeftBody">
    <div class="homeMainRowColLeftHeading">
      组织机构
    </div>
    <div class="homeMainRowColLeftHeadingTree">
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
  name: 'SysBaseOrganTreeList',
  components: {
  },
  data () {
    return {
      indent: 20,
      currentno: localStorage.getItem('organno'),
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
        this.$emit('getOrganno', this.currentno)
        return resolve([{ fullname: localStorage.getItem('organname'), organno: this.currentno }])
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
  .el-tree-node__children>div{
    float:left;
  }
  .el-tree-node__content {
    width:150px !important;
    margin-top: 5px;
  }
</style>
