import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css'; // vuetify style css

Vue.config.productionTip = false
Vue.use(Vuetify);

new Vue({
  render: (h) => h(App),
  vuetify: new Vuetify(), // to access $vuetify inside your Vue components
}).$mount("#app");
