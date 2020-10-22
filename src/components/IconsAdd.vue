<template>
  <ul v-if="isList">
    <li v-for="icon in icons" :key="icon.src">
      <a :href="icon.url">
        <img :src="icon.src" alt="Icon">
      </a>
    </li>
  </ul>

  <div v-else>
    <a :href="url">
      <img :src="src" alt="Icon">
    </a>
  </div>
</template>

<script>
export default {
  name: 'IconsAdd',
  props: {
    isList: Boolean,
    icons: Array,
    url: String,
    src: String
  }
}
</script>


<style scoped>
ul {
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
}

img {
  width: 50px;
  height: 50px;
}
</style>
