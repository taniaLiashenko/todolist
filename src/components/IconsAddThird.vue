<template>
  <div class="inner">
    <div class="icon-item" v-for="icon in icons" :key="icon.name">
      <svg v-svg
      :symbol="icon.name"
      size="0 0 25 25"
      role="presentation"
      class="icon"
      ></svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconsAddThird',
  props: ['icons']
}
</script>

<style>
.icon-item {
  border: 1px solid grey;
}
</style>