<template>
  <div class="add-container">
    <div class="add-text list-text" >
      <input class="input-text" type="text" placeholder="e. g. Schoolwork" v-model="searchTask">
    </div>
    <button @click="lookForTask" class="add-list-button button">Search For Task</button>
  </div>
</template>

<script>

export default {
  props:['thisList'],
  data(){
    return{
      searchTask: ''
    }
  },
  methods:{
    lookForTask(){
      this.thisList.tasks.forEach((task)=>{
        if(task.name.includes(this.searchTask)){
         task.doShow = true
        } else{
          task.doShow = false
        }
      })
    }
  }
}
</script>

<style>

</style>