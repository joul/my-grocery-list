// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.querySelector('.grocery');
const submitBtn = document.querySelector('.submit-btn');
const constainer = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
//submit form
form.addEventListener('submit',addItem);

// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString() //using timestamp for 'unique id' demo purposes
    if (value !== '' && editFlag === false) // if (value && !editFlag) //this would work too
    {
        console.log('add item to the list')
    }
    else if (value !== '' && editFlag === true) // if(value && editFlag)
    {
        console.log('editing')
    }
    else{
        alert.textContent = 'empty value';
        alert.classList.add('alert-danger');
    }
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
