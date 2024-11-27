/**
 * 启动动画
 */

function letsgo() {
    // 动态插入 CSS 样式
    const style = document.createElement('style');
    style.innerHTML = `
 .loading-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9); /* 半透明背景 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* 确保在最上层 */
    transition: none; /* 移除之前的过渡效果 */
}

.loading-animation.hidden {
    animation: slideOut 1s forwards; /* 应用新的动画 */
    pointer-events: none; /* 防止点击穿透 */
}

/* 新的关键帧动画 */
@keyframes slideOut {
    0% {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%,0% 100%);
    }
    30% {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%,0% 0%);
    }
    100% {
        clip-path: polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);
    }
}

  .spinner {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(30deg, #182C51, rgba(24, 44, 81, 0.53));
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -2;
  }

  .moon {
    background-image: linear-gradient(30deg, rgba(24, 44, 81, 0.98), rgba(24, 44, 81, 0.93));
    width: 256px;
    height: 256px;
    border-radius: 50%;
    position: relative;
  }

  .moon::before {
    position: absolute;
    content: '';
    background-image: linear-gradient(30deg, rgba(24, 44, 81, 0.98), rgba(24, 44, 81, 0.93));
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    z-index: 99999999;
  }

  .moon::after {
    content: '';
    background-color: #C7938B;
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    z-index: -1;
    animation: 3.2s cresent linear infinite alternate;
  }

  @keyframes cresent {
    0% {
      transform: translate(-30px, 30px) scale(0.9);
      box-shadow: none;
    }

    50% {
      transform: translate(0px, 0px) scale(1.02);
      box-shadow: 0 0 10px #C7938B, 0 0 80px 8px #C7938B;
      background-color: #efdbd8;
    }

    100% {
      transform: translate(30px, -30px) scale(0.9);
      box-shadow: none;
    }
  }
`;
    document.head.appendChild(style);

    // 动态插入启动动画
    const loadingAnimation = document.createElement('div');
    loadingAnimation.id = 'loading-animation';
    loadingAnimation.className = 'loading-animation';

    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    loadingAnimation.appendChild(spinner);

    const moon = document.createElement('div');
    moon.className = 'moon';
    spinner.appendChild(moon);

    document.body.appendChild(loadingAnimation);

    // 在页面加载完成后隐藏启动动画
    window.addEventListener('load', () => {
        const loadingAnimation = document.getElementById('loading-animation');
        if (loadingAnimation) {
            setTimeout(() => {
                loadingAnimation.classList.add('hidden'); // 添加 hidden 类以触发消失动画
                setTimeout(() => {
                    loadingAnimation.style.display = 'none'; // 动画结束后隐藏元素
                }, 500); // 与过渡时间一致
            }, 1500)

        }
    });
}

letsgo();