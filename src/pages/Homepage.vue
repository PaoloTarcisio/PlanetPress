<script>
import axios from "axios";
import SingleArticle from "../components/SingleArticle.vue";
import SearchNews from "../components/SearchNews.vue";
import AsideFilter from "../components/AsideFilter.vue";

import { store } from "../components/store";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    SingleArticle,
    SearchNews,
    AsideFilter,
  },
};
</script>

<template>
  <section class="">

    
    <SearchNews/>
    <div class="homepage">

      <div class="row m-0">
        
        <div class="col-lg-3 col-md-12 col-sm-12 aside">
          <AsideFilter/>
        </div>
        
        <div class="col-lg-9 col-md-12 col-sm-12 main-content">
          
          <div class="container">
            <div class="row">
  
              <!-- stampo gli articoli prendendoli da searchedByText nello store -->
              <div v-for="(article, index) in store.searchedByText" :key="index" class="p-3 col-lg-4 col-md-6 col-sm-12">
                <SingleArticle
                  :title="article.title"
                  :author="article.author"
                  :date="article.publishedAt"
                  :content="article.description"
                  :image="article.urlToImage"
                  :url="article.url"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>

section
{
  .homepage
  {
  
    .aside,
    .main-content
    {
      border: 1px solid black;
    }
    
    .main-content
    {
      height: calc(100vh - 220px);
      overflow: scroll;
    }

    .aside
    {
    background-color: white;
    }
  }
}
</style>
