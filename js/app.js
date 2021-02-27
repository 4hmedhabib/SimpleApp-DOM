const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const submit = document.querySelector('#submit')
const users = document.querySelector('.users')
const liNum = document.querySelectorAll('li')
const ul = document.querySelector('ul')

submit.addEventListener('click', (e) => {

    e.preventDefault()

    addUser()
})



const addUser = () => {
    console.log(liNum);

    if ((nameInput.value && emailInput.value) === '') {
        console.log("Empty!");
    } else {
        const li = document.createElement("li")



        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))


        ul.appendChild(li)
        users.style.display = 'initial'


    }


}

// const createUser = document.createTextNode( < li > < div > < font > Name: < /font> Ahmed Habib</div > < div > < font > Email: < /font> info.ahmed.developer@gmail.com</div > < /li>)