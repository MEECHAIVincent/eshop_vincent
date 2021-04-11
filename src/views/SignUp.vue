<template>
    <div id="signup__form" class="signup__form">
        <TitlePage title="Inscription" /> 
    
        <form  @submit.prevent="signup" class="form">
            <input required type="text" v-model="firstName" name="firstName" placeholder="Prénom" />
            <input required type="text" v-model="lastName" name="lastName" placeholder="Nom" />
            <input type="text" v-model="telephone" name="telephone" placeholder="Téléphone" />
            <input required type="email" v-model="email" name="email" placeholder="Email" />
            <input required type="password"  v-model="password" name="password" placeholder="Mot de passe" />
            <input type="text" v-model="address" name="address" placeholder="Adresse" />
            <p>
                Si vous êtes déjà inscrit:
                <router-link to="/login">
                    Connexion
                </router-link>
            </p>
        <button type="submit" class="button" >S'inscrire</button>
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
            firstName:"",
            lastName:"",
            telephone:"",
            email:"",
            password:"",
            address:"",
            msgErr:""
        }
    },
    components: {
      TitlePage
    },
    methods: {
      signup: function(e) {
          const body = {
              firstName: this.firstName,
              lastName: this.lastName,
              telephone: this.telephone,
              email: this.email,
              password: this.password,
              address: this.address
          }
          const bodyToSend = JSON.stringify(body);
          console.log(bodyToSend);
          const requestOptions = {
              method: "POST",
              headers: {
                  "Content-Type":"application/json"
              },
              body: bodyToSend
          }
          fetch(`${apiConfigs.apiUrl}/user`, requestOptions)
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
    .signup__form {
        font-family: 16px;
        margin: 0 auto;
        max-width: 600px;
        width: 100%;
    }

    .signup__form .separator {
        border-bottom: solid 1px #ccc;
        margin-bottom: 15px;
    }

    .signup__form .form {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        
    }

    .signup__form input[type="email"],
    .signup__form input[type="password"],
    .signup__form input[type="text"] {
        border: solid 1px #e8e8e8;
        font-family: 'Roboto', sans-serif;
        padding: 10px 7px;
        margin-bottom: 15px;
        outline: none;
    }

    .signup__form .button {
        background: green;
        border: solid 1px green;
        color: white;
        cursor: pointer;
        padding: 10px 50px;
        text-align: center;
        text-transform: uppercase;
    }

    .signup__form .button:hover {
        background: darkgreen;
        border: solid 1px darkgreen;
    }

    .signup__form input[type="email"],
    .signup__form input[type="password"],
    .signup__form .button {
        font-size: 15px;
        border-radius: 3px;
  
    }

</style>