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
            // Loại bỏ lớp active khỏi tất cả logoTitle
            logoTitles.forEach(title => title.classList.remove('active'));
            // Thêm lớp active vào logoTitle được nhấp
            logoTitle.classList.add('active');

            // Ẩn tất cả các rowContents
            rowContents.forEach(rowContent => {
                rowContent.classList.remove('d-flex');
                rowContent.classList.add('d-none');
            });
            // Hiển thị rowContent tương ứng
            rowContents[index].classList.remove('d-none');
            rowContents[index].classList.add('d-flex');
        });
    });
});


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