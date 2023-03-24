<template>
    <h1>Task List Website</h1>
    <div class="main-wrapper flex-row">
        <h2>Welcome, <input type="text" placeholder="Name here"></h2>
        <nav class="button-holder">
            <router-link to="/" class="button" :class="highlight">Home</router-link>
            <router-link to="/" class="button">Colors</router-link>
        </nav>
    </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
    name: 'HeaderBar',
    setup(){
        const highlight = 'highlight-button'

        return{highlight}
    },
    onMounted(){
        console.log('mounted')
    }
}
</script>

<style>

</style>
<style scoped>

</style>