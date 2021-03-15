<template>
  <div class="home">
    <h1> {{ myTitle }} </h1>
    <p> {{myAge + 0.5}} </p>
    <p> J'ai {{ myAge }} ans </p>
    <p> {{ myAge > 30 ? "je suis vieux" : "je suis jeune" }} </p>

    <p v-if="myAge > 30">
      Je suis vieux
    </p>
    <p v-else>
      Je suis jeune
    </p>

    <div class="visible__block" v-if="!isVisible">
      <p> Je suis invisible </p>
    </div>

    <div class="visible__block" v-else-if="isVisible">
      <p> Je suis visible </p>
    </div>

      <div class="visible__block" v-else>
      <p> Je suis ni visible ni invisible </p>
    </div>

    <div class="font-bold" v-html="textStrong">
    </div>

    <div class="link">
      <!-- <a target="_blank" v-bind:href="link">Link to Google <br></a> -->
      <a target="_blank" :href="link">Link to Google</a>
    </div>

    <div class="google__logo">
      <a target="_blank" :href="link"><img v-bind:src="googlelogo" alt="logo_google"></a><br>
      <!-- <img :src="googlelogo" alt="logo_google"> -->
    </div>

    <div class="products__grid" v-for="(product,index) in productsArray" v-bind:key="product.id">

        {{ index }}
        {{ product.id }}
        {{ product.title }}
        {{ product.price }} € 

    </div>

    <button v-on:click="sayHello('vincent')">say Hello</button>
    <!-- <button @click="sayHello">say Hello</button> -->



  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    sayHello: function(name) {
      console.log(`Hello ${name}`)
      alert(`Hello ${name}`);
    }
  },
  data: function() {
    return {
      myTitle: "Title Page",
      myAge: 21,
      isVisible: false,
      textStrong: "<strong>Ceci est un texte en gras</strong>",
      link:"https://www.google.fr/",
      googlelogo:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
      productsArray: [
        {id:1,title: "test",price:20 },
        {id:2,title: "test01",price:30 }
      ]

    }
  }
  
}
</script>

<style scoped>

</style>
