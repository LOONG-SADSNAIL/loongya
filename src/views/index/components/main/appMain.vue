<template>
  <section class="homeMain">
    <div class="homeMainBody" :class="{ sidebarwidth: !isCollapse}">
      <el-breadcrumb class="homeHeaderBreadcrumb" :class="{ sidebarwidth: !isCollapse}" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item  v-for="item in paths" :key="item.path" :to="{ path: item.path }">
            <label :data="item.path" @click="breadcrumbClick($event.currentTarget)">
              {{item.title}}
            </label>
          </el-breadcrumb-item>

      </el-breadcrumb>
      <div class="homeSectionMain">
        <transition name="fade-transform" mode="out-in">
          <div class="homeMainview">
            <router-view/>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'AppMain',
  components: {
  },
  data () {
    return {
      paths: this.$store.state.paths
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    }
  },
  methods: {
    breadcrumbClick (node) {
      const currentPath = node.attributes.data.nodeValue
      this.$store.dispatch('setActiveSubMenuIndex', { subMunuIndex: currentPath })
      const index = this.paths.findIndex(e => e.path === currentPath)
      this.$store.dispatch('setPathLength', index + 1)
    }
  }
}

</script>
<style>
  .sidebarwidth {
    padding-left: 120px;
  }
</style>
