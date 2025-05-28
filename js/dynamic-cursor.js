// 动态鼠标效果
(function() {
  // 创建自定义鼠标元素
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);
  
  // 创建鼠标跟随效果的小圆点
  const follower = document.createElement('div');
  follower.className = 'cursor-follower';
  document.body.appendChild(follower);
  
  // 添加样式
  const style = document.createElement('style');
  style.innerHTML = `
    .custom-cursor {
      position: fixed;
      width: 10px;
      height: 10px;
      background-color: rgba(125, 126, 128, 0.8);
      border-radius: 50%;
      pointer-events: none;
      z-index: 999999;
      transition: transform 0.1s, width 0.2s, height 0.2s, background-color 0.2s;
    }
    
    .cursor-follower {
      position: fixed;
      width: 20px;
      height: 20px;
      background-color: rgba(32, 114, 246, 0.8);
      border-radius: 50%;
      pointer-events: none;
      z-index: 999998;
      transition: transform 0.3s, width 0.4s, height 0.4s;
    }
    
    a:hover ~ .custom-cursor,
    button:hover ~ .custom-cursor,
    .site-page:hover ~ .custom-cursor {
      transform: scale(1.5);
      background-color: rgba(35, 10, 226, 0.8);
    }
    
    a:hover ~ .cursor-follower,
    button:hover ~ .cursor-follower,
    .site-page:hover ~ .cursor-follower {
      transform: scale(1.2);
      border-color: rgba(64, 74, 227, 0.5);
    }
  `;
  document.head.appendChild(style);
  
  // 鼠标移动事件
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    
    // 添加一点延迟效果
    setTimeout(() => {
      follower.style.left = `${e.clientX - 6}px`;
      follower.style.top = `${e.clientY - 6}px`;
    }, 150);
  });
  
  // 鼠标点击效果
  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
    follower.style.transform = 'scale(0.8)';
  });
  
  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
    follower.style.transform = 'scale(1)';
  });
  
  // 鼠标离开页面时隐藏自定义鼠标
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    follower.style.opacity = '0';
  });
  
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    follower.style.opacity = '1';
  });
})();