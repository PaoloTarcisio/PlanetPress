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
        url: String,
    }
}
</script>

<template>
<div class="article-title">
    <h3>
        {{ title }}
    </h3>
</div>

<div v-if="author">
    <h6>
        Autore: {{ author }}
    </h6>
</div>

<div>
        {{ content }}
</div>

<div>
        <a :href="url">Vai all'articolo</a>
</div>

</template>

<style lang="scss" scoped>
.article-title
{
    border-bottom: 1px solid black;
}
</style>