document.addEventListener('DOMContentLoaded', function() {
    
    let isChanging = false;
    
    function changeLanguage(lang) {
        if (isChanging) return;
        
        const currentBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
        if (currentBtn && currentBtn.classList.contains('active')) return;
        
        isChanging = true;
        
        document.querySelectorAll('.lang-content').forEach(el => {
            el.classList.remove('active');
        });
        
        document.querySelectorAll('.lang-btn').forEach(el => {
            el.classList.remove('active');
        });
        
        const activeContent = document.getElementById(`content-${lang}`);
        const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
        
        if (activeContent && activeBtn) {
            activeContent.classList.add('active');
            activeBtn.classList.add('active');
        }
        
        localStorage.setItem('bemmequer-lang', lang);
        
        setTimeout(() => {
            isChanging = false;
        }, 200);
    }
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    const savedLang = localStorage.getItem('bemmequer-lang') || 'pt';
    
    if (savedLang !== 'pt') {
        setTimeout(() => {
            changeLanguage(savedLang);
        }, 100);
    }
});