<template>
  <div>
    <a :href="icon.url">
      <img :src="icon.src">
    </a>
  </div>
</template>

<script>
export default {
  name: 'IconsAddSecond',
  props: ['icon']
}
</script>


<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
