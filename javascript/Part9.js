fName = prompt('What is your first name')
lName = prompt('What is your last name')
age = prompt('How old are you')
height = prompt('How tall are you')
pet = prompt('What is your pet name')

if (fName[0] == lName[0] && age >= 20 && age <= 30 && height >= 170 && pet.endsWith('y')){
  alert('spy')
} else {
  alert('not spy')
}

myobj = {name: 'Matheus', function(){console.log('hello '+ this.name)}}