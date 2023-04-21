<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';
import TheCard from '@/components/TheCard.vue';


const props = defineProps({
    amiiboSeries: String,
    character: String,
    gameSeries: String,
    image: String,
    name: String,
    release: {
        au: String,
        eu: String,
        jp: String,
        na: String
    },
    tail: String,
    type: String
})

const allFigurines = ref([]);

const fetchAllFigurines = async () => {
    const figurines = await axios.get('https://www.amiiboapi.com/api/amiibo/')
    console.log(figurines.data)
    allFigurines.value = figurines.data.amiibo
}
onBeforeMount(async () => {
    await fetchAllFigurines()
})
</script>

<template>
    <!-- Banner -->
    <section id="banner">
        <header>
            <h2>Hey.Bienvenue sur ma collection</h2>
        </header>
    </section>
    <!-- Intro -->
    <!-- ici vous pouvez choisir 3 amiibos au hasard ou juste vos trois préférés -->
    <section id="intro" class="container">
        <div class="row" v-for="figurines in allFigurines" :key="figurines.tail">
            <div class="col-4 col-12-medium">
                <section class="middle">
                    <img :src="figurines.image" />
                    <header>
                        <h2>{{ figurines.character }}</h2>
                    </header>
                    <p>{{ figurines.gameSeries }}</p>
                </section>
            </div>
            <div class="col-4 col-12-medium">
                <section class="middle">
                    <img :src="figurines.image" />
                    <header>
                        <h2>{{ figurines.character }}</h2>
                    </header>
                    <p>{{ figurines.gameSeries }}</p>
                </section>
            </div>
            <div class="col-4 col-12-medium">
                <section class="middle">
                    <img :src="figurines.image" />
                    <header>
                        <h2>{{ figurines.character }}</h2>
                    </header>
                    <p>{{ figurines.gameSeries }}</p>
                </section>
            </div>
        </div>
        //J'ai fais une tentative d'afficher les 3 cartes en créant un component et en l'important dans le template mais je n'ai pas réussi (TheCard.vue)
        <footer>
            <ul class="actions">
                <li><router-link to="/list" class="nav-link">Liste complète</router-link></li>
            </ul>
        </footer>
    </section>
</template>
    
<style scoped></style>