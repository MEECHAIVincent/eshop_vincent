<template>
    <div class="contact">
         <TitlePage :title="myTitle"/>
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";

    export default {
       name:"Contact",
       components: {
           TitlePage
       },
       data: function() {
           return {
               myTitle:"Page User"
           }
       }
    }
</script>

<style lang="sass" scoped>

</style>