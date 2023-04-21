<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';

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
        <div class="row" v-for="cards in CardHome" :key="cards.tail">
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
</template>
