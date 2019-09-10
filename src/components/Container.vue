<template lang="pug">
  .wrapper
    h3.fz Characters
    Characters
    h3.fz Frame Table
    Frame
    h3.fz Play Movie
    Video
    h3.fz Infomation
    Infomation
</template>

<script>
import Characters from '@/components/Characters'
import Frame from '@/components/Frame'
import Infomation from '@/components/Infomation'
import Video from '@/components/Video'

export default {
  components: {
    Characters,
    Infomation,
    Frame,
    Video
  }
}
</script>

<style lang="postcss" scoped>
h3 {
  margin-bottom: 10px;
}
</style>
