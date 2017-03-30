window.addEventListener("load", onLoad, false);

function onLoad(){
	document.getElementById("search").addEventListener("input", search, false);
	document.getElementById("shMenu").addEventListener("click", shMenu, false);
	Collections.forEach(printCollection);
	Cars.forEach(printCar);
}

function go(there){
	var w = window.open(there, "_blank");
	w.focus();
}

function shMenu(){
	var menu = document.getElementById("menu");
	if(menu.style.left == "0%"){
		menu.style.left = "-100%";
	}else{
		menu.style.left = "0%";
	}
}

function search(){
	var query = document.getElementById("search").value.toLowerCase();
	document.getElementById("mainContainer").innerHTML = "";
	if(query == ""){
		Collections.forEach(printCollection);
		Cars.forEach(printCar);
		return;
	}
	Cars.forEach(function(car, index, array){
		var byName			= car.Name.toLowerCase().indexOf(query) > -1;
		var byPlate			= car.Plate.toLowerCase().indexOf(query) > -1;
		var bySimplePlate	= car.SimplePlate.toLowerCase().indexOf(query) > -1;
		var byCollection	= car.Collection.Name.toLowerCase().indexOf(query) > -1;
		
		if(byName || byPlate || bySimplePlate || byCollection){
			var theID = String(car.Collection.Name).split(" ").join("") + "Cars";
			var imageName = String(car.Name).split(" ").join("").toLowerCase();
			var container = document.getElementById(theID);
			if(container == null){
				var result = '';
				result += '<div class="collection">';
				result += '	<p class="colname">' + car.Collection.Name + '</p>';
				result += '	<p class="buyer">' + car.Collection.Buyer + '</p>';
				result += '	<p class="bonus">' + car.Collection.Bonus + '</p>';
				result += '	<p class="drivers">' + String(car.Collection.Drivers) + ' drivers</p>';
				result += '	<div class="cars" id="' + theID + '">';
				result += '	</div>';
				result += '</div>';
				document.getElementById("mainContainer").innerHTML += result;
				container = document.getElementById(theID);
			}
			var result = '';
			result += '<div class="car">';
			result += '	<img class="image" src="./image/car/' + imageName + '.jpg">';
			result += '	<p class="name">' + car.Name + '</p>';
			result += '	<p class="plate">' + car.Plate + '</p>';
			result += '</div>';
			container.innerHTML += result;
		}
	})
}

function printCollection(collection, index, array){
	var theID = String(collection.Name).split(" ").join("") + "Cars";
	var container = document.getElementById("mainContainer");
	var result = '';
	result += '<div class="collection">';
	result += '	<p class="colname">' + collection.Name + '</p>';
	result += '	<p class="buyer">' + collection.Buyer + '</p>';
	result += '	<p class="bonus">' + collection.Bonus + '</p>';
	result += '	<p class="drivers">' + String(collection.Drivers) + ' drivers</p>';
	result += '	<div class="cars" id="' + theID + '">';
	result += '	</div>';
	result += '</div>';
	container.innerHTML += result;
}

function printCar(car, index, array){
	var theID = String(car.Collection.Name).split(" ").join("") + "Cars";
	var imageName = String(car.Name).split(" ").join("").toLowerCase();
	var container = document.getElementById(theID);
	var result = '';
	result += '<div class="car">';
	result += '	<img class="image" src="./image/car/' + imageName + '.jpg">';
	result += '	<p class="name">' + car.Name + '</p>';
	result += '	<p class="plate">' + car.Plate + '</p>';
	result += '</div>';
	container.innerHTML += result;
}

class Collection{
	constructor(name, buyer, bonus, drivers){
		this.name = name;
		this.buyer = buyer;
		this.bonus = bonus;
		this.drivers = drivers;
	}
	get Name(){
		return this.name;
	}
	get Buyer(){
		return this.buyer;
	}
	get Bonus(){
		return this.bonus;
	}
	get Drivers(){
		return this.drivers;
	}
}

class Car{
	constructor(name, plate, simplePlate, collection){
		this.name = name;
		this.plate = plate;
		this.simplePlate = simplePlate;
		this.collection = collection;
	}
	get Name(){
		return this.name;
	}
	get Plate(){
		return this.plate;
	}
	get SimplePlate(){
		return this.simplePlate;
	}
	get Collection(){
		return this.collection;
	}
}

var col_FadingPowerCollector		= new Collection("Fading Power Collector"		, "Keith Collins MD" 	, "$20.000", 2);
var col_EndOfEmpiresCollector		= new Collection("End Of Empires Collector"		, "The Sultan of Amir"	, "$20.000", 2);
var col_NoDirectSunlightCollector	= new Collection("No Direct Sunlight Collector"	, "DJ Playlist"			, "$35.000", 3);
var col_StayDeclasseCollector		= new Collection("Stay Declasse Collector"		, "Ms. M Schultz"		, "$35.000", 3);
var col_UninsurableCollector		= new Collection("Uninsurable Collector"		, "Jay Norris"			, "$35.000", 3);
var col_PastelPerfectionCollector	= new Collection("Pastel Perfection Collector"	, "Cloe Parker"			, "$35.000", 3);
var col_MoltenMetalCollector		= new Collection("Molten Metal Collector"		, "Ronnie Bonelli"		, "$50.000", 4);
var col_BirdsOfParadiseCollector	= new Collection("Birds of Paradise Collector"	, "Curtis Cray Esq"		, "$50.000", 4);
var col_ShadesOfBlueCollector		= new Collection("Shades of Blue Collector"		, "Cris Formage"		, "$50.000", 4);
var col_HipToBeSquareCollector		= new Collection("Hip to be Square Collector"	, "Tao Cheng"			, "$50.000", 4);

var Collections = [
	col_FadingPowerCollector,
	col_EndOfEmpiresCollector,
	col_NoDirectSunlightCollector,
	col_StayDeclasseCollector,
	col_UninsurableCollector,
	col_PastelPerfectionCollector,
	col_MoltenMetalCollector,
	col_BirdsOfParadiseCollector,
	col_ShadesOfBlueCollector,
	col_HipToBeSquareCollector
];

//Fading Power Collector
var car_CoquetteBlackFin	= new Car("Coquette BlackFin"	, "V1NT4G3"	, "VINTAGE"	, col_FadingPowerCollector);
var car_Nightshade			= new Car("Nightshade"			, "TH370S"	, "THETOS"	, col_FadingPowerCollector);
//End Of Empires Collector
var car_ZType			= new Car("Z-Type"				, "B1GM0N3Y"	, "BIGMONEY", col_EndOfEmpiresCollector);
var car_RooseveltValor	= new Car("Roosevelt Valor"		, "0LDT1M3R"	, "OLDTIMER", col_EndOfEmpiresCollector);
//No Direct Sunlight Collector
var col_NoDirectSunlightCollector	= new Collection("No Direct Sunlight Collector"	, "DJ Playlist"			, "$35.000", 3);
var car_Feltzer		= new Car("Feltzer"		, "P0W3RFUL"	, "POWERFUL"	, col_NoDirectSunlightCollector);
var car_811			= new Car("811"			, "SL1CK"		, "SLICK"		, col_NoDirectSunlightCollector);
var car_BestiaGTS	= new Car("Bestia GTS"	, "BE4STY"		, "BEASTY"		, col_NoDirectSunlightCollector);
//Stay Declasse Collector
var car_SabreTurboCustom	= new Car("Sabre Turbo Custom"	, "B0UNC3"		, "BOUNCE"		, col_StayDeclasseCollector);
var car_Tampa				= new Car("Tampa"				, "CH4RG3D"		, "CHARGED"		, col_StayDeclasseCollector);
var car_Mamba				= new Car("Mamba"				, "BLKM4MB4"	, "BLKMAMBA"	, col_StayDeclasseCollector);
//Uninsurable Collector
var car_X80Proto	= new Car("X80 Proto"	, "M4K3B4NK"	, "MAKEBANK"	, col_UninsurableCollector);
var car_T20			= new Car("T20"			, "D3V1L"		, "DEVIL"		, col_UninsurableCollector);
var car_Osiris		= new Car("Osiris"		, "SL33K"		, "SLEEK"		, col_UninsurableCollector);
//Pastel Perfection Collector
var car_CoquetteClassic	= new Car("Coquette Classic"	, "T0PL3SS"		, "TOPLESS"		, col_PastelPerfectionCollector);
var car_Verlierer		= new Car("Verlierer"			, "PR3C10US"	, "PRECIOUS"	, col_PastelPerfectionCollector);
var car_ETR1			= new Car("ETR1"				, "PR3TTY"		, "PRETTY"		, col_PastelPerfectionCollector);
//Molten Metal Collector
var car_Alpha		= new Car("Alpha"		, "V1S10NRY"	, "VISIONRY"	, col_MoltenMetalCollector);
var car_Reaper		= new Car("Reaper"		, "D34TH4U"		, "DEATHAU"		, col_MoltenMetalCollector);
var car_Massacro	= new Car("Massacro"	, "B055"		, "BOSS"		, col_MoltenMetalCollector);
var car_Zentorno	= new Car("Zentorno"	, "W1NN1NG"		, "WINNING"		, col_MoltenMetalCollector);
//Birds of Paradise Collector
var car_Cheetah		= new Car("Cheetah"		, "BUZZ3D"		, "BUZZED"		, col_BirdsOfParadiseCollector);
var car_Tyrus		= new Car("Tyrus"		, "C1TRUS"		, "CITRUS"		, col_BirdsOfParadiseCollector);
var car_FMJ			= new Car("FMJ"			, "C4TCHM3"		, "CATCHME"		, col_BirdsOfParadiseCollector);
var car_EntityXF	= new Car("Entity XF"	, "OV3RFL0D"	, "OVERFLOD"	, col_BirdsOfParadiseCollector);
//Shades of Blue Collector
var car_Banshee900R	= new Car("Banshee 900R"	, "DR1FT3R"	, "DRIFTER"	, col_ShadesOfBlueCollector);
var car_StirlingGT	= new Car("Stirling GT"		, "R4LLY"	, "RALLY"	, col_ShadesOfBlueCollector);
var car_Seven70		= new Car("Seven-70"		, "4LLOY5"	, "ALLOYS"	, col_ShadesOfBlueCollector);
var car_TurismoR	= new Car("Turismo R"		, "TPD4WG"	, "TPDAWG"	, col_ShadesOfBlueCollector);
//Hip to be Square Collector
var car_Omnis			= new Car("Omnis"			, "W1D3B0D"		, "WIDEBOD"		, col_HipToBeSquareCollector);
var car_TroposRallye	= new Car("Tropos Rallye"	, "1985"		, "1985"		, col_HipToBeSquareCollector);
var car_Jester			= new Car("Jester"			, "N0F00L"		, "NOFOOL"		, col_HipToBeSquareCollector);
var car_SultanRS		= new Car("Sultan RS"		, "SN0WFLK3"	, "SNOWFLK3"	, col_HipToBeSquareCollector);

var Cars = [
	car_811,
	car_Alpha,
	car_Banshee900R,
	car_BestiaGTS,
	car_Cheetah,
	car_CoquetteBlackFin,
	car_CoquetteClassic,
	car_ETR1,
	car_EntityXF,
	car_FMJ,
	car_Feltzer,
	car_Jester,
	car_Mamba,
	car_Massacro,
	car_Nightshade,
	car_Omnis,
	car_Osiris,
	car_Reaper,
	car_RooseveltValor,
	car_SabreTurboCustom,
	car_Seven70,
	car_StirlingGT,
	car_SultanRS,
	car_T20,
	car_Tampa,
	car_TroposRallye,
	car_TurismoR,
	car_Tyrus,
	car_Verlierer,
	car_X80Proto,
	car_ZType,
	car_Zentorno,
];