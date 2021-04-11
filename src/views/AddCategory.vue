<template>
  <div class="addCategory__form">

    <TitlePage title="Ajouter une Catégorie" /> 

    <form @submit.prevent="addCategory" class="form">
        
        <label htmlFor="title">Titre: </label>
        <input type="text" v-model="title" name="title">
 
        <button type="submit" class="button" >Ajouter</button>
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
            title:"",
            msgErr:""
        }
    },
    components: {
      TitlePage
    },
    methods: {
      addCategory: function(e) {
          const body = {
              title: this.title
          }
          const bodyToSend = JSON.stringify(body);
          const requestOptions = {
              method: "POST",
              headers: {
                  "Content-Type":"application/json"
              },
              body: bodyToSend
          }
             console.log(bodyToSend)
          fetch("http://localhost:3000/api/v1/category", requestOptions)
          .then(res=>res.json())
          .then(data=> { 
                console.log(data);
                this.$router.push('/account/productCrud');
          })
          .catch(err=>console.log(err))
      }
    },
  }
  
</script>


<style lang="scss" scoped>
    .addCategory__form {
        font-family: 16px;
        margin: 0 auto;
        max-width: 600px;
        width: 100%;
    }

    .addCategory__form .separator {
        border-bottom: solid 1px #ccc;
        margin-bottom: 15px;
    }

    .addCategory__form .form {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        
    }

    .addCategory__form input[type="text"] {
        border: solid 1px #e8e8e8;
        font-family: 'Roboto', sans-serif;
        padding: 10px 7px;
        margin-bottom: 15px;
        outline: none;
    }

    .addCategory__form .button {
        background: green;
        border: solid 1px green;
        color: white;
        cursor: pointer;
        padding: 10px 50px;
        text-align: center;
        text-transform: uppercase;
    }

    .addCategory__form .button:hover {
        background: darkgreen;
        border: solid 1px darkgreen;
    }

    .addCategory__form input[type="text"],
    .addCategory__form .button {
        font-size: 15px;
        border-radius: 3px;
  
    }



</style>