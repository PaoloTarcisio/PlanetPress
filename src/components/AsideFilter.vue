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
    <aside class="pt-1">
        <div class="accordion m-3" id="accordionExample">
            
            <!-- categorie -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Categorie:
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="categories">
                            <button v-for="(category, index) in store.categories" :key="index"
                            @click="changeCategory(category)"
                            class="m-1 btn">
                                {{ category }} 
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- nazioni -->

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Nazioni:
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="nations">
                            <button v-for="(nation, index) in store.nations" :key="index"
                            @click="changeCountry(index)"
                            class="p-1 nation-buttons">
                                {{ nation }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<style lang="scss" scoped>

aside
{
    .accordion
    {
        .accordion-item
        {
            .categories,
            .nations
            {
                display: flex;
                flex-wrap: wrap;
                max-height: 420px;

        
                button
                {
                    border: 1px solid black;
                    border-radius: 30px;
                }
        
                .nation-buttons {
                    
                    background-color: transparent;
                    border: none;

                }
            }

            @media screen and (max-width: 991px) {
                
                #collapseTwo .accordion-body
                {
                    max-height: 200px;
                    overflow: scroll;
                }
            }


            .accordion-button:not(collapsed)
            {
                background-color: white;
            }

            .accordion-button:focus
            {
                box-shadow: none;
                border-bottom: 1px solid lightgray;
            }
            
        }
    }
}
</style>