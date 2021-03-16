<template>
  <div class="login__form">

    <TitlePage title="Connection" /> 

    <form @submit.prevent="login">
      <p>
        <label htmlFor="email">Email: </label>
        <input type="email" v-model="email" name="email">
      </p>
      <p>
        <label htmlFor="password">Password: </label>
        <input type="password" v-model="password" name="password">
      </p>  
      <p>  
        <b-button variant="primary" type="submit">Connecter</b-button>
      </p>  
    </form>
    <p v-if="msgErr">
        {{msgErr}}
    </p>

    

  </div>
</template>

<script>

import TitlePage from "../components/TitlePage";

  export default {
    data: function() {
        return {
            email:"",
            password:"",
            msgErr:""
        }
    },
    components: {
      TitlePage
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
          fetch("http://localhost:3000/api/v1/users/login", requestOptions)
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



</style>