$().button('toggle')	
$().button('dispose')

var y = 0
var x = {};



function printInputs() {
	printRadio("size", "print-size", "print-size-cost", 0);
	printChecked("meats", "print-meats", "print-meats-cost", 1);
	printRadio("cheese", "print-cheese", "print-cheese-cost", 2);
	printRadio("crust", "print-crust", "print-crust-cost", 3);
	printRadio("sauce", "print-sauce", "print-sauce-cost", 4);
	printChecked("veggies", "print-veggies", "print-veggies-cost", 5);
	y = Number(x[0]) + Number(x[1]) + Number(x[2]) + Number(x[3]);
	document.getElementById("print-total-cost").innerHTML = y + ".00";
};

function printRadio(inputName, printName, printCostName, j){
	var whichInput = document.getElementsByName(inputName);
	for(var i = 0; i < whichInput.length; i++){
		if(whichInput[i].checked==true) {
			document.getElementById(printName).innerHTML = whichInput[i].alt;
			document.getElementById(printCostName).innerHTML = whichInput[i].value + ".00";
			x[j] = whichInput[i].value;
		};
	};
};

function printChecked(inputName, printName, printCost, j) {
	var whichInput = document.getElementsByName(inputName);
	var checkedName = "";
	var checkedCost = -1;
	for(var i = 0; i < whichInput.length; i++) {
		if(whichInput[i].checked==true) {
			checkedName += whichInput[i].alt + ", ";
			checkedCost++;
		};
	};
	document.getElementById(printName).innerHTML = checkedName.slice(0,-2);
	document.getElementById(printCost).innerHTML = Math.max(0,checkedCost) + ".00";
	x[j] = Math.max(0,checkedCost);
};
