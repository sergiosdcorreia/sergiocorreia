<template>
  <div class="form-wrap">
    <form class="reset">
      <h2>Reset Password</h2>
      <p>Forgot your password? Enter your email to reset it</p>
      <div class="inputs">
        <div class="input">
          <input v-model="email" type="email" placeholder="Email" />
        </div>
      </div>
      <button>Reset</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      email: null,
    };
  },
};
</script>
