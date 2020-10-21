<template>
  <div class="inner">
    <icon-base iconName="envelope"><icon-envelope/></icon-base>
    <icon-base iconName="moon"><icon-moon/></icon-base>
    <icon-base iconName="write"><icon-write/></icon-base>
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