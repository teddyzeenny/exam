//Change clock
setInterval(function() {
	var date = new Date();
	
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	
	document.getElementById('clock').innerHTML = hour + ':' + minute + ':' + second;
}, 1000);

//Change colors
document.getElementById('black').addEventListener('click', function() {changeColor('black')});
document.getElementById('red').addEventListener('click', function() {changeColor('red')});
document.getElementById('blue').addEventListener('click', function() {changeColor('blue')});

function changeColor(color) {
	document.getElementById('main_article').style.color = color;
}

//Submit form through ajax
document.getElementById('contact').addEventListener('submit', submitValues);

function submitValues() {
	var name = document.getElementById("form-name").value;
	var email = document.getElementById("form-email").value;
	var responseText='';
	
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	} else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			responseText=xmlhttp.responseText;
			if (responseText=='Thank you') {
				document.getElementById("form-name").disabled=true;
				document.getElementById("form-email").disabled=true;
				document.getElementById("form-submit").disabled=true;
			}
			document.getElementById("response").innerHTML=responseText;
		}
	}
	xmlhttp.open("GET","gt.php?name="+name+"&email="+email,true);
	xmlhttp.send();
}