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
</style>
