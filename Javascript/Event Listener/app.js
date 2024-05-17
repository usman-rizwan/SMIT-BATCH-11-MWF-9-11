

var div_element = document.getElementById('box')
var cow_element = document.getElementById('cow')
var boxes = document.getElementsByClassName('box')
console.log(boxes)


div_element.addEventListener('mouseover' , function(){
  
    cow_element.src =  'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHZxMjEzaGRhbnJjdWk0Z2phZ2NtZjNyOTVtbzhkcWc5ZXdvOWRyaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VdQUAnhikFdHea3Koi/giphy.gif'

    cow_element.style.height = '100%'
    cow_element.style.width = '100%'

    cow_element.className += ' animate'
})
div_element.addEventListener('mouseout' , function(){
    console.log('Mouse Over')
    cow_element.src =  'https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y293fGVufDB8fDB8fHww'
    cow_element.style.height = '80%'
    cow_element.style.width = '80%'
})