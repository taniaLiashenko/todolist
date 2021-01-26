<template>
  <div class="container" id="app">
    <VToolBar title="To-Do List"/>

    <v-card-item title="Tasks">
      <ul>
        <v-list-point v-for="(item, index) in listPoints" :key="index" :item="item">
          <ButtonDelete @remove-point="removeToDoPoint(item)"/>
        </v-list-point>
      </ul>
    </v-card-item>

    <v-card-item title="New Task">
      <v-text-input v-model="newText">
        <ButtonAdd @add-item="addNewTodo"/>
      </v-text-input>
    </v-card-item>

    <IconsListFirst/>
  </div>
</template>

<script>
import IconsListFirst from './components/IconsListFirst.vue'
import ButtonDelete from './components/ButtonDelete.vue'
import ButtonAdd from './components/ButtonAdd.vue'
import VCardItem from './components/VCardItem.vue'
import VListPoint from './components/VListPoint.vue'
import VTextInput from './components/VTextInput.vue'
import VToolBar from './components/VToolBar.vue'

export default {
  name: 'App',
  components: {
    IconsListFirst,
    ButtonDelete,
    VCardItem,
    VListPoint,
    VTextInput,
    VToolBar,
    ButtonAdd
  },
  data() {
    return {
      listPoints: [
        {
          text: "Приготувати борщ"
        },
        {
          text: "Погодувати кота"
        },
        {
          text: "Сходити на блюз"
        }
      ],
      deletedTodo: null,
      newText: ''
    }
  },
  methods: {
    removeToDoPoint(item) {
      this.deletedTodo = item;
      this.listPoints = this.listPoints.filter(item => item !== this.deletedTodo);
    },
    addNewTodo() {
      if(this.newText.length !== 0) {
        this.listPoints.push({text: this.newText});
        this.newText = '';
      }
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
    padding: 50px 0

  .inner
    display: flex
    justify-content: center
    padding: 10px 0

  ul
    margin: 0
    padding: 0
</style>
