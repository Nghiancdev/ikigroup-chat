<template>
  <div style="width: 100%;">
    <router-view></router-view>
  </div>
  <!-- <LoginForm></LoginForm> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import { LoginForm } from "ikigroup-chat";
// import "ikigroup-chat/dist/MyLibrary.css";
import axios from "axios";

export default {
  created() {
    let dataSession;
    if (this.$route.query.token) {
      dataSession = this.$route.query.token;
    } else {
      dataSession = this.$cookies.get("session");
    }


    console.log("token====", dataSession);
    if (dataSession) {
      try {
        const config = {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Authorization": dataSession,
          },
        };
        axios
          .get(process.env.VUE_APP_CHAT_URL + "/user/me", config)
          .then((response) => {
            // console.log(response);
            if (response && response.data) {
              localStorage.setItem(
                "user",
                JSON.stringify({
                  ...response.data,
                  ...{ auth_code: dataSession },
                })
              );

              let dataUserObject = response.data;
              let currentPath = this.$route.name;
              if (currentPath === "login") {
                this.$router.push({
                  name: "list",
                  params: { userData: dataUserObject },
                });
              }
            } 
          });
      } catch (error) {
      console.log('error', error);
      }
    }
  },
  methods: {
    moveToHome() {
      this.$router.push({ name: "login" });
      this.$router.go(this.$router.currentRoute);
    },
  },
};


<style>

</style>
