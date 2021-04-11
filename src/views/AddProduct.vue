<template>
  <div class="addProduct__form">

    <TitlePage title="Ajouter un Produit" /> 

    <form @submit.prevent="addProduct" class="form">
        
        <label htmlFor="title">Titre: </label>
        <input type="text" v-model="title" name="title">
        <label htmlFor="price">Prix: </label>
        <input type="text" v-model="price" name="price"> €

        <label htmlFor="description">Description: </label>
        <input type="text" v-model="description" name="description">
    
        <label htmlFor="imgUrl">URL image: </label>
        <input type="text" v-model="imgUrl" name="imgUrl">
 
        <select v-model="category">
            <option disabled value="">Catégorie</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <br>     
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
    .addProduct__form {
        font-family: 16px;
        margin: 0 auto;
        max-width: 600px;
        width: 100%;
    }

    .addProduct__form .separator {
        border-bottom: solid 1px #ccc;
        margin-bottom: 15px;
    }

    .addProduct__form .form {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        
    }

    .addProduct__form input[type="email"],
    .addProduct__form input[type="password"],
    .addProduct__form input[type="text"] {
        border: solid 1px #e8e8e8;
        font-family: 'Roboto', sans-serif;
        padding: 10px 7px;
        margin-bottom: 15px;
        outline: none;
    }

    .addProduct__form .button {
        background: green;
        border: solid 1px green;
        color: white;
        cursor: pointer;
        padding: 10px 50px;
        text-align: center;
        text-transform: uppercase;
    }

    .addProduct__form .button:hover {
        background: darkgreen;
        border: solid 1px darkgreen;
    }

    .addProduct__form input[type="email"],
    .addProduct__form input[type="password"],
    .addProduct__form .button {
        font-size: 15px;
        border-radius: 3px;
  
    }



</style>