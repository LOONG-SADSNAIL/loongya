<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <div class="app-main-div-class">
        <router-view/>
      </div>
    </transition>
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
  .app-main {
    height: 87%;
    background-color: #f3f3f4;
    padding: 9px;
    z-index: 1;
  }
  .app-main-div-class {
    height: 100%;
    background-color: #ffffff;;
  }
</style>
