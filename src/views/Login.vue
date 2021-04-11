<template>
    <div id="login__form" class="login__form">
        <TitlePage title="Connexion" /> 
    
        <form  @submit.prevent="login" class="form">
            <input required type="email" v-model="email" name="email" placeholder="Email" />
            <input required type="password"  v-model="password" name="password" placeholder="Mot de passe" />
            <p>
                Si vous pas encore inscrit:
                <router-link to="/signUp">
                    Inscription
                </router-link>
            </p>
        <button type="submit" class="button" >Connecter</button>
        </form>

        <p v-if="msgErr">
            {{msgErr}}
        </p>
    </div>
</template>

<script>

import TitlePage from "../components/TitlePage";
import apiConfigs from "../configs/api.configs";


  export default {
    data: function() {
        return {
            email:"",
            password:"",
            msgErr:""
        }
    },
    components: {
      TitlePage,
      apiConfigs
    },
    methods: {
      login: function(e) {
          const body = {
              email: this.email,
              password: this.password
          }
          const bodyToSend = JSON.stringify(body);
          const requestOptions = {
              method: "POST",
              headers: {
                  "Content-Type":"application/json"
              },
              body: bodyToSend
          }
          fetch(`${apiConfigs.apiUrl}/user/login`, requestOptions)
          .then(res=>res.json())
          .then(data=> {
              if(!data.auth) {
                  this.msgErr = data.message;
              } else {
                  console.log(data);
                  let token = data.token;
                  localStorage.setItem('token', token);
                  this.$router.push('/account');
              }
          })
          .catch(err=>console.log(err))
      }
    },
  }
</script>


<style lang="scss" scoped>
    .login__form {
        font-family: 16px;
        margin: 0 auto;
        max-width: 600px;
        width: 100%;
    }

    .login__form .separator {
        border-bottom: solid 1px #ccc;
        margin-bottom: 15px;
    }

    .login__form .form {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        
    }

    .login__form input[type="email"],
    .login__form input[type="password"] {
        border: solid 1px #e8e8e8;
        font-family: 'Roboto', sans-serif;
        padding: 10px 7px;
        margin-bottom: 15px;
        outline: none;
    }

    .login__form .button {
        background: green;
        border: solid 1px green;
        color: white;
        cursor: pointer;
        padding: 10px 50px;
        text-align: center;
        text-transform: uppercase;
    }

    .login__form .button:hover {
        background: darkgreen;
        border: solid 1px darkgreen;
    }

    .login__form input[type="email"],
    .login__form input[type="password"],
    .login__form .button {
        font-size: 15px;
        border-radius: 3px;
  
    }

</style>