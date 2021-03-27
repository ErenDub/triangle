 export default class triangle1  {
	constructor(side1, side2, side3){
		this.side1 = Math.abs(side1);
		this.side2 = Math.abs(side2);
		this.side3 = Math.abs(side3);
		this.angle1 = Math.acos((this.side1*this.side1+this.side2*this.side2-this.side3*this.side3) / (2*this.side1*this.side2)) * 180 / Math.PI;
		this.angle2 = Math.acos((this.side3*this.side3+this.side2*this.side2-this.side1*this.side1) / (2*this.side3*this.side2)) * 180 / Math.PI;
		this.angle3 = Math.acos((this.side3*this.side3+this.side1*this.side1-this.side2*this.side2) / (2*this.side3*this.side1)) * 180 / Math.PI;
		this.p = this.side1 + this.side2 + this.side3;
		this.P = this.p/2;
		this.s = Math.sqrt (this.P * (this.P-this.side1) * (this.P-this.side2) * (this.P - this.side3));
		this.h1 = 2 * this.s / this.side1;
		this.h2 = 2 * this.s / this.side2;		
		this.h3 = 2 * this.s / this.side3;
		this.m1 = Math.sqrt ( ( (2*Math.pow(this.side2,2)) + (2*Math.pow(this.side3,2)) - Math.pow(this.side1,2) ) / 4 );
		this.m2 = Math.sqrt ( ( (2*Math.pow(this.side1,2)) + (2*Math.pow(this.side3,2)) - Math.pow(this.side2,2) ) / 4 );
		this.m3 = Math.sqrt ( ( (2*Math.pow(this.side1,2)) + (2*Math.pow(this.side2,2)) - Math.pow(this.side3,2) ) / 4 );
		this.l1 = Math.sqrt ( this.side1 * this.side2 * (this.side1+this.side2+this.side3) * (this.side1+this.side2-this.side3)  ) / (this.side1+this.side2);
		this.l2 = Math.sqrt ( this.side3 * this.side2 * (this.side3+this.side2+this.side1) * (this.side3+this.side2-this.side1)  ) / (this.side3+this.side2);
		this.l3 = Math.sqrt ( this.side3 * this.side1 * (this.side3+this.side1+this.side2) * (this.side3+this.side1-this.side2)  ) / (this.side3+this.side1);
		this.r = this.s / this.P;
		this.R = this.side1 * this.side2 * this.side3 / (4 * this.s);
	}
}
