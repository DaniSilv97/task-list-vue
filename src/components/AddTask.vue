<template>
  <div class="add-container">
    <div class="add-text task-text" >
      <input class="input-text" type="text" placeholder="e. g. Schoolwork" v-model="newTaskName">
    </div>
    <input v-if="dueDate" class="new-date" type="date" v-model="dueDate">
    <button class="add-task-button button" @click="addTask">Add task</button>
  </div>
</template>

<script>

export default {
  props:['thisList'],
  data(){
    return{
      newTaskName: '',
      dueDate: null
    }
  },
  methods:{
    addTask(){
      this.thisList.tasks.push({name: this.newTaskName, id: this.taskId(), date: this.newTaskDate(), doShow: true})
      this.newTaskName = ''
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
    nextDayDate(){
      const today = new Date()
      const month = String(today.getMonth()+1).padStart(2,0)
      const tomorrowDay = today.getDate()+1
      const nextDay = (today.getFullYear() +'-'+ month +'-'+ tomorrowDay)
      return nextDay
    }
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
.new-date

.add-task-button{
  margin-left: 5px;
  height: 30px;
}
</style>