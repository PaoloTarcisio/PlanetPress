<script>
import axios from "axios";
import SingleArticle from "../components/SingleArticle.vue";
import SearcNews from "../components/SearcNews.vue";

import { store } from "../components/store";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    SingleArticle,
    SearcNews,
  },
  created() {
    //chiamata alle notizie in base a una parola chiave
    // axios
    //   .get("https://newsapi.org/v2/everything", {
    //     params: {
    //       q: "apple",
    //       apiKey: "5943a7d753bc4d7dbddf4446092f5396",
    //       pageSize: 20,
    //       sortBy: "publishedAt",
    //       language: "it",
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response.data.articles);
    //     this.articles = response.data.articles;
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });

    //chiamata alle notizie in base alla nazione
    // axios
    // .get('https://newsapi.org/v2/everything',
    //     {
    //         params: {
    //             q:'toti',
    //             apiKey: '5943a7d753bc4d7dbddf4446092f5396',
    //             pageSize: 20,
    //             sortBy: 'publishedAt',
    //             language: 'it'
    //         }
    //     }
    // )
    // .then((response) => {
    //     console.log(response.data.articles)
    //     this.articles = response.data.articles;
    // })
    // .catch(error => {
    //     console.log(error.message)
    // });
  },
};
</script>

<template>
  <section>
    <div class="container">
      <SearcNews/>
      <div class="row">
        <div v-for="(article, index) in store.searchedByText" :key="index" class="p-3 col-lg-3 col-md-6 col-sm-12">
          <SingleArticle
            :title="article.title"
            :author="article.author"
            :content="article.content"
            :image="article.urlToImage"
            :url="article.url"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>
