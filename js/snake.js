window.onload=function() {
	canv1=document.getElementById("sn");
	ctx1=canv1.getContext("2d");
	document.addEventListener("keydown",keyPush);
	setInterval(game,1000/15);
}

px=py=10;
gs=tc=20;
ax=ay=15;
xv=yv=0;
trail=[];
tail = 5;

function game() {
	px+=xv;
	py+=yv;
	if(px<0) {
		px= tc-1;
	}
	if(px>tc-1) {
		px= 0;
	}
	if(py<0) {
		py= tc-1;
	}
	if(py>tc-1) {
		py= 0;
	}
	ctx1.fillStyle="black";
	ctx1.fillRect(0,0,canv1.width,canv1.height);

	ctx1.fillStyle="blue";
	for(var i=0;i<trail.length;i++) {
		ctx1.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
		if(trail[i].x==px && trail[i].y==py) {
			tail = 5;
		}
	}
	trail.push({x:px,y:py});

	while(trail.length>tail) {
	trail.shift();
	}

	if(ax==px && ay==py) {
		tail++;
		ax=Math.floor(Math.random()*tc);
		ay=Math.floor(Math.random()*tc);
	}
	ctx1.fillStyle="red";
	ctx1.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}

function keyPush(evt) {
	switch(evt.keyCode) {
		case 37:
			xv=-1;yv=0;
			break;
		case 38:
			xv=0;yv=-1;
			break;
		case 39:
			xv=1;yv=0;
			break;
		case 40:
			xv=0;yv=1;
			break;
	}
}

console.log()