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
                <button class="button__modif">Modifier les infos</button> |               
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
            }
        },
        created() {
            const token = localStorage.getItem('token');
            if(token) {
               const decodedToken = VueJwtDecode.decode(token);
               fetch(`http://localhost:3000/api/v1/users/${decodedToken.id}`, {
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
        margin-left: 150px;
        margin-right: 150px;
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

    .user__info .button:hover {
        background: darkred;
        border: solid 1px darkred;
    }

    .user__info .button__modif:hover {
        background: lightblue;
        border: solid 1px lightblue;
    }

</style>