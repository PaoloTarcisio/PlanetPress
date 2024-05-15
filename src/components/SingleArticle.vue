<script>

export default {
    data() {
        return {

        };
    },
    props: {
        title: String,
        author: String,
        date: String,
        content: String,
        image: String,
        url: String,
    },
    methods: {
        correctDate(date) {
            let fixedDate = "";
            let newdate = date.slice(0,10);
            let years = newdate.slice(0,4);
            let months = newdate.slice(5,7);
            let days = newdate.slice(8,10);
            // console.log(fixedDate);
    
            return fixedDate = days + "-" + months + "-" + years;
    
        }
    }
}
</script>

<template>
    <div class="my-card p-2">

        <!-- titolo articolo -->
        <div 
        class="article-title p-2">
            <h5>
                {{ title }}
            </h5>
        </div>

        <!-- immagine articolo -->
        <div
        class="card-img mt-3"
        v-if='image'
        >
            <img :src="image" alt="img">
        </div>
        
        <!-- autore articolo -->
        <div 
        v-if="author"
        class="article-autor p-2">
            <h6>
                Autore: {{ author }}
            </h6>
        </div>

        <!-- data di pubblicazione articolo -->
        <div class="p-2">
            Data di pubblicazione: {{ correctDate(date) }}
        </div>
        
        <!-- descrizione articolo -->
        <div 
        v-if="content"
        class="card-content pb-3">
            {{ content }}
        </div>
        
        <!-- link all articolo completo-->
        <div
        class="text-center p-3 card-link">
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
    height: 500px;
    overflow: scroll;
    
    .article-title,
    .article-autor
    {
        border-bottom: 1px solid black;
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

    .card-link
    {
        position: sticky;
        bottom: 5px;

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

}

</style>