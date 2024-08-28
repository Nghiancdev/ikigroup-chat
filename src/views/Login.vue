<template>
  <div class="login-container">
    <h2>Login</h2>
    <Login></Login>
    <ChatPopup :customer_id="'shipper6'" :user_role="'shipper'"></ChatPopup>
  </div>
</template>

<script>
import { Login, ChatPopup } from "ikigroup-chat";

export default {
  name: "LoginPage",
  components: {
    Login,
    ChatPopup,
  },

  // methods: {
  //   moveToHome() {
  //     this.$router.push({ name: "login" });
  //     this.$router.go(this.$router.currentRoute);
  //   },
  // },
};
</script>
<style scoped>
.login-container {
  position: relative;
  /* Thêm các style khác cho màn hình đăng nhập */
}
</style>
