import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/tailwind.css";
import router from "@/router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faAnglesRight,
  faRss,
  faInfo,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";

library.add(faAnglesRight, faRss, faInfo, faAngleDoubleLeft);
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
