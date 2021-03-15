<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button buttonName="Test" buttonFunction="popMessage" buttonClass="btn btn-black" />
  </div>
</template>

<script>
import Button from "../components/Button"
export default {
    name: 'About',
    components: {
    Button
  },
  methods: {
    popMessage: function() {
      console.log('Votre button marche')
      alert('Votre button marche');
    }
  }

}
</script>


<style lang="scss" scoped>

</style>