var myWindow = {
	screenX: window.screenX,
	screenY: window.screenY,
	location: window.location.pathname,

	screenw: window.screen.width,
	screenh: window.screen.height,
	
	

	render: function() {
		var ele = document.getElementById("location");
		ele.value = this.location;

		ele = document.getElementById("sx");
		ele.value = this.screenX;

	   ele = document.getElementById("sy");
		ele.value = this.screenY;

		ele = document.getElementById("ScreenW");
		ele.value = this.screenw;
       
        ele = document.getElementById("ScreenHeight");
		ele.value = this.screenh;


	
	}
};


myWindow.render();