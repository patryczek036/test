//deklaracja obiektu glownego ZAMOWIENIE wysylanego do bazy danych. Sklada sie on z numeru zamowienia, trescie zamowienia oraz ceny
var objZamowienie = new Array;

//deklaracja pól obiektu glownego ZAMOWIENIE
var numerZamowienia=0;
var trescZamowienia;
var cenaZamowienia=0;

// DEKLARACJA OBIEKTÓW: TYPY, SMAKI, DODATKI: tablica NAZWY ORAZ SMAKI
// typy
var wafel = ["Wafel","0.30"];
var kubek = ["Kubek","0.50"];
//smaki
var truskawka = ["Truskawka","1.50"];
var orzech = ["Orzech","1.50"];
var mango = ["Mango","1.50"];
var pistacja = ["Pistacja","1.50"];
var czekolada = ["Czekolada","1.50"];
var wiśnia = ["Wiśnia","1.50"];
var cytryna = ["Cytryna","1.50"];
var wanilia = ["Wanilia","1.50"];
var śmietanka = ["Śmietanka","1.50"];
var kiwi = ["Kiwi","1.50"];
var tiramisu = ["Tiramisu","1.50"];
//dodatki
var posypka = ["Posypka", "0.5"];
var polewa_truskawkowa = ["Polewa truskowa", "0.6"];
var polewa_czekoladowa = ["Polewa czekoladowa", "0.8"];

// deklaracja tablic typow, smakow, dodatkow
var arrTypy = [wafel, kubek];
var arrSmaki = [truskawka, orzech, mango, pistacja, czekolada, wiśnia, cytryna, wanilia, śmietanka, kiwi, tiramisu];
var arrDodatki = [posypka, polewa_czekoladowa, polewa_truskawkowa];

//zmienna informujaca liczbe lodow w zamowieniu
var liczbaLodow = 0;

//zmienne blokujaca dodanie np. 2 wafelkow w jednym lodzie
var isTypSet = false;
var isTasteSet = false;
var isAddonSet = false;

// tablica stringow dla zmiennej TRESC wykorzystywanej pozniej w glownym obiekcie ZAMOWIENIE
var iceCream = new Array();

// FUNKCJE -----------------------------------------------------------------------------------------------------------------------------------------
//funkcja dodajaca nowe zamowienie, inkrementuje numer zamowienia, przechodzi do formy zamowienia
function noweZamowienie(){
	document.querySelector("#noweZamowienieButton").style.display = "none";
	document.querySelector("#zamowienieForm").style.display = "block";
	numerZamowienia++;
}


// funckja wpisująca do elementow HTML dane pobrane z tablic obietkow lodow
window.onload = function() {
	
document.getElementById("t0").innerHTML = arrTypy[0];
document.getElementById("t1").innerHTML = arrTypy[1];

iceCream.push("Zamówienie");

for(let i = 0 ; i < arrSmaki.length ; i++){
	document.getElementById(arrSmaki[i][0]).innerHTML = arrSmaki[i];
}

document.getElementById("d0").innerHTML = arrDodatki[0];
document.getElementById("d1").innerHTML = arrDodatki[1];
document.getElementById("d2").innerHTML = arrDodatki[2];

}

//funckja pokazujaca prawy panel, dodajaca obiekt loda
function addRightIceCream(){
	liczbaLodow++;
	var p = document.createElement("p");
	p.style.color = "#facf5a";
	p.style.fontSize= "26px";
	p.innerHTML = "Lód numer " + liczbaLodow +":";
	
	document.getElementById("right-side").appendChild(p);
	iceCream.push("Lód numer " + liczbaLodow);
	
}

//funckje dodajace do loda wafel/kubek, do tablicy iceCream
function addWafel(){
	if(!isTypSet){
		var p = document.createElement("p");
		p.style.color = "white";
		p.innerHTML = "Wafel";
	
		document.getElementById("right-side").appendChild(p);
		isTypSet = true;
		iceCream.push("Wafel");
		cenaZamowienia += wafel[1];
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








