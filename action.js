
	var button = document.getElementById('B');
	var sidebar = document.getElementById('sidebar');
		var active = document.getElementById('active');
		var line1 = document.getElementById('line1');
		var line2 = document.getElementById('line2');
		var line3 = document.getElementById('line3');
		var line4 = document.getElementById('line4');
	    sidebar.onclick = function(){
			alert("learn more");
		}
		button.onclick = function(){
			alert("welcome to the page");
		}
		line1.onclick = function() {
			sidebar.style.transform = "translateX(0)";
			active.style.top = "0px";
		}
		line2.onclick = function() {
			sidebar.style.transform = "translateX(-20%)";
			active.style.top = "80px";
		}
		line3.onclick = function() {
			sidebar.style.transform = "translateX(-60%)";
			active.style.top = "160px";
		}
		line4.onclick = function() {
			sidebar.style.transform = "translateX(-80%)";
			active.style.top = "240px";
		}