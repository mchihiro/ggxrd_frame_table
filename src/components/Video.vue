<template lang="pug">
  .video-container
    youtube(v-if='youtube_id.length > 0',:video-id='youtube_id' :player-vars='playerVars')
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data (value) {
    return {
      playerVars: {
        autoplay: 0,
        'origin': location.protocol + '//' + location.hostname + '/'
      }
    }
  },
  computed: {
    ...mapGetters({
      video: 'getVideos',
      youtube_id: 'getYoutubeId',
      youtube_title: 'getYoutubeTitle'
    }),
    player () {
      return this.$refs.youtube.player
    }
  },
  methods: {
    getYoutube (videoid) {
      this.$store.dispatch('setVideo', {video: videoid})
    },
    async playVideo () {
      await this.player.playVideo()
    }
  },
  watch: {
    video (value) {
      this.getYoutube(value)
    }
  }
}
</script>
<style lang="postcss">
iframe {
  padding-bottom: 10px;
  width: 100%;
  max-width: 640px;
}
</style>
