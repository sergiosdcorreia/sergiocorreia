import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/tailwind.css";
import router from "@/router";
import store from "@/store";
import { initializeApp } from "firebase/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPenRuler,
  faRss,
  faInfo,
  faArrowRightToBracket,
  faAngleDoubleLeft,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPenRuler,
  faCamera,
  faRss,
  faInfo,
  faArrowRightToBracket,
  faAngleDoubleLeft
);

const firebaseConfig = {
  apiKey: "AIzaSyAWVG-gl3nPNH15OXMEEFqcbcoaSvi4QRs",
  authDomain: "sergiocorreia-7fcac.firebaseapp.com",
  projectId: "sergiocorreia-7fcac",
  storageBucket: "sergiocorreia-7fcac.appspot.com",
  messagingSenderId: "419005600544",
  appId: "1:419005600544:web:61801469e0dda074793d45",
  measurementId: "G-XQ9BR4TKMC",
};

initializeApp(firebaseConfig);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
