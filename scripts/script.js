const element = document.querySelector('.submit');

const inputs = document.querySelectorAll('input');

inputs.forEach(i => {
    i.addEventListener('keydown', (e) => {
        console.log(i.id);
        let x = document.querySelector(`.${i.id}`);
        document.getElementById(`${x.id}`).innerHTML = '';
    })
})

element.addEventListener('click', (e) => {

    let empty = false;
    inputs.forEach(x => {
        if (!x.value) {
            empty = true;
        }
    });

    if (empty) {
        alert('yoo come on, fill out everything...');
        e.preventDefault();
        return false;
    }

    if (validate()) {
        e.preventDefault();
        return false;
    }

    alert("You have given us your info...!");
    return true;

});

const validate = () => {

    if (first_name.value.length === 0) {
        document.getElementById('error_fname').innerHTML = 'Invalid First Name'
        return true;
    };

    if (last_name.value.length === 0) {
        console.log('last_name invalid');
        document.getElementById('error_lname').innerHTML = 'Invalid Last Name'
        return true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
    document.getElementById('error_email').innerHTML = 'Invalid Email';
    return true;
    }

    const numbers = /^\d+$/;
    if (!numbers.test(phone.value) || phone.value.length < 10) {
    document.getElementById('error_phone').innerHTML = 'Invalid Phone';
    return true;
    }

    if (password.value.length < 10) {
        document.getElementById('error_pw').innerHTML = 'Invalid Password'
        return true;
    }

    if (cf_pw.value.length < 10) {
        document.getElementById('error_cpw').innerHTML = 'Invalid Confirm Password'
        return true;
    }

    if (password.value !== cf_pw.value) {
        alert('Passwords do not match');
        return true;
    }

    return false;
}
