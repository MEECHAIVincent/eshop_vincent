<template>
    <div>
        <TitlePage title="Mon compte"/>
        <div v-if="isLogged">
            <div class="user__info" v-if="user">
                <p>Nom: {{user.firstName}}</p>
                <p>Prénom: {{user.lastName}}</p>
                <p>Telephone: {{user.telephone}}</p>
                <p>Adresse: {{user.address}}</p>
                <p>Email: {{user.email}}</p>
                <div v-if="user.isAdmin">
                    <router-link to="/account/userCrud" custom v-slot="{ navigate }">
                        <button @click="navigate" @keypress.enter="navigate" role="link" class="button__Crud">User CRUD</button>
                    </router-link> |
                    <router-link to="/account/productCrud" custom v-slot="{ navigate }">
                        <button @click="navigate" @keypress.enter="navigate" role="link" class="button__Crud">Product CRUD</button>
                    </router-link> |
                    <router-link to="/account/ordersCrud" custom v-slot="{ navigate }">
                        <button @click="navigate" @keypress.enter="navigate" role="link" class="button__Crud">Orders CRUD</button>
                    </router-link> |
                    <router-link to="/account/categorysCrud" custom v-slot="{ navigate }">
                        <button @click="navigate" @keypress.enter="navigate" role="link" class="button__Crud">Categories CRUD</button>
                    </router-link> 
                </div>
                <router-link :to="{name:'UpdateUser',params:{id:user._id}}">
                    <button class="button__modif">Mettre à jour</button> 
                </router-link> |                
                <button @click="logout" class="button">Se déconnecter</button> 
            </div>
        </div>
 
        <div v-else>
            <p>Vous n'êtes pas connecté</p>
        </div>
    </div>
</template>

<script>

import VueJwtDecode from "vue-jwt-decode";
import TitlePage from "../components/TitlePage";
import apiConfigs from "../configs/api.configs";

    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                user:{},
                isLogged:false
            }
        },
        methods: {
            logout: function() {
                localStorage.removeItem('token');
                this.isLogged = false;
                this.$router.push('login')
            },
            addAdmin: function() {
                this.user.isAdmin = true;
            }
        },
        created() {
            const token = localStorage.getItem('token');
            if(token) {
               const decodedToken = VueJwtDecode.decode(token);
               fetch(`${apiConfigs.apiUrl}/user/${decodedToken.id}`, {
                   headers: {
                       Authorization: token
                   }
               })
               .then(res => res.json())
               .then(data=>{
                   this.isLogged = true;
                   this.user = data;
               })
               .catch(err => console.log(err))
            }
        }
    }
</script>

<style lang="scss" scoped>
    .user__info {
        border: solid 1px black;
        border-radius: 10px;
        margin: 0 auto;
        max-width: 600px;
        width: 100%;
    }

    .user__info .button {
        background: red;
        border: solid 1px red;
        border-radius: 15px;
        color: white;
        cursor: pointer;
        padding: 10px 50px;
        text-align: center;
        margin-bottom: 20px;
        text-transform: uppercase;
    }

    .user__info .button__modif {
        background: blue;
        border: solid 1px blue;
        border-radius: 15px;
        color: white;
        cursor: pointer;
        padding: 10px 50px;
        text-align: center;
        margin-bottom: 20px;
        text-transform: uppercase;
    }

    .user__info .button__Crud {
        background: green;
        border: solid 1px green;
        border-radius: 15px;
        color: white;
        cursor: pointer;
        padding: 10px 50px;
        text-align: center;
        margin-bottom: 20px;
        text-transform: uppercase;
    }

    .user__info .button:hover {
        background: darkred;
        border: solid 1px darkred;
    }

    .user__info .button__modif:hover {
        background: lightblue;
        border: solid 1px lightblue;
    }

    .user__info .button__Crud:hover {
        background: lightgreen;
        border: solid 1px lightgreen;
    }


</style>