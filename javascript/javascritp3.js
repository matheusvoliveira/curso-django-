let hot = false
let temp = 10

if (temp > 80) {
    console.log('Temp is greater than 80')
} else if (temp <= 80 && temp >= 50) {
    console.log('Its not very hot today');
} else if (temp < 50 && temp >= 32) {
    console.log('Its pretty cold out!');
} else {
    console.log('Its very cold out');
}