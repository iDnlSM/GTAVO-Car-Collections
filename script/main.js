var plates = [
	"M4K3B4NK",
	"D3V1L",
	"SL33K",
	"BUZZ3D",
	"C1TRUS",
	"C4TCHM3",
	"0V3RFL0D",
	"V1NT4G3",
	"TH37OS",
	"P0W3RFUL",
	"SL1CK",
	"BE4STY",
	"B0UNC3",
	"CH4RG3D",
	"BLKM4MB4",
	"V1S10NRY",
	"D34TH4U",
	"B055",
	"W1NN1NG",
	"T0PL3SS",
	"PR3C10US",
	"PR3TTY",
	"W1D3B0D",
	"1985",
	"N0F00L",
	"SN0WFLK3",
	"DR1FT3R",
	"R4LLY",
	"4LL0Y5",
	"TPD4WG",
	"B1GM0N3Y",
	"0LDT1M3R",
];

var text = "";

function searchPlate(){
	text = document.getElementById('searchInput').value.toUpperCase();
	plates.forEach(plateExists);
}

function plateExists(item, index){
	if(item.indexOf(text) !== -1){
		var car = document.getElementById(item);
		car.scrollIntoView();
		document.body.scrollTop -= 50;
	}
}