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
    <section id="main">
        <div class="container" v-for="figurines in allFigurines" :key="figurines.id">
            <div class="row">
                <div class="col-4 col-12-medium">

                    <!-- Sidebar -->
                    <section class="box">
                        <header>
                            <h3>Infos</h3>
                        </header>
                        <p> amiiboSeries: <b>{{ figurines.amiiboSeries }}</b> <br />
                            character: {{ figurines.character }}<br />
                            gameSeries: {{ figurines.gameSeries }}<br />
                            type: {{ figurines.type }}
                        </p>

                    </section>
                    <section class="box">
                        <header>
                            <h3>Dates sorties</h3>
                        </header>

                        <ul class="divided">
                            <li>au: {{ figurines.au }}</li>
                            <li>eu: {{ figurines.eu }}</li>
                            <li>jp: {{ figurines.jp }}</li>
                            <li>na: {{ figurines.na }}</li>
                        </ul>

                    </section>

                </div>
                <div class="col-8 col-12-medium imp-medium">

                    <!-- Content -->
                    <article class="box post">
                        <a href="#" class="featured"><img :src="figurines.image" alt="" /></a>
                        <header>
                            <h2>{{ figurines.character }}</h2>
                            <p>{{ figurines.type }}</p>
                        </header>
                    </article>

                </div>
            </div>
        </div>
    </section>
</template>
    
<style scoped></style>