<template>
    <div class="products__crud">
        <TitlePage title="Gestion des Produits" />

        <b-container>
            <p>
            <router-link to="/account/addProduct" custom v-slot="{ navigate }">
                <b-button variant="info" @click="navigate" @keypress.enter="navigate" role="link">Ajouter un Produit</b-button>
            </router-link>
            </p>
            <b-table-simple bordered> 
                <b-thead head-variant="dark" bordered>
                    <b-tr>
                        <b-th>Id</b-th>
                        <b-th><b-icon icon="image" variant="light"></b-icon></b-th>
                        <b-th>Titre</b-th>
                        <b-th>Description</b-th>
                        <b-th>Catégorie</b-th>
                        <b-th>Prix</b-th>
                        <b-th>Action</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="product in productsFromApi" :key="product._id">
                        <b-td> {{ product._id }} </b-td>
                        <b-td> <img :src="product.imgUrl"> </b-td>
                        <b-td> {{product.title}}  </b-td>
                        <b-td> {{product.description}} </b-td>
                        <b-td> {{product.category}} </b-td>
                        <b-td>  {{product.price | formatPriceDecimal | formatPrice }} </b-td>
                        <b-td> 
                            <router-link :to="{name:'UpdateProduct',params:{id:product._id}}">
                                <b-button variant="info">Modifier</b-button> 
                            </router-link> |
                            <b-button variant="danger" @click="deleteProduct(product)">Supprimer </b-button>
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>

    

        </b-container>
    </div>
</template>

<script>

import TitlePage from '../components/TitlePage'
import ApiProductCrud from '../mixins/Api.Products';
import apiConfigs from "../configs/api.configs";

export default {
    data: function(){
        return {
            productsFromApi:[],
        }
    },
    components: {
        TitlePage
    },
    mixins:[ApiProductCrud],
    created() {
        this.getProducts() 
        .then(data => {
            this.productsFromApi = data;
        })
        .catch(err => console.log(err))          
    },
    methods: {
        deleteProduct: function(product) {
            fetch(`${apiConfigs.apiUrl}/product/delete/${product._id}`)
            .then(res=>res.json())
            .then(data=> {
                console.log(data);
                this.$router.go(); 
                })
            .catch(err=>console.log(err))
        }

    }
    
}
</script>

<style lang="scss" scoped>
    img{
        max-width: 5rem;
    }


</style>