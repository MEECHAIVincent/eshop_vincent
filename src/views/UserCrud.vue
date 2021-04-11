<template>
    <div class="user__crud">
        <TitlePage title="Gestion des utilisateurs" />

        <b-container>
            
            <p>
            <router-link to="/account/addAdmin" custom v-slot="{ navigate }">
                <b-button variant="info" @click="navigate" @keypress.enter="navigate" role="link">Ajouter un Admin</b-button>
            </router-link>
            </p>
                
            <b-table-simple bordered> 
                <b-thead head-variant="dark" bordered>
                    <b-tr>
                        <b-th>Id</b-th>
                        <b-th>Prénom</b-th>
                        <b-th>Nom</b-th>
                        <b-th>Adresse</b-th>
                        <b-th>Téléphone</b-th>
                        <b-th>isAdmin</b-th>
                        <b-th>Action</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="user in usersFromApi" :key="user._id">
                        <b-td> {{ user._id }} </b-td>
                        <b-td> {{user.firstName}}  </b-td>
                        <b-td> {{user.lastName}} </b-td>
                        <b-td> {{user.address}} </b-td>
                        <b-td> {{user.telephone}} </b-td>
                        <b-td> {{user.isAdmin}} </b-td>
                        <b-td>
                            <router-link :to="{name:'UpdateUser',params:{id:user._id}}">
                                <b-button variant="info">Modifier</b-button> 
                            </router-link> |
                            <b-button variant="danger" @click="deleteUser(user)">Supprimer </b-button>
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>    

        </b-container>
    </div>
</template>

<script>

import TitlePage from '../components/TitlePage'
import ApiUserCrud from '../mixins/Api.UserCrud';
import apiConfigs from "../configs/api.configs";

export default {
    data: function(){
        return {
            usersFromApi:[],
        }
    },
    components: {
        TitlePage
    },
    mixins:[ApiUserCrud],
    created() {
        this.getUsers() 
        .then(data => {
            this.usersFromApi = data;
        })
        .catch(err => console.log(err))          
    },
    methods: {
        deleteUser: function(user) {
            fetch(`${apiConfigs.apiUrl}/users/remove/${user._id}`)
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

</style>