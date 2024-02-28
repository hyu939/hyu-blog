document.addEventListener('DOMContentLoaded', function() {
    let menu = document.querySelector('#menu-btn');
    let header = document.querySelector('.header');

    menu.onclick = () =>{
        menu.classList.toggle('fa-times');
        header.classList.toggle('active');
    }

    window.onscroll = () =>{
        menu.classList.remove('fa-times');
        header.classList.remove('active');
    }

    let themeToggler = document.querySelector('#theme-toggler');
    let body = document.body;

    // Kiểm tra xem chế độ tối đã được kích hoạt hay chưa
    let isDarkModeActivated = body.classList.contains('active');

    // Cập nhật biểu tượng của nút chuyển đổi chế độ phản ánh trạng thái chế độ tối
    if (isDarkModeActivated) {
        themeToggler.classList.add('fa-sun');
    } else {
        themeToggler.classList.remove('fa-sun');
    }

    // Xử lý sự kiện khi nhấp vào nút chuyển đổi chế độ
    themeToggler.onclick = () => {
        themeToggler.classList.toggle('fa-moon');
        body.classList.toggle('active');
    }
});
