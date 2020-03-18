<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      res: {}
    }
  },
  mounted () {
    this.axios.get('/mock/user/login.json').then((result) => {
      this.res = result
    });
  },
}
</script>

<style>
</style>
