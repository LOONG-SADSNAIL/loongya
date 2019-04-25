<template>
  <div>
    <el-menu-item
      :class="{ 'item-class': isClass }"
      v-for="menu in item.childlist"
      :key="menu.url"
      :route="menu.url"
      :index="menu.url+''">
        <svg-icon :icon-class="svgUrl"/>&nbsp;&nbsp;
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
  },
  methods: {
  }
}
</script>
<style>
  .item-class {
    height: 40px !important;
    text-align: left !important;
  }
</style>
