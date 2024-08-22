<template>
  <Login></Login>
</template>

<script>
// import { LoginForm } from "ikigroup-chat";
import { Login } from "ikigroup-chat";
import axios from "axios";
export default {
  name: "LoginPage",
  components: {
    Login,
  },
  created() {
    // console.log( $cookies, ' $cookies')
    //Get from Cookie
    this.$cookies.set("session", this.$route.query.token);
    let dataSession = this.$cookies.get("session");

    console.log("token====", dataSession);
    // console.log(dataCookie, 'coookiiii');
    // let dataUser = localStorage.getItem("user");
    if (dataSession != "") {
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
        console.log("error", error);
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
</script>
