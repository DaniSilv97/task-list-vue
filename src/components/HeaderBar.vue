<template>
    <h1>Task List Website</h1>
    <div class="main-wrapper flex-row">
        <h2>Welcome, <input type="text" placeholder="Name here"></h2>
        <nav class="button-holder">
            <router-link to="/" class="button shadow">Home</router-link>
            <router-link to="/colors" class="button shadow">Colors</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'HeaderBar',
}
</script>

<style>

</style>