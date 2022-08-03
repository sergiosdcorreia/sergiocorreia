<template>
  <div class="form-wrap">
    <form class="register">
      <p>
        Already have an account?
        <router-link :to="{ name: 'login' }">Login</router-link>
      </p>
      <h2>Create an account</h2>
      <div class="inputs">
        <div class="input">
          <input v-model="firstName" type="text" placeholder="First Name" />
        </div>
        <div class="input">
          <input v-model="lastName" type="text" placeholder="Last Name" />
        </div>
        <div class="input">
          <input v-model="userName" type="text" placeholder="User Name" />
        </div>
        <div class="input">
          <input v-model="email" type="email" placeholder="Email" />
        </div>
        <div class="input">
          <input v-model="password" type="password" placeholder="Password" />
        </div>
      </div>
      <div class="error">
        <p>{{ error }}</p>
      </div>
      <button @click="register">Sign Up</button>
      <button @click="signInWithGoogle">Sign In with Google</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const firstName = ref("");
const lastName = ref("");
const userName = ref("");
const email = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log("Successfully registered!");
      router.push({ name: "blog" });
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
const signInWithGoogle = () => {};
</script>
<script>
export default {
  name: "RegisterUser",
};
</script>
