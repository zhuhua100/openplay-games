// OpenPlay Games - 主 JavaScript 文件

// 生成游戏卡片 HTML
function createGameCard(game) {
    const imgSrc = game.imageUrl || `https://placehold.co/300x200/1a1a2e/6366f1?text=${encodeURIComponent(game.title)}`;
    return `
        <a href="/games/${game.id}.html" class="game-card block bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500/50">
            <div class="aspect-video bg-gray-700 overflow-hidden">
                <img src="${imgSrc}" alt="${game.title}" class="w-full h-full object-cover" loading="lazy" onerror="this.src='https://placehold.co/300x200/1a1a2e/6366f1?text=${encodeURIComponent(game.title)}'">
            </div>
            <div class="p-4">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-lg font-semibold text-white">${game.title}</h3>
                    <span class="text-xs px-2 py-1 rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">${game.categoryName}</span>
                </div>
                <p class="text-gray-400 text-sm line-clamp-2">${game.description.substring(0, 80)}...</p>
            </div>
        </a>
    `;
}

// 渲染推荐游戏
function renderFeaturedGames() {
    const container = document.getElementById('featured-games');
    if (!container) return;
    const featured = getFeaturedGames();
    container.innerHTML = featured.map(createGameCard).join('');
}

// 渲染最新游戏
function renderLatestGames() {
    const container = document.getElementById('latest-games');
    if (!container) return;
    const latest = getLatestGames();
    container.innerHTML = latest.map(createGameCard).join('');
}

// 渲染分类页游戏
function renderCategoryGames(category) {
    const container = document.getElementById('category-games');
    if (!container) return;
    const categoryGames = getGamesByCategory(category);
    if (categoryGames.length === 0) {
        container.innerHTML = '<div class="col-span-full text-center text-gray-400 py-12">该分类暂无游戏，敬请期待。</div>';
        return;
    }
    container.innerHTML = categoryGames.map(createGameCard).join('');
}

// 搜索功能
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query) {
                const results = searchGames(query);
                if (results.length > 0) {
                    window.location.href = `/games/${results[0].id}.html`;
                } else {
                    alert('未找到相关游戏，请尝试其他关键词。');
                }
            }
        }
    });
}

// 移动端菜单切换
function setupMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!menuBtn || !mobileMenu) return;
    
    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    renderFeaturedGames();
    renderLatestGames();
    setupSearch();
    setupMobileMenu();
});
