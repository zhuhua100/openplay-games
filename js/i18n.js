// OpenPlay Games - 国际化（i18n）核心模块
// 支持中英文双语切换，纯前端方案

const I18n = {
    currentLang: 'zh',
    translations: {},

    // 初始化
    async init() {
        // 1. 检测语言
        this.currentLang = this.detectLanguage();
        
        // 2. 加载语言包
        await this.loadTranslations(this.currentLang);
        
        // 3. 渲染页面文本
        this.renderPage();
        
        // 4. 更新语言切换按钮
        this.updateLangSwitchBtn();
    },

    // 检测语言：localStorage > 浏览器语言 > 默认中文
    detectLanguage() {
        const saved = localStorage.getItem('openplay-lang');
        if (saved === 'zh' || saved === 'en') return saved;
        
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang && browserLang.startsWith('zh')) return 'zh';
        
        return 'en';
    },

    // 加载语言包
    async loadTranslations(lang) {
        try {
            const response = await fetch(`/i18n/${lang}.json`);
            this.translations = await response.json();
        } catch (e) {
            console.error('语言包加载失败:', e);
            // 加载失败时回退到中文
            if (lang !== 'zh') {
                const response = await fetch('/i18n/zh.json');
                this.translations = await response.json();
                this.currentLang = 'zh';
            }
        }
    },

    // 获取翻译文本
    t(key, params = {}) {
        let text = this.translations[key] || key;
        
        // 替换占位符 {xxx}
        for (const [k, v] of Object.entries(params)) {
            text = text.replace(`{${k}}`, v);
        }
        
        return text;
    },

    // 渲染页面：替换所有 data-i18n 节点的文本
    renderPage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const paramsStr = el.getAttribute('data-i18n-params');
            let params = {};
            
            if (paramsStr) {
                try {
                    params = JSON.parse(paramsStr);
                } catch (e) {
                    console.warn('data-i18n-params 解析失败:', paramsStr);
                }
            }
            
            const text = this.t(key, params);
            
            // 处理不同元素类型
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.setAttribute('placeholder', text);
            } else if (el.tagName === 'META') {
                el.setAttribute('content', text);
            } else {
                el.textContent = text;
            }
        });

        // 更新 HTML lang 属性
        document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';
    },

    // 切换语言
    async switchLang(lang) {
        if (lang === this.currentLang) return;
        
        this.currentLang = lang;
        localStorage.setItem('openplay-lang', lang);
        
        await this.loadTranslations(lang);
        this.renderPage();
        this.updateLangSwitchBtn();
    },

    // 更新语言切换按钮文本
    updateLangSwitchBtn() {
        const btn = document.getElementById('lang-switch-btn');
        if (btn) {
            btn.textContent = this.t('lang.switch');
        }
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    I18n.init();
});
