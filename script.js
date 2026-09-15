function volume_sphere() {
	var radius = parseFloat(document.getElementById('radius').value);
	var volume = document.getElementById('volume');

	if(isNaN(radius) || radius < 0){
		volume.value = "NaN";
	}else{
		var result = ((4/3) * Math.PI * Math.pow(radius,3)); 
		volume.value = Math.round(result * 10000) / 10000;
	}
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
