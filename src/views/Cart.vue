<template>
  <div class="shopping__cart">

    <TitlePage title="Votre Panier" />

    <b-container>
        <b-table-simple bordered> 
            <b-thead head-variant="dark" bordered>
                <b-tr>
                    <b-th>Title</b-th>
                    <b-th>Quantity</b-th>
                    <b-th>Price</b-th>
                    <b-th></b-th>
                    <b-th></b-th>
                    <b-th>Total</b-th>
                    <b-th></b-th>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="item in cartArray" :key="item.id">
                    <b-td> {{item.title}} </b-td>
                    <b-td> {{item.qty}} </b-td>
                    <b-td> {{item.price}} </b-td>
                    <b-td> <b-button>-</b-button> </b-td>
                    <b-td> <b-button>+</b-button> </b-td>
                    <b-td> {{item.qty * item.price}} </b-td>
                    <b-td> <b-button variant="danger">Supprimer le produit </b-button> </b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
        <p>
        <b-button>Vider le panier</b-button>
        </p>
    </b-container>
    
  </div>
</template>

<script>

    import TitlePage from "../components/TitlePage";
    import Cart from "../mixins/Cart";

    export default {
        data: function() {
            return {
                cartArray:[],

            }
        },
        components: {
            TitlePage
        },
        mixins:[Cart],
        created() {
            this.cartArray = this.getCart();
        }

    }
  
</script>


<style lang="scss" scoped>



</style>