<template lang="pug">
  footer.footer
    hr
    .grid.grid-align-middle.footer-container
      .grid-item.tl(class='1/2')
        small.fz- &copy; 2019 Gunner
      .grid-item.tr(class='1/2')
        a.tw-icon(target='_blank', @click='createUrl')
          svg(fill='#fff', width='1rem', height='1rem')
            path(d='M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z')
</template>

<script>
export default {
  data () {
    return {
      snsMessage: 'GuiltyGearXrdRev2 レスポンシブ簡易フレーム表',
      siteURL: 'https://ggxrdrev2-frametable.firebaseapp.com/'
    }
  },
  methods: {
    createUrl () {
      const url = `https://twitter.com/intent/tweet?text=${this.snsMessage}&url=${this.siteURL}`
      window.open(url, 'twitter')
    }
  }
}
</script>

<style lang="postcss" scoped>
.footer {
  padding: 10px 0 0;
  margin-top: auto;
  &-container {
    padding: 0 1rem;
  }
}
hr {
  margin-bottom: 10px;
}
.tw-icon {
  background: #55acee;
  padding: 2px 10px;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
}
</style>
