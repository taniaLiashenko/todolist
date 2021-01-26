<template>
  <div class="inner">
    <v-icons-list :icons="icons"></v-icons-list>
  </div>
</template>

<script>
import VIconsList from './VIconsList.vue'
import IconEnvelope from './icons/IconEnvelope.vue'
import IconWrite from './icons/IconWrite.vue'
import IconMoon from './icons/IconMoon.vue'

export default {
  name: 'IconsListFirst',
  components: {
    VIconsList
  },
  data() {
    return {
      icons: [
        {
          name: 'envelope',
          color: 'red',
          source: IconEnvelope
        },
        {
          name: 'write',
          source: IconWrite
        },
        {
          name: 'moon',
          source: IconMoon
        }
      ]
    }
  }
}
</script>