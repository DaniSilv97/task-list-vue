<template>

  <div class="main-wrapper flex-column" :class="marginTop" v-if="isThisSelected">
    <SearchTask :thisList="thisList"/>
  </div>
  <div class="main-wrapper flex-column" :class="marginBot">
    <div :id="thisList.id" class ="task-list shadow" v-if="!isAListSelected.state || isThisSelected">
      <div class="list-main-container shadow">
        <div class="list-name-container">
          <div class="list-name">
            <input class="input-text task-list-name" type="text" v-model.lazy ="thisList.name" @change.lazy="saveEdit"/>
          </div>
          <button class="button shadow delete task-delete" @click="doDelete">Delete</button>
          <button class="button expand shadow" @click="doShowTasks">{{ moreLess }}</button>
        </div>
        <div v-if="isThisSelected">
          <div class="list-tasks-container shadow">
            <template v-for="task in thisList.tasks" :key="task">
              <template v-if="task.doShow">
                <Task :thisTask="task" :thisList="thisList" :allLists="allLists"/>
              </template>
            </template>
            <AddTask v-if="isAListSelected.state" :thisList="thisList" :allLists="allLists"/>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Task from "./Task.vue";
import AddTask from '../components/AddTask.vue';
import SearchTask from '../components/SearchTask.vue';


export default {
  name:'TaskList',
  props:['thisList', 'isAListSelected', 'SearchTask', 'allLists' ],
  components: { Task, AddTask, SearchTask },
  data(){  
    return{
      moreLess: 'More...',
      isThisSelected: false,
      marginTop: '',
      marginBot: ''
    }
  },
  methods:{
    doShowTasks(){
      if(!this.isThisSelected){
        this.moreLess = 'Less...'
        this.isThisSelected = true
        this.marginTop= 'margin-top'
        this.marginBot= 'margin-bot'
        this.isAListSelected.state = true
      } else{
        this.moreLess = 'More...'
        this.isThisSelected = false
        this.marginTop= ''
        this.marginBot= ''
        this.isAListSelected.state = false
      }
    },
    doDelete(){
      this.isThisSelected = false
      this.isAListSelected.state = false
      this.allLists.splice(this.allLists.indexOf(this.thisList),1)
      this.saveEdit()
    },
    saveEdit(){
      localStorage.setItem('ListOfTaskLists', JSON.stringify(this.allLists))
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
  display: flex;
  align-items: center;
  flex: 1 1 0;
  padding-top: 5px;
  margin-bottom: 5px;
  margin-top: 7px;
  height: 20px;
}
.task-list-name:valid{
  font-size: 18px;
  font-weight: 700;
  color: white;
}
.task-delete{
  margin-right: 5px;
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
.margin-top{
  margin-top: 50px;
}
.margin-bot{
  margin-bottom: 50px;
}

</style>
