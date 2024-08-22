// router.js
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import List from "../views/List.vue";
import ChatIframe from "@/views/ChatIframe.vue";
import Chat from "../views/Chat.vue";
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/list",
      name: "list",
      component: List,
    },
    {
      path: "/detail-iframe/:id",
      name: "chats",
      component: ChatIframe,
    },
    {
      path: "/detail/:id",
      name: "chat",
      component: Chat,
    },
  ],
});
