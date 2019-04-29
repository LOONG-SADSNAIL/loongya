<template>
  <section class="homeMain">
    <div class="homeMainBody">
      <el-breadcrumb class="homeHeaderBreadcrumb" separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
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
