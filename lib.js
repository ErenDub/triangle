import { triangle1 } from './triangle1.js';
import { triangle2 } from './triangle2.js';
import { triangle3 } from './triangle3.js';
class print   {
	constructor(side1, side2, side3, type){
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
		let k=0;
		let triangleinfo;
		if (type == 1){
			if (this.side1 + this.side2 > this.side3 && this.side1+this.side3 > this.side3 && this.side2+this.side3 > this.side1){
			triangleinfo = new triangle1 (this.side1,this.side2,this.side3);
			k++;
			}
		}
		else if (type == 2){
			triangleinfo = new triangle2 (this.side1,this.side2,this.side3);
			k++;
		}
		else if (type == 3){
			triangleinfo = new triangle3 (this.side1,this.side2,this.side3);
			k++;
		}
		if(k>0){
			console.log(`a:${triangleinfo.side1},\n\nb:${triangleinfo.side2},\n\nc:${triangleinfo.side3}, \n\nA:${triangleinfo.angle1},\n\nB:${triangleinfo.angle2},\n\nC:${triangleinfo.angle3},,\n\nP:${triangleinfo.p},\n\nS:${triangleinfo.s},\n\nH1:${triangleinfo.h1},\n\nH2:${triangleinfo.h2},\n\nH3:${triangleinfo.h3},\n\nM1:${triangleinfo.m1},\n\nM2:${triangleinfo.m2},\n\nM3:${triangleinfo.m3},\n\nl1:${triangleinfo.l1},\n\nl2:${triangleinfo.l2},\n\nl3:${triangleinfo.l3},\n\nr:${triangleinfo.r},\n\nR:${triangleinfo.R}`  );
			console.log(`\n\n\n\n`);
			k--;
		}		
		else{
			console.log("Monacemi sheyvanilia arasworad");
		}	


	}
}
let trianglecalc = new print (3,4,5,1);