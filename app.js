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

// Delete a Book from the list

var btnDelete = document.getElementsByClassName('button')
var li = document.querySelectorAll('li')


for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener('click' , function(){
        list.removeChild(li[i])
        // console.log(i)
        })
    }

// Add a new Book to the list

var btnAdd = document.getElementById('add-btn')
var input = document.getElementById('input-add')


btnAdd.addEventListener('click',function (event) {
    event.preventDefault()

    var bookName = input.value
    // console.log(bookName)

    // Create new elments
    var newLi = document.createElement('li') 
    var newSpan = document.createElement('span') 
    var newBtn = document.createElement('button') 

    newSpan.textContent = bookName
    newBtn.textContent = 'delete'

    // Adding the text node to the newly created li
    list.appendChild(newLi)
    newLi.appendChild(newSpan)
    newLi.appendChild(newBtn)

    //

    newBtn.classList.add('button')

    newBtn.addEventListener('click' , function(){
        list.removeChild(newLi)
        })

    input.value = ''
})



var inputSearch = document.querySelector('.search-area input')


inputSearch.addEventListener('keyup',function (e) {
    var term = e.target.value.toLowerCase()
    for (let i = 0; i < li.length; i++) {
        var span = li[i].firstElementChild
     if (span.textContent.toLowerCase().indexOf(term) != -1 ){
            li[i].style.display = 'flex'
     }else{
        li[i].style.display = 'none'
     }
        
    }
})



































// var inputAdd = document.getElementById('input-add')
// var btnAdd = document.getElementById('add-btn')

// btnAdd.addEventListener('click' , function (e) {
//     e.preventDefault()
//     var value = inputAdd.value

//     //create elements
//     var li = document.createElement('li')
//     var bookName = document.createElement('span')
//     var button = document.createElement('button')

//     //add content

//     button.textContent = 'delete'
//     bookName.textContent = value

//     //add classes

//     button.classList.add('button')

//     //append elements
//     li.appendChild(bookName)
//     li.appendChild(button)
//     list.appendChild(li)

//     //delete new added book
//     button.addEventListener('click', function() {
//             list.removeChild(li)
//         })
//     inputAdd.value = ''
    
// })


// var search = document.querySelector('.search-area input')

// search.addEventListener('keyup' , function (e) {
//    var term =  e.target.value.toLowerCase()

//    for (let i = 0; i < li.length; i++) {
//         var bookTitle = li[i].firstElementChild.textContent
//         if (bookTitle.toLowerCase().indexOf(term) != -1) {
//             li[i].style.display = 'flex'
//         }else {
//             li[i].style.display = 'none'

//         }
//    }
// })