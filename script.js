// 1. スクロールに合わせて要素をふわっと出す演出
const sections = document.querySelectorAll('.snap-section');

const observerOptions = {
    threshold: 0.2 // セクションが20%見えたら実行
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 表示された時に透明度を上げるなどのアニメーションを付けることが可能
            entry.target.style.opacity = "1";
            entry.target.style.transition = "opacity 1.5s ease-out";
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = "0"; // 最初は透明にしておく
    observer.observe(section);
});

// 2. スクロールラベルを途中で消す
window.addEventListener('mizu', () => {
    const scrollLabel = document.querySelector('.scroll-label');
    if (window.scrollY > 100) {
        scrollLabel.style.display = 'none';
    } else {
        scrollLabel.style.display = 'block';
    }
});
