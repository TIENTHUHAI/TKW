// CLick hiện list lọc
document.addEventListener('DOMContentLoaded', function() {
    const locTitles = document.querySelectorAll('.loc-title');
    const locItemMenus = document.querySelectorAll('.loc-item-menu');

    function closeAllMenus() {
        locItemMenus.forEach((locItemMenu) => {
            locItemMenu.classList.remove('active');
        });
    }

    locTitles.forEach((locTitle, index) => {
        locTitle.addEventListener('click', function(event) {
    
            const menu = locItemMenus[index];
            const isActive = menu.classList.contains('active');
            closeAllMenus()
            if (!isActive) {
                menu.classList.add('active');
            }
            event.stopPropagation()
        });
    });

    document.addEventListener('click', function(event) {
        closeAllMenus()
    });

    locItemMenus.forEach((locItemMenu) => {
        locItemMenu.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
});


// Lọc theo giá
document.addEventListener("DOMContentLoaded", function() {
    const brandFilters = document.querySelectorAll('.brand-filter');
    const priceButtons = document.querySelectorAll('.loc-item-menu button');
    const locTheoLoaiButtons = document.querySelectorAll('.loc-theo-loai button');
    const showKetQuaButtons = document.querySelectorAll('.show-ket-qua');
    const huyKetQuaButtons = document.querySelectorAll('.huy-ket-qua');

    let selectedBrands = [];
    let selectedPrices = [];
    let selectedCategories = [];

    // Thêm sự kiện click cho các nút lọc hãng
    brandFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const brand = this.dataset.brand;
            toggleSelection(brand, selectedBrands, this);
        });
    });

    // Thêm sự kiện click cho các nút lọc giá
    priceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const price = this.textContent.trim();
            toggleSelection(price, selectedPrices, this);
        });
    });

    // Thêm sự kiện click cho các nút lọc loại sản phẩm
    locTheoLoaiButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.id;
            toggleSelection(category, selectedCategories, this);
        });
    });

    // Thêm sự kiện click cho các nút "Xem kết quả"
    showKetQuaButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterProducts(selectedBrands, selectedPrices, selectedCategories);
        });
    });

    // Thêm sự kiện click cho các nút "Bỏ chọn"
    huyKetQuaButtons.forEach(button => {
        button.addEventListener('click', function() {
            selectedBrands = [];
            selectedPrices = [];
            selectedCategories = [];
            removeActiveClass(brandFilters);
            removeActiveClass(priceButtons);
            removeActiveClass(locTheoLoaiButtons);
            filterProducts(selectedBrands, selectedPrices, selectedCategories);
        });
    });

    // Hàm xử lý khi chọn hoặc bỏ chọn một lựa chọn
    function toggleSelection(value, selectedArray, element) {
        const index = selectedArray.indexOf(value);
        if (index === -1) {
            selectedArray.push(value);
            element.classList.add('active');
        } else {
            selectedArray.splice(index, 1);
            element.classList.remove('active');
        }
    }

    // Hàm xóa lớp active
    function removeActiveClass(elements) {
        elements.forEach(element => {
            element.classList.remove('active');
        });
    }

    // Hàm lọc sản phẩm theo hãng, giá và loại sản phẩm
    function filterProducts(selectedBrands, selectedPrices, selectedCategories) {
        const products = document.querySelectorAll('.item-product');

        products.forEach(product => {
            const brandName = product.querySelector('.card-title').textContent.trim().toLowerCase();
            const price = parseFloat(product.querySelector('.card-info-price .price-product').textContent.trim().replace(/\D/g, ''));
            const category = product.querySelector('.card-title').classList[1];

            const brandMatch = selectedBrands.length === 0 || selectedBrands.some(brand => brandName.includes(brand));
            const priceMatch = selectedPrices.length === 0 || selectedPrices.some(priceRange => checkPriceRange(price, priceRange));
            const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(category);

            if (brandMatch && priceMatch && categoryMatch) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Hàm kiểm tra giá có trong khoảng giá được chọn hay không
    function checkPriceRange(price, priceRange) {
        switch (priceRange) {
            case 'Dưới 2 triệu':
                return price < 2000000;
            case 'Từ 2 - 4 triệu':
                return price >= 2000000 && price <= 4000000;
            case 'Từ 4 - 7 triệu':
                return price > 4000000 && price <= 7000000;
            case 'Từ 7 - 10 triệu':
                return price > 7000000 && price <= 10000000;
            case 'Từ 10 - 12 triệu':
                return price > 10000000 && price <= 12000000;
            case 'Từ 12 - 16 triệu':
                return price > 12000000 && price <= 16000000;
            case 'Từ 16 - 20 triệu':
                return price > 16000000 && price <= 20000000;
            case 'Trên 20 triệu':
                return price > 20000000;
            default:
                return true; // Nếu không có lựa chọn giá nào được chọn, hiển thị tất cả sản phẩm
        }
    }
});



// Lưu trữ danh sách sản phẩm mặc định khi trang được tải lần đầu
// let defaultProducts = [];

// document.addEventListener('DOMContentLoaded', function() {
//     defaultProducts = Array.from(document.querySelectorAll('.row-cols-5 .col'));
// });

// const sortSelect2 = document.getElementById('sortProducts');
// sortSelec2t.addEventListener('change', function() {
//     const selectedOption = this.value;
//     if (selectedOption !== 'default') {
//         sortProducts(selectedOption);
//     } else {
//         sortProductsDefault();
//     }
// });

// function sortProductsDefault() {
//     const productsContainer = document.querySelector('.products');

//     // Sắp xếp lại các sản phẩm hiện có dựa trên thứ tự mặc định
//     Array.from(productsContainer.children).sort((a, b) => {
//         const indexA = defaultProducts.indexOf(a);
//         const indexB = defaultProducts.indexOf(b);
//         return indexA - indexB;
//     }).forEach(product => {
//         productsContainer.appendChild(product);
//     });
// }

// // Hàm sắp xếp sản phẩm
// function sortProducts(selectedOption) {
//     const productsContainer = document.querySelector('.products');
//     const products = Array.from(productsContainer.children);

//     // Sắp xếp sản phẩm dựa trên giá
//     products.sort((a, b) => {
//         const priceA = parseFloat(a.querySelector('.card-info-price .price-product').textContent.trim().replace(/\D/g, ''));
//         const priceB = parseFloat(b.querySelector('.card-info-price .price-product').textContent.trim().replace(/\D/g, ''));

//         if (selectedOption === 'lowToHigh') {
//             return priceA - priceB;
//         } else if (selectedOption === 'highToLow') {
//             return priceB - priceA;
//         }
//     });

//     // Xóa các sản phẩm hiện có
//     while (productsContainer.firstChild) {
//         productsContainer.removeChild(productsContainer.firstChild);
//     }

//     // Thêm lại các sản phẩm đã sắp xếp
//     products.forEach(product => {
//         productsContainer.appendChild(product);
//     });
// }





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
        window.location.href = `danhMuc.html?brand=${brandName}`;
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Lấy tham số brand từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const brandName = urlParams.get('brand');

    // Nếu có tham số brand, thực hiện việc lọc sản phẩm
    if (brandName) {
        filterProductsByBrand(brandName);
    }

    // Hàm để lọc sản phẩm theo thương hiệu
    function filterProductsByBrand(brandName) {
        // Lấy tất cả các sản phẩm
        const products = document.querySelectorAll('.item-product');
    
        // Lặp qua từng sản phẩm và ẩn hiện sản phẩm tương ứng dựa trên thương hiệu
        products.forEach(product => {
            const productName = product.querySelector('.card-title').textContent.trim().toLowerCase();
            const brandMatch = productName.includes(brandName.toLowerCase()); // Kiểm tra xem tên sản phẩm có chứa thương hiệu không
    
            if (brandMatch) {
                product.style.display = 'block'; // Hiển thị sản phẩm nếu thỏa mãn điều kiện
            } else {
                product.style.display = 'none'; // Ẩn sản phẩm nếu không thỏa mãn điều kiện
            }
        });
    }
    
});




















// Sắp xếp theo tên giá a - z
document.addEventListener('DOMContentLoaded', function() {
    const sortSelect = document.getElementById('sortProducts');
    const productsContainer = document.querySelector('.products');
    const defaultProducts = Array.from(productsContainer.children);

    sortSelect.addEventListener('change', function() {
        const selectedOption = this.value
        sortProducts(selectedOption);
    });

    function sortProducts(selectedOption) {
        const products = Array.from(productsContainer.children);

        products.sort((a, b) => {
            if (selectedOption === 'lowToHigh' || selectedOption === 'highToLow') {
                const priceA = parseFloat(a.querySelector('.card-info-price .price-product').textContent.trim().replace(/\D/g, ''));
                const priceB = parseFloat(b.querySelector('.card-info-price .price-product').textContent.trim().replace(/\D/g, ''));
                return selectedOption === 'lowToHigh' ? priceA - priceB : priceB - priceA;
            } else if (selectedOption === 'DescPercent') {
                const percentA = parseInt(a.querySelector('.price-sale-off').textContent.trim().replace(/\D/g, ''));
                const percentB = parseInt(b.querySelector('.price-sale-off').textContent.trim().replace(/\D/g, ''));
                return percentB - percentA;
            } else if (selectedOption === 'AtoZ' || selectedOption === 'ZtoA') {
                const nameA = a.querySelector('.card-title').textContent.trim().toLowerCase();
                const nameB = b.querySelector('.card-title').textContent.trim().toLowerCase();
                return selectedOption === 'AtoZ' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
            } else if (selectedOption === 'default') {
                // Sắp xếp lại theo thứ tự mặc định
                return defaultProducts.indexOf(a) - defaultProducts.indexOf(b);
            }
        });

        // Xóa các sản phẩm hiện có
        while (productsContainer.firstChild) {
            productsContainer.removeChild(productsContainer.firstChild);
        }

        // Thêm lại các sản phẩm đã sắp xếp
        products.forEach(product => {
            productsContainer.appendChild(product);
        });
    }
});