<script>
import { store } from './store';
import axios from 'axios';

export default {
    data() {
        return {
            store,
            date: "2024-05-01T13:00:00Z",
        };
    },

    methods: {
        
        // funzione che cambia categoria scelta dall'utente  / default = business
        changeCategory(itemCountry) {
            // console.log(itemCountry);
            store.settedCategory = itemCountry;
            this.getValue();
        },
        
        // funzione che cambia nazione scelta dall'utente  / default = it italia
        changeCountry(itemNation) {
            // console.log(itemNation);
            store.settedCountry = itemNation;
            this.getValue();
        },

        // funzione che tramite il click su un tasto esegue la chiamata in base alle categorie
        getValue() {
            
            axios
                .get('https://newsapi.org/v2/top-headlines', {
                    params: {
                        apiKey: '5943a7d753bc4d7dbddf4446092f5396',
                        category: store.settedCategory,
                        country: store.settedCountry,
                    }
                })
                .then((response) => {
                    // console.log(response.data.articles);
                    store.searchedByText = response.data.articles
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    },
    created() {
        this.getValue()

        
    }
}
</script>

<template>
    <aside>
        <!-- categorie -->
        <div 
        class="categories p-3">
            <h4>
                Categorie:
            </h4>
            <div 
            v-for="(category, index) in store.categories" :key="index">
                <button
                @click="changeCategory(category)"
                class="m-1 btn">
                    {{ category }} 
                </button>
            </div>
        </div>

        <!-- nazioni -->
        <div 
        class="p-3">
            <h4>
                Nazioni:
            </h4>
            <div class="nations">
                <div v-for="(nation, index) in store.nations" :key="index" >
                    <button 
                    @click="changeCountry(index)"
                    
                    class="p-1 nation-buttons">
                        {{ nation }}
                    </button>,
                </div>
            </div>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
    .categories,
    .nations
    {
        display: flex;
        flex-wrap: wrap;

        button
        {
            border: 1px solid black;
            border-radius: 30px;
        }

        .nation-buttons {
            background-color: transparent;
            border: none;
            border-radius: none;
        }
    }
    .agencies{
        display: flex;
        flex-wrap: wrap;
    }
</style>