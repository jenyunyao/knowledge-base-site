/**
 * 导航功能
 */
document.addEventListener('DOMContentLoaded', () => {
    // 添加响应式导航
    const createMobileMenu = () => {
        const nav = document.querySelector('.main-nav');
        if (!nav) return;

        const menuButton = document.createElement('button');
        menuButton.className = 'mobile-menu-button';
        menuButton.innerHTML = '<span></span><span></span><span></span>';
        menuButton.setAttribute('aria-label', '打开导航菜单');

        const headerContainer = document.querySelector('.header-container');
        headerContainer.insertBefore(menuButton, headerContainer.firstChild);

        menuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
            const isExpanded = nav.classList.contains('active');
            menuButton.setAttribute('aria-expanded', isExpanded);
            menuButton.setAttribute('aria-label', isExpanded ? '关闭导航菜单' : '打开导航菜单');
        });
    };

    // 仅在移动设备上创建汉堡菜单
    if (window.innerWidth < 768) {
        createMobileMenu();
    }

    // 监听窗口大小变化
    window.addEventListener('resize', () => {
        const mobileButton = document.querySelector('.mobile-menu-button');
        if (window.innerWidth < 768 && !mobileButton) {
            createMobileMenu();
        } else if (window.innerWidth >= 768 && mobileButton) {
            mobileButton.remove();
            document.querySelector('.main-nav')?.classList.remove('active');
        }
    });

    // 高亮当前页面对应的导航项
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        if (currentPath.endsWith(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
});