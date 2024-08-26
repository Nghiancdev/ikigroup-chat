<template>
  <div v-if="isOpen" class="chat-popup">
    <div class="chat-header">
      <h4>Chat</h4>
      <button @click="togglePopup">X</button>
    </div>
    <div class="chat-body">
      <List :customer_id="2002" :full_name="'Nguyễn Chí Nghĩa'"></List>
    </div>
  </div>
  <button v-else class="open-chat-btn" @click="togglePopup">Mở Chat</button>
</template>

<script>
import { List } from "ikigroup-chat";
export default {
  components: {
    List,
  },

  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    togglePopup() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.chat-popup {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  height: 400px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.chat-body {
  padding: 10px;
  height: calc(100% - 40px);
  overflow-y: auto;
}

.open-chat-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
</style>
