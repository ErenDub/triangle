class  triangle3  {
	constructor (side1, angle1, angle2){
		this.side1 = Math.abs(side1);
		this.angle1= angle1;
		this.angle2= angle2;
		this.angle3= 180-angle1-angle2;
		this.side2 = this.side(this.side1, this.angle1, this.angle2);
		this.side3 = this.side(this.side1, this.angle1, this.angle3);;
		this.p = this.side1 + this.side2 + this.side3;
		this.P = this.p/2;
		this.s = Math.sqrt (this.P * (this.P-this.side1) * (this.P-this.side2) * (this.P - this.side3));
		this.h1 = this.h(this.s, this.side1);
		this.h2 = this.h(this.s, this.side2);
		this.h3 = this.h(this.s, this.side3);
		this.m1 = this.m (this.side3, this.side2, this.side1);
		this.m2 = this.m (this.side3, this.side1, this.side2);
		this.m3 = this.m (this.side1, this.side2, this.side3);
		this.l1 = this.l(this.side1, this.side2, this.side3);
		this.l2 = this.l(this.side3, this.side2, this.side1);
		this.l3 = this.l(this.side3, this.side1, this.side2);
		this.r = this.s / this.P;
		this.R = this.side1 * this.side2 * this.side3 / (4 * this.s);
	}
	side (side1, angle1, angle2){
		return (side1 * Math.sin(angle2 * Math.PI/180) / Math.sin(angle1*Math.PI/180));
	}
	isTriangle(){
		if (this.side1 + this.side2 > this.side3 && this.side1+this.side3 > this.side3 && this.side2+this.side3 > this.side1){
			return true;
		}
		else {
			return false;
		}

	}

	h(s, side){
		if (this.isTriangle()){
			return 2 * s / side;
		}
		else {
			return -1;
		}
	}
	m(side1,side2, side3){
		if (this.isTriangle()){
			return Math.sqrt ( ( (2*Math.pow(side1,2)) + (2*Math.pow(side2,2)) - Math.pow(side3,2) ) / 4 );
		}
		else{
			return -1;
		}
	}
	l (side1, side2, side3){
		if (this.isTriangle()){
			return Math.sqrt ( side1 * side2 * (side1+side2+side3) * (side1+side2-side3)  ) / (side1+side2);
		}
		else{
			return -1;
		}
	}
}