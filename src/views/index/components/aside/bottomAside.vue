<template>
    <el-row class="el-aside">
      <el-col :span="24">
        <div class="aside-content">
          <el-menu
            :default-active="subMunuIndex"
            class="el-menu-vertical-demo"
            background-color="#2f4050"
            text-color="#fff"
            :unique-opened="true"
            active-text-color="#ffd04b"
            :router="true"
            @select="handleSelect"
            :collapse="isCollapse">
            <TopAside v-if="!isCollapse"/>
            <TopAsideTwo v-if="isCollapse"/>
            <menu-items v-if="getMenuItem"  :item="getMenuItem"/>
          </el-menu>

        </div>
      </el-col>
    </el-row>
</template>

<script>
import TopAside from './topAside'
import TopAsideTwo from './topAsideTwo'
import MenuItems from './menuItems'
export default {
  name: 'BottomAside',
  components: {
    TopAside,
    TopAsideTwo,
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
      console.log(key)
      this.$store.dispatch('setActiveSubMenuIndex', { 'subMunuIndex': key })
    }
  }
}
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 100%;
    width:180px;
  }
  .el-col {
    height: 100%;
  }
  .aside-content {
    height: 100%;
  }
</style>
