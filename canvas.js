function dofirst (){
	
	x = document.getElementById("canvas");
	ctx = x.getContext('2d');
	scaley = scalex = 1.0;
	angleInDegrees = 0;

	var fileInput = document.getElementById('myimg');
    
	
	
	fileInput.addEventListener('change', function(e) {
      var file = fileInput.files[0];
	  var imageType = /image.*/;

if (file.type.match(imageType)) {
  var reader = new FileReader();

			  reader.onload = function(e) {
			  pic = new Image();
			  // Set the img src property using the data URL.
			  pic.src = reader.result;
			  pic.addEventListener("load",draw,false);
			  }
 reader.readAsDataURL(file); 
 document.getElementById('mainicon').style.visibility ="hidden";
 document.getElementById('canvas').style.border = "4px solid black ";
 document.body.style.backgroundImage = "url(Icons/h.png)";
} 
else 
  {alert( "File not supported!");}
	
});
	
	
	document.getElementById("fit_to_view").addEventListener("click",fit_to_view,false);
	document.getElementById("original").addEventListener("click",original,false);
	document.getElementById("zoom_in").addEventListener("click",zoomin,false);
	document.getElementById("zoom_out").addEventListener("click",zoomout,false);
	document.getElementById("antiClock").addEventListener("click",antiC,false);
	document.getElementById("Clock").addEventListener("click",C,false);
	document.getElementById("Fullscreen").addEventListener("click",fullscreen,false);
	document.getElementById("Fullscreen2").addEventListener("click",original,false);
	document.getElementById("prev").addEventListener("click",function(){alert("To be Implemented")},false);
	document.getElementById("next").addEventListener("click",function(){alert("To be Implemented")},false);
	document.getElementById("grayscale").addEventListener("click",grayscale,false);
	
	
}
function zoomin(){
	if(x.width < 6000){
	x.width /= scalex;
	x.height /= scaley;
	scalex += 0.1;
	scaley += 0.1;
	x.width *= scalex;
	x.height *=scaley;
	ctx.drawImage(pic,0,0,x.width,x.height);
	}
	
	}
function zoomout(){
	if(x.height > 300){
	x.width /= scalex;
	x.height /= scaley;
	scalex -= 0.1;
	scaley -= 0.1;
	x.width *= scalex;
	x.height *=scaley;
	ctx.drawImage(pic,0,0,x.width,x.height);
	}
	
	}
	
function antiC(){// DOES NOT WORK WITH FIT TO VIEW ,ONLY NATURAL Width,Height. DOESNOT WORK WITH ZOOM TO BE FIXED
	if(angleInDegrees == 0)
        angleInDegrees = 270;
    else
        angleInDegrees-=90;
    drawRotated(angleInDegrees);
	
	}
function C(){
	  angleInDegrees+=90 % 360;
    drawRotated(angleInDegrees);
	}
	
function drawRotated(degrees){
     
	 
    var rad = degrees*Math.PI/180;
    ctx.clearRect(0,0,x.width,x.height);
	//var a = 2*x.height ;
	//var b = 2*x.width;
	if(degrees == 90 || degrees == 270)
	{x.width = natural_h;
	x.height = natural_w;}
	//ctx.save();
	else{x.width = natural_w;
	x.height = natural_h;}
	
	ctx.translate(x.width/2,x.height/2);
	ctx.rotate(rad);
	ctx.drawImage(pic,-natural_w/2,-natural_h/2);
	//ctx.restore();
	
   
}
	
function draw () {
	 
	natural_w = x.width = this.width;
	natural_h = x.height = this.height ;
	ctx.drawImage(pic,0,0,x.width,x.height);
	
}

function fit_to_view(){
	x.width = window.innerWidth - 75;
	x.height = window.innerHeight- 5;
	
	ctx.drawImage(pic,0,0,x.width,x.height);
}
function original(){
	x.width = natural_w;
	x.height = natural_h;
	ctx.drawImage(pic,0,0,x.width,x.height);
	
}
function fullscreen(){
	document.body.style.paddingTop ="0px";
	x.width = window.innerWidth-150;
	x.height = window.innerHeight-5;
	ctx.drawImage(pic,0,0,x.width,x.height);
	}

var toggle = true ;
function grayscale(){
	var imgData = ctx.getImageData(0,0,x.width,x.height);
	var d = imgData.data
	if(toggle){
	for (var i=0; i< d.length; i+=4) {
    var r = d[i];
    var g = d[i+1];
    var b = d[i+2];
    // CIE luminance for the RGB
    // The human eye is bad at seeing red and blue, so we de-emphasize them.
    var v = 0.2126*r + 0.7152*g + 0.0722*b;
    d[i] = d[i+1] = d[i+2] = v;
	}
	
	ctx.putImageData(imgData,0,0);
	toggle = false;
	}
	else{
	ctx.clearRect(0,0,x.width,x.height);
	ctx.drawImage(pic,0,0,x.width,x.height);
	toggle = true;
	}
	
  }

 window.addEventListener("load",dofirst,false);
