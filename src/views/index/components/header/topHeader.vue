<template>
        <div class="header_f">
          <el-button v-on:click="changeCollapse" class="change-class" ><svg-icon v-on:click="changeCollapse" icon-class="menu-top"/></el-button>
        </div>
</template>

<script>

export default {
  name: 'TopHeader',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    }
  },
  methods: {
    changeCollapse () {
      if (this.isCollapse) {
        this.$store.dispatch('setIsCollapse', false)
      } else {
        this.$store.dispatch('setIsCollapse', true)
      }
    }
  }
}
</script>
<style>
  .home .header_f .change-class {
    padding: 0;
    border:none;
    background: none;
    font-size: 33px;
  }
</style>
