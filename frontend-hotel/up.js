const body = document.querySelector('body');

const update = document.querySelector('#update-form-1');
const update2 = document.querySelector('#update-form-2');
const switchMe = document.querySelector('#switch');
const returnSwitch = document.querySelector('#return-switch');

switchMe.addEventListener('click', () => {
    update.style.display = 'none';
    update2.style.display = 'block';
})

returnSwitch.addEventListener('click', () => {
    update2.style.display = 'none';
    update.style.display = 'block';
})

const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const email = document.querySelector('#email').value;

    fetch('/users/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, email })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.error) {
            alert(data.error);
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error(error);
        alert('An error occurred. Please try again later.');
    });
})