<script>
import axios from 'axios';
import SingleArticle from '../components/SingleArticle.vue';

export default {
    data() {
        return {
            articles:[],
        };
    },
    components: {
        SingleArticle,
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
                <SingleArticle
                    :title="article.title"
                    :author="article.author"
                    :content="article.content"
                    :url="article.url"
                />
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
