<template>
  <List :customer_id="2002" :full_name="'Nguyễn Chí Nghĩa'"></List>
</template>

<script>
import { List } from "ikigroup-chat";
import "ikigroup-chat/dist/MyLibrary.css";
export default {
  name: "ListPage",
  components: {
    List,
  },
};
</script>
