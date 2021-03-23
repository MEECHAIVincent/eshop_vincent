<template>
    <div id="contact-form" class="contact-form">
        <TitlePage title="Page Contact"/>
        <div class="separator"></div>

        <form class="form">
            <input required name="name" placeholder="Name" type="text" >
            <input required name="email" placeholder="E-mail" type="email" >
            <textarea name="message" rows="4" placeholder="Message"></textarea>
        <button class="button">Envoyer</button>
        </form>
  
    </div>
</template>

<script>

    import TitlePage from "../components/TitlePage";

    export default {
       name:"Contact",
       components: {
           TitlePage
       }
    }
</script>

<style lang="scss" scoped>
    .contact-form {
        font-family: 16px;
        margin: 0 auto;
        max-width: 600px;
        width: 100%;
    }

    .contact-form .separator {
        border-bottom: solid 1px #ccc;
        margin-bottom: 15px;
    }

    .contact-form .form {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        
    }

    .contact-form input[type="email"],
    .contact-form input[type="text"],
    .contact-form textarea {
        border: solid 1px #e8e8e8;
        font-family: 'Roboto', sans-serif;
        padding: 10px 7px;
        margin-bottom: 15px;
        outline: none;
    }

    .contact-form textarea {
        resize: none;
    }

    .contact-form .button {
        background: #da552f;
        border: solid 1px #da552f;
        color: white;
        cursor: pointer;
        padding: 10px 50px;
        text-align: center;
        text-transform: uppercase;
    }

    .contact-form .button:hover {
        background: #ea532a;
        border: solid 1px #ea532a;
    }

    .contact-form input[type="email"],
    .contact-form input[type="text"],
    .contact-form textarea,
    .contact-form .button {
        font-size: 15px;
        border-radius: 3px
    }

</style>