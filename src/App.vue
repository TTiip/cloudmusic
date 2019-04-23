<template>
  <div id="app">
    <div>
      <ComHeader></ComHeader>
      <ComTab></ComTab>
    </div>
    <router-view/>
    <Player></Player>
  </div>
</template>

<script>
import ComHeader from 'components/Header'
import ComTab from 'components/Tab'
import Player from 'components/Player'
export default {
  name: 'App',
  components: {
    ComHeader,
    ComTab,
    Player
  }
}
</script>

<style lang="scss"></style>
