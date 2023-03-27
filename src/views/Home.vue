<template>
  <div>
    <div class="main-wrapper flex-column">
      <AddList :allLists="allLists" v-if="!isAListSelected.state"/>
      <AddTask v-if="isAListSelected.state"/>
    </div>
    <div class="main-wrapper flex-column">
      <template v-for="list in allLists" :key="list">
        <TaskList :thisList="list" :isAListSelected="isAListSelected"/>
      </template>
    </div> 
  </div>
</template>

<script>
import TaskList from '../components/TaskList.vue'
import AddList from '../components/AddList.vue'
import AddTask from '../components/AddTask.vue'

export default {
  name: 'Home',
  components: { TaskList, AddList, AddTask },
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
