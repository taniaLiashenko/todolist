<template>
  <div>
    <button class="md-primary" @click="$emit('add-item')">{{ name }}</button>
  </div>
</template>

<script>
  export default {
    name: 'ButtonAdd',
    data() {
      return {
        name: 'ADD'
      }
    }
  }
</script>