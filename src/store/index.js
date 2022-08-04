import { createStore } from "vuex";

export const state = () => {
  return {
    isLoggedIn: false,
  };
};

export const mutations = {
  LOGIN_USER(state) {
    state.isLoggedIn = true;
  },
  LOGOUT_USER(state) {
    state.isLoggedIn = false;
  },
};

const store = createStore({
  state,
  mutations,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
