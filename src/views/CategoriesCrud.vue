<template>
    <div class="products__crud">
        <TitlePage title="Gestion des Catégories" />

        <p>
            <router-link to="/account/addCategory" custom v-slot="{ navigate }">
                <b-button variant="info" @click="navigate" @keypress.enter="navigate" role="link">Ajouter une Catégorie</b-button>
            </router-link>
        </p>

        <b-container>
            <b-table-simple bordered> 
                <b-thead head-variant="dark" bordered>
                    <b-tr>
                        <b-th>Id</b-th>
                        <b-th>Titre</b-th>
                        <b-th>Action</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="category in categoryFromApi" :key="category._id">
                        <b-td> {{ category._id }} </b-td>
                        <b-td> {{category.title}}  </b-td>
                        <b-td> 
                            <router-link :to="{name:'UpdateCategory',params:{id:category._id}}">
                                <b-button variant="info">Modifier</b-button> 
                            </router-link> |
                            <b-button variant="danger" @click="deleteCategory(category)">Supprimer </b-button>
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>

    

        </b-container>
    </div>
</template>

<script>

import TitlePage from '../components/TitlePage'
import ApiCategoryCrud from '../mixins/Api.Category';
import apiConfigs from "../configs/api.configs";

export default {
    data: function(){
        return {
            categoryFromApi:[],
        }
    },
    components: {
        TitlePage
    },
    mixins:[ApiCategoryCrud],
    created() {
        this.getCategorys() 
        .then(data => {
            this.categoryFromApi = data;
        })
        .catch(err => console.log(err))          
    },
    methods: {
        deleteCategory: function(category) {
            fetch(`${apiConfigs.apiUrl}/categorys/delete/${category._id}`)
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