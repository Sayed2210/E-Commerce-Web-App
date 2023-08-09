import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//pinia
import { createPinia } from "pinia";

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
  .use(createPinia())
  .use(store)
  .provide("Emitter", Emitter)
  .use(router)
  .mount("#app");
