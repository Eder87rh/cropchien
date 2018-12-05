<template>
    <v-container grid-list-xs>
        <v-layout row wrap>
            <v-flex  v-for="(dog, index) in dogs" :key="dog.id" xs12 md6 xl3 pa-2>
                <v-card @click="$router.push({name: 'details', params:{ id:dog.id, dogProp:dogs[index] }})">
                    <v-img
                    height="170"
                    :src="dog.url"
                    aspect-ratio="2.75"
                    ></v-img>
                    <v-card-title primary-title style="padding-top:13px">
                        <div>
                            <h3 class="headline">{{ dog.comment }}</h3>
                            <div> {{ dog.info }}</div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <v-btn @click="$router.push({ name: 'post'})"  color="red" dark fixed bottom right fab>
            <v-icon>add</v-icon>
        </v-btn>
    </v-container>
</template>

<script>
import firebase from '../configFirebase.js'

export default {
    data(){
        return{
            dogs:[]
        }
    },
    mounted(){
    firebase.db.collection('dogs').orderBy('created_at').onSnapshot((snapShot) => {
            this.dogs=[];
            snapShot.forEach((dog)  => {
                this.dogs.push({
                    id:dog.id,
                    url:dog.data().url,
                    comment:dog.data().comment,
                    info:dog.data().info
                })
            });
        });
    }
}
</script>