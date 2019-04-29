<template>
  <div @mouseenter="mouseenterChangeCollapse"
       @mouseleave="mouseleaveChangeCollapse">
    <el-menu
      :default-active="subMunuIndex"
      class="homeAside"
      background-color="#252a2f"
      text-color="#fff"
      :unique-opened="false"
      active-text-color="#ffd04b"
      :router="true"
      @select="handleSelect"
      :collapse="isCollapse">
      <menu-items v-if="getMenuItem"  :item="getMenuItem"/>
    </el-menu>
  </div>

</template>

<script>
import MenuItems from './menuItems'
export default {
  name: 'BottomAside',
  components: {
    MenuItems
  },
  data () {
    return {
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    },
    getMenuItem () {
      return this.$store.getters.getMenuItem
    },
    subMunuIndex () {
      return this.$store.getters.subMunuIndex
    }
  },
  created () {
    this.$router.push(this.subMunuIndex)
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$store.dispatch('setActiveSubMenuIndex', { 'subMunuIndex': key })
      this.$store.dispatch('setIsCollapse', true)
    },
    mouseenterChangeCollapse () {
      this.$store.dispatch('setIsCollapse', false)
    },
    mouseleaveChangeCollapse () {
      this.$store.dispatch('setIsCollapse', true)
    }
  }
}
</script>

<style>
</style>
