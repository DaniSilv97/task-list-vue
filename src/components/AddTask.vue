<template>
  <div class="add-container">
    <div class="add-text task-text" >
      <input class="input-text shadow" type="text" placeholder="e. g. Schoolwork" v-model="newTaskName">
    </div>
    <input v-if="dueDate" class="new-date shadow" type="date" v-model="dueDate">
    <button class="add-task-button button" @click="addTask">Add task</button>
  </div>
</template>

<script>
import dates from '../mixins/dates'

export default {
  mixins:[dates],
  props:['thisList', 'allLists'],
  data(){
    return{
      newTaskName: '',
      dueDate: null
    }
  },
  methods:{
    addTask(){
      this.thisList.tasks.push({name: this.newTaskName, 
                                id: this.taskId(), 
                                date: this.newTaskDate(), 
                                doShow: true,
                                isDone: false,
                                })
      this.newTaskName = ''
      localStorage.setItem('ListOfTaskLists', JSON.stringify(this.allLists))
    },
    taskId(){
      const newId = new Date().getTime() + '11'
      return newId
    },
    newTaskDate(){
      if(this.dueDate === ''){
        return (this.nextDayDate())
      } else{
        return this.dueDate
      }
    },
    //TODO { X } mixins
  },
  created(){
    this.dueDate = this.nextDayDate()
  }
}

</script>

<style>

.add-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top:10px;
  padding-bottom: 10px;
}

.task-text{
  margin-right: 5px;
}

input.input-text{
  flex: 1 ;
  background-color: var(--grey);
  color: var(--lightestGrey);
}

.new-date{
  background-color: var(--grey);
  color: var(--lightestGrey);
  height: 30px;
  border-radius: 15px;
  padding-left: 5px;
}
.add-task-button{
  margin-left: 5px;
  height: 30px;
}
</style>