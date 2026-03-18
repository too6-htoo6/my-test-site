function createBubble() {
    const section = document.querySelector('body');
    const bubble = document.createElement('span');
    
    // 泡のサイズをランダムに設定（10px〜60px）
    var size = Math.random() * 50 + 10;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    
    // 泡の出現位置を横幅いっぱいのランダムな位置に設定
    bubble.style.left = Math.random() * innerWidth + 'px';
    
    // 泡をHTMLに追加
    section.appendChild(bubble);
    
    // 4秒後に泡を消す（アニメーションが終わる頃）
    setTimeout(() => {
        bubble.remove();
    }, 4000);
}

// 0.1秒ごとに新しい泡を生成
setInterval(createBubble, 100);