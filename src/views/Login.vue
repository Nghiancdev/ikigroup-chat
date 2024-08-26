<template>
  <div class="login-container">
    <h2>Login</h2>
    <!-- Form đăng nhập hoặc nội dung khác -->
    <Login></Login>
    <!-- Thêm ChatPopup -->
    <!-- <ChatPopup /> -->
  </div>
</template>

<script>
// import { LoginForm } from "ikigroup-chat";
import { Login } from "ikigroup-chat";
// import ChatPopup from "../components/ChatPopup";

export default {
  name: "LoginPage",
  components: {
    Login,
    // ChatPopup,
  },

  methods: {
    moveToHome() {
      this.$router.push({ name: "login" });
      this.$router.go(this.$router.currentRoute);
    },
  },
};
</script>
<style scoped>
.login-container {
  position: relative;
  /* Thêm các style khác cho màn hình đăng nhập */
}
</style>
