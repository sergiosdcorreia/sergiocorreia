import { createStore } from "vuex";

const store = createStore({
  state() {
    return {};
  },
  mutations: {},
  strict: process.env.NODE_ENV !== "production",
});

export default store;
