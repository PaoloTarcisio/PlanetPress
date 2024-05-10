<script>
import axios from 'axios';

export default {
    data() {
        return {
            articles:[],
        };
    },
    created() {
        axios
            .get('https://newsapi.org/v2/everything', 
                {
                    params: {
                        q:'toti',
                        apiKey: '5943a7d753bc4d7dbddf4446092f5396',
                        pageSize: 20,
                        sortBy: 'publishedAt',
                        language: 'it'
                    }
                }
            )
            .then((response) => {
                console.log(response.data.articles)
                this.articles = response.data.articles;
            });
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div v-for="(article, index) in this.articles" :key="index" class="my-card m-3 p-3">
                <div>
                    <h3>
                        {{ article.title }}
                    </h3>
                </div>
                <hr>
                <div>
                    <h6>
                        {{ article.author }}
                    </h6>
                </div>
                <hr>
                <div>
                    {{ article.content }}
                </div>
                <hr>
                <div>
                    <a :href="article.url">Vai all'articolo</a>
                    {{  }}
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .my-card
    {
        border: 3px solid black;
    }
</style>
