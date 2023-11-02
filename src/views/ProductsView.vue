<script>
    export default {
        computed: {
            priceParam(){
                return this.$route.params.price
            }
        }
    }
</script>

<template>
    <section class="container">
        <h1 class="main-heading">Products</h1>
        <h2>{{ priceParam }}</h2>
    </section>
</template>