const form2 = document.getElementById('form2')
const ten = document.getElementById('name')
const email = document.getElementById('email')
const soDienThoai = document.getElementById('phone')
const loiNhan = document.getElementById('message')


function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')

    small.classList.add('error')
    small.innerText = message
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')

    small.classList.remove('error')
    small.innerText = ''
}


function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()

        if(!input.value) {
            isEmptyError = true;
            showError(input, 'Vui lòng nhập thông tin!')
        }else {
            showSuccess(input)
        }
    });

    return isEmptyError
}

function checkEmailError(input) {
    const regexEmail = /(([^<>()\[\]\\.,;:\s+@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/mg;
    input.value = input.value.trim();

    let isEmailError = !regexEmail.test(input.value);
    if (!isEmailError) {
        showSuccess(input);
    } else {
        showError(input, 'Kiểm tra lại Email!');
    }
    return isEmailError;
}

form2.addEventListener('submit', function(e) {
    e.preventDefault()

    let isEmptyError = checkEmptyError([ten, email, soDienThoai, loiNhan]);
    let isEmailError = checkEmailError(email);
})


// Đăng ký đăng nhập
const loginRegister = document.querySelector('.user-login-register');
const formLoginRegister = document.getElementById('wrapper');
const formBox = document.getElementById('form-box1');
const formBox2 = document.getElementById('form-box2');
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')


loginRegister.addEventListener('click', function() {
    if (formLoginRegister.style.display = 'none') {
        formLoginRegister.style.display = 'flex';
    } else {
        formLoginRegister.style.display = 'none';
    }
});

formLoginRegister.addEventListener('click', function() {

    if (formLoginRegister.style.display = 'flex') {
        formLoginRegister.style.display = 'none';
    }
});



formBox.addEventListener('click', function(event) {
    event.stopPropagation();
}); 

formBox2.addEventListener('click', function(event) {
    event.stopPropagation();
});


registerLink.addEventListener('click', function() {
    if(formBox.style.display != 'none')
    {
        formBox.style.display = 'none'
        formBox2.style.display = 'block'
    }
})

loginLink.addEventListener('click', function() {
    if(formBox2.style.display != 'none')
    {
        formBox.style.display = 'block'
        formBox2.style.display = 'none'
    }
})

// Click tìm kiếm ko bị ẩn đi
document.querySelector('.head-search-input').addEventListener('click', function() {
    const lichsuTimkiem = document.querySelector('.lichsu-timkiem');
    lichsuTimkiem.style.display = 'block';
});

document.querySelector('.lichsu-timkiem').addEventListener('click', function(e) {
    e.stopPropagation();
});

document.addEventListener('click', function(e) {
    const lichsuTimkiem = document.querySelector('.lichsu-timkiem');
    const headSearchInput = document.querySelector('.head-search-input');
    if (e.target !== headSearchInput) {
        lichsuTimkiem.style.display = 'none';
    }
});