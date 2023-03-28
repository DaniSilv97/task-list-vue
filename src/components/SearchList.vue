<template>
  <div class="list-search-container">
    <select class="list-search-select shadow" v-model="selectedList">
      <option value="">Show all</option>
      <template v-for="list in allLists" :key="list.id">
        <option :value="list.name">{{ list.name }}</option>
      </template>
    </select>
    <button class="button list-search-button" @click="sortLists">Select List</button>
  </div>
</template>

<script>
export default {
  props:['allLists'],
  data(){
    return{
      selectedList: ''
    }
  },
  methods:{
    sortLists(){
      this.allLists.forEach((element)=>{
        if(!this.selectedList){
          element.isShown = true
        }else if(this.selectedList === element.name){
          element.isShown = true
        } else{
          element.isShown = false
        }

      })
    }
  }
}
</script>

<style>
.list-search-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}

.list-search-select{
  flex: 1 1 0;
  margin-right: 10px;
  border-radius: 15px;
  height: 30px;
  padding-left: 5px;
  background-color: var(--darkGrey);
  color: var(--lightestGrey)
}



</style>