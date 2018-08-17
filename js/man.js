function Man(){
	
	// this.can1 = document.querySelector(can1);
	console.log(can1);
	this.b1 = can1.getContext('2d');
	this.n=0;
	this.direction=1;
	this.speed=8;
	this.width=600;
	this.height=600;
	this.man=new Image();
}

Man.prototype.move=function (){
	
	var This=this;
// 	
// 	setInterval(()=>{
// 		//清除历史位置
// 		This.b1.clearRect(This.loca.dx, This.loca.dy, This.loca.dw, This.loca.dh);
// 		//往不同的方向走
// 		switch (This.direction) {
// 			case 0:
// 				This.loca.dy += This.speed;
// 				//走到底就回头往上走
// 				if(This.loca.dy > This.height - This.loca.dh){
// 					This.direction = 3;
// 				}
// 				break;
// 			case 1:
// 				This.loca.dx -= This.speed;
// 				if(This.loca.dx < 0){
// 					This.direction = 2;
// 				}
// 				break;
// 			case 2:
// 				This.loca.dx += This.speed;
// 				if(This.loca.dx > This.width - This.loca.dw){
// 					This.direction = 1;
// 				}
// 				break;
// 				case 3:
// 					This.loca.dy -= This.speed;
// 					if(This.loca.dy  < 0){
// 						This.direction = 0;
// 					}
// 				break;
// 			default:
// 				break;
// 		}
// 		This.b1.drawImage(This.man, (This.n++%4)*This.loca.sw, This.loca.sh*This.direction, This.loca.sw, This.loca.sh, This.loca.dx, This.loca.dy, This.loca.dw, This.loca.dh);
// 	},100);
	
	This.man.onload = function () {
		window.onkeyup = function (e) {
			//当用户按不同方向键的时候，裁剪不同的行
			e.preventDefault();
			let code = e.keyCode;
			let dirArr = [];
			dirArr[37] = 1;
			dirArr[38] = 3;
			dirArr[39] = 2;
			dirArr[40] = 0;
			This.direction = (typeof dirArr[code] == 'number') ? dirArr[code] : This.direction;
			
			//往不同的方向走
			switch (This.direction) {
							case 0://向下走
								This.b1.clearRect(This.loca.dx, This.loca.dy, This.loca.dw, This.loca.dh);
								action();
								// This.loca.dy += This.speed/5;
								// console.log(action)
								//走到底就回头往上走
								if(This.loca.dy > This.height - This.loca.dh){
									This.direction = 3;
								}
								break;
							case 1://向左走
								This.b1.clearRect(This.loca.dx, This.loca.dy, This.loca.dw, This.loca.dh);
								// This.loca.dx -= This.speed;
								action();
			
								if(This.loca.dx < 0){
									This.direction = 2;
								}
								break;
							case 2://向右走
								This.b1.clearRect(This.loca.dx, This.loca.dy, This.loca.dw, This.loca.dh);
								// This.loca.dx += This.speed;
								action();
			
								if(This.loca.dx > This.width - This.loca.dw){
									This.direction = 1;
								}
								break;
							case 3://向上走
								This.b1.clearRect(This.loca.dx, This.loca.dy, This.loca.dw, This.loca.dh);
								// This.loca.dy -= This.speed;
								action();
			
								if(This.loca.dy  < 0){
									This.direction = 0;
								}
								break;
							default:
								break;
						}
			
			//跳跃动作
			function action(){
				console.log(123)
					var actime=setInterval(function(){
						//完成四分之一的动作
						if(This.n<5){

							//清除原来位置
							This.b1.clearRect(This.loca.dx, This.loca.dy, This.loca.dw, This.loca.dh);
							
							switch (This.direction){
								case 0:	This.loca.dy += This.speed;
									break;
								case 1:	This.loca.dx -= This.speed;
									break;
								case 2:	This.loca.dx += This.speed;
									break;
								case 3:	This.loca.dy -= This.speed;
									break;
								default:
									break;
							}

							This.b1.drawImage(This.man, (This.n++%4)*This.loca.sw, This.loca.sh*This.direction, This.loca.sw, This.loca.sh, This.loca.dx, This.loca.dy, This.loca.dw, This.loca.dh);
						} else{
							clearInterval(actime);
							This.n=0;
						};
					},100);
			}
			
			
		
			
			
		
		}
	}
}

            

