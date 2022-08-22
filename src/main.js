import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/tailwind.css";
import "@/assets/global.css";
import router from "@/router";
import store from "@/store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPenRuler,
  faRss,
  faInfo,
  faArrowRightToBracket,
  faAngleDoubleLeft,
  faCamera,
  faPenToSquare,
  faArrowRightFromBracket,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPenRuler,
  faCamera,
  faRss,
  faInfo,
  faArrowRightToBracket,
  faAngleDoubleLeft,
  faPenToSquare,
  faArrowRightFromBracket,
  faLocationDot
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
