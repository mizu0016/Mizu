// 花びらを降らせる処理
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // ランダムなサイズ
    const size = Math.random() * 10 + 10 + 'px';
    petal.style.width = size;
    petal.style.height = size;
    
    // 開始位置
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.top = '-20px';

    document.body.appendChild(petal);

    // アニメーション設定
    const duration = Math.random() * 3000 + 5000;
    const animation = petal.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 0.7 },
        { transform: `translateY(110vh) translateX(${Math.random() * 100 - 50}px) rotate(720deg)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'linear'
    });

    // 終わったら要素を削除
    animation.onfinish = () => petal.remove();
}

// 0.3秒ごとに新しい花びらを作成
setInterval(createPetal, 300);

// 文字を順番に表示するタイマー設定
window.onload = () => {
    // 1秒後に1行目
    setTimeout(() => {
        document.getElementById('line1').classList.add('fade-in-up');
    }, 1000);

    // 3.5秒後に2行目
    setTimeout(() => {
        document.getElementById('line2').classList.add('fade-in-up');
    }, 3500);

    // 6秒後に3行目
    setTimeout(() => {
        document.getElementById('line3').classList.add('fade-in-up');
    }, 6000);

    // 8.5秒後にブーケを表示
    setTimeout(() => {
        const flower = document.getElementById('flower');
        flower.classList.add('show-flower');
    }, 8500);
};
