<template>
    <v-container grid-list-xs>
        <v-layout row wrap>
            <v-flex  v-for="(dog, index) in dogs" :key="dog.id" xs12 md6 xl3 pa-2>
                <v-card @click="$router.push({name: 'details', params:{ id:dog.id, dog:dogs[index] }})">
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
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            dogs:[
                {
                    'id': 0,
                    'url': 'https://images.dog.ceo/breeds/germanshepherd/n02106662_13904.jpg',
                    'comment': 'Dog resting',
                    'info': 'Posted by Eder on Friday'
                },
                {
                    'id': 1,
                    'url': 'https://images.dog.ceo/breeds/setter-gordon/n02101006_4491.jpg',
                    'comment': 'Tongue dog',
                    'info': 'Posted by Naye on Tuesday'
                },
                {
                    'id': 2,
                    'url': 'https://images.dog.ceo/breeds/terrier-australian/n02096294_1429.jpg',
                    'comment': 'Terrier Australian dog',
                    'info': 'Posted by Eder on Monday'
                },
                {
                    'id': 3,
                    'url': 'https://images.dog.ceo/breeds/mexicanhairless/n02113978_1595.jpg',
                    'comment': 'Mexico Xoloitzcuintle',
                    'info': 'Posted by Naye on Monday'
                },
                {
                    'id': 4,
                    'url': 'https://images.dog.ceo/breeds/dachshund/dog-495133_640.jpg',
                    'comment': 'Sad dog',
                    'info': 'Posted by Eder on Monday'
                }
            ]
        }
    }
}
</script>

