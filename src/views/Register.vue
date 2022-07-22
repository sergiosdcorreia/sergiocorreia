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
      <button>Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterUser",
  data() {
    return {
      firstName: "null",
      lastName: "null",
      userName: "null",
      email: "null",
      password: "null",
    };
  },
};
</script>
