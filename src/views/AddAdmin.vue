<template>
    <div id="addAdmin__form" class="addAdmin__form">
        <TitlePage title="Ajouter un Admin" /> 
    
        <form  @submit.prevent="addAdmin" class="form">
            <input  type="text" v-model="firstName" name="firstName" placeholder="FirstName" />
            <input  type="text" v-model="lastName" name="lastName" placeholder="LastName" />
            <input  type="text" v-model="telephone" name="telephone" placeholder="Telephone" />
            <input  type="email" v-model="email" name="email" placeholder="Email" />
            <input  type="password"  v-model="password" name="password" placeholder="Password" />
            <input  type="text" v-model="address" name="address" placeholder="Address" />
            <div>
                <input required type="checkbox" v-model="isAdmin" name="isAdmin">
                <label for="isAdmin"> isAdmin</label>
            </div>
        
        <button type="submit" class="button" >Ajouter un admin</button>
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
            isAdmin:"",
            msgErr:""
        }
    },
    components: {
      TitlePage
    },
    methods: {
      addAdmin: function(e) {
          const body = {
              firstName: this.firstName,
              lastName: this.lastName,
              telephone: this.telephone,
              email: this.email,
              password: this.password,
              address: this.address,
              isAdmin: this.isAdmin
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
          fetch(`${apiConfigs.apiUrl}/create`, requestOptions)
          .then(res=>res.json())
          .then(data=> {
                console.log(data);
                //let token = data.token;
                //localStorage.setItem('token', token);
                this.$router.push('/account/userCrud');
        
          })
          .catch(err=>console.log(err))
      }
    },
  }
</script>


<style lang="scss" scoped>
    .addAdmin__form {
        font-family: 16px;
        margin: 0 auto;
        max-width: 600px;
        width: 100%;
    }

    .addAdmin__form .separator {
        border-bottom: solid 1px #ccc;
        margin-bottom: 15px;
    }

    .addAdmin__form .form {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        
    }

    .addAdmin__form input[type="email"],
    .addAdmin__form input[type="password"],
    .addAdmin__form input[type="text"] {
        border: solid 1px #e8e8e8;
        font-family: 'Roboto', sans-serif;
        padding: 10px 7px;
        margin-bottom: 15px;
        outline: none;
    }

    .addAdmin__form .button {
        background: green;
        border: solid 1px green;
        color: white;
        cursor: pointer;
        padding: 10px 50px;
        text-align: center;
        text-transform: uppercase;
    }

    .addAdmin__form .button:hover {
        background: darkgreen;
        border: solid 1px darkgreen;
    }

    .addAdmin__form input[type="email"],
    .addAdmin__form input[type="password"],
    .addAdmin__form .button {
        font-size: 15px;
        border-radius: 3px;
  
    }

</style>