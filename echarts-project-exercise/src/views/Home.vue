<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h2>home</h2>
    <button @click="btnClick">echarts</button>
    <button @click="btnClick2">echarts222</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  methods: {
    btnClick() {
      this.$router.push({
        // path: '/echarts',
        name: 'Echarts'
      })
    },
    btnClick2() {
      this.$router.push({
        name: 'Echarts2'
      })
    }
  }
}
</script>
