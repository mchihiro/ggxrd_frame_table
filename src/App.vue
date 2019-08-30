<template lang="pug">
  #app
    Header
    .index
      .box.box-sink.fz---
        | 格闘ゲーム：GGXrdRev2
        br
        | レスポンシブ対応の簡易フレーム表です
    Container
    Footer
</template>

<script>
import Header from '@/components/Header'
import Container from '@/components/Container'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Container,
    Footer
  }
}
</script>

<style lang="postcss">
@import 'cardinalcss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
hr,h3 {
  margin-bottom: 0;
}
h3 {
  text-align: left;
}
.box {
  padding: .7rem 1.5rem;
}
.index {
  margin-bottom: 10px;
}
</style>
