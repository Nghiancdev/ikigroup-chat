<template>
  <div class="login-container">
    <h2>Login</h2>
    <Login></Login>
    <ChatPopup v-if="showChatPopup"></ChatPopup>
    <SyncUser :customer_id="'shipper6'" :user_role="'shipper'"></SyncUser>
  </div>
</template>

<script>
import {
  Login,
  ChatPopup,
  SyncUser,
  initializeSocket,
  getAuthCode,
} from "ikigroup-chat";
export default {
  name: "LoginPage",
  components: {
    Login,
    ChatPopup,
    SyncUser,
  },
  data() {
    return {
      showChatPopup: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showChatPopup = true;
      const userString = getAuthCode();

      if (userString) {
        initializeSocket(userString);
      }
    }, 1000);
  },
};
</script>

<style scoped>
.login-container {
  position: relative;
  /* Thêm các style khác cho màn hình đăng nhập */
}
</style>
