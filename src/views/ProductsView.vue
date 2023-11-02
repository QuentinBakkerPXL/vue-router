<script>
    export default {
        computed: {
            priceParam(){
                return this.$route.params.price
            },
            searchParam() {
                return this.$route.query.search
            }
        }
    }
</script>

<template>
    <section class="container">
        <h1 class="main-heading">Products</h1>
        <h2>{{ priceParam }}</h2>
        <p>{{ searchParam }}</p>
    </section>
</template>