<template>
  <div>
    <md-card>
      <md-card-header>
        <h2 class="md-title" :title="title">{{ title }}</h2>
      </md-card-header>
      <slot></slot>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'VCardItem',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
  .md-card
    display: flex
    flex-direction: column
    justify-content: center
    width: 100%
    margin-bottom: 20px
    padding: 15px 25px

  .md-card-header
    padding: 10px 0
</style>
