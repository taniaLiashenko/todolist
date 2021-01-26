<template>
  <div class="text-input">
    <input class="text-input__input" 
      type="text" name="newText" 
      :value="value"
      @input="$emit('input', $event.target.value)"/>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'VTextInput',
    props: ['value'],
    data() {
      return {
      }
    }
  }
</script>

<style lang="sass">
  .text-input
    display: flex
    flex-direction: column
    align-items: flex-end

    &__input
      width: 100%
      margin-bottom: 15px
      border: none
      border-bottom: 1px solid blue

      &:focus
        outline: none
</style>