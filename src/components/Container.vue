<template lang="pug">
  .wrapper
    h3.fz Characters
    Characters
    h3.fz Frame Table
    Frame
    h3.fz Infomation
    Infomation
</template>

<script>
import Characters from '@/components/Characters'
import Frame from '@/components/Frame'
import Infomation from '@/components/Infomation'

export default {
  components: {
    Characters,
    Infomation,
    Frame
  }
}
</script>

<style lang="postcss" scoped>
h3 {
  margin-bottom: 10px;
}
</style>
