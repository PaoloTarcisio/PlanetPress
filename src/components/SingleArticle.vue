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
        image:String,
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
        <div>
            <img :src="image" alt="">
        </div>
        
        <div 
        v-if="author"
        class="p-2">
            <h6>
                Autore: {{ author }}
            </h6>
        </div>
        
        <div>
                {{ content }}
        </div>
        
        <div
        class="text-center p-3">
            <a
            :href="url"
            class="link-to-article p-2">
                Vai all'articolo
            </a>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.my-card {
    border: 1px solid black;
    border-radius: 10px;
    
    .article-title
    {
        border-bottom: 1px solid black;
    }

    img
    {
        width: 100%;
    }

    .link-to-article
    {
        background-color: lightblue;
        border-radius: 5px;
        color: white;
        text-decoration: none;
    }
    .link-to-article:hover
    {
        background-color: blue;
    }
  }

</style>