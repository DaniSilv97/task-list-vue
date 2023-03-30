<template>
<div class="main-wrapper">
    <div class="padding-around">
        <div class="picker-container">
            <template v-for="picker in colorPickers" : key="picker.id">
                <ColorPicker :thisPicker="picker"/>
            </template>
        </div>
        <div class="picker-text-container shadow">
            <template v-for="picker in colorPickers" : key="picker.id">
                <template v-if="picker.text === 'noTime'">
                    <input  placeholder="Past due"
                            :thisPicker="picker" 
                            class="input-text color-text shadow" 
                            type="text" readonly>
                </template>
                <template v-else>
                    <input  :placeholder="'Less than ' + picker.time + ' days'"
                            :thisPicker="picker" 
                            class="input-text color-text shadow" 
                            type="text">
                </template>
            </template>
        </div>
        <div class="ok-container">
            <router-link @click="doThing" to="/" class="button shadow colors-ok"> Change Colors </router-link>
        </div>
    </div>
</div>
</template>

<script>
import ColorPicker from '../components/ColorPicker.vue'
export default {
components:{ ColorPicker },
data(){
    return{
        colorPickers: [ 
            {id: 1, text: 'enoughTime', time: '10', color: '#00d8ff'},
            {id: 2, text: 'shortTime', time: '2', color: '#0097ff'},
            {id: 3, text: 'noTime', time: '0', color: '#0070ff'}
        ]
    }
},
methods:{
    doThing(){
        console.log('didThing')
    }
}
}
</script>

<style>
.picker-container, .picker-text-container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 5px;
    margin-top: 15px;
    border-radius: 15px;
}
.picker-text-container{
    background-color: var(--lightGrey);
    height: 40px;
    padding-top: 5px;
    padding-bottom: 5px;
}
.color-text{
    text-align: center;
    max-width: 24%;
}
.padding-around{
    padding: 10px;
}
.ok-container{
    margin: 10px;
    margin-top: 20px;
}
.colors-ok{
    padding: 10px;
}
</style>