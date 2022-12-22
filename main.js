
const btnSubmit = document.querySelector('.botons');

btnSubmit.addEventListener('click', saveData);

function saveData() {
    console.log("everything is ok");
    let firstName = document.querySelector('#name').value;
    let lastName = document.querySelector('#lastName').value;
    let age = document.querySelector('#age').value;
    let maleSex = document.querySelector('#male').value;
    let femaleSex = document.querySelector('#female').value;
    let graduated = document.querySelector('#graduated').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let data = [];          
    data.push = {
        name: firstName,
        lastName: lastName,
        age: age,
        sex: maleSex,
        graduated: graduated,
        email: email,
        password: password
    }
    console.log(data);
    document.getElementById("form-register").reset();   
}