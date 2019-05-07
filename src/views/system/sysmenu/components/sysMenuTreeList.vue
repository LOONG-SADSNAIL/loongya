<template>
  <div class="homeMainRowColLeftBody">
    <div class="homeMainRowColLeftHeading">
      菜单
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
import { treeList } from '@/api/system/sysmenu'
export default {
  name: 'SysMenuTreeList',
  components: {
  },
  data () {
    return {
      indent: 20,
      currentId: 'M01',
      data: [{ name: '顶级', id: 'M' }],
      defaultProps: {
        label: 'menuname',
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
        this.$emit('getMenuid', 'M')
        return resolve([{ menuname: '顶级', menuid: 'M' }])
      }
      treeList({ menuid: node.data.menuid }).then(res => {
        if (res.errcode === 0) {
          resolve(res.data)
        }
      })
    },
    handleNodeClick (data) {
      this.$emit('getMenuid', data.menuid)
    }
  }
}
</script>
<style>
</style>
