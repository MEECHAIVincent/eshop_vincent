<template>
    <div class="about">
    <TitlePage title="This is an about page" />
    <p>
        <Button buttonName="Test" buttonFunction="popMessage" buttonClass="btn btn-black" />
    </p>
    </div>
</template>

<script>
import Button from "../components/Button"
import TitlePage from "../components/TitlePage"

export default {
    name: 'About',
    components: {
    Button,
    TitlePage
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