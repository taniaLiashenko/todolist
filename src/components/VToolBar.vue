<template>
  <div>
    <md-toolbar class="md-primary">
      <h1 class="md-title" :title="title">{{ title }}</h1>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  name: 'VToolBar',
  props: {
    title: {
      type: String,
      default: "Title"
    }
  }
}
</script>

<style lang="sass">
.md-toolbar
  margin-bottom: 20px
</style>