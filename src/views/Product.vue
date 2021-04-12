<template>
    <div class="product__content" v-if="productItem">
        <TitlePage :title="productItem.title" />
        <div class="text-center">
            <b-card
                    :img-src=productItem.imgUrl
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    border-variant="dark"
                >
                <b-card-text>
                    <h2>Catégorie: {{productItem.category.title}} </h2>
                </b-card-text>
                <b-card-text>
                    {{productItem.description}}
                </b-card-text>
                <b-card-text>
                    {{productItem.price | formatPriceDecimal | formatPrice}} 
                </b-card-text>
                <b-button variant="outline-info" @click="addItemToCart(productItem)">
                    Ajouter au panier
                </b-button>  
            </b-card>
        </div>

    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import Cart from "../mixins/Cart";
    import apiConfigs from "../configs/api.configs";

    export default {
       name:"Product",
       mixins:[Cart],
       components:{
           TitlePage
       },
       data: function(){
           return {
               productItem:{},
           }
       },
        methods:{
            addItemToCart: function(product) {
                this.addTocart(product)
            }
        },
       created() {
           fetch(`${apiConfigs.apiUrl}/product/${this.$route.params.id}`)
           .then(res=>res.json())
           .then(data=>{
               this.productItem = data;
           })
           .catch(err=>console.log(err))
       },
    }
</script>

<style lang="scss" scoped>
    .text-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }


</style>