<template>
    <div class="shop">
        <TitlePage title="Page Shop" />
        
        <ProductsGrid :productsArray="productsFromApi" />

        <!-- <div class="products__grid" v-for="product in productsArray" :key="product._id">
            <div class="product__item">
                {{product._id}} |
                {{product.title}} |
                {{product.price}} € |
                {{product.img}}
                <img :src="productimg" alt="">
            </div>
        </div> -->

        <router-link to="/product" custom v-slot="{ navigate }">
            <button @click="navigate" @keypress.enter="navigate" role="link">Ajouter un produit</button>
        </router-link>
        
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import ProductsGrid from "../components/ProductsGrid";
import Button from '../components/Button.vue';

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
       methods: {
           getProducts : function() {
               return fetch("http://localhost:3000/api/v1/products")
                        .then( res => res.json())
                        .then(data => {
                                //console.log(data)
                                this.productsFromApi = data;
                        })
                        .catch(err => console.log(err))

            }
       },
       created() {
           this.getProducts();           
       }
    }
</script>

<style lang="scss" scoped>

</style>