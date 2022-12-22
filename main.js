const btnSubmit = document.querySelector('.botons');
btnSubmit.addEventListener('click', saveData);

function saveData() {
    let firstName = document.querySelector('#name').value;
    let lastName = document.querySelector('#lastName').value;
    let age = document.querySelector('#age').value;
    let sexo= document.querySelector("input[name='sexo']:checked").value;
    let graduated = document.querySelector('#graduated').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let data = {
        name: firstName,
        lastName: lastName,
        age: age,
        sex: sexo,
        graduated: graduated,
        email: email,
        password: password
    }

    console.log(data);
    document.getElementById("form-register").reset();   
}