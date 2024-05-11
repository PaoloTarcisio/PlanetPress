<script>
import axios from 'axios';
import { store } from './store';

export default {
    data() {
        return {
            store,
        };
    },
    methods: {
        // funzione che inserisce la parola scritta dall'utente e invia la chiamata api
        SearchInApi() {

            axios
                .get("https://newsapi.org/v2/everything", {
                    params: {
                    q: store.searchText,
                    apiKey: "5943a7d753bc4d7dbddf4446092f5396",
                    pageSize: 20,
                    sortBy: "publishedAt",
                    language: "it",
                    },
                })
                .then((response) => {
                    console.log(response.data.articles);
                    store.searchedByText=response.data.articles;
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    }
}
</script>

<template>
    <section class="search-form-section">
        <h2
        class="text-center m-3">
            Cerca le notizi che più ti interessano!
        </h2>
        <form 
        @submit.prevent="SearchInApi()" 
        id="SearchNewsForm"
        class="text-center">
            <input 
            v-model="store.searchText" 
            type="text" 
            placeholder="Inserisci la parola chiave della notizia che stai cercando"
            class="w-50 m-3 rounded p-1">
            <button
            id="form-button"
            class="p-1 rounded">
            Cerca
            </button>
        </form>
    </section>
</template>

<style lang="scss" scoped>
.search-form-section{

    #form-button
    {
        background-color: transparent;
    }
    #form-button:hover
    {
        background-color: lightgray;
    }
    
}
</style>