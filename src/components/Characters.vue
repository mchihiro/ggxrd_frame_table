<template lang="pug">
  div
    .grid.gutter-1px
      .grid-item.lh(class='5/12')
        span.fz-- キャラクターを選択：
      .grid-item(class='7/12')
        select.fz---.vam.grid-select.form-select(@change='submitID')
          option(v-show='initFlag',value='--') --
          option(v-for='(character, index) in characters', :key='index', :value='character.id') {{ character.name }}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      initFlag: true
    }
  },
  mounted () {
  },
  computed: {
    ...mapGetters({
      characters: 'getCharacters'
    })
  },
  methods: {
    submitID (event) {
      this.initFlag = false
      this.$store.dispatch('setID', {id: event.target.value})
    }
  }
}
</script>

<style lang="postcss">
.grid {
  margin-bottom : 10px;
  &-select {
    height:2rem;
    padding:0 .5rem;
  }
  &-item.lh {
    line-height: 2;
  }
}
</style>
