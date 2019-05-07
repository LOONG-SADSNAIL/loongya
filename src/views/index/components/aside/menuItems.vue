<template>
  <div>
    <el-menu-item
      class="homeSideMenuClass"
      :class="{ 'item-class': isClass }"
      v-for="menu in item.childlist"
      :key="menu.url"
      :route="menu.url"
      @click="clickon"
      :index="menu.url+''">
        <svg-icon class="menuHeaderClass" :icon-class="menu.icon || svgUrl"/>&nbsp;&nbsp;
        <span slot="title">{{menu.menuname}}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'BottomAside',
  components: {
  },
  props: {
    // route配置json
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isClass: true,
      svgUrl: 'genius'
    }
  },
  computed: {
    paths () {
      return this.$store.state.paths
    }
  },
  methods: {
    clickon () {
      const submenu = this.$store.getters.submenu
      console.log(submenu)
      if (this.paths.filter(e => e.title === submenu.menuname).length === 0) {
        this.$store.dispatch('setPath', { path: submenu.url, title: submenu.menuname })
      }
    }
  }
}
</script>
<style>
  .item-class {
    height: 40px !important;
    text-align: left !important;
  }
  .homeSideMenuClass> .menuHeaderClass  {
    font-size: 15px !important;
  }
  .homeSideMenuClass>.el-tooltip {
    padding: 0px 11px !important;
    font-size: 20px;
  }
</style>
