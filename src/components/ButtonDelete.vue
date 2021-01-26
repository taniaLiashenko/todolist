<template>
  <div>
    <button class="button-delete" type="button" @click="removePoint">
      <Close/>
    </button>
  </div>
</template>

<script>
import Close from '../assets/close.svg'

export default {
  name: 'ButtonDelete',
  components: {
    Close
  },
  methods: {
    removePoint() {
      this.$emit('remove-point')
    }
  }
}
</script>

<style lang="sass" scoped>
  .button-delete
    background: transparent
    border: none
    transition: transform 0.25s ease-out

    &:hover
      transform: scale(1.1)
      cursor: pointer

    svg
      width: 20px
      height: 20px
</style>