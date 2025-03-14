/**
 * 主应用程序JavaScript文件
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('知识库应用已初始化');

    // 添加卡片效果
    const cards = document.querySelectorAll('.latest-content li, .categories li');
    cards.forEach(card => {
        card.classList.add('content-card');
    });

    // 页面滚动效果
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Initialize navigation
    initNavigation();

    // Initialize search functionality
    initSearch();

    // Load initial content
    loadContent('getting-started/welcome');

    // 加载头部
    if (document.getElementById('header-container')) {
        fetch('layouts/header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header-container').innerHTML = data;
            })
            .catch(error => console.error('加载头部时出错:', error));
    }

    // 加载主要内容
    if (document.getElementById('content-container')) {
        fetch('layouts/content.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('content-container').innerHTML = data;
            })
            .catch(error => console.error('加载内容时出错:', error));
    }

    // 加载侧边栏
    if (document.getElementById('sidebar-container')) {
        fetch('layouts/sidebar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('sidebar-container').innerHTML = data;
            })
            .catch(error => console.error('加载侧边栏时出错:', error));
    }

    // 加载底部
    if (document.getElementById('footer-container')) {
        fetch('layouts/footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer-container').innerHTML = data;
            })
            .catch(error => console.error('加载底部时出错:', error));
    }
});

// Function to initialize navigation
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const activeItem = document.querySelector('.nav-item.active');
            if (activeItem) {
                activeItem.classList.remove('active');
            }
            item.classList.add('active');
            const category = item.dataset.category;
            loadContent(category);
        });
    });
}

// Function to load content based on category
function loadContent(category) {
    const contentArea = document.querySelector('.content-area');
    contentArea.innerHTML = ''; // Clear existing content

    fetch(`content/${category}.md`)
        .then(response => response.text())
        .then(data => {
            const section = document.createElement('section');
            section.classList.add('content-section');
            section.innerHTML = marked(data); // Convert Markdown to HTML
            contentArea.appendChild(section);
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}

// Function to initialize search functionality
function initSearch() {
    const searchInput = document.querySelector('#search-input');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        filterContent(query);
    });
}

// Function to filter content based on search query
function filterContent(query) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        section.style.display = text.includes(query) ? 'block' : 'none';
    });
}