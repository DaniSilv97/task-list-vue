export default{
methods:{
    nextDayDate(){
        let today = new Date()
        let tomorrowDay = new Date(today)
        tomorrowDay.setDate(today.getDate()+1)
        const month = String(tomorrowDay.getMonth()+1).padStart(2,0)
        const nextDay = (today.getFullYear() +'-'+ month +'-'+ String(tomorrowDay.getDate()).padStart(2,0))
        return nextDay
    },
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
}}
