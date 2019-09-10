<template lang="pug">
  .table-container
    p.tl.fz--.caution-err(v-show='err') {{ err }}
    table.table.table-border.table-striped.fz---
      caption.caption.tl.fz-(v-show='fullName') {{ fullName }}
      thead
        tr
          th(scope='col', nowrap) 技
          th(scope='col', nowrap) 発生
          th(scope='col', nowrap) 硬直差
          th(scope='col', nowrap) 無敵
      tbody
        tr(v-for='trick in tricks', :key='trick.number')
          td {{ trick.command }}
          td {{ trick.occur }}
          td(:class='"is-" + trick.advantage') {{ trick.rigit }}
          td {{ trick.invincible }}
      tfoot
        tr
          th(scope='col') 技
          th(scope='col') 発生
          th(scope='col') 硬直差
          th(scope='col') 無敵
</template>

<script>
export default {
  computed: {
    fullName () {
      return this.$store.state.fullname
    },
    tricks () {
      return this.$store.state.trick
    },
    err () {
      return this.$store.state.error
    }
  }
}
</script>

<style lang="postcss">
  .table {
    td, th { text-align: left;}
  }
  .caption {
    padding: 0 0 .5rem;
    color: #008080;
  }
  .is {
    &-advantageous {
      color: red;
      font-weight: bold;
    },
    &-unfavorable {
      color:  blue;
    }
  }
  .caution-err {
    color:red;
    font-weight: bold;
    margin-bottom: .5rem;
  }
</style>
