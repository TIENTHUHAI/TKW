document.addEventListener("DOMContentLoaded", function() {
    // Tạo một đối tượng chứa thông tin của các sản phẩm
    const products = {
        'iphone13': {
            name: 'Điện thoại iPhone 13 128GB',
            image: '../accest/image/iphone13.jpg', 
            video: 'https://www.youtube.com/embed/A7qIRbLj8bk', 
            price: '13.890.000₫',
            priceoOff: '17.790.000₫',
            item1: 'https://cdn.tgdd.vn/Products/Images/42/250258/iphone-13-midnight-1-200x200.jpg',
            item2: 'https://cdn.tgdd.vn/Products/Images/42/250258/iphone-13-starlight-1-200x200.jpg',
            item3: 'https://cdn.tgdd.vn/Products/Images/42/250258/iphone-13-blue-1-200x200.jpg',
            item4: 'https://cdn.tgdd.vn/Products/Images/42/250258/iphone-13-pink-1-200x200.jpg',
            danhGia: 'Đánh giá Điện thoại iPhone 13 128GB',
            soLuongDanhGia: '520 đánh giá',
            anhDanhGia1: 'https://cdn.tgdd.vn/comment/56821641/beauty_20230504083758_Original2TND2.jpeg',
            anhDanhGia2: 'https://cdn.tgdd.vn/comment/56701808/1HPB9F4B0_41COTQ1KFNE.jpeg',
            anhDanhGia3: 'https://cdn.tgdd.vn/comment/56444532/IMG_0004ZRPPL.jpeg',
            anhDanhGia4: 'https://cdn.tgdd.vn/comment/56267024/IMG_1108KSO4F.jpeg',
            anhDanhGia5: 'https://cdn.tgdd.vn/comment/56267024/IMG_1033BY60X.jpeg',
            tenNguoiDanhGia: 'Hùng',
            ndDanhGia: 'Rất oke',

        },
        'applewatch': {
            name: 'Apple Watch SE 2023 GPS 40mm viền nhôm dây thể thao siêu ₫ẹp luôn',
            image: 'https://cdn.tgdd.vn/Products/Images/7077/316007/Slider/apple-watch-se-2023-40mm-vien-nhom-day-silicone-87-1020x570.jpg', 
            video: '', 
            price: '5.990.000₫',
            priceoOff: '6.390.000₫',
            item1: 'https://cdn.tgdd.vn/Products/Images/7077/316007/apple-watch-se-2023-40mm-vien-nhom-day-silicone-xanh-duong-thumb-1-200x200.jpg',
            item2: 'https://cdn.tgdd.vn/Products/Images/7077/316007/apple-watch-se-2023-40mm-vien-nhom-day-silicone-trang-thumb-1-200x200.jpg',
            item3: 'https://cdn.tgdd.vn/Products/Images/7077/316007/apple-watch-se-2023-40mm-vien-nhom-day-silicone-xanh-den-thumb-1-200x200.jpg',
            item4: '',
            danhGia: 'Đánh giá Apple Watch SE 2023 GPS 40mm',
            soLuongDanhGia: '40 đánh giá',
            anhDanhGia1: 'https://cdn.tgdd.vn/comment/55961764/loyalty_1698728050099SIAN5.jpg',
            anhDanhGia2: '',
            anhDanhGia3: '',
            anhDanhGia4: '',
            anhDanhGia5: '',
            tenNguoiDanhGia: 'Tiến',
            ndDanhGia: 'Sản phẩm rất tiện lợi',
        },
        'camera': {
            name: 'Camera IP 360 Độ 2MP Ezviz C6N',
            image: 'https://cdn.tgdd.vn/Products/Images/4728/285250/camera-ip-360-do-1080p-ezviz-c6n-trang-1.jpg', 
            video: '', 
            price: '370.000₫',
            priceoOff: '690.000₫',
            item1: 'https://cdn.tgdd.vn/Products/Images/4728/285250/camera-ip-360-do-1080p-ezviz-c6n-trang-1-180x125.jpg',
            item2: 'https://cdn.tgdd.vn/Products/Images/4728/285250/camera-ip-360-do-1080p-ezviz-c6n-trang-1-180x125.jpg',
            item3: 'https://cdn.tgdd.vn/Products/Images/4728/285250/camera-ip-360-do-1080p-ezviz-c6n-trang-1-180x125.jpg',
            item4: 'https://cdn.tgdd.vn/Products/Images/4728/285250/camera-ip-360-do-1080p-ezviz-c6n-trang-1-180x125.jpg',
            danhGia: 'Đánh giá Camera IP 360 Độ 2MP Ezviz C6N',
            soLuongDanhGia: '10 đánh giá',
            anhDanhGia1: 'https://cdn.tgdd.vn/comment/56326312/IMG_24100KNOA.jpeg',
            anhDanhGia2: 'https://cdn.tgdd.vn/comment/56326312/IMG_2409HE5ZW.jpeg',
            anhDanhGia3: 'https://cdn.tgdd.vn/comment/56326312/IMG_24100KNOA.jpeg',
            anhDanhGia4: 'https://cdn.tgdd.vn/comment/56326312/IMG_2409HE5ZW.jpeg',
            anhDanhGia5: '',
            tenNguoiDanhGia: 'Tân',
            ndDanhGia: 'Mọi người nên mua nhé sản phẩm tốt',
        },

        'dongho-kidcareS884G': {
            name: 'Đồng hồ định vị trẻ em Kidcare S88 4G 43.4mm',
            image: 'https://cdn.tgdd.vn/Products/Images/7077/292695/kidcare-s88-den-thumb-600x600.jpg', 
            video: '', 
            price: '2.420.000₫',
            priceoOff: ' 2.690.000₫',
            item1: 'https://cdn.tgdd.vn/Products/Images/7077/292695/kidcare-s88-glr-1-180x125.jpg',
            item2: '',
            item3: '',
            item4: '',
            danhGia: 'Đánh giá Đồng hồ định vị trẻ em Kidcare S88 4G 43.4mm',
            soLuongDanhGia: '52 đánh giá',
            anhDanhGia1: 'https://cdn.tgdd.vn/comment/55961764/loyalty_1698728050099SIAN5.jpg',
            anhDanhGia2: '',
            anhDanhGia3: '',
            anhDanhGia4: '',
            anhDanhGia5: '',
            tenNguoiDanhGia: 'Tiến',
            ndDanhGia: 'Con tôi rất thích sản phẩm này',
        },
    };

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId in products) {

        if(productId != 'iphone13')
            {
                document.getElementById('cau-hinh').style.display = 'none';
            }

        const product = products[productId];
        document.getElementById('product-name').innerText = product.name;
        document.getElementById('product-price').innerText = product.price;
        document.getElementById('product-price-sale-off').innerText = product.priceoOff;
        document.getElementById('product-item-1').src = product.item1;
        document.getElementById('product-item-2').src = product.item2;
        document.getElementById('product-item-3').src = product.item3;

        document.getElementById('danh-gia').innerText = product.danhGia;
        document.getElementById('so-luong-danh-gia').innerText = product.soLuongDanhGia;

        for (let i = 1; i <= 5; i++) {
            const anhDanhGia = `anhDanhGia${i}`;
            const anhDanhGiaElement = document.getElementById(`anh-danh-gia-${i}`);
            if (product[anhDanhGia] === '') {
                anhDanhGiaElement.style.display = 'none';
            } else {
                anhDanhGiaElement.src = product[anhDanhGia];
            }
        }

        document.getElementById('ten-nguoi-danh-gia-1').innerText = product.tenNguoiDanhGia;
        document.getElementById('noidung-danhgia-1').innerText = product.ndDanhGia;

        
        if (product.item4 === '') {
            document.getElementById('product-item-4').parentElement.parentElement.style.display = 'none';
        } else {
            document.getElementById('product-item-4').src = product.item4;
        }

        // Nếu có video, hiển thị video, nếu không, hiển thị hình ảnh
        if (product.video) {
            document.getElementById('product-image').src = product.video;
        } else {
            document.getElementById('product-image').src = product.image;
            document.querySelector('.product-image').style.display = 'none'
            document.getElementById('product-image').style.display = 'block'

        }
    } else {
        console.error('Không tìm thấy sản phẩm!');
    }
    

    const itemImages = document.querySelectorAll('.image-item-noibat');
    const itemVideo = document.querySelector('.video-item-noibat');
    const productContainer = document.getElementById('product-container');
    let iframeImage = document.getElementById('product-image').src;

    itemImages.forEach(function(item) {
        item.addEventListener('click', function() {
            const imageUrl = item.querySelector('img').src;
            
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container'); 
            
            const newImage = document.createElement('img');
            newImage.src = imageUrl;
            newImage.style.width = '100%';
            newImage.style.height = '100%';
            newImage.style.padding = '0px 150px';
            newImage.id = 'product-image';
            
            imageContainer.appendChild(newImage);
            
            productContainer.innerHTML = '';
            
            productContainer.appendChild(imageContainer);
        });
    });
    

    itemVideo.addEventListener('click', function() {
        const newVideo = document.createElement('iframe');
        newVideo.src = iframeImage;
        newVideo.style.width = '100%'; 
        newVideo.style.height = '100%'; 
        newVideo.style.border = 'none'; 
    
        productContainer.innerHTML = '';
        productContainer.appendChild(newVideo);
    });
    
    

    // Zoom hình ảnh
    document.querySelectorAll('#product-container').forEach(elem => {
        let x, y, width, height;
        elem.addEventListener('mouseenter', () => {
            const size = elem.getBoundingClientRect();
    
            x = size.x;
            y = size.y;
            width = size.width;
            height = size.height;
            elem.querySelector('#product-image').style.setProperty('--zoom', 2);
        });
    
        elem.addEventListener('mousemove', e => {
            const horizontal = (e.clientX - x) / width * 100;
            const vertical = (e.clientY - y) / height * 100;
    
            elem.style.setProperty('--x', horizontal + '%');
            elem.style.setProperty('--y', vertical + '%');
        });

        elem.addEventListener('mouseleave', () => {
            elem.querySelector('#product-image').style.setProperty('--zoom', 1);
        });
    });
    
    
// Chọn số lượng sản phẩm
    const btns = document.querySelectorAll('.btn-chon-sl')
    const values = document.querySelector('#value')

    let count = 1;
    let tongTien = 0;

    btns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const styles = e.currentTarget.classList;
            if (styles.contains("decrease"))
                {
                    if (count > 1)
                        {
                            count--;
                        }
                }
            else if (styles.contains("increase"))
                {
                    count++
                }

            values.value = count
        })
    })

    var addButton = document.getElementById("button-cart");
    var gioHang = document.querySelector('.thongtin-giohang');

    addButton.addEventListener("click", function() {

        const product = products[productId];
        var soLuong = parseInt(values.value);
        

        var found = false;
        const items = document.querySelectorAll('.sanpham-themvao')

        items.forEach(function(item) {
            var tenSP = item.querySelector('#ten-sp-gio-hang').innerText
            if(tenSP === product.name)
                {
                    var soLuongSp = item.querySelector('#soluong-sp');
                    var thanhTien = item.querySelector('#gia-sp-gio-hang')
                    soLuongSp.innerText = parseInt(soLuongSp.innerText) + soLuong;
                    thanhTien.innerText = parseFloat(thanhTien.innerText) * soLuong;
                    found = true
                }
        })


        
        

        if(!found) {
            var newItem = document.createElement("a");
            newItem.innerHTML = `
                <a href="" class="sanpham-themvao">
                    <div class="hinhanh-thongtin">
                        <div class="hinhanh-sp" style="height: 60px; width: 70px;">
                            <img src="${product.image}" alt="" style="width: 70px; height: 60px; border: 1px solid #ccc; padding: 0 2px;">
                        </div>
                        <p id="ten-sp-gio-hang">${product.name}</p>
                    </div>
                    <span>x<span id="soluong-sp">${values.value}</span></span>
                    <span id="gia-sp-gio-hang" class="text-red">${product.price}</span>
                </a>
        `;
        }


        var thongTinGioHang = document.querySelector('.sanpham-giohang');
        thongTinGioHang.appendChild(newItem)
    });
    
});