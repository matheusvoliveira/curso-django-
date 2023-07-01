let one = document.querySelector('#one')
one.addEventListener('mouseover', function(){
    one.textContent = 'Mouse currently over'
    one.style.color = 'red'
})
one.addEventListener('mouseout', function(){
    one.textContent = 'HOOVER ME'
    one.style.color = 'black'
})
let two = document.querySelector('#two')
two.addEventListener('click',function(){
    two.textContent = 'JUST CLICKED'
    two.style.color = 'purple'
})
let three = document.querySelector('#three')
three.addEventListener('dblclick', function(){
    three.textContent = 'I WAS DOUBLE CLICKED';
    three.style.color = 'yellow'
})