var arrTypy = ["Wafel", "Kubek"];
var arrSmaki = ["Truskawka", "Orzech", "Mango", "Pistacja", "Czekolada", "Wiśnia", "Cytryna", "Wanilia", "Śmietanka", "Kiwi", "Tiramisu"];
var arrDodatki = ["Posypka", "Polewa czekoladowa", "Polewa truskawkowa"];
var liczbaLodow = 0;
var isTypSet = false;
var isTasteSet = false;
var isAddonSet = false;

var iceCream = new Array();


function cleanAllVariables(){
	liczbaLodow = 0;
	isTypSet = false;
	isTasteSet = false;
	isAddonSet = false;
	iceCream = [];
}

function cleanForNext(){
	isTypSet = false;
	isTasteSet = false;
	isAddonSet = false;
}

// add inner html from arrays
window.onload = function() {
	
document.getElementById("t0").innerHTML = arrTypy[0];
document.getElementById("t1").innerHTML = arrTypy[1];

iceCream.push("Zamówienie");

for(let i = 0 ; i < arrSmaki.length ; i++){
	document.getElementById(arrSmaki[i]).innerHTML = arrSmaki[i];
}

document.getElementById("d0").innerHTML = arrDodatki[0];
document.getElementById("d1").innerHTML = arrDodatki[1];
document.getElementById("d2").innerHTML = arrDodatki[2];

}

//Add icecream to rightside
function addRightIceCream(){
	liczbaLodow++;
	var p = document.createElement("p");
	p.style.color = "#facf5a";
	p.style.fontSize= "26px";
	p.innerHTML = "Lód numer " + liczbaLodow +":";
	
	document.getElementById("right-side").appendChild(p);
	iceCream.push("Lód numer " + liczbaLodow);
	
}

//add ingredients to right side
function addWafel(){
	if(!isTypSet){
		var p = document.createElement("p");
		p.style.color = "white";
		p.innerHTML = "Wafel";
	
		document.getElementById("right-side").appendChild(p);
		isTypSet = true;
		iceCream.push("Wafel");
	}
}
function addKubek(){
	if(!isTypSet){
		isTypSet = true;
		var p = document.createElement("p");
		p.style.color = "white";
		p.innerHTML = "Kubek";
	
		document.getElementById("right-side").appendChild(p);
		iceCream.push("Kubek");
	}
}

//add tastes
function addTaste(taste){
	if(isTypSet && !isAddonSet){
		isTasteSet = true;
		var p = document.createElement("p");
		p.style.color = "white";
		p.innerHTML = arrSmaki[taste];
		
		document.getElementById("right-side").appendChild(p);
		iceCream.push(arrSmaki[taste]);
	}
}

// add additionals
function addAdditionals(addon){
	if(isTypSet && isTasteSet){
		isAddonSet = true;
		var p = document.createElement("p");
		p.style.color = "white";
		p.innerHTML = arrDodatki[addon];
	
		document.getElementById("right-side").appendChild(p);
		iceCream.push(arrDodatki[addon]);
	}
}








