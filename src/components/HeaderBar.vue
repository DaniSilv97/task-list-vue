<template>
    <h1>Task List Website</h1>
    <div class="main-wrapper flex-row">
        <h2>Welcome, <input type="text" placeholder="Name here"></h2>
        <nav class="button-holder">
            <router-link to="/" class="button shadow">Home</router-link>
            <router-link to="/colors" class="button shadow">Colors</router-link>
        </nav>
    </div>
    <!--<div >
        <Transition name="fade">
            <div class="main-wrapper" v-show="testeShow"> teste </div>
        </Transition>
    </div>
    <button @click="testeShow = !testeShow"> tarat waer</button>-->
</template>

<script>
export default {
    name: 'HeaderBar',
    data(){
        return{
            testeShow: false
        }
    }
}
</script>

<style>

</style>