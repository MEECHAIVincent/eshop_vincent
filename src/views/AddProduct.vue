<template>
  <div class="addProduct__form">

    <TitlePage title="Ajouter un Produit" /> 

    <form @submit.prevent="addProduct">
        <p>
        <label htmlFor="title">Titre: </label>
        <input type="text" v-model="title" name="title">
        </p>
        <p>
        <label htmlFor="price">Prix: </label>
        <input type="text" v-model="price" name="price"> €
        </p>
        <p>
        <label htmlFor="description">Description: </label>
        <input type="text" v-model="description" name="description">
        </p>
        <p>
        <label htmlFor="imgUrl">URL image: </label>
        <input type="text" v-model="imgUrl" name="imgUrl">
        </p>
        <p>
        <select v-model="category">
            <option disabled value="">Catégorie</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        </p>
        <br>     
        <input value="Ajouter" type="submit">
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
            price:"",
            description:"",
            imgUrl:"",
            category:"",
            msgErr:""
        }
    },
    components: {
      TitlePage
    },
    methods: {
      addProduct: function(e) {
          const body = {
              title: this.title,
              price: this.price,
              description: this.description,
              imgUrl: this.imgUrl,
              category: this.category
          }
           console.log(body)
          const bodyToSend = JSON.stringify(body);
            console.log(bodyToSend)
          const requestOptions = {
              method: "POST",
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