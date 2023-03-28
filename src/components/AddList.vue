<template>
  <div class="add-container">
    <div class="add-text list-text" >
      <input class="input-text" type="text" placeholder="e. g. Schoolwork" v-model="newListName">
    </div>
    <button @click="addList" class="add-list-button button">Add task list</button>
  </div>
</template>

<script>

export default {
  props:['allLists'],
  data(){
    return{
      newListName: '',
    }
  },
  methods:{
    getListId(){
      const newId = new Date().getTime() + '22'
      return newId 
    }
  },
  computed:{
    addList(){
      this.allLists.push({name: this.newListName, id: this.getListId(), tasks:[]})
      this.newListName = ''
    },
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
.add-text{
  flex: 1 1 0;
  display: flex;
  background-color: var(--darkGrey);
  border-radius: 15px;
}
.list-text{
  padding: 10px;
}
.input-text{
  padding: 5px;
  height: 20px;
  border-radius: 15px;
  padding-left: 10px;
  padding-right: 10px;
}
input.input-text{
  flex: 1 ;
  background-color: var(--grey);
  color: var(--lightestGrey);
}


.add-list-button{
  margin-left: 10px;
  height: 30px;
}
</style>