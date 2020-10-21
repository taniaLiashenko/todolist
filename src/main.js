import Vue from 'vue'
import App from './App.vue'
import SvgSprite from 'vue-svg-sprite'
 
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(SvgSprite)

