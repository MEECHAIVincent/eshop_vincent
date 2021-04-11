<template>
    <div class="shopping__cart">

    <TitlePage title="Votre Panier" />

    <b-container>
        <b-table-simple bordered> 
            <b-thead head-variant="dark" bordered>
                <b-tr>
                    <b-th><b-icon icon="image" variant="light"></b-icon></b-th>
                    <b-th>Title</b-th>            
                    <b-th>Price</b-th>
                    <b-th>Action</b-th>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="product in wishListArray" v-bind:key="product._id">
                    <b-td> <img :src="product.imgUrl"> </b-td>
                    <b-td> {{product.title}}  </b-td>
                    <b-td> {{product.price | formatPriceDecimal | formatPrice }} </b-td>
                    <b-td> 
                        <b-button variant="danger" @click="removeItem(product)">Supprimer de la WishList </b-button> |
                        <b-button variant="info" @click="addItemToCart(product)"> Ajouter au Panier </b-button> 
                    </b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>

        <div>
        <b-button variant="danger" @click="clear()">Vider la WishList</b-button>     
        </div>


    </b-container>

    </div>
</template>

<script>
import TitlePage from "../components/TitlePage";
import WishList from "../mixins/WishList";
import Cart from "../mixins/Cart";

export default {
    components: {
        TitlePage,
    },
    data() {
        return {
            wishListArray: [],
        };
    },
    mixins: [WishList, Cart],
    created() {
        this.wishListArray = this.getWishList();
    },
    methods: {
        removeItem(product) {
            this.removeItemWishList(product);
            this.wishListArray = this.getWishList();
        },
        addItemToCart: function(product) {
            this.addTocart(product);
        },
        clear(){
            this.clearWishList()
            this.wishListArray = this.getWishList()
        }
    },
};
</script>

<style lang="scss" scoped>
    img{
        max-width: 3rem;
    }
</style>
