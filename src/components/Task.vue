<template>
  <Transition name="fade" @after-leave="doDelete"  >
    <div v-show="teste">
      <div class="list-task-container shadow" :id="thisTask.id" :class="cssDoneNotDone">
        <input type="checkbox" class="shadow" v-model="isTaskDone" @change="isDoneNotDone">
        <div class="task-name-date">
          <input class="input-text task-name" type="text" v-model.lazy ="thisTask.name" @change.lazy="saveEdit"/>
          <p class="task-date" :style="`color: ${dueDateColor}`">{{ showDate() }}</p>
        </div>

        <button class="button shadow delete" @click="doHide">Delete</button>
      </div>
    </div>
  </Transition>
</template>

<script>
import dates from '../mixins/dates'
export default {
  mixins:[dates],
  props:['thisTask', 'thisList', 'allLists'],
  data(){
    return{
      isTaskDone: false,
      cssDoneNotDone: '',
      colors: [],
      teste: false
    }
  },
  mounted(){
    setTimeout(()=>{
      this.teste = true
    },1)
  },
  methods:{
    //TODO { X } mixins
    doHide(){
      this.teste = false
    },
    doDelete(){
      this.thisList.tasks.splice(this.thisList.tasks.indexOf(this.thisTask),1)
      localStorage.setItem('ListOfTaskLists', JSON.stringify(this.allLists))
    },
    getColor(name){
      let result = ''
      this.colors.forEach((element) => {
        if(element.text === name){
          result = element.color
        } else{
          return '#eee'
        }
      })
      return result
    },
    getTime(name){
      let result = ''
      this.colors.forEach((element) => {
        if(element.text === name){
          result = element.time
        } else{
          return '#eee'
        }
      })
      return result
    },
  },
  computed:{
    dueDateColor(){
      const currentDateObj = new Date()
      const diffInDays = (this.newDate().getTime() - currentDateObj.getTime()) / (1000 * 3600 * 24);
      if(currentDateObj >= this.newDate()){
            return(this.getColor('noTime'))
        } else {
            if (diffInDays <= this.getTime('shortTime')){
                return(this.getColor('shortTime'))
            } else if (diffInDays <= this.getTime('enoughTime')){
                return(this.getColor('enoughTime'))
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
    },
    saveEdit(){
      localStorage.setItem('ListOfTaskLists', JSON.stringify(this.allLists))
    }
  },
  created(){
    this.colors = JSON.parse(localStorage.getItem('colorPickers'))
  }
}
</script>

<style>
.list-task-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  /*TODO { X } review padding/margin*/
  padding: 0px 5px 0px 5px;
  border-radius: 10px;
  background-color: var(--grey);
  height: 40px;
}
.task-name-date{
  flex: 1 1 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 10px 0px 5px;
  align-items: center;
}
.task-name:valid{
  color: white;
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

.fade-enter-from{
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}
.fade-enter-active{
  transition: all 1s ease;
}
.fade-leave-from{
  opacity: 1;
}
.fade-leave-to{
  opacity: 0;
}
.fade-leave-active{
  transition: all 1s ease;
}

</style>