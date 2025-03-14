/**
 * 搜索功能实现
 * 注意：这是一个静态搜索实现
 */
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    if (!searchInput) return;

    // 搜索数据（实际应用中可以从JSON文件加载）
    const searchData = [
        { title: '欢迎使用', url: 'content/getting-started/welcome.md', tags: ['入门', '指南'] },
        { title: '安装指南', url: 'content/getting-started/installation.md', tags: ['安装', '配置'] },
        { title: 'API 端点', url: 'content/api-docs/endpoints.md', tags: ['API', '开发'] },
        { title: '账户常见问题', url: 'content/faq/account.md', tags: ['账户', 'FAQ'] }
    ];

    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.toLowerCase().trim();
            if (query.length < 2) return;

            // 简单的搜索逻辑
            const results = searchData.filter(item => {
                return item.title.toLowerCase().includes(query) ||
                    item.tags.some(tag => tag.toLowerCase().includes(query));
            });

            // 显示搜索结果
            alert(`找到 ${results.length} 条结果，匹配"${query}"\n` +
                results.map(r => `- ${r.title}`).join('\n'));

            // 实际应用中应该渲染搜索结果到页面上
        }
    });
});