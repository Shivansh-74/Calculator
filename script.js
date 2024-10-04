
let display = document.getElementById('display');

function clearAll() {
		display.value = '';
	}
	
function back() {
	display.value = display.value.slice(0, -1);
}

function append(char) {
	display.value += char;
}
function square(){
	display.value = display.value * display.value
}


function calculate() {
	try {
		if (display.value == ""){
	   display.value = ""	
		}
		else{

			display.value = eval(display.value);
		}
	} catch (e) {
		display.value = 'Error';
	}
}
