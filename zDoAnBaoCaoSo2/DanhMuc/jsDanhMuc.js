// CLick hiện list lọc
document.addEventListener('DOMContentLoaded', function() {
    const locTitles = document.querySelectorAll('.loc-title')
    const locItemMenus = document.querySelectorAll('.loc-item-menu')

    function closeAllMenus() {
        locItemMenus.forEach((locItemMenu) => {
            locItemMenu.classList.remove('active')
        })
    }

    locTitles.forEach((locTitle, index) => {
        locTitle.addEventListener('click', function(event) {
    
            const menu = locItemMenus[index];
            const isActive = menu.classList.contains('active')
            closeAllMenus()
            if (!isActive) {
                menu.classList.add('active')
            }
            event.stopPropagation()
        })
    })

    document.addEventListener('click', function(event) {
        closeAllMenus()
    })

    locItemMenus.forEach((locItemMenu) => {
        locItemMenu.addEventListener('click', function(event) {
            event.stopPropagation()
        })
    })
})


// Lọc
document.addEventListener("DOMContentLoaded", function() {
    const brandFilters = document.querySelectorAll('.brand-filter')
    const priceButtons = document.querySelectorAll('.loc-item-menu button')
    const locTheoLoaiButtons = document.querySelectorAll('.loc-theo-loai button')
    const showKetQuaButtons = document.querySelectorAll('.show-ket-qua')
    const huyKetQuaButtons = document.querySelectorAll('.huy-ket-qua')

    let selectedBrands = [];
    let selectedPrices = [];
    let selectedCategories = [];

    //lọc hãng
    brandFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const brand = this.dataset.brand;
            toggleSelection(brand, selectedBrands, this)
        })
    })

    // lọc giá
    priceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const price = this.textContent.trim()
            toggleSelection(price, selectedPrices, this)
        })
    })

    //lọc loại sản phẩm
    locTheoLoaiButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.id;
            toggleSelection(category, selectedCategories, this)
        })
    })

    //click cho các nút Xem kết quả
    showKetQuaButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterProducts(selectedBrands, selectedPrices, selectedCategories)
        })
    })

    //sự kiện click nút "Bỏ chọn"
    huyKetQuaButtons.forEach(button => {
        button.addEventListener('click', function() {
            selectedBrands = [];
            selectedPrices = [];
            selectedCategories = [];
            removeActiveClass(brandFilters)
            removeActiveClass(priceButtons)
            removeActiveClass(locTheoLoaiButtons)
            filterProducts(selectedBrands, selectedPrices, selectedCategories)
        })
    })

    //chọn hoặc bỏ chọn khi cùng item đc chọn
    function toggleSelection(value, selectedArray, element) {
        const index = selectedArray.indexOf(value)
        if (index === -1) {
            selectedArray.push(value)
            element.classList.add('active')
        } else {
            selectedArray.splice(index, 1)
            element.classList.remove('active')
        }
    }

    //xóa lớp active
    function removeActiveClass(elements) {
        elements.forEach(element => {
            element.classList.remove('active')
        })
    }

    //lọc theo hãng, giá và loại sản phẩm
    function filterProducts(selectedBrands, selectedPrices, selectedCategories) {
        const products = document.querySelectorAll('.item-product')

        products.forEach(product => {
            const brandName = product.querySelector('.card-title').textContent.trim().toLowerCase()
            const price = parseFloat(product.querySelector('.card-info-price .price-product').textContent.trim().replace(/\D/g, ''))
            const category = product.querySelector('.card-title').classList[1];

            const brandMatch = selectedBrands.length === 0 || selectedBrands.some(brand => brandName.includes(brand))
            const priceMatch = selectedPrices.length === 0 || selectedPrices.some(priceRange => checkPriceRange(price, priceRange))
            const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(category)

            if (brandMatch && priceMatch && categoryMatch) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        })
    }

    //kiểm tra giá có trong khoảng
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
                return true; 
        }
    }
})

document.addEventListener("DOMContentLoaded", function() {
    
    const phoneLinks = document.querySelectorAll('.item-danhmuc-cap2')
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault() 
            const brandName = this.textContent.trim() 
            filterByBrand(brandName) 
        })
    })

    const danhMucItems = document.querySelectorAll('.danh-muc-item')

    danhMucItems.forEach(item => {
        const itemInner = item.querySelector('.item-inner')
        item.addEventListener('click', function(event) {
            event.preventDefault() 
            const brandName = itemInner.textContent.trim() 
            filterByBrand(brandName) 
        })
    })


    function filterByBrand(brandName) {
        window.location.href = `danhMuc.html?brand=${brandName}`;
    }
})


document.addEventListener("DOMContentLoaded", function() {
    // Lấy tham số brand từ URL
    const urlParams = new URLSearchParams(window.location.search)
    const brandName = urlParams.get('brand')

    // Nếu có tham số brand, thực hiện việc lọc sản phẩm
    if (brandName) {
        filterProductsByBrand(brandName)
    }

    function filterProductsByBrand(brandName) {
        const products = document.querySelectorAll('.item-product')
    
        products.forEach(product => {
            const productName = product.querySelector('.card-title').textContent.trim().toLowerCase()
            const brandMatch = productName.includes(brandName.toLowerCase())
    
            if (brandMatch) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        })
    }
    
})

// Sắp xếp theo tên giá a - z
document.addEventListener('DOMContentLoaded', function() {
    const sortSelect = document.getElementById('sortProducts')
    const productsContainer = document.querySelector('.products')
    const defaultProducts = Array.from(productsContainer.children)

    sortSelect.addEventListener('change', function() {
        const selectedOption = this.value
        sortProducts(selectedOption)
    })

    function sortProducts(selectedOption) {
        const products = Array.from(productsContainer.children)

        products.sort((a, b) => {
            if (selectedOption === 'lowToHigh' || selectedOption === 'highToLow') {
                const priceA = parseFloat(a.querySelector('.card-info-price .price-product').textContent.trim().replace(/\D/g, ''))
                const priceB = parseFloat(b.querySelector('.card-info-price .price-product').textContent.trim().replace(/\D/g, ''))
                return selectedOption === 'lowToHigh' ? priceA - priceB : priceB - priceA;
            } else if (selectedOption === 'DescPercent') {
                const percentA = parseInt(a.querySelector('.price-sale-off').textContent.trim().replace(/\D/g, ''))
                const percentB = parseInt(b.querySelector('.price-sale-off').textContent.trim().replace(/\D/g, ''))
                return percentB - percentA;
            } else if (selectedOption === 'AtoZ' || selectedOption === 'ZtoA') {
                const nameA = a.querySelector('.card-title').textContent.trim().toLowerCase()
                const nameB = b.querySelector('.card-title').textContent.trim().toLowerCase()
                return selectedOption === 'AtoZ' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA)
            } else if (selectedOption === 'default') {
                // Sắp xếp lại theo thứ tự mặc định
                return defaultProducts.indexOf(a) - defaultProducts.indexOf(b)
            }
        })

        // Xóa các sản phẩm hiện có
        while (productsContainer.firstChild) {
            productsContainer.removeChild(productsContainer.firstChild)
        }

        // Thêm lại các sản phẩm đã sắp xếp
        products.forEach(product => {
            productsContainer.appendChild(product)
        })
    }
})

// Tìm kiếm hiện ra
// function timKiem() {
//     var inputSearch, products, itemProduct, find, i, txtValue, filter

//     inputSearch =  document.getElementById('txt-Search')
//     filter = inputSearch.value.toUpperCase()

//     products = document.querySelector('.products')

//     itemProduct = products.querySelectorAll('.item-product')


//     for(i = 0; i < itemProduct.length; i++)
//         {
//             find = itemProduct[i].querySelector('.card-title')

//             txtValue = find.textContent || find.innerText
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 itemProduct[i].style.display = "";
//             } 
//             else {
//                 itemProduct[i].style.display = "none";
//               }
//         }
// }


// Lấy tên của các sản phẩm
    var inputSearch =  document.getElementById('txt-Search')
    var filter = inputSearch.value.toUpperCase()
    var products = document.querySelector('.products')

    var itemProduct = products.querySelectorAll('.item-product')

    let listArrItem = []

    for(var i = 0; i < itemProduct.length; i++)
    {
        var find = itemProduct[i].querySelector('.card-title')

        var txtValue = find.textContent || find.innerText
        
        listArrItem.push(txtValue.trim())
    }
    localStorage.setItem('listName', JSON.stringify(listArrItem))

    var listName = JSON.parse(localStorage.getItem('listName'))
    
// Lấy danh sách tên sản phẩm từ localStorage và tạo ra các phần tử gợi ý
    var goiySearch = document.querySelector('.box-goi-y')
    for(var i = 0; i < listName.length; i++) {
        var goiY = document.createElement('a')
        goiY.setAttribute('href', '#')
        goiY.classList.add('goi-y-search')
        goiY.textContent = listName[i]
        goiY.style.display = 'none'
        goiySearch.appendChild(goiY)
    }

// Hàm để tìm kiếm và hiển thị gợi ý


    function timKiemSp() {
        filter = inputSearch.value.toUpperCase()
        var doDaiBoxGoiY = goiySearch.querySelectorAll('.goi-y-search')
        if (filter === "") {
            for(var i = 0; i < doDaiBoxGoiY.length; i++) {
                doDaiBoxGoiY[i].style.display = "none"
            }
        } else {
            for(var i = 0; i < doDaiBoxGoiY.length; i++) {
                var txtValue = doDaiBoxGoiY[i].textContent || doDaiBoxGoiY[i].innerText
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    itemProduct[i].style.display = ""
                } else {
                    itemProduct[i].style.display = "none"
                }
            } 
        }
    }

    function timKiemGoiY() {
        filter = inputSearch.value.toUpperCase()
        var doDaiBoxGoiY = goiySearch.querySelectorAll('.goi-y-search')
        if (filter === "") {
            for(var i = 0; i < doDaiBoxGoiY.length; i++) {
                doDaiBoxGoiY[i].style.display = "none"
            }
        } else {
            for(var i = 0; i < doDaiBoxGoiY.length; i++) {
                var txtValue = doDaiBoxGoiY[i].textContent || doDaiBoxGoiY[i].innerText
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    doDaiBoxGoiY[i].style.display = ""
                } else {
                    doDaiBoxGoiY[i].style.display = "none"
                }
            } 
        }
    }

    document.querySelector('.form-search').addEventListener('submit', function(event) {
        event.preventDefault();
        timKiemSp();
        if (filter === "") {
            goiySearch.style.display='none'
        }
    });