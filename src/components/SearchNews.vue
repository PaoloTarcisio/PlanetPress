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
                    pageSize: 18,
                    sortBy: "publishedAt",
                    language: "it",
                    },
                })
                .then((response) => {
                    // console.log(response.data.articles);
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
        class="text-center p-3 m-0">
            Cerca le notizie che più ti interessano!
        </h2>
        <form 
        @submit.prevent="SearchInApi()" 
        id="SearchNewsForm"
        >
        <div class="form-content">
            <div class="form-input">
                    <input 
                    v-model="store.searchText" 
                    type="text" 
                    placeholder="Inserisci la parola chiave della notizia che stai cercando"
                    class="m-2 rounded p-1">
            </div>
            <div class="form-button">
                <div>
                    <button
                    class="p-1 m-2 rounded">
                    Cerca
                    </button>
                </div>
            </div>
        </div>
        </form>
    </section>
</template>

<style lang="scss" scoped>
section
{
    height: 140px;
    vertical-align: middle;
    @media screen and (max-width: 991px) {
        section
        {
            height: 180px;
        }
    }

    #SearchNewsForm .row
    {
        margin: 0;

    }
    .form-input
    {
        width: 60%;

        input
        {
            width: 90%;
        }
    }

    .form-button
    {
        width: 10%;

        button
        {
            width: 100%;
        }
    }
    
    @media screen and (max-width: 990px) {
        .form-input,
        .form-button
        {
            margin: 0 auto;
        }
        .form-input
        {
            text-align: center;
        }
    }

    @media screen and (min-width: 991px) {
        .form-content
        {
            display: flex;
            justify-content: center;
            vertical-align: middle;
        }
    }

}
</style>