<template>
  <div class="list-point">
    <md-checkbox v-model="string" :value="item.value">{{ item.text }}</md-checkbox>
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'ListPoint',
    props: ['item'],
    data: () => {
      return {
        string: null
      }
    }
  }
</script>

<style lang="sass" scoped>
  .list-point
    display: flex
    align-items: center
    justify-content: space-between

  .md-checkbox
    display: flex
</style>