<template>
  <div id="chat ">
    <!--Sección de Chat-->
    <div class="message-body mt-3 contenedor">
      <div class="scroll">
      <div class="card-body " >
        <div
          class="pl-2 pt-1 ml-2 mb-2 "
          v-for="(message, index) in messages"
          :key="index"
          :class="['message', sentOrReceived(message.username)]"
        >
          <div  >
            <p class="mg-text usuario">{{ message.username }}</p>
            <div class="msg" >
              
              <p class="message pt -1">{{ message.message }}</p>
            </div>
            <p class="message hora">{{ message.datetime }}</p>
          </div>
        </div>
      </div>
      </div>
      <input
        v-model="showMessage"
        type="text"
        placeholder="Escriba su mensaje aquí..."
        class="mt-3 mr-2 pl-2  pr-2"
      />
      <button class="btn2" @click="sendMessage">
        <b-icon-arrow-right-circle-fill size="sm" id="icon2" />
      </button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Chat",
  data() {
    return {
      name: "",
      showMessage: "",
      messages: [],
      datetime: null,
    };
  },
  methods: {
    sendMessage() {
      //Configuración de fecha y hora
      const today = new Date();
      //const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
      const time =
        today.getHours() +
        ":" +
        (today.getMinutes() < 10 ? "0" : "") +
        today.getMinutes();
      const dateTime = time;
      this.timestamp = time;

      this.datetime = dateTime;

      //Push de objeto mesaje
      const message = {
        message: this.showMessage,
        username: this.name,
        datetime: this.datetime,
      };
      console.log(message);

      firebase.database().ref("BDChat").push(message);

      this.showMessage = "";
    },
    sentOrReceived(userUID) {
      return userUID === this.name ? 'sent' : 'received'
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
            message: data[key].message,
            datetime: data[key].datetime,
          });
        });
        this.messages = messages;
      });
  },
};
</script>
<style lang="scss">

</style>