<template>
    <div class="update__account" v-if="updateOrder">
        <div class="update__form">
            <TitlePage title="Modifier mes Informations" />

            <div v-if="updateOrder" >

                <form  @submit.prevent="updateInfo" class="form" >
                    <label htmlFor="status">Status</label>
                    <select v-model="status" name="status">
                        <option value="Livré">Livré</option>
                        <option value="En Cours">En Cours</option>
                        <option value="Terminé">Terminé</option>
                    </select>
                
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
                updateOrder:{},
                status:"",
                msgErr:""
           }
       },
       methods: {

            updateInfo: function(e) {
                const body = {
                status: this.status,
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
                fetch(`${apiConfigs.apiUrl}/orders/update/${this.$route.params.id}`, requestOptions , {
                    headers: {
                        Authorization: token
                    }
                })
                .then(res=>res.json())
                .then(data=> {
                    console.log(data);
                    this.$router.push('/account/ordersCrud'); 
                })
                .catch(err=>console.log(err))
                }
            },

           
       },
       created() {
            const token = localStorage.getItem('token');
            if(token) {
               fetch(`${apiConfigs.apiUrl}/orders/${this.$route.params.id}`, {
                   headers: {
                       Authorization: token
                   }
               })
               .then(res => res.json())
               .then(data=>{
                    // console.log(data);
                    this.total = data.total,
                    this.status = data.status,
                    this.user = data.user,
                    this.products = data.products
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

    .update__form select {
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

    .update__form select,
    .update__form .button {
        font-size: 15px;
        border-radius: 3px;
  
    }




</style>