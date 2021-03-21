class calculator {
	constructor(){
		
	}
	p(a,b,c){
		return a+b+c;
	}
	s(a,b,c){
		let P = this.p(a,b,c)/2;
		return Math.sqrt(P*(P-a)*(P-b)*(P-c));
	}
	h(a,b,c){
		let S = this.s(a,b,c);
		return 2*this.area() / a;
	}
	m(a,b,c){
		return Math.sqrt( ( (2*Math.pow(b,2)) + (2*Math.pow(c,2)) - Math.pow(a,2) ) / 4 );
	}
	r(a,b,c){
		let P = this.p(a,b,c)/2;
		let S = this.s(a,b,c);
		return  S / P;
	}
	R(a,b,c){
		let S = this.s(a,b,c);
		return a*b*c / (4*S);
	}
	l(a,b,c){
		return Math.sqrt(a*b * (a+b+c) * (a+b-c) )/ (a+b);
	}
	angle(a,b,c){
		return Math.acos( (a*a+b*b-c*c) / (2*a*b) ) * 180/Math.PI;
	}
	side(a,b,angle){
		return Math.sqrt(a*a+b*b-2*a*b*Math.cos(angle*Math.PI/180))
	}
	sidesec(a, s1, s2){
		return (a* Math.sin(s2*Math.PI/180) / Math.sin(s1*Math.PI/180));
	}

}

class triangle1 extends calculator{
	constructor (side1, side2, angle1){
		super();
		this.side1 = Math.abs(side1);
		this.side2 = Math.abs(side2);
		this.angle1 = Math.abs(angle1);
		this.side3 = this.side(this.side1, this.side2,this.angle1);
		this.angle2 = this.angle(this.side3,this.side2,this.side1);
		this.angle3 = this.angle(this.side3,this.side1,this.side2);
	
	}
	perimeter(){
		return this.p(this.side1,this.side2,this.side3);
	}
	area(){
		return this.s(this.side1,this.side2,this.side3);
	}
	height1(){
		return this.h(this.side1,this.side2,this.side3);
	}
	height2(){
		return this.h(this.side2,this.side1,this.side3);
	}
	height3(){
		return this.h(this.side3,this.side2,this.side1);
	}
	median1(){
		return this.m(this.side1,this.side2,this.side3);
	}
	median2(){
		return this.m(this.side2,this.side1,this.side3);
	}
	median3(){
		return this.m(this.side3,this.side2,this.side1);
	}
	inradius(){
		return this.r(this.side3,this.side2,this.side1);
	}
	Radius(){
		return this.R(this.side3,this.side2,this.side1);
	}
	Bisector1(){
		return this.l(this.side1,this.side2,this.side3);
	}
	Bisector2(){
		return this.l(this.side3,this.side1,this.side2);
	}
	Bisector3(){
		return this.l(this.side3,this.side2,this.side1);
	}
}
class triangle2 extends calculator{
	constructor(side1, side2, side3){
		super();
		this.side1 = Math.abs(side1);
		this.side2 = Math.abs(side2);
		this.side3 = Math.abs(side3);
	}
	angle1(){
		return this.angle(this.side1, this.side2,this.side3);
	}
	angle2(){
		return this.angle(this.side3, this.side2,this.side1);
	}
	angle3(){
		return this.angle(this.side3, this.side1,this.side2);
	}
	perimeter(){
		return this.p(this.side1,this.side2,this.side3);
	}
	area(){
		return this.s(this.side1,this.side2,this.side3);
	}
	height1(){
		return this.h(this.side1,this.side2,this.side3);
	}
	height2(){
		return this.h(this.side2,this.side1,this.side3);
	}
	height3(){
		return this.h(this.side3,this.side2,this.side1);
	}
	median1(){
		return this.m(this.side1,this.side2,this.side3);
	}
	median2(){
		return this.m(this.side2,this.side1,this.side3);
	}
	median3(){
		return this.m(this.side3,this.side2,this.side1);
	}
	inradius(){
		return this.r(this.side3,this.side2,this.side1);
	}
	Radius(){
		return this.R(this.side3,this.side2,this.side1);
	}
	Bisector1(){
		return this.l(this.side1,this.side2,this.side3);
	}
	Bisector2(){
		return this.l(this.side3,this.side1,this.side2);
	}
	Bisector3(){
		return this.l(this.side3,this.side2,this.side1);
	}
}
class triangle3 extends calculator{
	constructor (side1, angle1, angle2){
		super();
		this.side1 = Math.abs(side1);
		this.angle1= angle1;
		this.angle2= angle2;
		this.angle3= 180-angle1-angle2;
	}
	side2(){
		return this.sidesec(this.side1, this.angle1, this.angle2);
	}
	side3(){
		return this.side(this.side1, this.side2(),this.angle3);
	}
	perimeter(){
		return this.p(this.side1,this.side2(),this.side3());
	}
	area(){
		return this.s(this.side1,this.side2(),this.side3());
	}
	height1(){
		return this.h(this.side1,this.side2(),this.side3());
	}
	height2(){
		return this.h(this.side2(),this.side1,this.side3());
	}
	height3(){
		return this.h(this.side3(),this.side2(),this.side1);
	}
	median1(){
		return this.m(this.side1,this.side2(),this.side3());
	}
	median2(){
		return this.m(this.side2(),this.side1,this.side3());
	}
	median3(){
		return this.m(this.side3(),this.side2(),this.side1);
	}
	inradius(){
		return this.r(this.side3(),this.side2(),this.side1);
	}
	Radius(){
		return this.R(this.side3(),this.side2(),this.side1);
	}
	Bisector1(){
		return this.l(this.side1,this.side2(),this.side3());
	}
	Bisector2(){
		return this.l(this.side3(),this.side1,this.side2());
	}
	Bisector3(){
		return this.l(this.side3(),this.side2(),this.side1);
	}
}

let triangleinfo = new triangle1 (3,4,90);
console.log(`a:${triangleinfo.side1},\n\nb:${triangleinfo.side2},\n\nc:${triangleinfo.side3},\n\nA:${triangleinfo.angle1},\n\nB:${triangleinfo.angle2},\n\nC:${triangleinfo.angle3},\n\nP:${triangleinfo.perimeter()},\n\nS:${triangleinfo.area()},\n\nH1:${triangleinfo.height1()},\n\nH2:${triangleinfo.height2()},\n\nH3:${triangleinfo.height3()},\n\nM1:${triangleinfo.median1()},\n\nM2:${triangleinfo.median2()},\n\nM3:${triangleinfo.median3()},\n\nr:${triangleinfo.inradius()},\n\nR:${triangleinfo.Radius()},\n\nl1:${triangleinfo.Bisector1()},\n\nl2:${triangleinfo.Bisector2()},\n\nl3:${triangleinfo.Bisector3()} `  );
console.log(`\n\n\n\n`)
let triangleinfo2 = new triangle2 (3,4,5);
console.log(`a:${triangleinfo2.side1},\n\nb:${triangleinfo2.side2},\n\nc:${triangleinfo2.side3},\n\nA:${triangleinfo2.angle1()},\n\nB:${triangleinfo2.angle2()},\n\nC:${triangleinfo2.angle3()},\n\nP:${triangleinfo2.perimeter()},\n\nS:${triangleinfo2.area()},\n\nH1:${triangleinfo2.height1()},\n\nH2:${triangleinfo2.height2()},\n\nH3:${triangleinfo2.height3()},\n\nM1:${triangleinfo2.median1()},\n\nM2:${triangleinfo2.median2()},\n\nM3:${triangleinfo2.median3()},\n\nr:${triangleinfo2.inradius()},\n\nR:${triangleinfo2.Radius()},\n\nl1:${triangleinfo2.Bisector1()},\n\nl2:${triangleinfo2.Bisector2()},\n\nl3:${triangleinfo2.Bisector3()}`)
console.log(`\n\n\n\n`)
let triangleinfo3 = new triangle3 (5,90,53.13010235415598);
console.log(`a:${triangleinfo3.side1},\n\nb:${triangleinfo3.side2()},\n\nc:${triangleinfo3.side3()},\n\nA:${triangleinfo3.angle1},\n\nB:${triangleinfo3.angle2},\n\nC:${triangleinfo3.angle3},\n\nP:${triangleinfo3.perimeter()},\n\nS:${triangleinfo3.area()},\n\nH1:${triangleinfo3.height1()},\n\nH2:${triangleinfo3.height2()},\n\nH3:${triangleinfo3.height3()},\n\nM1:${triangleinfo3.median1()},\n\nM2:${triangleinfo3.median2()},\n\nM3:${triangleinfo3.median3()},\n\nr:${triangleinfo3.inradius()},\n\nR:${triangleinfo3.Radius()},\n\nl1:${triangleinfo3.Bisector1()},\n\nl2:${triangleinfo3.Bisector2()},\n\nl3:${triangleinfo3.Bisector3()}`)