<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 25 25" :aria-label="iconName">
    <title :id="iconName" lang="en" >{{iconName}} icon</title>
    <g :fill="iconColor">
      <slot></slot>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'VIcon',
  props: {
    iconName: {
      type: String
    },
    width: {
      type: Number,
      default: 45
    },
    height: {
      type: Number,
      default: 45
    },
    iconColor: {
      type: String,
      default: 'grey'
    }
  }
}
</script>