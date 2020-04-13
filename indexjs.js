var a=document.querySelector(".color1");
var b=document.querySelector(".color2");
var c=document.getElementById("he");

console.log(a);
function setgrad()
{
	c.style.background="linear-gradient(to right,"+a.value +","+b.value+")";
	console.log(a.value);
	console.log(b.value);
	// css.textContent=body.style.bckground+";";	

}

a.addEventListener("input",setgrad);
b.addEventListener("input",setgrad);