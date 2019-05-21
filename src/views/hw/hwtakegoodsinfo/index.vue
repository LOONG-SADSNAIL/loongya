<template>
  <el-container class="homeMainContainer">
    <list/>
  </el-container>
</template>

<script>
import list from './components/list'
export default {
  name: 'HwTakeGoodsInfoIndex',
  components: {
    list
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
</style>
