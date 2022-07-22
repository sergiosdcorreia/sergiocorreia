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
      <button>Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      email: null,
      password: null,
    };
  },
};
</script>
