
const element = document.querySelector('.submit');

const inputs = document.querySelectorAll('input');

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
        console.log('invalid');
        e.preventDefault();
        console.log(document.getElementsByClassName('error'));
        // let x = document.querySelectorAll('.error');
        // x.forEach(d => {
        //     document.getElementById(d.id).innerHTML = 
        // })


        return false;
    }

    alert("You have given us your info...!");
    return true;

});



const validate = () => {

    if (first_name.value.length < 5) {
        document.getElementById('error_fname').innerHTML = 'Invalid First Name'
        return true;
    };

    if (last_name.value.length < 5) {
        console.log('last_name invalid');
        document.getElementById('error_lname').innerHTML = 'Invalid Error'
        return true;
    }

    // if (!email.value) {
    //     console.log('missing email');
    //     return true;

    // }

    // if (!phone.value) {
    //     console.log('missing phone');
    //     return true;

    // }

    if (password.value.length < 10) {
        console.log('pw too short');
        document.getElementById('error_pw').innerHTML = 'Invalid Password'
        return true;
    }

    if (password.value.length < 10) {
        console.log('cf pw too short');
        document.getElementById('error_cpw').innerHTML = 'Invalid Password'
        return true;
    }

    if (password.value !== cf_pw.value) {
        console.log(password.value);
        console.log(cf_pw.value);
        console.log('passwords do not match');
        return true;
    }

    return false;
}
