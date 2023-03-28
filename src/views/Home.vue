<template>
  <div>
    <div class="main-wrapper flex-column">
      <AddList :allLists="allLists" v-if="!isAListSelected.state"/>
    </div>
  
    <template v-for="list in allLists" :key="list">
      <div class="main-wrapper flex-column">
        <TaskList :thisList="list" :isAListSelected="isAListSelected"/>
      </div>
    </template>
  </div>
</template>

<script>
import TaskList from '../components/TaskList.vue'
import AddList from '../components/AddList.vue'

export default {
  name: 'Home',
  components: { TaskList, AddList },
  data(){
    return{
      allLists: [],
      isAListSelected: {state: false},
    }
  }
}
</script>

<style>

</style>
