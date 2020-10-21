<template>
  <div>
    <md-button class="md-icon-button">
      <Close/>
    </md-button>
  </div>
</template>

<script>
import Close from '../assets/close.svg'

export default {
  name: 'ButtonDelete',
  components: {
    Close
  }
}
</script>

<style lang="sass" scoped>
  .md-icon-button
    svg
      width: 20px
      height: 20px
</style>