<template>
  <div class="searchProduct__form">

    <TitlePage title="Rechercher un Produit" /> 

    <form @submit.prevent="searchProduct">
        <p>
        <label htmlFor="title">Titre: </label>
        <input type="text" v-model="title" name="title">
        </p>
        <p>
        <label htmlFor="description">Description: </label>
        <input type="text" v-model="description" name="description">
        </p>
        <p>  
        <b-button type="submit" variant="primary">Rechercher</b-button>
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
            title:"",
            description:"",
            msgErr:""
        }
    },
    components: {
      TitlePage
    },
    methods: {
      searchProduct: function(e) {
            const body = {
                title: this.title,
                description: this.description,

            }
            console.log(body)
            const bodyToSend = JSON.stringify(body);
            console.log(bodyToSend)
            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type":"application/json"
                },
                body: bodyToSend
            }
                console.log(bodyToSend)
            fetch("http://localhost:3000/api/v1/products", requestOptions)
            .then(res=>res.json())
            .then(data=> console.log(data))
            .catch(err=>console.log(err))
      }
    },
  }
  
</script>


<style lang="scss" scoped>



</style>