<template>
  <div class="form-wrap">
    <form class="login">
      <h2>Login</h2>
      <div class="inputs">
        <div class="input">
          <input v-model="email" type="email" placeholder="Email" />
        </div>
        <div class="input">
          <input v-model="password" type="password" placeholder="Password" />
        </div>
      </div>
      <div>
        <p class="text-red-600">{{ errorMessage }}</p>
      </div>
      <button @click="loginUser">Sign In</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LogIn",
  setup() {
    const auth = getAuth();
    const email = ref("");
    const password = ref("");
    const store = useStore();
    let errorMessage = "";

    const loginUser = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          store.commit("LOGIN_USER");
          errorMessage = "";
        })
        .catch((error) => {
          errorMessage = error.message;
        });
    };
    return {
      email,
      password,
      errorMessage,
      loginUser,
    };
  },
};
</script>
