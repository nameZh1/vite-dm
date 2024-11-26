import { Card } from "./types";

const cards: Card[] = [
    {
        id: 1,
        name: "卡片1",
        description: "这是卡片1的描述",
        content: `<div class="container">
		<div class="top">
			<h3>涌动的弹簧效果</h3>
			<div class="author">大剑师兰特, 还是大剑师兰特，gis-dajianshi</div>
		</div>
		<div class="dajianshi">
			<span style="--tt: 1"></span>
			<span style="--tt: 2"></span>
			<span style="--tt: 3"></span>
			<span style="--tt: 4"></span>
			<span style="--tt: 5"></span>
			<span style="--tt: 6"></span>
			<span style="--tt: 7"></span>
			<span style="--tt: 8"></span>
			<span style="--tt: 9"></span>
		</div>
	</div>`,
        css: `.container {
			width: 1000px;
			height: 580px;
			margin: 50px auto;
			border: 1px solid green;
			position: relative;
		}

		.top {
			margin: 0 auto 0px;
			padding: 10px 0;
			background: darkslategray;
			color: #fff;
		}

		.dajianshi {
			position: relative;
			margin: 200px auto 0;
			width: 50px;
			height: 50px;
			transform-style: preserve-3d;
			transform: perspective(500px) rotateX(50deg) translateZ(50px);
		}

		.dajianshi span {
			position: absolute;
			top: calc(-18px * var(--tt));
			left: calc(-18px * var(--tt));
			bottom: calc(-18px * var(--tt));
			right: calc(-18px * var(--tt));
			border: 8px solid rgba(0, 0, 0, 0.8);
			border-radius: 50%;
			animation: move 1.5s ease-in-out infinite alternate;
			animation-delay: calc(var(--tt) * 0.1s);
		}

		@keyframes move {

			0%,
			100% {
				transform: translateZ(0px);
			}

			50% {
				transform: translateZ(-100px);
			}
		}`,
    },
    {
        id: 2,
        name: "卡片2",
        description: "这是卡片2的描述",
        content: '<div class="demo">Hello World</div>',
        css: ".demo { color: blue; }",
    },
    // 添加更多卡片
];

const useCardsOpt = () => {
    return { cards };
};

export { useCardsOpt };
