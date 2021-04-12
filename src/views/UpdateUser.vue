<template>
    <div class="update__account" v-if="updateAccount">
        <div class="update__form">
            <TitlePage title="Modifier mes Informations" />

            <div v-if="updateAccount" >

                <form  @submit.prevent="updateInfo" class="form" >
                    <label htmlFor="firstName">Nom : </label>
                    <input type="text" v-model="firstName" name="firstName" />
                    <label htmlFor="lastName">Prénom : </label>
                    <input type="text" v-model="lastName" name="lastName"  />
                    <label htmlFor="telephone">Téléphone : </label>
                    <input type="text" v-model="telephone" name="telephone" />
                    <label htmlFor="address">Adresse : </label>
                    <input type="text" v-model="address" name="address" />
                
                <input type="submit" class="button" value="Modifier" />
                </form>

            </div>
        </div>


    </div>
</template>

<script>

    import VueJwtDecode from "vue-jwt-decode";
    import TitlePage from "../components/TitlePage";
    import apiConfigs from "../configs/api.configs";

    export default {
       components:{
           TitlePage
       },
       data: function(){
           return {
                updateAccount:{},
                firstName:"",
                lastName:"",
                telephone:"",
                address:"",
                msgErr:""
           }
       },
       methods: {

            updateInfo: function(e) {
                const body = {
                firstName: this.firstName,
                lastName: this.lastName,
                telephone: this.telephone,
                address: this.address
            }
            const bodyToSend = JSON.stringify(body);
            // console.log(bodyToSend);
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: bodyToSend
            }
            const token = localStorage.getItem('token');
            if(token) {
                const decodedToken = VueJwtDecode.decode(token);
                fetch(`${apiConfigs.apiUrl}/user/update/${this.$route.params.id}`, requestOptions , {
                    headers: {
                        Authorization: token
                    }
                })
                .then(res=>res.json())
                .then(data=> {
                    console.log(data);
                    this.$router.push('/account'); 
                })
                .catch(err=>console.log(err))
                }
            },

           
       },
       created() {
            const token = localStorage.getItem('token');
            if(token) {
               fetch(`${apiConfigs.apiUrl}/user/${this.$route.params.id}`, {
                   headers: {
                       Authorization: token
                   }
               })
               .then(res => res.json())
               .then(data=>{
                    // console.log(data);
                    this.firstName = data.firstName,
                    this.lastName = data.lastName,
                    this.telephone = data.telephone,
                    this.address = data.address
               })
               .catch(err => console.log(err))
            }
       }
    }
</script>

<style lang="scss" scoped>
    .update__account {
        margin: 0 auto;
        max-width: 500px;
        width: 100%;
    }

    .update__form {
        font-family: 16px;
        margin: 0 auto;
        max-width: 600px;
        width: 100%;
    }

    .update__form .separator {
        border-bottom: solid 1px #ccc;
        margin-bottom: 15px;
    }

    .update__form .form {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        
    }

    .update__form input[type="email"],
    .update__form input[type="password"],
    .update__form input[type="text"] {
        border: solid 1px #e8e8e8;
        font-family: 'Roboto', sans-serif;
        padding: 10px 7px;
        margin-bottom: 15px;
        outline: none;
    }

    .update__form .button {
        background: green;
        border: solid 1px green;
        color: white;
        cursor: pointer;
        padding: 10px 50px;
        text-align: center;
        text-transform: uppercase;
    }

    .update__form .button:hover {
        background: darkgreen;
        border: solid 1px darkgreen;
    }

    .update__form input[type="email"],
    .update__form input[type="password"],
    .update__form .button {
        font-size: 15px;
        border-radius: 3px;
  
    }




</style>