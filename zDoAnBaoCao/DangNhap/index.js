// Đăng ký và đăng nhập
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


// Validate đăng nhập và đăng ký
const form1 = document.getElementById('form-box1')
const form2 = document.getElementById('form-box2')
const tenDangNhap = document.getElementById('ten-dang-nhap')
const mkDangNhap = document.getElementById('matkhau-dang-nhap')

// Đăng ký
const tenDangKy = document.getElementById('ten-dang-ky')
const mkDangKy = document.getElementById('matkhau-dang-ky')
const mkDangKy2 = document.getElementById('matkhau-dang-ky-2')
const sdtDangKy = document.getElementById('sdt-dang-ky')



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

form1.addEventListener('submit', function(e) {
    e.preventDefault()

    let isEmptyError = checkEmptyError([tenDangNhap, mkDangNhap]);
})

form2.addEventListener('submit', function(e) {
    e.preventDefault()

    let isEmptyError2 = checkEmptyError([tenDangKy, mkDangKy, mkDangKy2, sdtDangKy]);
})


// Đăng nhập với Google
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src', profile.getImageUrl());
    $(".dât").css("display", "block");
    $(".g-signin2").css("display", "none");
  }


function signOut()
{
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("Ban da dang nhap thanh cong")
        $(".g-signin2").css("display", "block");
        $(".dât").css("display", "none");
    })
}