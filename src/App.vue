<script >
import Appheader from './components/Appheader.vue';
import Appmain from './components/Appmain.vue';
import Appfooter from './components/Appfooter.vue';

export default {
        data() {
            return {

            };
        },
        components: {
            Appheader,
            Appmain,
            Appfooter,

        }
    }
</script>

<template>
    <Appheader/>
    <Appmain/>
    <Appfooter/>
</template>

<style lang="scss">
    @import url('assets/scss/main.scss');
    @import "bootstrap/scss/bootstrap";
</style>
