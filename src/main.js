import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueCookies from "vue-cookies";
import VueSocketIO from "vue-socket.io";
import io from "socket.io-client";
// import { BootstrapVue } from "bootstrap-vue";
// import "bootstrap-vue/dist/bootstrap-vue.css";
let authCode = "";
try {
  let userString = localStorage.getItem("user");
  if (userString) {
    let userObject = JSON.parse(userString);
    if (userObject && userObject.auth_code) {
      authCode = userObject.auth_code;
    }
  }
} catch (error) {
  console.log("error", error);
}

export const SocketInstance = io(process.env.VUE_APP_URL_CHAT_SOCKET, {
  extraHeaders: {
    "X-Authorization": authCode,
  },
});
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketInstance,
  })
);
Vue.config.productionTip = false;
Vue.use(VueCookies, { expires: "7d" });
// Vue.use(BootstrapVue);
new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
