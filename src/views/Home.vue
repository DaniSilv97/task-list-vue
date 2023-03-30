<template>
  <div>
    <template v-if="!isAListSelected.state">
      <div class="main-wrapper flex-column">
        <SearchList :allLists="allLists"/>
        <AddList :allLists="allLists" />
      </div>
    </template>
    
    <template v-for="list in allLists" :key="list">
      <template v-if="list.isShown">
        <TaskList :thisList="list" :isAListSelected="isAListSelected" :allLists="allLists" />
      </template>
    </template>
  </div>
</template>

<script>
import TaskList from '../components/TaskList.vue'
import AddList from '../components/AddList.vue'
import SearchList from '../components/SearchList.vue'

export default {
  name: 'Home',
  components: { TaskList, AddList, SearchList },
  data(){
    return{
      allLists: [],
      isAListSelected: {state: false},
    }
  },
  created(){
    if(JSON.parse(localStorage.getItem('ListOfTaskLists'))){
      this.allLists = JSON.parse(localStorage.getItem('ListOfTaskLists'))
    } 
  }
}
</script>

<style>

</style>
