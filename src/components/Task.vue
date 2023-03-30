<template>
  <div class="list-task-container shadow" :id="thisTask.id" :class="cssDoneNotDone">
    <input type="checkbox" class="shadow" v-model="isTaskDone" @change="isDoneNotDone">
    <div class="task-name-date">
      <input class="input-text task-name" type="text" v-model.lazy ="thisTask.name"/>
      <p class="task-date" :style="`color: ${dueDateColor}`">{{ showDate() }}</p>
    </div>

    <button class="button shadow delete" @click="doDelete">Delete</button>
  </div>
</template>

<script>

export default {
  props:['thisTask', 'thisList'],
  data(){
    return{
      isTaskDone: false,
      cssDoneNotDone: ''
    }
  },
  methods:{
    newDate(){
      const date = new Date(this.thisTask.date)
      return date
      },
    showDate(){
      const months = ['Jan','Fev','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      const selfMonth = parseInt(this.newDate().getMonth())
      const monthAsString = months[selfMonth]
      return `${monthAsString} ${this.newDate().getDate()}, ${this.newDate().getFullYear()}`
    },
    doDelete(){
      this.thisList.tasks.splice(this.thisList.tasks.indexOf(this.thisTask),1)
    },
  },
  computed:{
    dueDateColor(){
      const currentDateObj = new Date()
      const diffInDays = (this.newDate().getTime() - currentDateObj.getTime()) / (1000 * 3600 * 24);
      if(currentDateObj >= this.newDate()){
            return('var(--noTime)')
        } else {
            if (diffInDays <= 3){
                return('var(--shortTime)')
            } else if (diffInDays <= 10){
                return('var(--enoughTime)')
            } else{
                return('var(--longTime)')
            }
        }
    },
    isDoneNotDone(){
      this.thisTask.isDone = this.isTaskDone
      if(this.isTaskDone){
        this.cssDoneNotDone = 'task-done'
      } else{
        this.cssDoneNotDone = ''
      }
    }
  }
}
</script>

<style>
.list-task-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 10px;
  background-color: var(--grey);
  height: 40px;
}
.task-name-date{
  flex: 1 1 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
  margin-right: 10px;
  align-items: center;
}
.task-name:valid{
  color: var(--light);
  font-size: 17px;
  font-weight: 700;
}
.task-date{
  font-size: 14px;
  font-weight: 700;
}
.delete{
  height: 30px;
}
.task-done{
  opacity: 0.6;
  text-decoration: line-through;
}
input[type="checkbox"]{
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 2px solid var(--blue);
  background-color: var(--grey);
}
input[type="checkbox"]:hover{
  background-color: var(--hover);
}
input[type="checkbox"]:checked{
  border-color: var(--darkestGrey);
  background-color: var(--grey);
}
.list-task-container:has(input[type="checkbox"]:checked) input[type="text"]{
  opacity: 0.3;
}
.list-task-container:has(input[type="checkbox"]:checked) p{
  opacity: 0.3;
}
</style>