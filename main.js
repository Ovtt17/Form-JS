const firstName = document.querySelector('#name').value;
const lastName = document.querySelector('#lastName').value;
const age = document.querySelector('#age').value;
const maleSex = document.querySelector('#male').value;
const femaleSex = document.querySelector('#female').value;
const graduated = document.querySelector('#graduated').value;
const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;

const btnSubmit = document.querySelector('.botons');

btnSubmit.addEventListener('click', saveData);

function saveData() {
    console.log("everything is ok");
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
}