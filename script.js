function volume_sphere() {
	var radius = parseFloat(document.getElementById('radius').value);
	var volume = document.getElementById('volume');

	if(isNaN(radius) || radius < 0){
		volume.value = "NaN";
	}else{
		volume.value = ((4/3) * Math.PI * Math.pow(radius,3)); 
	}
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
