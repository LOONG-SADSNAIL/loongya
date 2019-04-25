<template>
  <el-header>
    <TopHeader/>
    <BottomHeader/>
  </el-header>
</template>

<script>

import TopHeader from './topHeader'
import BottomHeader from './bottomHeader'
export default {
  name: 'ModelAside',
  components: {
    TopHeader,
    BottomHeader
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style>
</style>
