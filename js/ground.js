function Ground(outbox){
	this.b2=can1.getContext('2d');
	this.box1=new Image();
	this.outbox=outbox;
	this.width=600;
	this.height=520;
	this.boxwidth=40;
	this.boxheight=45;
	this.loca={dx:0,dy:0,dw:40,dh:45};

	this.boxmap=[
		[0,0,1,1,0,0,0,1,0,0,0,1,1,1,1],//1
		[0,1,1,0,2,2,2,0,2,2,2,0,1,1,1],//2
		[1,1,0,2,0,1,0,2,0,1,0,2,0,1,1],//3
		[1,0,2,0,1,1,1,1,1,1,1,0,2,0,1],//4
		[1,0,2,1,1,1,1,1,1,1,1,1,2,0,1],//5
		[1,0,2,0,1,1,1,1,1,1,1,0,2,0,1],//6
		[1,0,2,1,1,1,1,1,1,1,1,1,2,0,1],//7
		[1,1,0,2,0,1,1,1,1,1,0,2,0,1,1],//8
		[1,1,1,0,2,1,1,1,1,1,2,0,1,1,1],//9
		[1,1,1,1,0,2,0,1,0,2,0,1,1,1,1],//10
		[1,1,0,1,1,0,2,2,2,0,1,1,0,1,1],//11
		[1,0,0,1,1,1,0,0,0,1,1,1,0,0,1],//12
		[1,0,0,1,1,1,1,1,1,1,1,1,0,0,1]//13
	]
}

Ground.prototype.box= function (){
	var This = this;
	for(var n=0;n<13;n++){
		for(var i=0;i<15;i++){
			if(This.boxmap[n][i]==1){
				//创建box1
				var box1=document.createElement('img');
				box1.classList.add('img1');
				box1.src='img/box1.jpg';
				box1.style.top=n*40+"px";
				box1.style.left=i*40+"px";
				This.outbox.appendChild(box1);
				// This.manobj.b1.drawImage(This.box1, This.loca.dx+40*i, This.loca.dy+40*n, This.loca.dw, This.loca.dh);
				// This.b2.drawImage(This.box1, This.loca.dx+40*i, This.loca.dy+40*n, This.loca.dw, This.loca.dh);
			}else if(This.boxmap[n][i]==2) {
				var box2=document.createElement('img');
				box2.classList.add('img1');
				box2.src='img/box2.jpg';
				box2.style.top=n*40+"px";
				box2.style.left=i*40+"px";
				This.outbox.appendChild(box2);
			}
		}
	}
	
};
