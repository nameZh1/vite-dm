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
    pointer-events: none; /* 防止点击穿透 */
    opacity: 1; /* 初始状态为不可见 */
    animation: fadeIn 1s forwards; /* 应用显示动画 */
}

.loading-animation.hidden {
    animation: slideOut 1s forwards !important; /* 应用消失动画并确保优先级 */
    pointer-events: none; /* 防止点击穿透 */
}

/* 显示动画 */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

/* 消失动画 */
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
            // 添加一个监听器来等待显示动画结束
            loadingAnimation.addEventListener('animationend', function onAnimationEnd(event) {
                // 如果是显示动画结束
                if (event.animationName === 'fadeIn') {
                    // 移除显示动画类
                    // loadingAnimation.classList.remove('loading-animation');
                    // 添加消失动画类
                    setTimeout(() => {
                        loadingAnimation.classList.add('hidden');
                    }, 1500)
                }
                // 如果是消失动画结束
                else if (event.animationName === 'slideOut') {
                    // 完全隐藏元素
                    loadingAnimation.style.display = 'none';
                    // 移除此监听器
                    loadingAnimation.removeEventListener('animationend', onAnimationEnd);
                }
            });
        }
    });
}

letsgo();