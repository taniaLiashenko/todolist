<template>
  <li class="list-point">
    <label :class="{'is-done': selected}">
      <input type="checkbox" @input="select">{{ item.text }}
    </label>
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: 'VListPoint',
    props: ['item'],
    data: () => {
      return {
        selected: false
      }
    },
    methods: {
      select() {
        this.selected = !this.selected
      }
    }
  }
</script>

<style lang="sass" scoped>
  .list-point
    display: flex
    align-items: center
    justify-content: space-between

    label,
    input
      display: flex

      &:hover
        cursor: pointer

  .is-done
    text-decoration: line-through
</style>