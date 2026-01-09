// main.js - 主要JavaScript功能

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('AI极客俱乐部论坛已加载');
    
    // 导航栏激活状态
    updateNavActive();
    
    // 初始化功能
    initSkillsSelector();
    initSearchFilter();
});

// 更新导航栏激活状态
function updateNavActive() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 初始化技能选择器
function initSkillsSelector() {
    const skillTags = document.querySelectorAll('.skill-tag');
    if (skillTags.length > 0) {
        skillTags.forEach(tag => {
            tag.addEventListener('click', function() {
                this.classList.toggle('selected');
            });
        });
    }
}

// 初始化搜索筛选
function initSearchFilter() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            filterMembers(searchTerm);
        });
    }
}

// 筛选成员
function filterMembers(searchTerm) {
    const memberCards = document.querySelectorAll('.member-card');
    
    memberCards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        if (cardText.includes(searchTerm) || searchTerm === '') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 显示成功消息
function showSuccess(message) {
    alert('✅ ' + message);
}

// 显示错误消息
function showError(message) {
    alert('❌ ' + message);
}

// 模拟API调用
function mockApiCall(endpoint, data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`API调用: ${endpoint}`, data);
            resolve({ success: true, message: '操作成功' });
        }, 500);
    });
}

// 导出Excel成员数据（简化版）
function exportMembersData() {
    const members = [
        { name: "刘丹丹", department: "Hardlines", skills: "Excel数据分析" },
        { name: "诸林", department: "Softlines", skills: "VBA开发" },
        // ... 更多数据
    ];
    
    // 这里可以添加实际的导出逻辑
    alert('导出功能将在后续版本中实现');
}
