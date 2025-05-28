// 鼠标文字跟随效果
(function() {
  var mouseText = document.createElement('div');
  mouseText.className = 'mouse-text';
  mouseText.innerHTML = 'Enter...';
  document.body.appendChild(mouseText);

  // 设置样式
  var style = document.createElement('style');
  style.innerHTML = `
    .mouse-text {
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      font-size: 16px;
      color:rgb(2, 1, 4);
      opacity: 0.7;
      z-index: 10000;
      transition: transform 0.1s ease;
    }
  `;
  document.head.appendChild(style);

  // 跟随鼠标移动
  document.addEventListener('mousemove', function(e) {
    mouseText.style.transform = `translate(${e.clientX + 10}px, ${e.clientY + 10}px)`;
  });
})();