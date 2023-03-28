<template>
  <div class="list-task-container" :id="thisTask.id">
    <input type="checkbox">
    <div class="task-name-date">
      <h4 class="task-name">{{ thisTask.name }}</h4>
      <p class="task-date">doeDate</p>
    </div>

    <button class="button shadow delete">Delete</button>
  </div>
</template>

<script>

export default {
  props:['thisTask'],
  mounted(){
    console.log(this.thisTask)
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