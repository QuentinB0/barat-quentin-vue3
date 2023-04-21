<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';

// const props = defineProps({
//     amiiboSeries: String,
//     character: String,
//     gameSeries: String,
//     image: String,
//     name: String,
//     release: {
//         au: String,
//         eu: String,
//         jp: String,
//         na: String
//     },
//     tail: String,
//     type: String
// })

const viewBtn = (id) => {
    router.push({ name: 'detailView', params:{id:id}})}

const router = useRouter()

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
    <!-- Main -->
    <section id="main">
        <div class="container">

            <!-- Content -->
            <article class="box post">

                <header>
                    <h2>Ma Collection</h2>
                    <p>838</p>
                </header>
                <p>
                <table>
                    <tr>
                        <th>Character</th>
                        <th>Game Series</th>
                        <th>Action</th>
                    </tr>
                    <tr v-for="figurines in allFigurines" :key="figurines.tail">
                        <td>{{ figurines.character }}</td>
                        <td>{{ figurines.gameSeries }}</td>
                        <td><button @click="viewBtn"></button></td>
                    </tr>
                </table>
                </p>

            </article>

        </div>
    </section>
</template>
