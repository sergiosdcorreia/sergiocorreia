import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/tailwind.css";
import "@/assets/global.css";
import router from "@/router";
import store from "@/store";
import YouTube from "vue3-youtube";
import vueVimeoPlayer from "vue-vimeo-player";
import WorkExperience from "@/components/WorkExperience.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPenRuler,
  faRss,
  faCircleInfo,
  faArrowRightToBracket,
  faAngleDoubleLeft,
  faCamera,
  faPenToSquare,
  faArrowRightFromBracket,
  faLocationDot,
  faPencil,
  faEnvelope,
  faPhone,
  faHome,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPenRuler,
  faCamera,
  faRss,
  faCircleInfo,
  faArrowRightToBracket,
  faAngleDoubleLeft,
  faPenToSquare,
  faArrowRightFromBracket,
  faLocationDot,
  faPencil,
  faEnvelope,
  faPhone,
  faHome,
  faMedal
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("YouTube", YouTube)
  .component("WorkExperience", WorkExperience)
  .use(vueVimeoPlayer)
  .use(store)
  .use(router)
  .mount("#app");
