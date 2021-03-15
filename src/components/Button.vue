<template>
    <div class="button">
        <button @click="buttonFunction" :class="buttonClass">
            {{ buttonName }}
        </button>
    </div>
</template>


<script>
export default {
    name:"Bouton",
    props:{
        buttonName: {
            type: String,
            required: true
        },
        buttonFunction: {
            type: Function,
            required: true
        },
        buttonClass: {
            type: String
        }
    },
}
</script>

<style lang="scss" scoped>
    .btn{
        &-blue {
            background: blue;
            color: white;
        }
        &-black {
            background: black;
            color: white;
        }
    }
</style>