<template>
  <div :id="thisList.id" class ="task-list shadow" v-if="!isAListSelected.state || isThisSelected">
    <div class="list-main-container shadow">
      <div class="list-name-container">
        <h2 class="list-name">{{ thisList.name }}</h2>
        <button class="button expand shadow" @click="doShowTasks">{{ moreLess }}</button>
      </div>
      <div v-if="isThisSelected">
        <div class="list-tasks-container">
          <template v-for="task in thisList.tasks" :key="task">
            <Task :thisTask="task"/>
          </template>
          <AddTask v-if="isAListSelected.state" :thisList="thisList"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue"
import AddTask from '../components/AddTask.vue'

export default {
  props:['thisList', 'isAListSelected'],
  components: { Task, AddTask },
  data(){  
    return{
      moreLess: 'More...',
      isThisSelected: false,
    }
  },
  methods:{
    doShowTasks(){
      if(!this.isThisSelected){
        this.moreLess = 'Less...'
        this.isThisSelected = true
        this.isAListSelected.state = true
      } else{
        this.moreLess = 'More...'
        this.isThisSelected = false
        this.isAListSelected.state = false
      }
    }
  },
}
</script>

<style>
.task-list{
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  margin-top: 5px;
  background-color: var(--darkGrey);
  border-radius: 15px;
  padding-left: 10px;
  padding-right: 10px;
}
.list-main-container{
  background-color: var(--grey);
  border-radius: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
}
.list-name-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--darkestGrey);
}

.list-name{
  padding-top: 5px;
  margin-bottom: 5px;
  margin-top: 7px;
}
.expand{
  height: 30px;
}
.list-tasks-container{
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 10px;
  padding-bottom: 1px;
  background-color: var(--darkGrey);
  border-radius: 15px;
}
</style>