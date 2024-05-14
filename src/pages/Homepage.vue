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
              <div v-for="(article, index) in store.searchedByText" :key="index" class="p-3 col-lg-6 col-md-6 col-sm-12">
                <SingleArticle
                  :title="article.title"
                  :author="article.author"
                  :date="article.publishedAt"
                  :content="article.content"
                  :image="article.urlToImage"
                  :url="article.url"
                />
              </div>
            
              <div class="row">
                <div v-for="i in 18"class="p-3 col-lg-4 col-md-6 col-sm-12">
                  <!-- <SingleArticle
                    :title="'Titolo'"
                    :author="'autore'"
                    :content="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facilis recusandae id, dolorum consectetur aliquid temporibus ducimus sit sunt, ab, ad perferendis! Deleniti iusto repellendus sapiente minus sequi modi velit. Consectetur facilis atque corporis alias facere aperiam possimus aspernatur repudiandae itaque, quia qui recusandae provident incidunt tempora id! Ad animi sint molestias nostrum voluptatum vitae expedita est. Iusto, non quis. Fugiat, ratione inventore officiis fuga, maiores ullam quidem deserunt commodi nemo, velit dignissimos in repellendus deleniti necessitatibus ex dolores at quos praesentium error consectetur quisquam perspiciatis qui? Repellendus, nobis pariatur. Cum omnis aperiam quibusdam culpa, exercitationem placeat explicabo necessitatibus, corrupti in quasi corporis repellendus quia expedita quam eligendi maxime sint sit quidem atque. Magni necessitatibus laborum eos sit deserunt expedita. Sed iure dolore enim pariatur accusamus quisquam eveniet quasi deleniti, distinctio optio, iusto velit? Totam ipsam quasi tenetur culpa magnam modi magni eos pariatur cumque esse. Architecto quidem totam exercitationem. Quidem quod eius veritatis non, reiciendis animi veniam ab explicabo impedit nobis rerum eaque quas saepe. Voluptatum deserunt aut laboriosam voluptatem! Blanditiis nisi soluta corporis quasi maxime eaque, dolor sit. Veritatis nam dolor laborum voluptate quaerat id possimus quis enim, quas ipsum excepturi dicta? Incidunt tempore necessitatibus, ex alias cum culpa quam unde quo voluptate beatae itaque libero quibusdam veritatis. Eum animi consequatur dolore excepturi? Voluptatibus sit facilis id repudiandae. Alias magni, aspernatur laudantium optio ullam veniam quis magnam a vero error, illum quam cum. Magni repellendus obcaecati culpa fugit. Sapiente, voluptate dolor? Corporis, vitae temporibus? Expedita, facilis rerum. Nihil molestias sunt consectetur, natus doloribus odit doloremque numquam adipisci corrupti reiciendis ipsam amet repudiandae vitae dolore totam cum similique! Natus! Quo doloremque accusamus ullam, sit earum qui facere aperiam laudantium voluptatem consectetur, odio nemo non cumque libero totam inventore. Soluta saepe cupiditate totam, eveniet atque adipisci deserunt error beatae iure!'"
                    :image="'https://images.unsplash.com/photo-1715247065272-bd0801904a90?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
                    :url="''"
                    
                  /> -->
                </div>
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
