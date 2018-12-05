<template>
    <v-container grid-list-xs>
        <v-layout column v-if="!!dog">
            <v-flex>
                <v-img
                :src="dog.url"
                ></v-img>
            </v-flex>
            <v-flex>
                <h1>{{ dog.comment }}</h1>
                <p class="subtitle">{{ dog.info }}</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import firebase from '../configFirebase.js'
export default {
    props:{
        dogProp:{
            type:Object,
        }
    },
    data(){
        return{
            dog:undefined
        }
    },
    mounted(){
        if(!!this.dogProp){
            this.dog = this.dogProp
        }else{
            const id = this.$route.params.id
            firebase.db.doc(`dogs/${id}`).get()
            .then((doc) => {
                if (doc.exists) {
                    this.dog = doc.data();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
            console.log("Error getting document:", error);
        });
        }
    }
}
</script>

