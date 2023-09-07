let today = new Date();
let todaysDate = document.getElementById('date')
let currentTime = document.getElementById('time')
let currentDay = document.getElementById('day')
const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];






let date = today.getFullYear() + '/' + today.getMonth() + '/' + today.getDate();
let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
let day = weekDay[today.getDay()];


console.log(date)
console.log(time)
console.log(day)



currentTime.textContent ='Time: ' + time
currentDay.textContent = "Day: " + day
todaysDate.innerHTML = 'Date: ' + date
