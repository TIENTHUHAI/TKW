// Banner
const banner = document.getElementById('banner');
const images = banner.querySelectorAll('img');
const totalImages = images.length;
let currentIndex = 0;

function showImage(index) {
    images.forEach(
        img => img.style.display = 'none'
    );
    images[index].style.display = 'block';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}
setInterval(nextImage, 3000);



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


//Tìm kiếm
const xmarkIcons = document.querySelectorAll('.fa-xmark');

xmarkIcons.forEach(function(icon) {
    icon.addEventListener('click', function(event) {
        let saveSearchItem = icon.closest('.save-search');
        saveSearchItem.remove();
    });
});
 
const lichSuTimKiem = document.querySelector('.lichsu-timkiem');
const formSearch = document.querySelector('.form-search');

    formSearch.addEventListener('submit', function(event) {

        event.preventDefault();

        const ndTimKiem = document.querySelector('.head-search-input').value;
        if (ndTimKiem === '') return;

        const newSearchItem = document.createElement('div');
        newSearchItem.classList.add('save-search');

        const searchItemText = document.createElement('div');
        searchItemText.classList.add('save-search-text');
        searchItemText.textContent = ndTimKiem;

        const xmarkIcon = document.createElement('i');
        xmarkIcon.classList.add('fa-solid', 'fa-xmark');
        xmarkIcon.style.padding = '4px';

        xmarkIcon.addEventListener('click', function(event) {

            let saveSearchItem = xmarkIcon.closest('.save-search');
            saveSearchItem.remove();
        });

        newSearchItem.appendChild(searchItemText);
        newSearchItem.appendChild(xmarkIcon);
        lichSuTimKiem.appendChild(newSearchItem);

        document.querySelector('.head-search-input').value = '';

        sessionStorage.setItem('ndTimKiem', ndTimKiem);
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

// Count Down
function countDown() {   
    var today = new Date().getTime();
    var FourDays = ((4*1000*60*60*24));
    var addFourDay = new Date(today + FourDays);
    addFourDay.setHours(18);
    addFourDay.setMinutes(50);
    addFourDay.setSeconds(30);
    
    var countDownDate = addFourDay;
    
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.querySelector('#countdown .days').innerHTML = days + "<br>Ngày";
        document.querySelector('#countdown .hour').innerHTML = hours + "<br>Giờ";
        document.querySelector('#countdown .minute').innerHTML = minutes + "<br>Phút";
        document.querySelector('#countdown .second').innerHTML = seconds + "<br>Giây";
    }, 1000);
}

countDown();

// ScrollTo danh mục
document.querySelectorAll('a[href="#danhmuc"]').forEach(a => {
    a.addEventListener('click', function(event) {
        event.preventDefault();

        let target = document.querySelector('#danhmuc');
        let offsetTop = target.getBoundingClientRect().top + window.scrollY - 100;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });

    });
});

// Silder products J QUERY
var carouselWidth = $('.carousel-flash-sale')[0].scrollWidth;
var cardWidth = $('.carousel-item-flash-sale').innerWidth();

var scrollPosition = 0;

$('.next-flash-sale').on('click', function() {
    if (scrollPosition < (carouselWidth - (cardWidth * 5))) {

        scrollPosition = scrollPosition + cardWidth;
        $('.carousel-flash-sale').animate({scrollLeft: scrollPosition}, 300);
    }
});

$('.prev-flash-sale').on('click', function() {
    if (scrollPosition > 0) {

        scrollPosition = scrollPosition - cardWidth;
        $('.carousel-flash-sale').animate({scrollLeft: scrollPosition}, 300);
    }
});



// Liên kết đến trang lọc nd đã chọn DanhMuc -> iPhone -> Sp Iphone
document.addEventListener("DOMContentLoaded", function() {
    
    const phoneLinks = document.querySelectorAll('.item-danhmuc-cap2');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            const brandName = this.textContent.trim(); 
            filterByBrand(brandName); 
        });
    });

    const danhMucItems = document.querySelectorAll('.danh-muc-item');

    danhMucItems.forEach(item => {
        const itemInner = item.querySelector('.item-inner');
        item.addEventListener('click', function(event) {
            event.preventDefault(); 
            const brandName = itemInner.textContent.trim(); 
            filterByBrand(brandName); 
        });
    });


    function filterByBrand(brandName) {
        window.location.href = `DanhMuc/danhMuc.html?brand=${brandName}`;
    }
});