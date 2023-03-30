<template>
  <header>
    <HeaderBar/>
  </header>
  <router-view/>
</template>

<script>
  import HeaderBar from './components/HeaderBar.vue'
  export default{
    name: 'App',
    components: { HeaderBar },
    created(){
      if(!JSON.parse(localStorage.getItem('colorPickers'))){
        const colors = [
          {id: 1, text: 'enoughTime', time: '10', color: '#00d8ff'},
          {id: 2, text: 'shortTime', time: '2', color: '#0097ff'},
          {id: 3, text: 'noTime', time: '0', color: '#0070ff'}
        ]
        localStorage.setItem('colorPickers', JSON.stringify(colors));
      }
    }
  }
</script>

<style>

</style>
