<template>
  <v-app>
    <v-toolbar app>
      <v-btn 
        icon v-if="$route.name !== 'home'"
        @click="$router.go(-1) "
      >
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title >
        <span>CropChien</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon v-if="$route.name=='post'" @click="$router.push({name:'camera'})">
        <v-icon>camera_alt</v-icon>
      </v-btn>
      <v-btn icon v-if="$route.name=='home'" @click="getMessagingToken">
        <v-icon>notifications_none</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home'
import firebase from '@/configFirebase.js'
import axios from 'axios';

const { messaging } = firebase;

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      //
    }
  },
  mounted() {
    this.listenTokenRefresh();
  },
  methods: {
    getMessagingToken () {
        messaging.getToken().then(async (token) => {
            if (token) {
                    const currentMessageToken = window.localStorage.getItem('messagingToken')
                    console.log('token will be updated', currentMessageToken != token)

                    if(currentMessageToken != token){
                        await this.saveToken(token)
                    }
                } else {
                    console.log('No Instance ID token available. Request permission to generate one.');
                    this.notificationsPermisionRequest();
                }
        }).catch(function(err) {
            console.log('An error occurred while retrieving token. ', err);
        });
    },
    notificationsPermisionRequest () {
        messaging.requestPermission()
        .then(() => {
            this.getMessagingToken();
        })
        .catch((err) => {
            console.log('Unable to get permission to notify.', err);
        }); 
    },
    listenTokenRefresh() {
        const currentMessageToken = window.localStorage.getItem('messagingToken')
        console.log('currentMessageToken', currentMessageToken);
        if(!!currentMessageToken){
            messaging.onTokenRefresh(function() {
                messaging.getToken().then(function(token) {
                    this.saveToken(token);
                }).catch(function(err) {
                    console.log('Unable to retrieve refreshed token ', err);
                });
            });
        }
    },
    saveToken(token) {
        console.log('tokens', token)
        axios.post(`https://us-central1-cropchien.cloudfunctions.net/GeneralSubscription`,{ token })
        .then(response => {
            window.localStorage.setItem('messagingToken',token)
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
    },
  }
}
</script>
