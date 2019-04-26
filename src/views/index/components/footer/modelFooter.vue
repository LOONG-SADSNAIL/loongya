<template>
  <el-footer class="footer-class">
      @2019-2020 easylink
  </el-footer>
</template>

<script>

export default {
  name: 'ModelFooter',
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
  .footer-class{
    width: 100%;
    border-top: 1px solid rgb(47, 64, 80) ;
    position:fixed;
    bottom: 0px;
    right: 0px;
    height: 3%!important;
    text-align: right;
    line-height: 30px;
    font-size: 10px;
    background: rgba(249, 243, 255, 0.01);
    z-index:20;
  }
</style>
