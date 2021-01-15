<template>
  <div id="chat">
    <!--Sección de Chat-->
    <div class="message-body mt-3">
      <h3>Chat</h3>
      <h5>Bienvenidos {{ name }}</h5>
      <div class="card">
        <div class="card-body">
          <div
            class="border pl-2 pt-1 ml-2 message-text mb-2"
            v-for="(message, index) in messages"
            :key="index"
          >
            <span class="mg-text">{{ message.username }}</span>
            <span class="message">{{ message.datetime }}</span>
            <p class="message pt -1">{{ message.message }}</p>
          </div>
        </div>
      </div>
      <input v-model="showMessages" type="text" class="mt-3 mr-2 pl-2 pr-2" />
      <button class="btn btn-success" @click="sendMessage">Send</button>
    </div>
    {{ $data }}
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Chat",
  data() {
    return {
      name: '',
      showMessages: '',
      messages: [],
      datetime: null
    };
  },
  methods: {
    sendMessage() {
      //Configuración de fecha y hora
      const today = new Date();
      const date =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      this.datetime = dateTime;
      //Push de objeto mesaje
      const message = {
        message: this.showMessage,
        username: this.name,
        datetime: this.datetime,
      };

      firebase
        .database()
        .ref("BDChat")
        .push(message);

      this.showMessage = '';
    },
  },
  mounted() {
    this.name = firebase.auth().currentUser.email;
    firebase
      .database()
      .ref("BDChat")
      .on("value", (snapshot) => {
        let data = snapshot.val();
        let messages = [];

        Object.keys(data).forEach((key) => {
          messages.push({
            id: key,
            username: data[key].username,
            message: data[key].text,
            datetime: data[key].datetime,
          });
        });
        this.messages = messages;
      });
  },
};
</script>