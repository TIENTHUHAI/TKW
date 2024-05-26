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

// Liên kết đến trang lọc nd đã chọn DanhMuc -> iPhone -> Sp Iphone
document.addEventListener("DOMContentLoaded", function() {
    
    const phoneLinks = document.querySelectorAll('.dt-dm');

    phoneLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            const brandName = this.textContent.trim(); 
            filterByBrand(brandName); 
        });
    });

    function filterByBrand(brandName) {
        
        window.location.href = `../DanhMuc/danhMuc.html?brand=${(brandName)}`;
    }
});