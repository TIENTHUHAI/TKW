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


const btnXemThem = document.querySelector('#xemthem');
const showXemThem = document.querySelector('.show-xemthem');

btnXemThem.addEventListener('click', function(e) {
    e.preventDefault();

    showXemThem.classList.remove('d-none');
    setTimeout(() => {
        showXemThem.classList.add('show');
    }, 10);  // Small delay to ensure the transition applies

    btnXemThem.style.display = 'none';
});


document.addEventListener('DOMContentLoaded', function () {
    const logoTitles = document.querySelectorAll('.logo-title');
    const rowContents = document.querySelectorAll('.row-content');

    logoTitles.forEach((logoTitle, index) => {
        logoTitle.addEventListener('click', () => {
            // Ẩn tất cả các hàng
            logoTitles.forEach(title => {
                title.style.backgroundColor = '';
            });
            logoTitle.style.backgroundColor = '#ee233f';

            rowContents.forEach(rowContent => {
                rowContent.style.display = 'none';
            });

            // Hiển thị hàng tương ứng
            rowContents[index].style.display = 'flex';
        });
    });
});