<template>
  <div class="inner">
    <icon-base icon-name="envelope"><IconEnvelope/></icon-base>
    <icon-base icon-name="moon"><IconMoon/></icon-base>
    <icon-base icon-name="write"><IconWrite/></icon-base>
  </div>
</template>

<script>
import IconBase from './IconBase.vue'
import IconEnvelope from './icons/IconEnvelope.vue'
import IconWrite from './icons/IconWrite.vue'
import IconMoon from './icons/IconMoon.vue'

export default {
  components: {
    IconBase,
    IconEnvelope,
    IconWrite,
    IconMoon
  }
}
</script>