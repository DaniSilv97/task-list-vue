<template>
  <div>
    <div class="main-wrapper flex-column" v-if="!isAListSelected.state">
      <AddList :allLists="allLists" />
    </div>
  
    <template v-for="list in allLists" :key="list">
      <TaskList :thisList="list" :isAListSelected="isAListSelected"/>
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
