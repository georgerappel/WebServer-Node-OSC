function desenhaShast(coord_x, coord_y){// Set up!
	var a_canvas = document.getElementById("mapaAbelhas");
	var context = a_canvas.getContext("2d");

	//Serao usadas as variaveis coord_x e coord_y para desenhas as abelhas.

	for(int i = 0; i < coord_x.length; i++){

		context.fillStyle = "black";
		// Draw the left eye
		context.beginPath();
		context.arc(coord_x[i] * 10, coord_y * 10, 5, 0, 2*Math.PI);
		context.closePath();
		context.fill();

	}
}