<template>
    <div>
        <input type="color" class="shadow" v-model="color" @change="changeColor">
    </div>
    </template>
    
    <script>
    
    export default {
        props:['thisPicker'],
        //TODO { X } $emit
        data(){
            return{
                color: ''
            }
        },
        methods:{
            changeColor(){
                this.$emit('colorChanged', {picker: this.thisPicker, newColor: this.color })
            }
        },
        mounted(){
            this.color = this.thisPicker.color
        }
    }
    </script>
    
    <style scoped>
        input{
            background-color: var(--darkGrey);
            border-radius: 50%;
            padding: 5px;
            height: 90px;
            width: 90px;
        }
        input[type="color"]::-webkit-color-swatch {
            border: 2px solid var(--darkestGrey);
            border-radius: 50%;
        }
    </style>