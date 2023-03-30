<template>
    <div>
        <input type="color" class="shadow" :value="thisPicker.color">
    </div>
    </template>
    
    <script>
    
    export default {
        props:['thisPicker'],
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