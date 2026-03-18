function createBubble() {
    const section = document.getElementById('bubble-container');
    // もし箱が見つからない場合は、エラーをコンソールに出して教えてくれるようにします
    if (!section) {
        console.error('bubble-container が見つかりません');
        return;
    }

    const bubble = document.createElement('span');
    
    var size = Math.random() * 55 + 15;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * innerWidth + 'px';
    
    section.appendChild(bubble);
    
    setTimeout(() => {
        bubble.remove();
    }, 10000);
}

// 【重要】画面の読み込みが完了してから実行するように囲む
window.addEventListener('load', () => {
    setInterval(createBubble, 300);
});