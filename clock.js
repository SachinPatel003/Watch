setInterval(() => {

let now = new Date()
let hour1 = now.getHours()
let minute1 = now.getMinutes()
let second1 = now.getSeconds()

let hRotate = (30 * hour1) + (0.5 * minute1)
mRotate = 6*minute1
sRotate = 6*second1

hour.style.transform = `rotate(${hRotate}deg)`
minute.style.transform = `rotate(${mRotate}deg)`
second.style.transform = `rotate(${sRotate}deg)`
}, 1000);

let now = new Date()
let hour1 = now.getHours()
console.log(hour1);
