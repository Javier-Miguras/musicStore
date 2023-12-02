// Submit event

const form = document.querySelector('.form');
form.addEventListener('submit', function(event){  
    event.preventDefault();

//validate form

    const {name, email, phone, message} = data;

    if(name === '' || email === '' || phone === '' || message === ''){
        showAlert('All fields are required', true);

        return; 
    }
        showAlert('The message has been sent');
   
});





const data ={
    name: '',     
    email: '',
    phone: '',
    message: ''
}




const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const messageInput = document.querySelector('#message');



nameInput.addEventListener('input', readText); 
emailInput.addEventListener('input', readText);
phoneInput.addEventListener('input', readText);
messageInput.addEventListener('input', readText);

function readText(e){
    //console.log(e.target.value);
    data[e.target.id] = e.target.value;
    // console.log(data);
}

// Result on screen

function showAlert(message, error = null){
    const alert = document.createElement('P');
    alert.textContent = message;

    if(error){
        alert.classList.add('error');
    }else{
        alert.classList.add('correct');
    }

    form.appendChild(alert);

        // disapears before 5 seconds

        setTimeout(() =>{
            alert.remove();
        },5000);
}






