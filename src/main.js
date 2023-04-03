
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import TaskList from './components/TaskList.vue'
import AddList from './components/AddList.vue'
import SearchList from './components/SearchList.vue'

const app = createApp(App).use(router)

app.component('TaskList',TaskList)
app.component('AddList',AddList)
app.component('SearchList',SearchList)

app.mount('#app')