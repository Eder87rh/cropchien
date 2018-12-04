<template>
    <v-container grid-list-xs>
        <v-layout column>
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
export default {
    props:{
        dog:{
            type:Object,
            required:true
        }
    },
    data(){
        return{

        }
    }
}
</script>

