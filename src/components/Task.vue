<template>
  <div class="list-task-container" :id="thisTask.id">
    <input type="checkbox">
    <div class="task-name-date">
      <h4 class="task-name">{{ thisTask.name }}</h4>
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
    }
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
  margin-left: 5px;
  margin-right: 10px;
  align-items: center;
}
.delete{
  height: 30px;
}
</style>