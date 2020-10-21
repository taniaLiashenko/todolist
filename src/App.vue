<template>
  <div class="container">
    <icon-base-added></icon-base-added>

    <div class="inner">
      <icons-add :isList="isList" :icons="icons"></icons-add>
    </div>

    <div class="inner">
      <icons-add-second v-for="icon in iconsSecond" :key="icon.src" :icon="icon"></icons-add-second>
    </div>

    <div class="inner">
      <icons-add-third :icons="iconsThird"></icons-add-third>
    </div>

    <div class="inner">
      <icons-add-fourth></icons-add-fourth>
    </div>
  </div>
</template>

<script>
import IconBaseAdded from './components/IconBaseAdded.vue'
import IconsAdd from './components/IconsAdd.vue'
import IconsAddSecond from './components/IconsAddSecond.vue'
import IconsAddThird from './components/IconsAddThird.vue'
import IconsAddFourth from './components/IconsAddFourth.vue'

export default {
  name: 'App',
  components: {
    IconBaseAdded,
    IconsAdd,
    IconsAddSecond,
    IconsAddThird,
    IconsAddFourth
  },
  data() {
    return {
      isList: true,
      icons: [
        {
          url: "#",
          src: "./assets/facebook.svg"
        },
        {
          url: "#",
          src: "./assets/instagram.svg"
        },
        {
          url: "#",
          src: "./assets/twitter.svg"
        }
      ],
      iconsSecond: [
        {
          url: "#",
          src: "./assets/facebook.svg"
        },
        {
          url: "#",
          src: "./assets/instagram.svg"
        },
        {
          url: "#",
          src: "./assets/twitter.svg"
        }
      ],
      iconsThird: [
        {
          name: "facebook"
        },
        {
          name: "instagram"
        },
        {
          name: "twitter"
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inner {
  display: flex;
  padding: 10px 0;
}

.icon {
  width: 50px;
  height: 50px;
}
</style>
