		var box =document.getElementById("warp");
		var ul_table = document.getElementById("ul-table")
		var num = 0;
		var timer = null;
		//方式一:
		// timer = setInterval(function(){
		// 	num--;
		// 	num <=-600 ?num = 0:num--;
		// 	ul_table.style.left=num+"px";
		// },20)
		// //鼠标放到box上的事件
		// box.onmouseover = function(){
		// 	clearInterval(timer)
		// }
		// //鼠标离开box的事件
		// box.onmouseout = function(){
		// 	timer = setInterval(function(){
		// 	num--;
		// 	num <=-600 ?num = 0:num--;
		// 	ul_table.style.left=num+"px";
		// },20)	
		// }
		//方式二:
		
		timer = setInterval(autoPlay,20)
		function autoPlay(){
			num--;
			num <=-600 ?num = 0:num--;
			ul_table.style.left=num+"px";
		}
		//鼠标放到box上的事件
		box.onmouseover = function(){
			clearInterval(timer)
		}
		//鼠标离开box的事件
		box.onmouseout = function(){
			timer = setInterval(autoPlay,20)
		}