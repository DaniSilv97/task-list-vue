<template>
  <div class ="task-list shadow">
    <div class="list-main-container shadow">
      <div class="list-name-container">
        <h2 class="list-name">Task List Name</h2>
        <button class="button expand shadow">more...</button>
      </div>
      <div class="list-tasks-container">
        <Task/>
        <Task/>
        <Task/>
      </div>
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue"
export default {
  
  components: { Task }
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
  padding-top: 5px;
  margin-bottom: 5px;
  margin-top: 7px;
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
</style>