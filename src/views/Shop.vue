<template>
    <div class="shop">
        <TitlePage title="Page Shop" />
        
        <div class="search__filter">
            <input type="text" v-model="searchValue" @keyup="search" />
        </div>

        <ProductsGrid :productsArray="filteredShop" />


        
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import ProductsGrid from "../components/ProductsGrid";
    import Button from '../components/Button.vue';
    import ApiProducts from '../mixins/Api.Products';

    export default {
       name:"Shop",
       components: {
            TitlePage,
            ProductsGrid,
            Button
       },
       data: function(){
           return {
               productsFromApi:[],
               searchValue:""

           }

       },
       methods: {
           search: function() {
               console.log('this')
           }
       },
       computed: {
           filteredShop: function(){
               let filter = new RegExp(this.searchValue, "i");
               return this.productsFromApi.filter(item=>item.title.match(filter));
           }
       },

       mixins:[ApiProducts],
       created() {
           this.getProducts() 
           .then(data => {
                //console.log(data)
                this.productsFromApi = data;
            })
            .catch(err => console.log(err))          
       },
    }
</script>

<style lang="scss" scoped>
    .search__filter input[type="text"] {
        border: solid 1px black;
        border-radius: 10px;
        font-family: 'Roboto', sans-serif;
        padding: 10px ;
        margin-bottom: 20px;
        outline: none;
    }
    
</style>