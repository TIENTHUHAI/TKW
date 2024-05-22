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