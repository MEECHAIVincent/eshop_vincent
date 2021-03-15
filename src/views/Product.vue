<template>
    <div class="product__content" v-if="productItem">
        <TitlePage :title="productItem.title" />
            <p>
               Catégorie: {{productItem.category.title}} 
            </p>
            <img :src=productItem.imgUrl >
            <p>
                Description :
            </p>
            <p>
                {{productItem.description}}
            </p> 
            <p>
                {{productItem.price}} €
                
            </p>

    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";

    export default {
       name:"Product",
       components:{
           TitlePage
       },
       data: function(){
           return {
               productItem:{},
           }
       },
       created() {
           fetch(`http://localhost:3000/api/v1/products/${this.$route.params.id}`)
           .then(res=>res.json())
           .then(data=>{
               this.productItem = data;
           })
           .catch(err=>console.log(err))
       }
    }
</script>

<style lang="scss" scoped>
    img{
        width: 150px;
        height: 150px;
    }

</style>