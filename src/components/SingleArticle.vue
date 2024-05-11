<script>

export default {
    data() {
        return {

        };
    },
    props: {
        title: String,
        author: String,
        content: String,
        image: String,
        url: String,
    }
}
</script>

<template>
    <div class="my-card p-2">
        <div 
        class="article-title p-2">
            <h4>
                {{ title }}
            </h4>
        </div>
        <div
        class="card-img mt-3">

            <img :src="image" alt="">
        </div>
        
        <div 
        v-if="author"
        class="p-2">
            <h6>
                Autore: {{ author }}
            </h6>
        </div>
        
        <div 
        class="card-content">
                {{ content }}
        </div>
        
        <div
        class="text-center p-3">
            <a
            :href="url"
            class="link-to-article p-2">
                Vai all'articolo completo
            </a>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.my-card {
    background-color: white;
    box-shadow: 4px 4px 5px lightgray;
    border: 1px solid lightgray;
    border-radius: 4px;
    
    .article-title
    {
        border-bottom: 1px solid black;
        height: 80px;
    }

    .card-img
    {
        height: 200px;
        img
        {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .card-content
    {
        height: 150px;
        overflow: scroll;
    }

    @media screen and (max-width: 425px) {
        .card-content{
            height: 100px;
        }
    }

    .link-to-article
    {
        background-color: lightblue;
        border-radius: 5px;
        color: black;
        text-decoration: none;
        transition: 0.6s;
    }
    .link-to-article:hover
    {
        background-color: blue;
        color: white;
    }
  }

</style>