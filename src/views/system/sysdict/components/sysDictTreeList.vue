<template>
  <div class="homeMainRowColLeftBody">
    <div class="homeMainRowColLeftHeading">
      字典
    </div>
    <div class="homeMainRowColLeftHeadingTree">
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
      currentId: '69',
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
</style>
