void setup(){
	size(400,200);//Tamaño del canvas (del rectángulo)
}

void draw(){
	background(200);//Color( del 0 al 250 de escala de gris)
	fill(250,250,250);//Color de la bola en rgb
	ellipse(mouseX, mouseY, 30, 10)	// elipse(Posición en eje x, Posición en eje y, Radio en eje x, Radio en eje y)
}