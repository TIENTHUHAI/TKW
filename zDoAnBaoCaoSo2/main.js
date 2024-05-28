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
    // const form1 = document.getElementById('form-box1')
    // const form2 = document.getElementById('form-box2')
    // const tenDangNhap = document.getElementById('ten-dang-nhap')
    // const mkDangNhap = document.getElementById('matkhau-dang-nhap')

    // Đăng ký
    // Get elements for registration and login forms
    const tenDangKy = document.getElementById('ten-dang-ky');
    const mkDangKy = document.getElementById('matkhau-dang-ky');
    const mkDangKy2 = document.getElementById('matkhau-dang-ky-2');
    const sdtDangKy = document.getElementById('sdt-dang-ky');
    const emailDangKy = document.querySelector('#form-box2 input[type="email"]');

    const tenDangNhap = document.getElementById('ten-dang-nhap');
    const mkDangNhap = document.getElementById('matkhau-dang-nhap');

    const form1 = document.getElementById('form-box1');
    const form2 = document.getElementById('form-box2');

    function showError(input, message) {
        let parent = input.parentElement;
        let small = parent.querySelector('small');

        small.classList.add('error');
        small.innerText = message;
    }

    function showSuccess(input) {
        let parent = input.parentElement;
        let small = parent.querySelector('small');

        small.classList.remove('error');
        small.innerText = '';
    }

    function checkEmptyError(listInput) {
        let isEmptyError = false;
        listInput.forEach(input => {
            input.value = input.value.trim();

            if (!input.value) {
                isEmptyError = true;
                showError(input, 'Vui lòng nhập thông tin!');
            } else {
                showSuccess(input);
            }
        });

        return isEmptyError;
    }

    function checkEmailError(input) {
        const regexEmail = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/mg;
        input.value = input.value.trim();

        let isEmailError = !regexEmail.test(input.value);
        if (!isEmailError) {
            showSuccess(input);
        } else {
            showError(input, 'Kiểm tra lại Email!');
        }
        return isEmailError;
    }

    function checkPasswordMatch(password, confirmPassword) {
        if (password.value !== confirmPassword.value) {
            showError(confirmPassword, 'Mật khẩu không khớp!');
            return false;
        } else {
            showSuccess(confirmPassword);
            return true;
        }
    }

    form2.addEventListener('submit', function(e) {
        e.preventDefault();
    
        let isEmptyError2 = checkEmptyError([tenDangKy, mkDangKy, mkDangKy2, sdtDangKy]);
        let isEmailError = checkEmailError(emailDangKy);
        let isPasswordMatch = checkPasswordMatch(mkDangKy, mkDangKy2);
    
        if (!isEmptyError2 && isPasswordMatch) {
            const user = {
                name: tenDangKy.value,
                password: mkDangKy.value,
                phone: sdtDangKy.value,
                email: emailDangKy.value
            };
    
            localStorage.setItem('user', JSON.stringify(user));
            alert('Đăng ký thành công! Bạn có thể đăng nhập ngay.');
            form2.submit();
        }
    });

    form1.addEventListener('submit', function(e) {
        e.preventDefault();
    
        let isEmptyError = checkEmptyError([tenDangNhap, mkDangNhap]);
    
        if (!isEmptyError) {
            const user = JSON.parse(localStorage.getItem('user'));
    
            if (user && (user.phone === tenDangNhap.value || user.email === tenDangNhap.value) && user.password === mkDangNhap.value) {
                alert('Đăng nhập thành công!');
                document.querySelector('.user-login-register').style.display = 'none'
                document.querySelector('.login-success').style.display = 'block'
                document.querySelector('#wrapper').style.display = 'none'
                document.querySelector('.thongtin-nguoidung-ten').innerText = tenDangKy.value

                // form1.submit();
            } else {
                showError(tenDangNhap, 'Thông tin đăng nhập không chính xác!');
                showError(mkDangNhap, 'Thông tin đăng nhập không chính xác!');
            }
        }
    });


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
    var FourDays = ((4*1000*60*60*24)); // 1000 1s * 60 60s * 60 *60p * 24
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


// Luu thông tin đăng nhập
// Giỏ Hàng //
const btn=document.querySelectorAll(".click-giohang")
// console.log(btn)
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        var producImg = product.querySelector("img").src
        var productTenSP = product.querySelector(".TenSP").innerText
        var productGiaSP = product.querySelector(".GiaSP").innerText

        addGioHang(producImg,productTenSP,productGiaSP)
}})
})
function addGioHang(producImg,productTenSP,productGiaSP){
    var SanPham = document.querySelectorAll("tbody tr")
    for(var i=0;i<SanPham.length;i++){
        var KiemTra = document.querySelectorAll(".KiemTraTenSP")
        if(KiemTra[i].innerHTML == productTenSP){
            alert("Sản phẩm bạn chọn đã có trong giỏ hàng")
            return
        }
    }
    var addSP = document.createElement("tr")
    var SP = '<tr><td style="display: flex;align-items: center; width: 198px;"><img style="width: 70px;" src="'+producImg+'" alt=""><span class="KiemTraTenSP">'+productTenSP+'</span></td><td><span class="value">'+productGiaSP+'</span></td><td><input style="width: 30px;outline: none; padding-left: 6px; margin-left: 4px" type="number" value="1" min="1"></td><td style="cursor: pointer;"><i class="deleteSP delete fa-solid fa-trash"></i></td></tr>'
    addSP.innerHTML = SP 
    var listSP = document.querySelector("tbody")
    var firstSP = listSP.firstChild;
    if (firstSP) {
        listSP.insertBefore(addSP, firstSP);
    } else {
        listSP.appendChild(addSP);
    }
    TinhTIen()
    deleteSP()
    updateInput()
    // TinhTongSL()
}
// Hàm đổi tiền thành số nguyên
function unformatCash(str) {
    return str.replace(/\./g, '');
  }
// Tính Tổng Tiền 
function TinhTIen(){
    var SanPham = document.querySelectorAll("tbody tr")
    var TinhTongTien = 0
    var TongSL = 0
    for(var i=0;i<SanPham.length;i++){
        var inputValue = SanPham[i].querySelector("input").value
        var giaSanPham = SanPham[i].querySelector(".value").innerHTML 
        DoiGiaSP = unformatCash(giaSanPham)
        xGiaSP = inputValue*DoiGiaSP
        TinhTongTien = TinhTongTien + xGiaSP    

        TongSL += parseInt(inputValue)
        console.log(TongSL)
    }
    GiaThuc = TinhTongTien.toLocaleString('de-DE')
    var TongTien = document.querySelector(".TongTien span")
    TongTien.innerHTML = GiaThuc

    var TongSoLuong = document.querySelector(".Nuthien span")
    TongSoLuong.innerHTML = TongSL

    var HienGiaicon=document.querySelector(".Nuthien span")
}
// Hàm xoá 
function deleteSP(){
    var SanPham = document.querySelectorAll("tbody tr")
    for(var i=0;i<SanPham.length;i++){
        var KiemTra = document.querySelectorAll(".deleteSP")
        KiemTra[i].addEventListener("click",function(event){
            var Xoa = event.target
            var XoaSP=Xoa.parentElement.parentElement
            XoaSP.remove()
            TinhTIen()
        })
    }
    var deleteAllBtn = document.querySelector(".deleteAll");
    deleteAllBtn.addEventListener("click", function () {
      var SanPham = document.querySelectorAll("tbody tr");
      for (var i = 0; i < SanPham.length; i++) {
        SanPham[i].remove();
      }
      TinhTIen();
    });
}
function updateInput(){
    var SanPham = document.querySelectorAll("tbody tr")
    for(var i=0;i<SanPham.length;i++){
        var inputValue = SanPham[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            TinhTIen()
        })
    }
} 
// click tắt mở giỏ h
const btnAn = document.querySelector(".NutAn")
const btnshow = document.querySelector(".Nuthien")
btnshow.addEventListener("click",function(){
    document.querySelector(".GioHang").style.display="block"
})
btnAn.addEventListener("click",function(){
    document.querySelector(".GioHang").style.display="none"
})

document.querySelector('.icon-bars').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
});

