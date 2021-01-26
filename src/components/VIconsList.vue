<template>
  <ul class="icons-list">
    <li v-for="icon in icons" :key="icon.name">
      <v-icon
        :icon-name="icon.name" 
        :width="icon.width" 
        :height="icon.height" 
        :icon-color="icon.color">
        <component :is="icon.source"></component>
      </v-icon>
    </li>
  </ul>
</template>

<script>
import VIcon from './VIcon.vue'

export default {
  name: 'VIconsList',
  components: {
    VIcon
  },
  props: {
    icons: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped lang="sass">
  .icons-list
    display: flex
    align-items: center
    list-style: none
</style>