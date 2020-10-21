<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 25 25" :aria-labelledby="iconName">
    <title :id="iconName" lang="en" >{{iconName}} icon</title>
    <g :fill="iconColor"><slot/></g>
  </svg>
</template>

<script>
export default {
  name: 'IconBase',
  props: {
    iconName: {
      type: String
    },
    width: {
      type: [Number, String],
      default: 45
    },
    height: {
      type: [Number, String],
      default: 45
    },
    iconColor: {
      type: String,
      default: 'grey'
    }
  }
}
</script>