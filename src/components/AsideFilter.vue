<script>
import { store } from './store';

export default {
    data() {
        return {
            store,
        };
    },
}
</script>

<template>
    <aside class="container">
        <!-- categorie -->
        <div 
        class="categories p-3">
            <h4>
                Categorie:
            </h4>
            <div 
            v-for="(category, index) in store.categories" :key="index">
                <button
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
                    <button class="p-1 nation-buttons">
                        {{ nation }}
                    </button>,
                </div>
            </div>
        </div>

        <!-- dropdown per testate giornalistiche -->
        <div class="dropend">
            <button 
                id="agency-dropdown"
                class="dropdown-toggle" 
                type="button"
                data-bs-toggle="dropdown" 
                >
                    scegli
            </button>
            <div 
                class="dropdown-menu"
                aria-labelledby="agency-dropdown"
                >
                <div class="agencies">
                    <div v-for="(nation, index) in store.nations" :key="index" class="single-agency p-1">
                            {{ nation }}
                    </div>
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