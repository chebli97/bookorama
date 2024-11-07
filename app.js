// Delete all books

var check = document.getElementById('hide')
var list = document.querySelector('ul')

check.addEventListener('click' , function () {
    
    if (check.checked) {
        list.style.display = 'none'
    } else {
        list.style.display ='initial'
    }
})
