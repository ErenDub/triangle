 export default class  triangle3  {
	constructor (side1, angle1, angle2){
		this.side1 = Math.abs(side1);
		this.angle1= angle1;
		this.angle2= angle2;
		this.angle3= 180-angle1-angle2;
		this.side2 = (this.side1 * Math.sin(this.angle2 * Math.PI/180) / Math.sin(this.angle1*Math.PI/180));
		this.side3 = (this.side1 * Math.sin(this.angle3 * Math.PI/180) / Math.sin(this.angle1*Math.PI/180)) ;
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