
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
        alert('yoo come on');
        e.preventDefault();
        return false;
    }

    if (validate()) {
        alert('invalid!');
        e.preventDefault();
        return false;
    }

    alert("You have given us your info...!")
    return true;

});



const validate = () => {

    if (first_name.value.length < 5) {
        return true;
    };

    if (last_name.value.length < 5) {
        console.log('last_name invalid');
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
        return true;
    }

    if (password.value.length < 10) {
        console.log('cf pw too short');
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
