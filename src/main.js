import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//pinia
import { createPinia } from "pinia";
const pinia = createPinia();

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
const vuetify = createVuetify({
  components,
  directives,
});

//mitt
import mitt from "mitt";

const Emitter = mitt();

createApp(App)
  .use(vuetify)
  .use(pinia)
  .provide("Emitter", Emitter)
  .use(router)
  .mount("#app");
