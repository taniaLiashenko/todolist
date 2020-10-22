<template>
  <div class="container">
    <icon-base-added></icon-base-added>

    <div class="inner">
      <icons-add :isList="isList" :icons="icons" url="#" src="assets/facebook.svg"></icons-add>
    </div>

    <div class="inner">
      <icons-add-second v-for="icon in icons" :key="icon.src" :icon="icon"></icons-add-second>
    </div>

    <div class="inner">
      <icons-add-third :icons="iconsThird"></icons-add-third>
    </div>

    <div class="inner">
      <icons-add-fourth></icons-add-fourth>
    </div>

    <tool-bar></tool-bar>

    <card :title="title">
      <list-point v-for="item in listPoints" :key="item.value" :item="item">
        <ButtonDelete/>
      </list-point>
    </card>

    <card :title="titleSecond">
      <TextInput/>
    </card>
  </div>
</template>

<script>
import IconBaseAdded from './components/IconBaseAdded.vue'
import IconsAdd from './components/IconsAdd.vue'
import IconsAddSecond from './components/IconsAddSecond.vue'
import IconsAddThird from './components/IconsAddThird.vue'
import IconsAddFourth from './components/IconsAddFourth.vue'
import ButtonDelete from './components/ButtonDelete.vue'
import Card from './components/Card.vue'
import ListPoint from './components/ListPoint.vue'
import TextInput from './components/TextInput.vue'
import ToolBar from './components/ToolBar.vue'

export default {
  name: 'App',
  components: {
    IconBaseAdded,
    IconsAdd,
    IconsAddSecond,
    IconsAddThird,
    IconsAddFourth,
    ButtonDelete,
    Card,
    ListPoint,
    TextInput,
    ToolBar
  },
  data() {
    return {
      isList: true,
      icons: [
        {
          url: "#",
          src: "assets/facebook.svg"
        },
        {
          url: "#",
          src: "assets/instagram.svg"
        },
        {
          url: "#",
          src: "assets/twitter.svg"
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
      ],
      listPoints: [
        {
          value: "car",
          text: "Wash the car"
        },
        {
          value: "dishes",
          text: "Do the dishes"
        },
        {
          value: "dog",
          text: "Walk the dog"
        }
      ],
      title: "Tasks",
      titleSecond: "New Task"
    }
  }
}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

.container
  display: flex
  flex-direction: column
  width: 50%
  margin: 0 auto

.inner
  display: flex
  padding: 10px 0

.icon
  width: 50px
  height: 50px
</style>
