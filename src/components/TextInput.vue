<template>
  <div class="add-point">
    <md-field md-inline>
      <md-input></md-input>
    </md-field>
    <md-button class="md-primary">ADD</md-button>
  </div>
</template>

<style lang="sass">
.add-point
  display: flex
  flex-direction: column
  align-items: flex-end

  .md-input
    width: 100%
    margin-bottom: 15px
</style>

<script>
  export default {
    name: 'TextInput'
  }
</script>