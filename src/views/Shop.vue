<template>
    <div class="shop">
        <TitlePage title="Page Shop" />

        <p>
        <router-link to="/shop/search" custom v-slot="{ navigate }">
            <b-button @click="navigate" @keypress.enter="navigate" role="link">Rechercher un produit</b-button>
        </router-link>
        </p>
        
        <ProductsGrid :productsArray="productsFromApi" />


        
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import ProductsGrid from "../components/ProductsGrid";
    import Button from '../components/Button.vue';
    import ApiProducts from '../mixins/Api.Products';

    export default {
       name:"Shop",
       components: {
            TitlePage,
            ProductsGrid,
            Button
       },
       data: function(){
           return {
               productsFromApi:[]
           }

       },
       mixins:[ApiProducts],
       created() {
           this.getProducts() 
           .then(data => {
                //console.log(data)
                this.productsFromApi = data;
            })
            .catch(err => console.log(err))          
       },
    }
</script>

<style lang="scss" scoped>
    
</style>