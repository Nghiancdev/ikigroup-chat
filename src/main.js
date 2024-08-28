import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueCookies from "vue-cookies";
import { initializeSocket, getAuthCode } from "ikigroup-chat";

// setTimeout(() => {
//   const userString = localStorage.getItem("user");
//   console.log("authCode", JSON.parse(userString).auth_code);
//   initializeSocket(JSON.parse(userString).auth_code);
// }, 500);
const userString = getAuthCode();

if (userString) {
  initializeSocket(userString);
}

// if (authCode) {
//   initializeSocket('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTYzNTYzNDEsImRhdGEiOnsiX2lkIjoiNjZjZGYwOWYyM2M4NDU3MGU4ZTUzODAyIiwia2V5IjoiZThlOTdlOGRmNTIzZTBiYTc2NjJiOWE2ZjhkNmM1MDUiLCJzaWduYXR1cmUiOiJkN2ZkNzEzMmQxZWQ1NmYyZjEzZDc0NTFkOGIxMzE0YyIsInNlc3Npb24iOiI2NmNlYWI3NWVlNDdlZWU0OTA2YzAxZmIifSwiaWF0IjoxNzI0ODIwMzQxfQ.f1m_6AuT70j6HNew75VCEGfBVNY5AEdd0bwMaA3JGCs');
// }

// import VueSocketIO from "vue-socket.io";
// import io from "socket.io-client";
// // import { BootstrapVue } from "bootstrap-vue";
// // import "bootstrap-vue/dist/bootstrap-vue.css";
// let authCode = "";
// try {
//   let userString = localStorage.getItem("user");
//   if (userString) {
//     let userObject = JSON.parse(userString);
//     if (userObject && userObject.auth_code) {
//       authCode = userObject.auth_code;
//     }
//   }
// } catch (error) {
//   console.log("error", error);
// }

// export const SocketInstance = io(process.env.VUE_APP_URL_CHAT_SOCKET, {
//   extraHeaders: {
//     "X-Authorization": authCode,
//   },
// });
// Vue.use(
//   new VueSocketIO({
//     debug: true,
//     connection: SocketInstance,
//   })
// );
Vue.config.productionTip = false;
Vue.use(VueCookies, { expires: "7d" });
// Vue.use(BootstrapVue);
new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
