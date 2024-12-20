import { Card } from "./types";

const cards: Card[] = [
	{
		from: 'net',
		name: "涌动的弹簧效果",
		description: "涌动的弹簧效果",
		author: ['大剑师兰特, 还是大剑师兰特，gis-dajianshi'],
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
		from: 'net',
		name: "鼠标移上去旋转、放大、移动",
		author: ['大剑师兰特, 还是大剑师兰特，gis-dajianshi'],
		description: "鼠标移上去旋转、放大、移动",
		content: `<div class="container">
		<div class="top">
			<h3>鼠标移上去旋转、放大、移动</h3>
			<div class="author">大剑师兰特, 还是大剑师兰特，gis-dajianshi</div>
		</div>
		<div style="width:640px ; margin:0 auto;">
			<div class="itemBox img1">360°旋转 </div>
			<div class="itemBox img2">放大</div>
			<div class="itemBox img3">旋转放大</div>
			<div class="itemBox img4">上下左右移动 </div>
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
			margin: 0 auto 130px;
			padding: 10px 0;
			background: orange;
			color: #fff;
		}

		.itemBox {
			width: 120px;
			height: 120px;
			line-height: 120px;
			margin: 20px;
			background-color: #5cb85c;
			float: left;
			font-size: 12px;
			text-align: center;
			color: #fff;
			cursor: pointer;
		}

		/*效果一：360°旋转 修改rotate(旋转度数)*/
		.img1 {
			transition: All 0.4s ease-in-out;
			-webkit-transition: All 0.4s ease-in-out;
			-moz-transition: All 0.4s ease-in-out;
			-o-transition: All 0.4s ease-in-out;
		}

		.img1:hover {
			transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
			-moz-transform: rotate(360deg);
			-o-transform: rotate(360deg);
			-ms-transform: rotate(360deg);
		}

		/*效果二：放大 修改scale(放大的值)*/
		.img2 {
			transition: All 0.4s ease-in-out;
			-webkit-transition: All 0.4s ease-in-out;
			-moz-transition: All 0.4s ease-in-out;
			-o-transition: All 0.4s ease-in-out;
		}

		.img2:hover {
			transform: scale(1.2);
			-webkit-transform: scale(1.2);
			-moz-transform: scale(1.2);
			-o-transform: scale(1.2);
			-ms-transform: scale(1.2);
		}

		/*效果三：旋转放大 修改rotate(旋转度数) scale(放大值)*/
		.img3 {
			transition: All 0.4s ease-in-out;
			-webkit-transition: All 0.4s ease-in-out;
			-moz-transition: All 0.4s ease-in-out;
			-o-transition: All 0.4s ease-in-out;
		}

		.img3:hover {
			transform: rotate(360deg) scale(1.2);
			-webkit-transform: rotate(360deg) scale(1.2);
			-moz-transform: rotate(360deg) scale(1.2);
			-o-transform: rotate(360deg) scale(1.2);
			-ms-transform: rotate(360deg) scale(1.2);
		}

		/*效果四：上下左右移动 修改translate(x轴,y轴)*/
		.img4 {
			transition: All 0.4s ease-in-out;
			-webkit-transition: All 0.4s ease-in-out;
			-moz-transition: All 0.4s ease-in-out;
			-o-transition: All 0.4s ease-in-out;
		}

		.img4:hover {
			transform: translate(0, -10px);
			-webkit-transform: translate(0, -10px);
			-moz-transform: translate(0, -10px);
			-o-transform: translate(0, -10px);
			-ms-transform: translate(0, -10px);
		}`
	},
	{
		from: 'net',
		name: "音频波纹加载效果",
		author: ['大剑师兰特, 还是大剑师兰特，gis-dajianshi'],
		description: "音频波纹加载效果",
		content: `<div class="container">
		<div class="top">
			<h3>音频波纹加载效果</h3>
			<div class="author">大剑师兰特, 还是大剑师兰特，gis-dajianshi</div>
		</div>
		<div class="dajianshi ">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
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
			background: thistle;
			color: #fff;
		}

		.dajianshi {
			margin: 100px auto 0;
			width: 200px;
			height: 120px;
			display: flex;
		}

		.dajianshi span {
			width: 10px;
			border-radius: 18px;
			margin-right: 20px;
		}

		.dajianshi span:nth-child(1) {
			animation: bar1 2s 0.2s infinite linear;
		}

		.dajianshi span:nth-child(2) {
			animation: bar2 2s 0.4s infinite linear;
		}

		.dajianshi span:nth-child(3) {
			animation: bar3 2s 0.6s infinite linear;
		}

		.dajianshi span:nth-child(4) {
			animation: bar4 2s 0.8s infinite linear;
		}

		.dajianshi span:nth-child(5) {
			animation: bar5 2s 1.0s infinite linear;
		}

		.dajianshi span:nth-child(6) {
			animation: bar6 2s 1.2s infinite linear;
		}

		.dajianshi span:nth-child(7) {
			animation: bar7 2s 1.4s infinite linear;
		}

		.dajianshi span:nth-child(8) {
			animation: bar8 2s 1.6s infinite linear;
		}

		.dajianshi span:nth-child(9) {
			animation: bar9 2s 1.8s infinite linear;
		}

		@keyframes bar1 {
			0% {
				background: #f677b0;
				margin-top: 25%;
				height: 10%;
			}

			50% {
				background: #f677b0;
				height: 100%;
				margin-top: 0%;
			}

			100% {
				background: #f677b0;
				height: 10%;
				margin-top: 25%;
			}
		}

		@keyframes bar2 {
			0% {
				background: #df7ff2;
				margin-top: 25%;
				height: 10%;
			}

			50% {
				background: #df7ff2;
				height: 100%;
				margin-top: 0%;
			}

			100% {
				background: #df7ff2;
				height: 10%;
				margin-top: 25%;
			}
		}

		@keyframes bar3 {
			0% {
				background: #8c7ff2;
				margin-top: 25%;
				height: 10%;
			}

			50% {
				background: #8c7ff2;
				height: 100%;
				margin-top: 0%;
			}

			100% {
				background: #8c7ff2;
				height: 10%;
				margin-top: 25%;
			}
		}

		@keyframes bar4 {
			0% {
				background: #7fd0f2;
				margin-top: 25%;
				height: 10%;
			}

			50% {
				background: #7fd0f2;
				height: 100%;
				margin-top: 0%;
			}

			100% {
				background: #7fd0f2;
				height: 10%;
				margin-top: 25%;
			}
		}

		@keyframes bar5 {
			0% {
				background: #7ff2d3;
				margin-top: 25%;
				height: 10%;
			}

			50% {
				background: #7ff2d3;
				height: 100%;
				margin-top: 0%;
			}

			100% {
				background: #7ff2d3;
				height: 10%;
				margin-top: 25%;
			}
		}`,
	},
	{
		from: 'net',
		name: "花样的鼠标悬停特效",
		author: ['大剑师兰特, 还是大剑师兰特，gis-dajianshi'],
		description: "花样的鼠标悬停特效",
		content: `<div class="container">
		<div class="top">
			<h3>花样的鼠标悬停特效</h3>
			<div class="author">大剑师兰特, 还是大剑师兰特，gis-dajianshi</div>
		</div>
		<div style="width:640px ; margin:0 auto; background:#222222;">
			<button class="fill">Fill In</button>
			<button class="pulse">Pulse</button>
			<button class="close">Close</button>
			<button class="raise">Raise</button>
			<button class="up">Fill Up</button>
			<button class="slide">Slide</button>
			<button class="offset">Offset</button>
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
		margin: 0 auto 130px;
		padding: 10px 0;
		background: mediumpurple;
		color: #fff;
	}

	.fill:hover,
	.fill:focus {
		box-shadow: inset 0 0 0 2em var(--hover);
	}

	.pulse:hover,
	.pulse:focus {
		-webkit-animation: pulse 1s;
		animation: pulse 1s;
		box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);
	}

	@-webkit-keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 var(--hover);
		}
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 var(--hover);
		}
	}

	.close:hover,
	.close:focus {
		box-shadow: inset -3.5em 0 0 0 var(--hover), inset 3.5em 0 0 0 var(--hover);
	}

	.raise:hover,
	.raise:focus {
		box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
		-webkit-transform: translateY(-0.25em);
		transform: translateY(-0.25em);
	}

	.up:hover,
	.up:focus {
		box-shadow: inset 0 -3.25em 0 0 var(--hover);
	}

	.slide:hover,
	.slide:focus {
		box-shadow: inset 6.5em 0 0 0 var(--hover);
	}

	.offset {
		box-shadow: 0.3em 0.3em 0 0 var(--color), inset 0.3em 0.3em 0 0 var(--color);
	}

	.offset:hover,
	.offset:focus {
		box-shadow: 0 0 0 0 var(--hover), inset 6em 3.5em 0 0 var(--hover);
	}

	.fill {
		--color: #a972cb;
		--hover: #cb72aa;
	}

	.pulse {
		--color: #ef6eae;
		--hover: #ef8f6e;
	}

	.close {
		--color: #ff7f82;
		--hover: #ffdc7f;
	}

	.raise {
		--color: #ffa260;
		--hover: #e5ff60;
	}

	.up {
		--color: #e4cb58;
		--hover: #94e458;
	}

	.slide {
		--color: #8fc866;
		--hover: #66c887;
	}

	.offset {
		--color: #19bc8b;
		--hover: #1973bc;
	}

	button {
		color: var(--color);
		-webkit-transition: 0.25s;
		transition: 0.25s;
	}

	button:hover,
	button:focus {
		border-color: var(--hover);
		color: #fff;
	}

	button {
		background: none;
		border: 2px solid;
		font: inherit;
		line-height: 1;
		margin: 0.5em;
		padding: 1em 2em;
	}`,
	},
	{
		from: 'net',
		name: "图片,显示文字或附加层",
		author: ['大剑师兰特, 还是大剑师兰特，gis-dajianshi'],
		description: "图片,显示文字或附加层",
		content: `<div class="container">
		<div class="top">
			<h3>hover图片,显示文字或附加层</h3>
			<div class="author">大剑师兰特, 还是大剑师兰特，gis-dajianshi</div>
		</div>
      <div class="one">
      	<img :src="imgData" alt='图片'>
      	<div class="word">阿米尔·汗（Aamir Khan），1965年3月14日出生于印度孟买，印度宝莱坞演员、导演、制片人。</div>
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
		background: maroon;
		color: #fff;
	}

	.one {
		width: 500px;
		height: 300px;
		position: relative;
		z-index: 1;
		cursor: pointer;
		margin: 50px auto 0;
	}

	.one img {
		width: 500px;
		height: 300px;
	}

	.one .word {
		display: none;
		width: 500px;
		height: 300px;
		background-color: rgba(179, 8, 10, 0.8);
		position: absolute;
		z-index: 2;
		left: 0;
		top: 0;
		padding: 80px 50px;
		font-size: 20px;
		color: #fff;
		font-family: "microsoft yahei";
		line-height: 30px;
		text-align: center;
		box-sizing: border-box;
	}

	.one:hover .word {
		display: block;
	}

	.one .word::after {
		content: "";
		position: absolute;
		z-index: 3;
		width: 120px;
		height: 1px;
		background: #fff;
		bottom: 80px;
		left: 190px
	}`,
	},
	{
		from: 'net',
		name: "太阳、地球、月球的旋转",
		author: ['大剑师兰特, 还是大剑师兰特，gis-dajianshi'],
		description: "太阳、地球、月球的旋转",
		content: `<div class="container">
		<div class="top">
			<h3>太阳、地球、月球的旋转</h3>
			<div class="author">大剑师兰特, 还是大剑师兰特，gis-dajianshi</div>
		</div>
		<div class="box">
			<div class="sunline">
				<div class="sun"></div>
				<div class="earthline">
					<div class="earth"></div>
					<div class="moon"></div>
				</div>
			</div>
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
		background: mediumvioletred;
		color: #fff;
	}

	.box {
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
		position: relative;
		padding: 1px;
		height: 300px;
		width: 300px;
		margin-left: 200px;
	}

	.sunline {
		position: relative;
		height: 400px;
		width: 400px;
		border: 2px solid black;
		border-radius: 50%;
		margin: 50px 0 0 50px;
		-webkit-animation: rotate 10s infinite linear;
		animation: rotate 10s infinite linear;
	}

	.sun {
		height: 100px;
		width: 100px;
		margin: 50% 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		background-color: red;
		border-radius: 50%;
		-webkit-box-shadow: 5px 5px 10px red, -5px -5px 10px red, 5px -5px 10px red, -5px 5px 10px red;
		box-shadow: 5px 5px 10px red, -5px -5px 10px red, 5px -5px 10px red, -5px 5px 10px red;
	}

	.earthline {
		position: absolute;
		right: 0;
		top: 50%;
		height: 200px;
		width: 200px;
		margin: -100px -100px 0 0;
		border: 1px solid black;
		border-radius: 50%;
		-webkit-animation: rotate 2s infinite linear;
		animation: rotate 2s infinite linear;
	}

	.earth {
		margin: 50% 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		height: 50px;
		width: 50px;
		background-color: blue;
		border-radius: 50%;
	}

	.moon {
		position: absolute;
		left: 0;
		top: 50%;
		height: 20px;
		width: 20px;
		margin: -10px 0 0 -10px;
		background-color: black;
		border-radius: 50%;
	}

	@-webkit-keyframes rotate {
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}`,
	},
	{
		from: 'net',
		name: "一个个蹦出的打字效果",
		author: ['大剑师兰特, 还是大剑师兰特，gis-dajianshi'],
		description: "一个个蹦出的打字效果",
		content: `<div class="container">
		<div class="top">
			<h3>一个个蹦出的打字效果</h3>
			<div class="author">大剑师兰特, 还是大剑师兰特，gis-dajianshi</div>
		</div>
		<div class="dajianshi">
           大剑师兰特，还是大剑师兰特
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
		background: mediumorchid;
		color: #fff;
	}

        .dajianshi {
			font-size: 60px;
			margin: 100px auto 0;
			color:blue;
            /*有多少个文字，width就是多少个em +1*/
            width: 14em;
            /* 加上两个动画，一个是打字动画，使用steps让字一个一个的出现，
             注意step和字数保持一致，光标动画也是同理，*/
            animation: typingWords 5s steps(14) infinite, cursor 0.5s steps(1) infinite;
            /* 要设置不允许换行，且溢出隐藏 */
            white-space: nowrap;
            overflow: hidden;
            /* 使用右边框作为打印的指针光标 */
            border-right: 2px solid #222;
        }

        @keyframes typingWords {
            0% {
                width: 0;
            }
        }

        @keyframes cursor {
            50% {
                border-color: deeppink;
            }
        }`,
	},
	{
		from: 'net',
		name: "边框线条环绕流动效果",
		author: ['大剑师兰特, 还是大剑师兰特，gis-dajianshi'],
		description: "边框线条环绕流动效果",
		content: `<div class="container">
		<div class="top">
			<h3>边框线条环绕流动效果</h3>
			<div class="author">大剑师兰特, 还是大剑师兰特，gis-dajianshi</div>
		</div>
		<div class="dajianshi">
			微信：gis-dajianshi
			<span class="line"></span>
			<span class="line"></span>
			<span class="line"></span>
			<span class="line"></span>
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
		background: indianred;
		color: #fff;
	}

	.dajianshi {
		width: 420px;
		height: 210px;
		margin: 100px auto;
		line-height: 210px;
		text-align: center;
		font-size: 40px;
		position: relative;
		overflow: hidden;
	}

	.line {
		position: absolute;
	}

	.line:nth-child(1) {
		top: 0;
		left: 0;
		width: 100%;
		height: 15px;
		background: linear-gradient(90deg, transparent, blue);
		animation: animate1 8s linear infinite;
	}


	@keyframes animate1 {
		0% {
			left: -100%;
		}
		50%,
		100% {
			left: 100%;
		}
	}

	.line:nth-child(2) {
		top: -100%;
		right: 0;
		width: 15px;
		height: 100%;
		background: linear-gradient(180deg, transparent, red);
		animation: animate2 8s linear infinite;
		/* 注意要加上延时触发动画效果，这样线条才会依次触发 */
		animation-delay: 2s;
	}

	@keyframes animate2 {
		0% {
			top: -100%;
		}

		50%,
		100% {
			top: 100%;
		}
	}

	.line:nth-child(3) {
		bottom: 0;
		right: 0;
		width: 100%;
		background: linear-gradient(270deg, transparent, orange);
		animation: animate3 8s linear infinite;
		animation-delay: 4s;
	}

	@keyframes animate3 {
		0% {
			right: -100%;
			height: 15px;
		}

		50%,
		100% {
			height: 10px;
			right: 100%;
		}
	}

	.line:nth-child(4) {
		bottom: -100%;
		left: 0;
		width: 15px;
		height: 100%;
		background: linear-gradient(360deg, transparent, #f0f);
		animation: animate4 8s linear infinite;
		animation-delay: 6s;
	}

	@keyframes animate4 {
		0% {
			bottom: -100%;
		}

		50%,
		100% {
			bottom: 100%;
		}
	}`,
	},
	{
		from: 'net',
		name: "7个小球转圈圈加载效果",
		author: ['大剑师兰特, 还是大剑师兰特，gis-dajianshi'],
		description: "7个小球转圈圈加载效果",
		content: `<div class="container">
		<div class="top">
			<h3>7个小球转圈圈加载效果</h3>
			<div class="author">大剑师兰特, 还是大剑师兰特，gis-dajianshi</div>
		</div>
		<div class="dajianshi">
			<div class="round"></div>
			<div class="round"></div>
			<div class="round"></div>
			<div class="round"></div>
			<div class="round"></div>
			<div class="round"></div>
			<div class="round"></div>
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
		background: plum;
		color: #fff;
	}

        .dajianshi {
            margin: 100px auto;
            width: 75px;
            height: 75px;
            position: relative;
        }

        .round {
            position: absolute;
            width: 19px;
            height: 19px;
            border-radius: 50%;
            background-color: red;
            animation: circleRound 2.8s ease infinite;
            transform-origin: 50% 75px;
        }

        .round:nth-child(1) {
            z-index: 7;
        }

        .round:nth-child(2) {
            height: 18px;
            width: 18px;
            background-color: orange;
            animation-delay: .2s;
            z-index: 6;
        }

        .round:nth-child(3) {
            height: 17px;
            width: 17px;
            background-color:yellow;
            animation-delay: .4s;
            z-index: 5;
        }

        .round:nth-child(4) {
            height: 16px;
            width: 16px;
            background-color:green;
            animation-delay: .6s;
            z-index: 4;
        }

        .round:nth-child(5) {
            height: 15px;
            width: 15px;
            background-color:cyan;
            animation-delay: .8s;
            z-index: 3;
        }

        .round:nth-child(6) {
            height: 14px;
            width: 14px;
            background-color:blue;
            animation-delay: 1s;
            z-index: 2;
        }

        .round:nth-child(7) {
            height: 13px;
            width: 13px;
            background-color: purple;
            animation-delay: 1.2s;
            z-index: 1;
        }

        @keyframes circleRound {
            to {
                transform: rotate(1turn);
            }
        }`,
	},
	{
		from: 'net',
		name: "球体涨水的效果",
		author: ['大剑师兰特, 还是大剑师兰特，gis-dajianshi'],
		description: "球体涨水的效果",
		content: `<div class="container">
		<div class="top">
			<h3>球体涨水的效果</h3>
			<div class="author">大剑师兰特, 还是大剑师兰特，gis-dajianshi</div>
		</div>
		<div class="dajianshi">
			<ul>
			  <li>
			    <span></span>
			  </li>
			  <li>
			    <span></span>
			  </li>
			  <li>
			    <span></span>
			  </li>
			  <li>
			    <span></span>
			  </li>
			</ul>
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
		background: deepskyblue;
		color: #fff;
	}
	
	.dajianshi{
		width: 100%;
		height: 400px;
		position: relative;
	}

	ul {
		display: flex;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	ul li {
		list-style: none;
	}

	ul li span {
		width: 120px;
		height:120px;
		background-color: #fff;
		text-align: center;
		line-height: 120px;
		margin: 0 10px;
		display: block;
		border-radius: 50%;
		position: relative;
		overflow: hidden;
		border: 3px solid #cde;
		z-index: 1;
	}

	ul li span:before {
		content: "";
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		height: 100%;
		transition: 0.5s;
		z-index: 2;
	}

	ul li span:hover:before {
		top: 0;
	}

	ul li:nth-child(1) span:before {
		background: red;
	}

	ul li:nth-child(2) span:before {
		background: orange;
	}

	ul li:nth-child(3) span:before {
		background: yellow;
	}

	ul li:nth-child(4) span:before {
		background: green;
	}`,
	},
	{
		from: 'net',
		name: "蛇形左右扭动效果",
		author: ['大剑师兰特, 还是大剑师兰特，gis-dajianshi'],
		description: "蛇形左右扭动效果",
		content: `<div class="container">
		<div class="top">
			<h3>蛇形左右扭动效果</h3>
			<div class="author">大剑师兰特, 还是大剑师兰特，gis-dajianshi</div>
		</div>
		<div class="dajianshi">
			<span style="--tt:1;"></span>
			<span style="--tt:2;"></span>
			<span style="--tt:3;"></span>
			<span style="--tt:4;"></span>
			<span style="--tt:5;"></span>
			<span style="--tt:6;"></span>
			<span style="--tt:7;"></span>
			<span style="--tt:8;"></span>
			<span style="--tt:9;"></span>
			<span style="--tt:10;"></span>
			<span style="--tt:11;"></span>
			<span style="--tt:12;"></span>
			<span style="--tt:13;"></span>
			<span style="--tt:14;"></span>
			<span style="--tt:15;"></span>
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
		background: darkgreen;
		color: #fff;
	}

	.dajianshi {
		position: relative;
		margin:100px auto 0;
		width: 50px;
		height: 50px;
		transform-style: preserve-3d;
		transform: rotateY(60deg) translateZ(100px) ;
	}

	.dajianshi span {
		position: absolute;
		top: calc(20px * var(--tt));
		left: calc(20px * var(--tt));
		bottom: calc(20px * var(--tt));
		right: calc(20px * var(--tt));
		border: 7px solid rgba(0, 124, 0, 0.8);
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
		from: 'net',
		name: "文字聚光灯效果",
		author: ['大剑师兰特, 还是大剑师兰特，gis-dajianshi'],
		description: "文字聚光灯效果",
		content: `<div class="container">
		<div class="top">
			<h3>文字聚光灯效果</h3>
			<div class="author">大剑师兰特, 还是大剑师兰特，gis-dajianshi</div>
		</div>
		<div class="dajianshi">
              大剑师兰特
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
		background: slateblue;
		color: #fff;
	}

   .dajianshi{
	   width: 780px;
	   height: 200px;
	   margin:100px auto 0;
        position: relative;
        color: #6b6868;
        font-size: 150px; 
		background-color: black;
    }
    .dajianshi::after{
        content: '大剑师兰特';
        top: 0;
        left: 20px;
        position: absolute;
        color: transparent;
        background-image: linear-gradient(to right,red,orange,yellow,green,cyan,blue,purple);
        background-clip: text;
        -webkit-background-clip: text;
        clip-path: circle(100px at 0% 50%);
        animation: movebg 3s linear alternate infinite;
    }
    @keyframes movebg{
        0%{
            clip-path: circle(100px at 0% 50%);
        }
        100%{
            clip-path: circle(100px at 100% 50%);
        }
    }`,
	},
	{
		from: 'net',
		name: "旋转的通透立方体",
		author: ['大剑师兰特, 还是大剑师兰特，gis-dajianshi'],
		description: "旋转的通透立方体",
		content: `<div class="container">
		<div class="top">
			<h3>旋转的通透立方体</h3>
			<div class="author">大剑师兰特, 还是大剑师兰特，gis-dajianshi</div>
		</div>
		<div class="dajianshi">
                   <div class="m1"></div>
                   <div class="m2"></div>
                   <div class="m3"></div>
                   <div class="m4"></div>
                   <div class="m5"></div>
                   <div class="m6"></div>
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
		background: firebrick;
		color: #fff;
	}

     .dajianshi{
		margin:100px auto 0;
        position: relative;
        width: 200px;
        height: 200px;
        transform-style: preserve-3d;
        animation: move 8s linear alternate infinite;
      }
      @keyframes move {
        0% {
          transform: rotateX(-30deg) rotateY(0deg);
        }

        100% {
          transform: rotateX(-30deg) rotateY(360deg);
        }
      }
      .m1,
      .m2,
      .m3,
      .m4 {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.8;
        background-image: linear-gradient(rgb(49, 255, 49), rgb(9, 255, 9));
      }

      .m1 {
        transform: translateZ(100px);
      }
      .m2 {
        transform: rotateY(180deg) translateZ(100px);
      }
      .m3 {
        transform: rotateY(-90deg) translateZ(100px);
      }
      .m4 {
        transform: rotateY(90deg) translateZ(100px);
      }
      .m5,.m6 {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .m5 {
        transform: rotateX(90deg) translateZ(100px);
        background-color: rgba(49, 150, 49,0.1);
      }
      .m6 {
        background-color: rgb(49, 255, 49);
        transform: rotateX(-90deg) translateZ(250px);
        box-shadow: 0 0 100px 30px rgb(9, 255, 9);
        filter: blur(30px);
      }`,
	},
	{
		from: 'net',
		name: "扇骨打开关闭的动画",
		author: ['大剑师兰特, 还是大剑师兰特，gis-dajianshi'],
		description: "扇骨打开关闭的动画",
		content: `<div class="container">
		<div class="top">
			<h3>扇骨打开关闭的动画</h3>
			<div class="author">大剑师兰特, 还是大剑师兰特，gis-dajianshi</div>
		</div>
		<div class="dajianshi">
			<div class="one"></div>
			<div class="one"></div>
			<div class="one"></div>
			<div class="one"></div>
			<div class="one"></div>
			<div class="one"></div>
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
		background: black;
		color: #fff;
	}

	.dajianshi {
		width: 100%;
		height: 400px;
		text-align: center;
		position: relative;
	}

	.one {
		width: 70px;
		height: 280px;
		position: absolute;
		top: 100px;
		border-radius: 5px;
		border-top: solid 2px rgba(0, 0, 0, .2);
		border-left: solid 3px rgba(255, 255, 255, .2);
		border-bottom: solid 3px rgba(0, 0, 0, .2);
		text-align: center;
		box-sizing: border-box;
		transform-origin: center 90%;
		display: inline-block;
		backface-visibility: hidden;
		margin-left: -35px;
		transform: rotate(0deg);
	}

	.one:before {
		width: 16px;
		height: 16px;
		content: "";
		background-color: white;
		display: inline-block;
		border-radius: 8px;
		bottom: 10px;
		position: absolute;
		margin-left: -8px;
	}

	.one:nth-child(1) {
		background-color: purple;
		animation: purple-move 5s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
	}

	.one:nth-child(2) {
		background-color: blue;
		animation: blue-move 5s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
	}

	.one:nth-child(3) {
		background-color: green;
		animation: green-move 5s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
	}

	.one:nth-child(4) {
		background-color: yellow;
		animation: yellow-move 5s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
	}

	.one:nth-child(5) {
		background-color: orange;
		animation: orange-move 5s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
	}

	.one:nth-child(6) {
		background-color: red;
		animation: red-move 5s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
	}


	@keyframes purple-move {
		0% {
			transform: rotate(0deg);
		}

		30%,
		70% {
			transform: rotate(-60deg);
		}

		90%,
		10% {
			transform: rotate(0deg);
		}
	}

	@keyframes blue-move {
		0% {
			transform: rotate(0deg);
		}

		30%,
		70% {
			transform: rotate(-40deg);
		}

		90%,
		10% {
			transform: rotate(0deg);
		}
	}

	@keyframes green-move {
		0% {
			transform: rotate(0deg);
		}

		30%,
		70% {
			transform: rotate(-15deg);
		}

		90%,
		10% {
			transform: rotate(0deg);
		}
	}

	@keyframes yellow-move {
		0% {
			transform: rotate(0deg);
		}

		30%,
		70% {
			transform: rotate(15deg);
		}

		90%,
		10% {
			transform: rotate(0deg);
		}
	}

	@keyframes orange-move {
		0% {
			transform: rotate(0deg);
		}
		30%,
		70% {
			transform: rotate(40deg);
		}

		90%,
		10% {
			transform: rotate(0deg);
		}
	}

	@keyframes red-move {
		0% {
			transform: rotate(0deg);
		}

		30%,
		70% {
			transform: rotate(60deg);
		}

		90%,
		10% {
			transform: rotate(0deg);
		}
	}`,
	},
	{
		from: 'net',
		name: "日蚀特效",
		author: ['大剑师兰特, 还是大剑师兰特，gis-dajianshi'],
		description: "日蚀特效",
		content: `<div class="container">
		<div class="top">
			<h3>日蚀特效</h3>
			<div class="author">大剑师兰特, 还是大剑师兰特，gis-dajianshi</div>
		</div>
		<div class="dajianshi">
			<div class="moon"></div>
		</div>
	</div>`,
		css: `.container {
			width: 1000px;
			height: 600px;
			margin: 50px auto;
			border: 1px solid green;

		}

		.top {
			margin: 0 auto 0px;
			padding: 10px 0;
			background: darkgoldenrod;
			color: #fff;
		}

		.dajianshi {
			width: 100%;
			height: 500px;
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
		}`,
	},
	{
		from: 'net',
		name: "超迷人的科技之眼",
		author: ['大剑师兰特, 还是大剑师兰特，gis-dajianshi'],
		description: "超迷人的科技之眼",
		content: `<div class="container">
		<div class="top">
			<h3>超迷人的科技之眼</h3>
			<div class="author">大剑师兰特, 还是大剑师兰特，gis-dajianshi</div>
		</div>
		<div class="dajianshi">
			<div class="eye"></div>
			<div class="circle-1"></div>
			<div class="circle-2"></div>
			<div class="circle-3"></div>
			<div class="circle-4"></div>
			<div class="circle-5"></div>
			<div class="circle-6"></div>
			<div class="circle-7"></div>
			<div class="circle-8"></div>
			<div class="circle-9"></div>
			<div class="circle-10"></div>
			<div class="circle-11"></div>
			<div class="circle-12"></div>
			<div class="circle-13"></div>
			<div class="circle-14"></div>

			<div class="glitch"></div>

			<div class="fragment-1"></div>
			<div class="fragment-2"></div>
			<div class="fragment-3"></div>


			<svg width="190" height="190" viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<clipPath id='bagel1'>
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M95 190C147.467 190 190 147.467 190 95C190 42.533 147.467 0 95 0C42.533 0 0 42.533 0 95C0 147.467 42.533 190 95 190ZM95 120C108.807 120 120 108.807 120 95C120 81.1929 108.807 70 95 70C81.1929 70 70 81.1929 70 95C70 108.807 81.1929 120 95 120Z" />
					</clipPath>
					<clipPath id='bagel2'>
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M71 142C110.212 142 142 110.212 142 71C142 31.7878 110.212 0 71 0C31.7878 0 0 31.7878 0 71C0 110.212 31.7878 142 71 142ZM71 139C108.555 139 139 108.555 139 71C139 33.4446 108.555 3 71 3C33.4446 3 3 33.4446 3 71C3 108.555 33.4446 139 71 139Z" />
					</clipPath>
					<clipPath id='bagel3'>
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M60 120C93.1372 120 120 93.1372 120 60C120 26.8628 93.1372 0 60 0C26.8628 0 0 26.8628 0 60C0 93.1372 26.8628 120 60 120ZM60 115C90.3757 115 115 90.3757 115 60C115 29.6243 90.3757 5 60 5C29.6243 5 5 29.6243 5 60C5 90.3757 29.6243 115 60 115Z" />
					</clipPath>
					<clipPath id='bagel4'>
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M38 76C58.9868 76 76 58.9868 76 38C76 17.0132 58.9868 0 38 0C17.0132 0 0 17.0132 0 38C0 58.9868 17.0132 76 38 76ZM38 72C56.7777 72 72 56.7776 72 38C72 19.2224 56.7777 4 38 4C19.2223 4 4 19.2224 4 38C4 56.7776 19.2223 72 38 72Z" />
					</clipPath>
				</defs>
			</svg>
		</div>
	</div>`,
		css: `.container {
		width: 1000px;
		height: 600px;
		margin: 50px auto;
		border: 1px solid green;
		position: relative;
	}

	.top {
		margin: 0 auto 0px;
		padding: 10px 0;
		background: black;
		color: #fff;
	}

	.dajianshi {
		width: 100%;
		height: 500px;
		text-align: center;
		position: relative;
		background: linear-gradient(-45deg, #8691b3, #edeef3);
	}

.dajianshi *, .dajianshi *:before, .dajianshi *:after {
		content: '';
		position: absolute;
		top: 50%; left: 50%;
	}
	.eye {
		width: 330px; height: 330px;
		margin:0 auto;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		background: #EBEDF3;
		filter: blur(5px);
	
		animation: eyeAnimation 4s cubic-bezier(1, 0, 1, 1) infinite;
	}
	@keyframes eyeAnimation {
		0%, 33%, 100% {
			box-shadow: inset -8px -13px 20px -10px rgba(230, 230, 236, 0.04), 64px 55px 40px -40px #38406A, 20px 18px 30px -10px #38406A, inset -70px -50px 60px -30px #4b6398, inset -90px -90px 70px -90px #697398, inset -70px -50px 100px -40px #697398, inset 80px 50px 80px -50px #eeeef3, -25px -15px 50px -10px #F6F6FB, 14px -1px 50px -10px #7e7ea9, 1px 9px 50px -10px #7e7ea9, inset -90px 40px 60px -20px rgba(116, 66, 255, 0.1), inset -90px -120px 60px -20px rgba(116, 66, 255, 0.1);
	    transform: translate(-50%, -50%) scale(1.25);
		}
		65% {
			box-shadow: inset -8px -13px 60px -10px rgba(230, 230, 236, 0.2), 44px 35px 20px -20px #687294, 11px 9px 9px -4px #6e799d, inset -100px -70px 40px -110px #6A789C, inset -90px -90px 70px -90px #697398, inset -70px -50px 100px -40px #697398, inset 80px 50px 80px -50px #eeeef3, -25px -15px 30px -10px #F6F6FB;
			transform: translate(-50%, -50%) scale(1);
		}
	}
	
	
		.eye::after {
			width: 160px; height: 160px;
			border-radius: 50%;
			box-shadow: inset -50px -20px 30px 0px #e7e2f5, inset 100px 10px 20px -27px #2f2c4c, 0px 0px 10px 7px rgba(231, 226, 245, 1);
	
			animation: pupilAnimationSize 4s cubic-bezier(1, 0, 1, 1) infinite,
								 pupilAnimationView 4s ease infinite;
		}
	@keyframes pupilAnimationSize {
		0%, 30%, 100% { transform: translate(-50%, -50%) scale(0.85); }
		40%, 90% 			{ transform: translate(-50%, -50%) scale(0.5); }
	}
	@keyframes pupilAnimationView {
		0%, 30%, 100% {
			box-shadow: inset -50px -20px 30px 0px #e7e2f5, inset 100px 10px 20px -27px #2f2c4c, 0px 0px 10px 7px rgba(231, 226, 245, 1);
		}
		60%, 66% {
			box-shadow: inset -50px -20px 30px 0px rgba(231, 226, 245, 0), inset 10px 10px 70px -27px rgba(47, 44, 76, 0), 0px 0px 10px 7px hsla(256, 49%, 92%, 0);
		}
		90% {
			box-shadow: inset -50px -20px 30px 0px #e7e2f5, inset 100px 10px 20px -27px #2f2c4c, 0px 0px 10px 7px rgba(231, 226, 245, 1);
		}
	}
	
	
	.circle-1 {
		width: 475px; height: 475px;
		border-radius: 50%;
		border: 1px solid transparent;
		border-right-color: rgba(223, 228, 255, 0.6);
	
		animation: circle1AnimationOpacity 4s ease infinite,
							 circle1AnimationMove 4s ease infinite;
	}
	@keyframes circle1AnimationMove {
		00%, 100% 		{ transform: translate(-50%, -50%) rotate(49deg); }
		07% 					{ transform: translate(-50%, -50%) rotate(38deg); }
		12%, 19%, 68% { transform: translate(-50%, -50%) rotate(42deg); }
		26%, 30% 			{ transform: translate(-50%, -50%) rotate(82deg); }
		73% 					{ transform: translate(-50%, -50%) rotate(34deg); }
		87%, 92% 			{ transform: translate(-50%, -50%) rotate(69deg); }
		94% 					{ transform: translate(-50%, -50%) rotate(65deg); }
	}
	@keyframes circle1AnimationOpacity {
		00%, 27%, 73%, 100% { opacity: 1; }
		30%, 70% 						{ opacity: 0; }
	}
	
	
	.circle-2 {
		width: 475px; height: 475px;
		border-radius: 50%;
		border: 1px solid transparent;
		border-right-color: rgba(223, 228, 255, 0.6);
	
		animation: circle2AnimationOpacity 4s ease infinite,
							 circle2AnimationMove 4s ease infinite;
	}
	@keyframes circle2AnimationMove {
		0%, 100% { transform: translate(-50%, -50%) rotate(229deg); }
		9% 			 { transform: translate(-50%, -50%) rotate(220deg); }
		14%, 21% { transform: translate(-50%, -50%) rotate(225deg); }
		29%, 67% { transform: translate(-50%, -50%) rotate(262deg); }
		82% 		 { transform: translate(-50%, -50%) rotate(241deg); }
		90%, 94% { transform: translate(-50%, -50%) rotate(249deg); }
		99% 		 { transform: translate(-50%, -50%) rotate(245deg); }
	}
	@keyframes circle2AnimationOpacity {
		0%, 27%, 79%, 100% { opacity: 1; }
		30%, 76% 					 { opacity: 0; }
	}
	
	
	.circle-3 {
		left: calc(50% + 93px);
		top: calc(50% - 189px);
		width: 106px; height: 280px;
		overflow: hidden;
	}
		.circle-3::before {
			left: -275%;
			top: -4%;
			width: 393px;
			height: 393px;
			border-radius: 50%;
			border: 1px solid transparent;
			border-right-color: rgba(223, 228, 255, 0.6);
	
			animation: circle3Animation 4s ease infinite;
		}
	@keyframes circle3Animation {
		0%   { transform: rotate(-3deg); }
		20%  { transform: rotate(-107deg); }
		79%  { transform: rotate(-286deg); }
		100% { transform: rotate(-364deg); }
	}
	
	
	.circle-4 {
		width: 295px; height: 295px;
		border-radius: 50%;
		border: 1px solid transparent;
		border-right-color: rgb(251, 251, 251);
		border-left-color: rgba(251, 251, 251, 0.2);
	
		animation: circle4AnimationMove 4s cubic-bezier(1, 0, 1, 1) infinite,
							 circle4AnimationOpacity 4s ease infinite;
	}
	@keyframes circle4AnimationMove {
		0%, 100% { transform: translate(-50%, -50%) rotate(219deg) scale(1); }
		6% 			 { transform: translate(-50%, -50%) rotate(221deg) scale(0.9); }
		16% 		 { transform: translate(-50%, -50%) rotate(302deg) scale(0.9); }
		22% 		 { transform: translate(-50%, -50%) rotate(307deg) scale(0.9); }
		29% 		 { transform: translate(-50%, -50%) rotate(312deg) scale(0.93); }
		33% 		 { transform: translate(-50%, -50%) rotate(310deg) scale(0.93); }
		36% 		 { transform: translate(-50%, -50%) rotate(300deg) scale(0.7); }
		39% 		 { transform: translate(-50%, -50%) rotate(220deg) scale(0.92); }
		50%, 57% { transform: translate(-50%, -50%) rotate(248deg) scale(0.92); }
		66% 		 { transform: translate(-50%, -50%) rotate(225deg) scale(0.92); }
		73%, 81% { transform: translate(-50%, -50%) rotate(243deg) scale(0.92); }
		93% 		 { transform: translate(-50%, -50%) rotate(215deg) scale(1); }
	}
	@keyframes circle4AnimationOpacity {
		00%, 33%, 50%, 100% { opacity: 1; }
		36%, 39% { opacity: 0; }
	}
	
	
	.circle-5 {
		width: 100px; height: 100px;
		transform: translate(-50%, -50%);
		
		animation: circle5AnimationSize 4s cubic-bezier(1, 0, 1, 1) infinite,
							 circle5AnimationView 4s ease infinite;
	}
		.circle-5::before {
			width: 173px; height: 173px;
			border-radius: 50%;
			border: 1px solid rgb(251, 251, 251);
			transform: translate(-50%, -50%);
		}
		.circle-5::after {
			width: 177px; height: 177px;
			border-radius: 50%;
			border: 1px solid rgb(251, 251, 251);
			transform: translate(-50%, -50%);
		}
	@keyframes circle5AnimationSize {
		0%, 38%, 82.82%, 100% { transform: translate(-50%, -50%) scale(1); }
		45%, 75.44% 					{ transform: translate(-50%, -50%) scale(0.7); }
	}
	@keyframes circle5AnimationView {
		0%, 5.7%, 7.4%, 9.8%, 11.5%, 14%, 15.6%, 18.9%, 21.3%, 23.8%, 25.4%, 28.7%, 35.3%, 42%, 77.9%, 82.7%, 83.6%, 85.2%, 86.1%, 91.8%, 93.5%, 97.6%, 100% { opacity: 1; }
		2.5%, 6.6%, 8.2%, 10.7%, 14.8%, 18%, 20.5%, 22.1%, 24.6%, 27.9%, 36%, 88.6% { opacity: 0.5; }
		47%, 77.8%, 82.8%, 83.5%, 85.3%, 86%, 90.2%, 92.7%, 96.8%, 99.2% { opacity: 0; }
	}
	
	
	.circle-6 {
		top: 50%; left: 50%;
		width: 190px; height: 190px;
		background: repeating-conic-gradient(from 0deg, rgba(179, 221, 255, 0.4) 0deg 1deg, transparent 1deg 2deg);
		clip-path: url(#bagel1);
		border-radius: 50%;
	
		animation: circle6Animation 4s cubic-bezier(1, 0, 1, 1) infinite;
	}
	@keyframes circle6Animation {
		0% {
			transform: translate(-50%, -50%) scale(1);
		}
		8%, 35% {
			transform: translate(-50%, -50%) scale(0.93);
			opacity: 1;
		}
		40%, 90% {
			transform: translate(-50%, -50%) scale(0.2);
			opacity: 0;
		}
		95%, 100% {
			transform: translate(-50%, -50%) scale(1);
			opacity: 1;
		}
	}
	
	.circle-7 {
		top: 50%; left: 50%;
		width: 142px; height: 142px;
		filter: blur(1px);
	
		animation: circle6Animation 4s -0.1s cubic-bezier(1, 0, 1, 1) infinite;
	}
		.circle-7::before {
			top: 0; left: 0;
			width: 100%; height: 100%;
			background: repeating-conic-gradient(from 0deg, rgba(114, 87, 187, 0.6) 0deg 2deg, transparent 2deg 8deg);
			clip-path: url(#bagel2);
			border-radius: 50%;
		}
	
	
	.circle-8 {
		top: 50%; left: 50%;
		width: 120px; height: 120px;
		background: repeating-conic-gradient(from 0deg, rgba(236, 247, 255, 0.68) 0deg 1deg, transparent 1deg 2deg);
		clip-path: url(#bagel3);
		border-radius: 50%;
	
		animation: circle6Animation 4s -0.13s cubic-bezier(1, 0, 1, 1) infinite;
	}
	
	
	.circle-9 {
		top: 50%; left: 50%;
		width: 76px; height: 76px;
		background: repeating-conic-gradient(from 0deg, rgba(236, 247, 255, 0.68) 0deg 1deg, transparent 1deg 2deg);
		clip-path: url(#bagel4);
		border-radius: 50%;
	
		animation: circle6Animation 4s -0.16s cubic-bezier(1, 0, 1, 1) infinite;
	}
	
	
	.circle-10 {
		top: 50%; left: 50%;
		width: 190px; height: 190px;
		background: radial-gradient(rgba(230, 245, 255, 0.6), rgba(201, 243, 255, 0.5), rgba(74, 105, 160, 0.3), transparent 70%);
		clip-path: url(#bagel1);
		border-radius: 50%;
	
		animation: circle10Animation 4s cubic-bezier(1, 0, 1, 1) infinite;
	}
	@keyframes circle10Animation {
		0% {
			transform: translate(-50%, -50%) scale(1);
		}
		4%, 30% {
			transform: translate(-50%, -50%) scale(0.93);
			opacity: 1;
		}
		35%, 93% {
			transform: translate(-50%, -50%) scale(0);
			opacity: 0;
		}
		98%, 100% {
			transform: translate(-50%, -50%) scale(1);
			opacity: 1;
		}
	}
	
	
	.circle-11 {
		top: 50%; left: 50%;
		width: 190px; height: 190px;
		background: repeating-conic-gradient(from 0deg, rgba(229, 243, 255, 0.1) 0deg 1deg, transparent 1deg 8deg, rgba(229, 243, 255, 0.3) 8deg 9deg, transparent 9deg 10deg, rgba(229, 243, 255, 0.1) 10deg 11deg, transparent 11deg 72deg);
		clip-path: url(#bagel1);
		border-radius: 50%;
	
		animation: circle11Animation 4s cubic-bezier(1, 0, 1, 1) infinite;
	}
	@keyframes circle11Animation {
		0%, 98%, 100% {
			transform: translate(-50%, -50%) rotate(0deg);
			opacity: 1;
		}
		15% {
			transform: translate(-50%, -50%) rotate(45deg);
		}
		25% {
			transform: translate(-50%, -50%) rotate(-10deg);
		}
		30% {
			opacity: 1;
		}
		35% {
			transform: translate(-50%, -50%) rotate(-20deg);
			opacity: 0;
		}
		93% {
			transform: translate(-50%, -50%) rotate(80deg);
			opacity: 0;
		}
	}
	
	
	.circle-12 {
		top: 50%; left: 50%;
		width: 190px; height: 190px;
		background: repeating-conic-gradient(from 0deg, rgba(208, 233, 255, 0.2) 20deg 21deg, transparent 21deg 40deg, rgba(192, 223, 249, 0.25) 40deg 41deg, transparent 41deg 43deg, rgba(179, 220, 255, 0.15) 43deg 44deg, transparent 44deg 76deg);
		clip-path: url(#bagel1);
		border-radius: 50%;
	
		animation: circle12Animation 4s cubic-bezier(1, 0, 1, 1) infinite;
	}
	@keyframes circle12Animation {
		0%, 96%, 100% {
			transform: translate(-50%, -50%) rotate(0deg);
			opacity: 1;
		}
		10% {
			transform: translate(-50%, -50%) rotate(45deg);
		}
		25% {
			transform: translate(-50%, -50%) rotate(-45deg);
		}
		30% {
			opacity: 1;
		}
		35% {
			transform: translate(-50%, -50%) rotate(50deg);
			opacity: 0;
		}
		93% {
			transform: translate(-50%, -50%) rotate(-90deg);
			opacity: 0;
		}
	}
	
	
	.circle-13 {
		width: 100px; height: 100px;
		transform: translate(-50%, -50%);
		animation: circle13AnimationSize 4s cubic-bezier(1, 0, 1, 1) infinite,
							 circle13AnimationView 4s ease infinite;
	}
		.circle-13::before {
			width: 110px; height: 110px;
			border-radius: 50%;
			border: 1px solid rgb(251, 251, 251);
			transform: translate(-50%, -50%);
		}
		.circle-13::after {
			width: 120px; height: 120px;
			border-radius: 50%;
			border: 1px solid rgba(251, 251, 251, 0.5);
			transform: translate(-50%, -50%);
		}
	@keyframes circle13AnimationSize {
		0%, 32%, 86%, 100% { transform: translate(-50%, -50%) scale(1); }
		38%, 82% { transform: translate(-50%, -50%) scale(0.2); }
	}
	@keyframes circle13AnimationView {
		/* подвигать */
		0% { opacity: 1; }
		2.5% { opacity: 0.5; }
		5.7% { opacity: 1; }
		6.6% { opacity: 0.5; }
		7.4% { opacity: 1; }
		8.2% { opacity: 0.5; }
		9.8% { opacity: 1; }
		10.7% { opacity: 0.5; }
		11.5%, 14% { opacity: 1; }
		14.8% { opacity: 0.5; }
		15.6% { opacity: 1; }
		18% { opacity: 0.5; }
		18.9% { opacity: 1; }
		20.5% { opacity: 0.5; }
		21.3% { opacity: 1; }
		22.1% { opacity: 0.5; }
		23.8% { opacity: 1; }
		24.6% { opacity: 0.5; }
		25.4% { opacity: 1; }
		27.9% { opacity: 0.5; }
		28.7%, 32% { opacity: 1; }
		38% { opacity: 0; }
		82% { opacity: 0; }
		86% { opacity: 1; }
		88.6% { opacity: 0.5; }
		90.2% { opacity: 0; }
		91.8% { opacity: 1; }
		92.7% { opacity: 0; }
		93.5% { opacity: 1; }
		96.8% { opacity: 0; }
		97.6% { opacity: 1; }
		99.2% { opacity: 0; }
		100% { opacity: 1; }
	}
	
	.circle-14 {
		width: 100px; height: 100px;
		transform: translate(-50%, -50%);
		animation: circle13AnimationSize 4s -0.15s cubic-bezier(1, 0, 1, 1) infinite,
							 circle14AnimationView 4s ease infinite;
	}
		.circle-14::before {
			width: 70px; height: 70px;
			border-radius: 50%;
			border: 1px solid rgba(251, 251, 251, 0.5);
			transform: translate(-50%, -50%);
		}
		.circle-14::after {
			width: 95px; height: 95px;
			border-radius: 50%;
			border: 1px solid rgba(251, 251, 251, 0.3);
			transform: translate(-50%, -50%);
		}
	
	@keyframes circle14AnimationView {
		/* подвигать */
		0% { opacity: 1; }
		2.5% { opacity: 0.5; }
		5.7% { opacity: 1; }
		6.6% { opacity: 0.5; }
		7.4% { opacity: 1; }
		8.2% { opacity: 0.5; }
		9.8% { opacity: 1; }
		10.7% { opacity: 0.5; }
		11.5%, 14% { opacity: 1; }
		14.8% { opacity: 0.5; }
		15.6% { opacity: 1; }
		18% { opacity: 0.5; }
		18.9% { opacity: 1; }
		20.5% { opacity: 0.5; }
		21.3% { opacity: 1; }
		22.1% { opacity: 0.5; }
		23.8% { opacity: 1; }
		24.6% { opacity: 0.5; }
		25.4% { opacity: 1; }
		27.9% { opacity: 0.5; }
		28.7%, 32% { opacity: 1; }
		38% { opacity: 0; }
		82% { opacity: 0; }
		86% { opacity: 1; }
		88.6% { opacity: 0.5; }
		90.2% { opacity: 0; }
		91.8% { opacity: 1; }
		92.7% { opacity: 0; }
		93.5% { opacity: 1; }
		96.8% { opacity: 0; }
		97.6% { opacity: 1; }
		99.2% { opacity: 0; }
		100% { opacity: 1; }
	}
	
	
	.glitch {
		width: 2px; height: 2px;
		box-shadow: -21px -75px #8AC7ED, -16px -78px #8AC7ED, -8px -78px #8AC7ED, -5px -77px #8AC7ED, -2px -79px #8AC7ED, 10px -79px #8AC7ED, 25px -73px #8AC7ED, 41px -71px #8AC7ED, 44px -68px #8AC7ED, -26px -72px #8AC7ED, -45px -62px #8AC7ED, -65px -57px #8AC7ED, 59px -49px #8AC7ED, 67px -52px #8AC7ED, 37px -69px #8AC7ED, 43px -62px #8AC7ED, 39px -62px #8AC7ED, 17px -71px #8AC7ED, 28px -67px #8AC7ED, 65px -32px #8AC7ED, 73px -24px #8AC7ED, 67px -25px #8AC7ED, 76px -14px #8AC7ED, 70px -18px #8AC7ED, 82px 21px #8AC7ED, 79px 20px #8AC7ED, 72px 15px #8AC7ED, 55px 45px #8AC7ED, 48px 51px #8AC7ED, 43px 58px #8AC7ED, 37px 57px #8AC7ED, 36px 63px #8AC7ED, 32px 76px #8AC7ED, 35px 70px #8AC7ED, 25px 71px #8AC7ED, 20px 75px #8AC7ED, 5px 70px #8AC7ED, 7px 75px #8AC7ED, -5px 79px #8AC7ED, 3px 78px #8AC7ED, -1px 77px #8AC7ED, -13px 78px #8AC7ED, -15px 82px #8AC7ED, -20px 76px #8AC7ED, -18px 78px #8AC7ED, -17px 75px #8AC7ED, -22px 72px #8AC7ED, -34px 72px #8AC7ED, -36px 69px #8AC7ED, -43px 74px #8AC7ED, -41px 72px #8AC7ED, -42px 69px #8AC7ED, -38px 66px #8AC7ED, -43px 63px #8AC7ED, -37px 61px #8AC7ED, -56px 66px #8AC7ED, -54px 61px #8AC7ED, -58px 54px #8AC7ED, -60px 41px #8AC7ED, -50px 56px #8AC7ED, -54px 57px #8AC7ED, -60px 52px #8AC7ED, -74px 35px #8AC7ED, -76px 18px #8AC7ED, -74px 25px #8AC7ED, -69px 23px #8AC7ED, -84px 13px #8AC7ED, -73px 3px #8AC7ED, -80px -1px #8AC7ED, -79px -4px #8AC7ED, -79px -7px #8AC7ED, -70px -11px #8AC7ED, -67px -23px #8AC7ED, -84px -13px #8AC7ED, -71px -42px #8AC7ED, -61px -49px #8AC7ED, -58px -43px #8AC7ED, -55px -50px #8AC7ED, -32px -72px #8AC7ED, -80px -30px #8AC7ED, -59px -20px #8AC7ED, -79px 12px #8AC7ED, -76px 1px #8AC7ED, 8px 57px #8AC7ED, 59px 36px #8AC7ED, 60px 46px #8AC7ED, 54px 59px #8AC7ED, 44px 52px #8AC7ED, -31px 20px #8AC7ED, -56px 2px #8AC7ED, 47px 35px #8AC7ED, 70px 6px #8AC7ED, 60px -2px #8AC7ED,
								-21px -75px 0 1px rgba(255, 255, 255, 0.1), -16px -78px 0 1px rgba(255, 255, 255, 0.1), -8px -78px 0 1px rgba(255, 255, 255, 0.1), -5px -77px 0 1px rgba(255, 255, 255, 0.1), -2px -79px 0 1px rgba(255, 255, 255, 0.1), 10px -79px 0 1px rgba(255, 255, 255, 0.1), 25px -73px 0 1px rgba(255, 255, 255, 0.1), 41px -71px 0 1px rgba(255, 255, 255, 0.1), 44px -68px 0 1px rgba(255, 255, 255, 0.1), -26px -72px 0 1px rgba(255, 255, 255, 0.1), -45px -62px 0 1px rgba(255, 255, 255, 0.1), -65px -57px 0 1px rgba(255, 255, 255, 0.1), 59px -49px 0 1px rgba(255, 255, 255, 0.1), 67px -52px 0 1px rgba(255, 255, 255, 0.1), 37px -69px 0 1px rgba(255, 255, 255, 0.1), 43px -62px 0 1px rgba(255, 255, 255, 0.1), 39px -62px 0 1px rgba(255, 255, 255, 0.1), 17px -71px 0 1px rgba(255, 255, 255, 0.1), 28px -67px 0 1px rgba(255, 255, 255, 0.1), 65px -32px 0 1px rgba(255, 255, 255, 0.1), 73px -24px 0 1px rgba(255, 255, 255, 0.1), 67px -25px 0 1px rgba(255, 255, 255, 0.1), 76px -14px 0 1px rgba(255, 255, 255, 0.1), 70px -18px 0 1px rgba(255, 255, 255, 0.1), 82px 21px 0 1px rgba(255, 255, 255, 0.1), 79px 20px 0 1px rgba(255, 255, 255, 0.1), 72px 15px 0 1px rgba(255, 255, 255, 0.1), 55px 45px 0 1px rgba(255, 255, 255, 0.1), 48px 51px 0 1px rgba(255, 255, 255, 0.1), 43px 58px 0 1px rgba(255, 255, 255, 0.1), 37px 57px 0 1px rgba(255, 255, 255, 0.1), 36px 63px 0 1px rgba(255, 255, 255, 0.1), 32px 76px 0 1px rgba(255, 255, 255, 0.1), 35px 70px 0 1px rgba(255, 255, 255, 0.1), 25px 71px 0 1px rgba(255, 255, 255, 0.1), 20px 75px 0 1px rgba(255, 255, 255, 0.1), 5px 70px 0 1px rgba(255, 255, 255, 0.1), 7px 75px 0 1px rgba(255, 255, 255, 0.1), -5px 79px 0 1px rgba(255, 255, 255, 0.1), 3px 78px 0 1px rgba(255, 255, 255, 0.1), -1px 77px 0 1px rgba(255, 255, 255, 0.1), -13px 78px 0 1px rgba(255, 255, 255, 0.1), -15px 82px 0 1px rgba(255, 255, 255, 0.1), -20px 76px 0 1px rgba(255, 255, 255, 0.1), -18px 78px 0 1px rgba(255, 255, 255, 0.1), -17px 75px 0 1px rgba(255, 255, 255, 0.1), -22px 72px 0 1px rgba(255, 255, 255, 0.1), -34px 72px 0 1px rgba(255, 255, 255, 0.1), -36px 69px 0 1px rgba(255, 255, 255, 0.1), -43px 74px 0 1px rgba(255, 255, 255, 0.1), -41px 72px 0 1px rgba(255, 255, 255, 0.1), -42px 69px 0 1px rgba(255, 255, 255, 0.1), -38px 66px 0 1px rgba(255, 255, 255, 0.1), -43px 63px 0 1px rgba(255, 255, 255, 0.1), -37px 61px 0 1px rgba(255, 255, 255, 0.1), -56px 66px 0 1px rgba(255, 255, 255, 0.1), -54px 61px 0 1px rgba(255, 255, 255, 0.1), -58px 54px 0 1px rgba(255, 255, 255, 0.1), -60px 41px 0 1px rgba(255, 255, 255, 0.1), -50px 56px 0 1px rgba(255, 255, 255, 0.1), -54px 57px 0 1px rgba(255, 255, 255, 0.1), -60px 52px 0 1px rgba(255, 255, 255, 0.1), -74px 35px 0 1px rgba(255, 255, 255, 0.1), -76px 18px 0 1px rgba(255, 255, 255, 0.1), -74px 25px 0 1px rgba(255, 255, 255, 0.1), -69px 23px 0 1px rgba(255, 255, 255, 0.1), -84px 13px 0 1px rgba(255, 255, 255, 0.1), -73px 3px 0 1px rgba(255, 255, 255, 0.1), -80px -1px 0 1px rgba(255, 255, 255, 0.1), -79px -4px 0 1px rgba(255, 255, 255, 0.1), -79px -7px 0 1px rgba(255, 255, 255, 0.1), -70px -11px 0 1px rgba(255, 255, 255, 0.1), -67px -23px 0 1px rgba(255, 255, 255, 0.1), -84px -13px 0 1px rgba(255, 255, 255, 0.1), -71px -42px 0 1px rgba(255, 255, 255, 0.1), -61px -49px 0 1px rgba(255, 255, 255, 0.1), -58px -43px 0 1px rgba(255, 255, 255, 0.1), -55px -50px 0 1px rgba(255, 255, 255, 0.1), -32px -72px 0 1px rgba(255, 255, 255, 0.1), -80px -30px 0 1px rgba(255, 255, 255, 0.1), -59px -20px 0 1px rgba(255, 255, 255, 0.1), -79px 12px 0 1px rgba(255, 255, 255, 0.1), -76px 1px 0 1px rgba(255, 255, 255, 0.1), 8px 57px 0 1px rgba(255, 255, 255, 0.1), 59px 36px 0 1px rgba(255, 255, 255, 0.1), 60px 46px 0 1px rgba(255, 255, 255, 0.1), 54px 59px 0 1px rgba(255, 255, 255, 0.1), 44px 52px 0 1px rgba(255, 255, 255, 0.1), -31px 20px 0 1px rgba(255, 255, 255, 0.1), -56px 2px 0 1px rgba(255, 255, 255, 0.1), 47px 35px 0 1px rgba(255, 255, 255, 0.1), 70px 6px 0 1px rgba(255, 255, 255, 0.1), 60px -2px 0 1px rgba(255, 255, 255, 0.1);
		filter: blur(1px);
	
		animation: glitchAnimationOpacity 4s cubic-bezier(1, 0, 1, 1) infinite,
							 glitchAnimationMove 4s cubic-bezier(1, 0, 1, 1) infinite,
							 glitchAnimationBright 4s cubic-bezier(1, 0, 1, 1) infinite;
	}
	@keyframes glitchAnimationOpacity {
		0%, 30%, 96%, 100% { opacity: 1; }
		35%, 93% 					 { opacity: 0; }
	}
	@keyframes glitchAnimationMove {
		0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
		35%, 65% { transform: translate(-50%, -50%) rotate(4320deg); }
	}
	@keyframes glitchAnimationBright {
		0%, 100% { filter: blur(1px); }
		35%, 65% { filter: blur(1px) brightness(1.8); }
	}
	
	
	.fragment-1::before {
		width: 6px; height: 6px;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 2px;
		
		animation: fragment1BeforeAnimationMove 4s -0.15s cubic-bezier(1, 0, 1, 1) infinite;
	}
	@keyframes fragment1BeforeAnimationMove {
		0%, 100% {
			transform: rotate(0deg) translate(71px, -181px);
			opacity: 1;
		}
		37% {
			transform: rotate(15deg) translate(71px, -181px);
			opacity: 1;
		}
		37.1%, 76.9% {
			opacity: 0;
		}
		77% {
			transform: rotate(-2deg) translate(71px, -181px);
			opacity: 1;
		}
		90% {
			transform: rotate(-9deg) translate(71px, -181px);
		}
	}
	
	
	.fragment-1::after {
		width: 6px; height: 6px;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 2px;
	
		animation: fragment1AfterAnimationMove 4s -0.15s cubic-bezier(1, 0, 1, 1) infinite;
	}
	@keyframes fragment1AfterAnimationMove {
		0%, 100% {
			transform: rotate(0deg) translate(285px, 48px);
			opacity: 1;
		}
		7% {
			transform: rotate(5deg) translate(285px, 48px);
		}
		22% {
			transform: rotate(-1deg) translate(285px, 48px);
		}
		40% {
			transform: rotate(-3deg) translate(285px, 48px);
			opacity: 1;
		}
		40.1%, 81.9% {
			opacity: 0;
		}
		82% {
			transform: rotate(-15deg) translate(285px, 48px);
			opacity: 1;
		}
	}
	
	
	.fragment-2::after {
		width: 6px; height: 6px;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 2px;
	
		animation: fragment2AfterAnimationMove 4s -0.15s cubic-bezier(1, 0, 1, 1) infinite;
	}
	@keyframes fragment2AfterAnimationMove {
		0%, 100% {
			transform: rotate(0deg) translate(-220px, 162px);
			opacity: 1;
		}
		46% {
			transform: rotate(-8deg) translate(-220px, 162px);
			opacity: 1;
		}
		46.1%, 97.9% {
			opacity: 0;
		}
		98% {
			transform: rotate(2deg) translate(-220px, 162px);
			opacity: 1;
		}
	}
	
	
	.fragment-2::before {
		width: 6px; height: 6px;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 2px;
	
		animation: fragment2BeforeAnimationMove 4s -0.15s cubic-bezier(1, 0, 1, 1) infinite;
	}
	@keyframes fragment2BeforeAnimationMove {
		0%, 100% {
			transform: rotate(0deg) translate(284px, 111px);
			opacity: 1;
		}
		2% {
			transform: rotate(2deg) translate(284px, 111px);
		}
		9% {
			transform: rotate(-5deg) translate(284px, 111px);
		}
		15%, 22% {
			transform: rotate(-3deg) translate(284px, 111px);
		}
		27% {
			transform: rotate(-2deg) translate(284px, 111px);
			opacity: 1;
		}
		38.9% {
			transform: rotate(-9deg) translate(284px, 111px);
		}
		39%, 76.9% {
			opacity: 0;
		}
		77% {
			transform: rotate(-9deg) translate(284px, 111px);
			opacity: 1;
		}
	}
	
	
	.fragment-3::after {
		width: 6px; height: 6px;
		background: rgba(255, 255, 255, 0.3);
		border-radius: 2px;
	
		animation: fragment3AfterAnimationMove 4s -0.15s cubic-bezier(1, 0, 1, 1) infinite;
	}
	@keyframes fragment3AfterAnimationMove {
		0%, 4.9%, 65.1%, 100% {
			opacity: 0;
		}
		5% {
			transform: rotate(0deg) translate(183px, 198px);
			opacity: 1;
		}
		16% {
			transform: rotate(-9deg) translate(284px, 111px);
			opacity: 1;
		}
		16.1%, 60.9% {
			opacity: 0;
		}
		61% {
			transform: rotate(5deg) translate(284px, 111px);
			opacity: 1;
		}
		65% {
			transform: rotate(10deg) translate(284px, 111px);
			opacity: 1;
		}
	}
	
	
	.fragment-3::before {
		width: 6px; height: 6px;
		background: rgba(255, 255, 255, 0.3);
		border-radius: 2px;
	
		animation: fragment3BeforeAnimationMove 4s -0.15s cubic-bezier(1, 0, 1, 1) infinite;
	}
	@keyframes fragment3BeforeAnimationMove {
		0%, 100% {
			transform: rotate(0deg) translate(-253px, -126px);
			opacity: 1;
		}
		22% {
			transform: rotate(25deg) translate(-253px, -126px);
			opacity: 1;
		}
		22.1%, 95.9% {
			opacity: 0;
		}
		96% {
			transform: rotate(-5deg) translate(-253px, -126px);
			opacity: 1;
		}
	}`,
	},
	{
		from: 'my',
		name: "本项目启动动画",
		author: ['zh1', '大剑师兰特, 还是大剑师兰特，gis-dajianshi'],
		description: "基于'大剑师兰特, 还是大剑师兰特，gis-dajianshi'的月蚀动画改造",
		content: `
		<div class="loading-animation">
			<div class="spinner">
				<div class="moon">
				</div>
			</div>
		</div>`,
		css: ` .loading-animation {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 50vh;
    background-color: rgba(255, 255, 255, 0.9); /* 半透明背景 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* 确保在最上层 */
    pointer-events: none; /* 防止点击穿透 */
    opacity: 1; /* 初始状态为不可见 */
    animation: fadeIn 1.5s forwards, slideOut 1s 1.5s forwards; /* 第一个动画2秒，第二个动画4秒，延迟2秒开始 */
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
  }`,
	},
	{
		from: 'net',
		name: "按钮选中动画",
		author: [ '未知'],
		description: "来自网络的按钮选中动画",
		content:`<nav class="amazing-tabs">
		<div class="filters-container">
		  <div class="filters-wrapper">
			<ul class="filter-tabs">
			  <li>
				<button class="filter-button filter-active" data-translate-value="0">
				  New
				</button>
			  </li>
			  <li>
				<button class="filter-button" data-translate-value="100%">
				  Popular
				</button>
			  </li>
			  <li>
				<button class="filter-button" data-translate-value="200%">
				  Following
				</button>
			  </li>
			</ul>
			<div class="filter-slider" aria-hidden="true">
			  <div class="filter-slider-rect">&nbsp;</div>
			</div>
		  </div>
		</div>
		<div class="main-tabs-container">
		  <div class="main-tabs-wrapper">
			<ul class="main-tabs">
			  <li>
				<button class="round-button" data-translate-value="0" data-color="red">
				  <span class="avatar">
					<img src="xxx" alt="user avatar" />
				  </span>
				</button>
			  </li>
			  <li>
				<button class="round-button gallery active" style="--round-button-active-color: #2962ff" data-translate-value="100%" data-color="blue">
				 <svg fill="currentColor" viewBox="0 0 16 16">
					<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
					<path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
				  </svg>
				</button>
			  </li>
			  <li>
				<button class="round-button" style="--round-button-active-color: #00c853" data-translate-value="200%" data-color="green">
				   <svg fill="currentColor" viewBox="0 0 16 16">
					<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
					<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
				  </svg>
				</button>
			  </li>
			  <li>
				<button class="round-button" style="--round-button-active-color: #aa00ff" data-translate-value="300%" data-color="purple">
				  <svg fill="currentColor" viewBox="0 0 16 16">
					<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
				  </svg>
				</button>
			  </li>
			  <li>
				<button class="round-button" style="--round-button-active-color: #ff6d00" data-translate-value="400%" data-color="orange">
				   <svg fill="currentColor" viewBox="0 0 16 16">
					<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
				  </svg> 
				</button>
			  </li>
			</ul>
			<div class="main-slider" aria-hidden="true">
			  <div class="main-slider-circle">&nbsp;</div>
			</div>
		  </div>
		</div>
	  </nav>`,
		css: `
		*,
		*::before,
		*::after {
		  margin: 0;
		  padding: 0;
		  box-sizing: border-box;
		}
		
		:root {
		  --background-color: #bbdefb;
		  --blue-50: #e3f2fd;
		  --blue-100: #bbdefb;
		  --blue-A700: #2962ff;
		  --green-50: #e8f5e9;
		  --green-100: #c8e6c9;
		  --green-A700: #00c853;
		  --purple-50: #f3e5f5;
		  --purple-100: #e1bee7;
		  --purple-A700: #aa00ff;
		  --orange-50: #fff3e0;
		  --orange-100: #ffe0b2;
		  --orange-A700: #ff6d00;
		  --orange-700: #f57c00;
		  --grey-900: #212121;
		  --white: #ffffff;
		  --round-button-active-color: #212121;
		  --translate-main-slider: 100%;
		  --main-slider-color: #e3f2fd;
		  --translate-filters-slider: 0;
		  --filters-container-height: 3.8rem;
		  --filters-wrapper-opacity: 1;
		}
		
		html {
		  font-size: 62.5%;
		}
		
		html,
		body {
		  height: 100%;
		}
		
		body {
		  display: flex;
		  flex-direction: column;
		  justify-content: center;
		  align-items: center;
		  transition: background-color 0.4s ease-in-out;
		  background-color: var(--background-color);
		}
		
		button {
		  border: none;
		  cursor: pointer;
		  background-color: transparent;
		  outline: none;
		}
		
		nav.amazing-tabs {
		  background-color: var(--white);
		  border-radius: 2.5rem;
		  user-select: none;
		  padding-top: 1rem;
		}
		
		.main-tabs-container {
		  padding: 0 1rem 1rem 1rem;
		}
		
		.main-tabs-wrapper {
		  position: relative;
		}
		
		ul.main-tabs,
		ul.filter-tabs {
		  list-style-type: none;
		  display: flex;
		}
		
		ul.main-tabs li {
		  display: inline-flex;
		  position: relative;
		  padding: 1.5rem;
		  z-index: 1;
		}
		
		.avatar,
		.avatar img {
		  height: 4rem;
		  width: 4rem;
		  border-radius: 50%;
		  pointer-events: none;
		}
		
		.avatar img {
		  object-fit: cover;
		}
		
		.round-button {
		  height: 4.8rem;
		  width: 4.8rem;
		  border-radius: 50%;
		  display: inline-flex;
		  align-items: center;
		  justify-content: center;
		  color: var(--grey-900);
		  transition: color 0.2s ease-in-out;
		}
		
		.round-button:hover,
		.round-button.active {
		  color: var(--round-button-active-color);
		}
		
		.round-button svg {
		  pointer-events: none;
		  height: 2.8rem;
		  width: 2.8rem;
		  transform: translate(0, 0);
		}
		
		.main-slider {
		  pointer-events: none;
		  position: absolute;
		  top: 0;
		  left: 0;
		  padding: 1.5rem;
		  z-index: 0;
		  transition: transform 0.4s ease-in-out;
		  transform: translateX(var(--translate-main-slider));
		}
		
		.main-slider-circle {
		  height: 4.8rem;
		  width: 4.8rem;
		  border-radius: 50%;
		  transition: background-color 0.4s ease-in-out;
		  background-color: var(--main-slider-color);
		}
		
		.animate-jello {
		  animation: jello-horizontal 0.9s both;
		}
		
		@keyframes jello-horizontal {
		  0% {
			transform: scale3d(1, 1, 1);
		  }
		  30% {
			transform: scale3d(1.25, 0.75, 1);
		  }
		  40% {
			transform: scale3d(0.75, 1.25, 1);
		  }
		  50% {
			transform: scale3d(1.15, 0.85, 1);
		  }
		  65% {
			transform: scale3d(0.95, 1.05, 1);
		  }
		  75% {
			transform: scale3d(1.05, 0.95, 1);
		  }
		  100% {
			transform: scale3d(1, 1, 1);
		  }
		}
		
		.filters-container {
		  overflow: hidden;
		  padding: 0 3rem;
		  transition: max-height 0.4s ease-in-out;
		  max-height: var(--filters-container-height);
		}
		
		.filters-wrapper {
		  position: relative;
		  transition: opacity 0.2s ease-in-out;
		  opacity: var(--filters-wrapper-opacity);
		}
		
		.filter-tabs {
		  border-radius: 1rem;
		  padding: 0.3rem;
		  overflow: hidden;
		  background-color: var(--orange-50);
		}
		
		.filter-tabs li {
		  position: relative;
		  z-index: 1;
		  display: flex;
		  flex: 1 0 33.33%;
		}
		
		.filter-button {
		  display: flex;
		  align-items: center;
		  justify-content: center;
		  border-radius: 0.8rem;
		  flex-grow: 1;
		  height: 3rem;
		  padding: 0 1.5rem;
		  color: var(--orange-700);
		  font-family: "Open Sans", sans-serif;
		  font-weight: 400;
		  font-size: 1.4rem;
		}
		
		.filter-button.filter-active {
		  transition: color 0.4s ease-in-out;
		  color: var(--grey-900);
		}
		
		.filter-slider {
		  pointer-events: none;
		  position: absolute;
		  padding: 0.3rem;
		  top: 0;
		  left: 0;
		  right: 0;
		  bottom: 0;
		  z-index: 0;
		}
		
		.filter-slider-rect {
		  height: 3rem;
		  width: 33.33%;
		  border-radius: 0.8rem;
		  background-color: var(--white);
		  box-shadow: 0 0.1rem 1rem -0.4rem rgba(0, 0, 0, 0.12);
		  transition: transform 0.4s ease-in-out;
		  transform: translateX(var(--translate-filters-slider));
		}`,
		javascript: `// resources in description
		const mainTabs = document.querySelector(".main-tabs");
		const mainSliderCircle = document.querySelector(".main-slider-circle");
		const roundButtons = document.querySelectorAll(".round-button");
		
		const colors = {
		  blue: {
			50: {
			  value: "#e3f2fd"
			},
			100: {
			  value: "#bbdefb"
			}
		  },
		  green: {
			50: {
			  value: "#e8f5e9"
			},
			100: {
			  value: "#c8e6c9"
			}
		  },
		  purple: {
			50: {
			  value: "#f3e5f5"
			},
			100: {
			  value: "#e1bee7"
			}
		  },
		  orange: {
			50: {
			  value: "#ffe0b2"
			},
			100: {
			  value: "#ffe0b2"
			}
		  },
		  red: {
			50: {
			  value: "#ffebee"
			},
			100: {
			  value: "#ffcdd2"
			}
		  }
		};
		
		const getColor = (color, variant) => {
		  return colors[color][variant].value;
		};
		
		const handleActiveTab = (tabs, event, className) => {
		  tabs.forEach((tab) => {
			tab.classList.remove(className);
		  });
		
		  if (!event.target.classList.contains(className)) {
			event.target.classList.add(className);
		  }
		};
		
		mainTabs.addEventListener("click", (event) => {
		  const root = document.documentElement;
		  const targetColor = event.target.dataset.color;
		  const targetTranslateValue = event.target.dataset.translateValue;
		
		  if (event.target.classList.contains("round-button")) {
			mainSliderCircle.classList.remove("animate-jello");
			void mainSliderCircle.offsetWidth;
			mainSliderCircle.classList.add("animate-jello");
		
			root.style.setProperty("--translate-main-slider", targetTranslateValue);
			root.style.setProperty("--main-slider-color", getColor(targetColor, 50));
			root.style.setProperty("--background-color", getColor(targetColor, 100));
		
			handleActiveTab(roundButtons, event, "active");
		
			if (!event.target.classList.contains("gallery")) {
			  root.style.setProperty("--filters-container-height", "0");
			  root.style.setProperty("--filters-wrapper-opacity", "0");
			} else {
			  root.style.setProperty("--filters-container-height", "3.8rem");
			  root.style.setProperty("--filters-wrapper-opacity", "1");
			}
		  }
		});
		
		const filterTabs = document.querySelector(".filter-tabs");
		const filterButtons = document.querySelectorAll(".filter-button");
		
		filterTabs.addEventListener("click", (event) => {
		  const root = document.documentElement;
		  const targetTranslateValue = event.target.dataset.translateValue;
		
		  if (event.target.classList.contains("filter-button")) {
			root.style.setProperty("--translate-filters-slider", targetTranslateValue);
			handleActiveTab(filterButtons, event, "filter-active");
		  }
		});`
	}
	// 添加更多卡片
];

const useCardsOpt = () => {
	const dictMap = {
		net: '网络',
		my: '非网络'
	}
	return { cards, dictMap };
};

export { useCardsOpt };
