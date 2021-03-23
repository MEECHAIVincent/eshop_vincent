<template>
  <div class="shopping__cart">

    <TitlePage title="Votre Panier" />

    <b-container>
        <b-table-simple bordered> 
            <b-thead head-variant="dark" bordered>
                <b-tr>
                    <b-th><b-icon icon="image" variant="light"></b-icon></b-th>
                    <b-th>Title</b-th>
                    <b-th>Quantity</b-th>
                    <b-th>Price</b-th>
                    <b-th><b-icon icon="dash-square-fill" variant="light"></b-icon></b-th>
                    <b-th><b-icon icon="plus-square-fill" variant="light"></b-icon></b-th>
                    <b-th>Total</b-th>
                    <b-th><b-icon icon="trash-fill" variant="light"></b-icon></b-th>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="item in cartArray" :key="item.id">
                    <b-td> <img :src="item.imgUrl"> </b-td>
                    <b-td>  {{item.title}}  </b-td>
                    <b-td> {{item.qty}} </b-td>
                    <b-td> {{item.price | formatPriceDecimal | formatPrice }} </b-td>
                    <b-td> <b-button @click="deleteItemCart(item)">-</b-button> </b-td>
                    <b-td> <b-button @click="addItemCart(item)">+</b-button> </b-td>
                    <b-td> {{item.qty * item.price | formatPriceDecimal | formatPrice }} </b-td>
                    <b-td> <b-button variant="danger" @click="removeProductCart(item)">Supprimer le produit </b-button> </b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
        <p>
             <i><b>Quantité totale : {{  calculQty }}</b></i>
        </p>
        <p>
            <b>Total : {{  calculTotal | formatPriceDecimal | formatPrice }}</b>
        </p>
        <p>
            <b-button variant="danger" @click="clearShopCart()">Vider le panier</b-button> |
            <b-button variant="info" @click="checkout()">Payer</b-button>
        </p>
    </b-container>
    
  </div>
</template>

<script>

    import TitlePage from "../components/TitlePage";
    import Cart from "../mixins/Cart";
    import {loadStripe} from '@stripe/stripe-js';
    const stripePromise = loadStripe('pk_test_51IYB0mJijRGvnX6MyzW0TMUJPEssRCAIk1zYqjarjf80L8CsEs8c1kJUCmpV3t9qm8F3cQ0YPOMI43Vri9GxbkEA00tpkBQrLm');

    export default {
        data: function() {
            return {
                cartArray:[],
                //calculQty:0,

            }
        },
        components: {
            TitlePage
        },
        mixins:[Cart],
        created() {
            this.cartArray = this.getCart();
            //this.calculQty = this.getCartTotal(this.cartArray);
        },
        computed: {
            calculQty: function(){
                return this.getCartCount(this.cartArray);
            },
            calculTotal: function(){
                return this.getCartTotal(this.cartArray);
            }
        },
        methods: {
            removeProductCart: function(product) {
                this.removeItemCart(product);
                this.cartArray = this.getCart();    
            },
            addItemCart: function(product) {
                this.addOneQty(product);
                this.cartArray = this.getCart();
            },
            deleteItemCart: function(product) {
                this.removeOneQty(product);
                this.cartArray = this.getCart();
            },
            clearShopCart: function() {
                this.clearCart();
                this.cartArray = this.getCart();
            },
            checkout: async function(){
                const stripe = await stripePromise;
                const response = await fetch('http://localhost:3000/api/v1/create-checkout-session',{
                    method:"POST",
                    headers : {
                            "Content-type":"application/json"
                    },
                    body:JSON.stringify({
                        amount:30000
                    })
                });
                const session = await response.json();
                const result = await stripe.redirectToCheckout({
                    sessionId:session.id
                });
                console.log(result);
                if(result.error) {
                    console.log(result.error);
                }
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
    img{
        max-width: 5rem;
    }


</style>