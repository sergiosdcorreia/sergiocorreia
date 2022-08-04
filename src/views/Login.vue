<template>
  <div class="form-wrap">
    <form class="login">
      <p>
        Don't have an account?
        <router-link :to="{ name: 'register' }">Register</router-link>
      </p>
      <h2>Login</h2>
      <div class="inputs">
        <div class="input">
          <input v-model="email" type="email" placeholder="Email" />
        </div>
        <div class="input">
          <input v-model="password" type="password" placeholder="Password" />
        </div>
      </div>
      <router-link :to="{ name: 'forgotpassword' }"
        >Forgot your password?</router-link
      >
      <button @click="loginUser">Sign In</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "LogIn",
  setup() {
    const email = ref("");
    const password = ref("");
    const store = useStore();
    const router = useRouter();

    const loginUser = () => {
      store.commit("LOGIN_USER");
      router.push({ name: "home" });
    };
    return {
      email,
      password,
      loginUser,
    };
  },
};
</script>
