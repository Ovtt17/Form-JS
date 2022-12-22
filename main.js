const btnSubmit = document.querySelector('.botons');
btnSubmit.addEventListener('click', saveData);

function saveData() {
    const firstName = document.querySelector('#name').value;
    const lastName = document.querySelector('#lastName').value;
    const age = document.querySelector('#age').value;
    const sex= document.querySelector("input[name='sex']:checked").value;
    const graduated = document.querySelector('#graduated').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const data = {
        name: firstName,
        lastName: lastName,
        age: age,
        sex: sex,
        graduated: graduated,
        email: email,
        password: password
    }

    console.log(data);
    document.getElementById("form-register").reset();   
}