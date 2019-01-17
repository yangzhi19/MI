//选项卡
function Selector(a, b) {

	let topList = document.querySelectorAll(a)
	let bottomList = document.querySelectorAll(b)

	topList.forEach(function(val, index) {
		val.onclick = function() {
			topList.forEach(function(ele, key) {
				ele.classList.remove("active");
				bottomList[key].classList.remove("active");
			})
			val.classList.add("active");
			bottomList[index].classList.add("active");
		}

	})

}
Selector(".home .home-top .home-top-right li", ".home .home-bottom .home-bottom-right ul");
Selector(".zhineng .zhineng-top .zhineng-top-right li", ".zhineng .zhineng-bottom .zhineng-tottom-right ul");




//内容轮播
function banner(c) {
	
	let dianBtn = document.querySelectorAll(c + " .dian p");
	let leftBtn = document.querySelector( c + " .zuo");
	let rightBtn = document.querySelector(c + " .you");
	let Box = document.querySelector( c + " .box")
	let n = 0;

	rightBtn.onclick = function() {
		n--;
		move();
	}
	leftBtn.onclick = function() {
		n++;
		move();
	}
	dianBtn.forEach(function(ele, index) {
		ele.onclick = function() {
			n = index * -1;
			move();
		}
	})

	function move() {
		if (n < -2) {
			n = -2;
			return;
		}
		if (n > 0) {
			n = 0;
			return;
		}
		if (n == -2) {
			rightBtn.style.cursor = "default";
		} else if (n == 0) {
			leftBtn.style.cursor = "default";
		} else {
			rightBtn.style.cursor = "pointer";
			leftBtn.style.cursor = "pointer";
		}
		Box.style.left = 296 * n + "px";
		dianBtn.forEach(function(val) {
			val.classList.remove("active");
		})
		dianBtn[n * -1].classList.add("active");

	}
}
banner(".content .li1");
banner(".content .li2");
banner(".content .li3");
banner(".content .li4");




//轮播图
	let picture = document.querySelectorAll(" .banner .banner-right-picture li");
	let dianBtn1 = document.querySelectorAll(" .banner .banner-right-dian li");
	let leftBtn1 = document.querySelector(" .banner .banner-right-one");
	let rightBtn1 = document.querySelector(" .banner .banner-right-two");
	let right = document.querySelector(" .banner .banner-right")
	let size = picture.length-1;
	let N = 0;

right.onmouseover = function(){
	clearInterval(time);
}
right.onmouseout = function(){
	time = setInterval(function(){
		N++;
		Move();
	},2000)
}
let time = setInterval(function(){
	N++;
	Move();
},2000)
rightBtn1.onclick = function(){
	N++;
	Move();
}
leftBtn1.onclick = function(){
	N--;
	Move();
}
dianBtn1.forEach(function(value,key){
	value.onclick = function(){
		N = key;
		Move();
	}
})


function Move(){
	
	picture.forEach(function(val,index){
		val.classList.remove("active");
	})
	if(N>size){
		N = 0;
	}
	if(N<0){
		N = size;
	}
	picture[N].classList.add("active");
	dianBtn1.forEach(function(ele){
		ele.classList.remove("active");
	})
	dianBtn1[N].classList.add("active");
	
}

//为你推荐 ,闪购
function tuijie (z,x){
	
	let tuijieUl = document.querySelector(z + " ul")
	let tuijie = document.querySelectorAll(z + " ul li")
	let tuijieLeft = document.querySelector(z + " .right-box1")
	let tuijieRight = document.querySelector(z + " .right-box2")
	let tuijieSize = tuijie.length-x;
	let tuijieN = 0;
	
	tuijieRight.onclick = function(){
		tuijieN = tuijieN + x;
		tuijieMove();
	}
	tuijieLeft.onclick = function(){
		tuijieN = tuijieN - x;
		tuijieMove();
	}
	function tuijieMove(){
		if(tuijieN>tuijieSize){
			tuijieN = tuijieSize;
		}
		if(tuijieN<0){
			tuijieN = 0;
		}
		tuijieUl.style.left = -tuijieN*248 +"px";
			
		
		if(tuijieN == tuijieSize){
			tuijieRight.style.color = "#e0e0e0";
			tuijieRight.style.cursor = "default";
		}else if(tuijieN == 0){
			tuijieLeft.style.color = "#e0e0e0";
			tuijieLeft.style.cursor = "default";
		}else{
			tuijieRight.style.color = "#b0b0b0";
			tuijieRight.style.cursor = "pointer";
			tuijieLeft.style.color = "#b0b0b0";
			tuijieLeft.style.cursor = "pointer";
		}
		
	}
	
	
}
tuijie(".weinituijian",5);
tuijie(" .xiaomishangou",4);



//固定
	
let guding1 = document.querySelector(" .guding-small .guding-small-top")
let guding = document.querySelector(" .guding-big .guding-top1")
	let shangou = document.querySelector(".xiaomishangou-con")
	let root = document.documentElement;
	let gudingFlag = true;
	if(root.scrollTop>=shangou.offsetTop + shangou.offsetHeight){
		guding.style.display= "block";
		guding1.style.display= "block";
	}
	guding.onclick = function(){
		root.scrollTop = 0;
	}
	window.onscroll = function(){
		falg = false;
		let top = root.scrollTop;
		if(root.scrollTop>=shangou.offsetTop + shangou.offsetHeight){
			setTimeout(function(){
				if(gudingFlag){
					if(top == root.scrollTop){
					guding.style.display= "block";
					guding1.style.display= "block";
					}
				}
			},500)
		}else if(root.scrollTop == 0){
			guding.style.display= "none";
			guding1.style.display= "none";
		}
	}	