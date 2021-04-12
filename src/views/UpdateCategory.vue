<template>
    <div class="update__account" v-if="updateCategory">
        <div class="update__form">
            <TitlePage title="Modifier mes Informations" />

            <div v-if="updateCategory" >

                <form  @submit.prevent="updateInfo" class="form" >
                    <label htmlFor="title">Titre : </label>
                    <input type="text" v-model="title" name="title" />
                
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
                updateCategory:{},
                title:"",
                msgErr:""
           }
       },
       methods: {

            updateInfo: function(e) {
                const body = {
                title: this.title,
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
                fetch(`${apiConfigs.apiUrl}/categorys/update/${this.$route.params.id}`, requestOptions , {
                    headers: {
                        Authorization: token
                    }
                })
                .then(res=>res.json())
                .then(data=> {
                    console.log(data);
                    this.$router.push('/account/categorysCrud'); 
                })
                .catch(err=>console.log(err))
                }
            },

           
       },
       created() {
            const token = localStorage.getItem('token');
            if(token) {
               fetch(`${apiConfigs.apiUrl}/categorys/${this.$route.params.id}`, {
                   headers: {
                       Authorization: token
                   }
               })
               .then(res => res.json())
               .then(data=>{
                    // console.log(data);
                    this.title = data.title
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

    .update__form input[type="text"],
    .update__form .button {
        font-size: 15px;
        border-radius: 3px;
  
    }




</style>