<template>
  <List></List>
</template>

<script>
import { List } from "ikigroup-chat";
import "ikigroup-chat/dist/MyLibrary.css";
export default {
  name: "ListPage",
  components: {
    List,
  },
  created() {
    if (!localStorage.getItem("user")) {
      this.$router.push({
        name: "login",
      });
    }
  },
};
</script>
