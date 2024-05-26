window.onload = function() {
    const user = JSON.parse(localStorage.getItem('user'));

    document.getElementById('thongtin-hoten').innerText = user.name;
    document.getElementById('thongtin-email').innerText = user.email;
    document.getElementById('thongtin-sdt').innerText = user.phone;
}


const ctnChinhSua = document.querySelector('.content-chinhsua');
const ctnThongTin = document.querySelector('.content-thongtin');
const btnChinhSua = document.getElementById('btn-chinhsua');
const btnLuu = document.getElementById('btn-luu');

const thongtinHoTen = document.getElementById('thongtin-hoten');
const thongtinEmail = document.getElementById('thongtin-email');
const thongtinSDT = document.getElementById('thongtin-sdt');
const thongtinDC = document.getElementById('thongtin-diachi');
const thongtinGT = document.getElementById('thongtin-gioitinh');
const thongtinNgay = document.getElementById('thongtin-ngay');
const thongtinThang = document.getElementById('thongtin-thang');
const thongtinNam = document.getElementById('thongtin-nam');

const chinhsuaHoTen = document.getElementById('chinhsua-hoten');
const chinhsuaEmail = document.getElementById('chinhsua-email');
const chinhsuaSDT = document.getElementById('chinhsua-sdt');
const chinhsuaDC = document.getElementById('chinhsua-diachi');
const chinhsuaGT = document.getElementById('chinhsua-gioitinh');
const chinhsuaNgay = document.getElementById('chinhsua-ngay');
const chinhsuaThang = document.getElementById('chinhsua-thang');
const chinhsuaNam = document.getElementById('chinhsua-nam');


btnChinhSua.addEventListener('click', function(e) {
    ctnChinhSua.style.display = 'block'; 
    ctnThongTin.style.display = 'none';
});

btnLuu.addEventListener('click', function(e) {
    if (chinhsuaHoTen.value.trim() !== "") {
        thongtinHoTen.innerText = chinhsuaHoTen.value;
    }

    const emailValue = document.getElementById('chinhsua-email').value;
    if (emailValue.trim() !== "") {
        thongtinEmail.innerText = emailValue;
    }

    const sdtValue = document.getElementById('chinhsua-sdt').value;
    if (sdtValue.trim() !== "") {
        thongtinSDT.innerText = sdtValue;
    }

    if (chinhsuaDC.value.trim() !== "") {
        thongtinDC.innerText = chinhsuaDC.value;
    }

    if (chinhsuaGT.value !== "Chọn giới tính") {
        thongtinGT.innerText = chinhsuaGT.value;
    }

    if (chinhsuaNgay.value !== "Chọn Ngày Sinh") {
        thongtinNgay.innerText = chinhsuaNgay.value;
    }

    if (chinhsuaThang.value !== "Chọn Tháng Sinh") {
        thongtinThang.innerText = chinhsuaThang.value;
    }

    if (chinhsuaNam.value !== "Chọn Năm Sinh") {
        thongtinNam.innerText = chinhsuaNam.value;
    }

    ctnChinhSua.style.display = 'none';
    ctnThongTin.style.display = 'block'; 
});
