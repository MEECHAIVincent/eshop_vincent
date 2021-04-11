<template>
    <div class="product__card">
        <b-card
            :img-src=productObject.imgUrl
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="ml-3 mb-3"
            border-variant="dark"
        >
            <b-card-text>
                <router-link :to="{name:'Product',params:{id:productObject._id}}">
                    <h2>{{productObject.title}}</h2>
                </router-link>
            </b-card-text>
            <b-card-text>
                {{productObject.price | formatPriceDecimal | formatPrice}} 
            </b-card-text>
            <b-card-text>
                <b-button variant="outline-info" @click="addItemToCart(productObject)">
                    Ajouter au panier
                </b-button>
            </b-card-text>
            <b-card-text>  
                <b-button variant="outline-info" @click="addItemToWishList(productObject)">
                    Ajouter à la WishList
                </b-button>
            </b-card-text>  
        </b-card>
    </div>
</template>

<script>
    import Cart from "../mixins/Cart";
    import WishList from "../mixins/WishList"

    export default {
        name:"ProductCard",
        mixins:[Cart,WishList],
        props:{
            productObject: Object
        },
        methods:{
            addItemToCart: function(product) {
                this.addTocart(product)
            },
            addItemToWishList: function(product) {
                this.addToWishList(product)
            }
        },
        filters:{
            formatPriceDecimal:function(value) {
                return value.toFixed(2);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>