
  
<script setup>
import { ref, provide, reactive, onMounted } from "vue";
import { socket } from '../../services/socketio.js';
import { useStore } from 'vuex';

const store = useStore();

let connectedUsers = reactive([]);
socket.on("users", (users) => {
    users.forEach((user) => {
        connectedUsers.push(user);
    });
    provide("userProvider:connectedUsers", connectedUsers);

});
socket.on("user connected", (user) => {
    connectedUsers.push(user);
    provide("userProvider:connectedUsers", connectedUsers);

});

socket.on("user disconnected", (socketId) => {
    for (let i = 0; i < connectedUsers.length; i++) {
        if (connectedUsers[i].socketId === socketId) {
            connectedUsers[i].connected = false;
        }
    }
    provide("userProvider:connectedUsers", connectedUsers);
});

provide("userProvider:connectedUsers", connectedUsers);
</script>

<template>
    <slot :connectedUsers="connectedUsers"></slot>
</template>