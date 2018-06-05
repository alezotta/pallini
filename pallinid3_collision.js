let width = window.innerWidth
let height = window.innerHeight
let margin = 16
let innerMargin = 4
let spacebetween = 10

let elementi = 10
let r = 20

let overlapping = false

let circles = []

let svg = d3.selectAll("body")
.append("svg")
.attr("width", width - margin)
.attr("height", height - margin)
.style("background", "#000000")

for (let i = 0; i < elementi; i++) {

	let randomX = d3.randomUniform(margin + innerMargin, width - margin - innerMargin*2)()
	let randomY = d3.randomUniform(margin + innerMargin, height - margin - innerMargin*2)()

	for (let j = 0; j < circles.length; j++) {

		let cx = circles[j].cx.baseVal.value
		let cy = circles[j].cy.baseVal.value


		let distX = Math.abs(randomX - cx)
		let distY = Math.abs(randomY - cy)

		console.log("randomX: " + randomX + " cx[j]: " + circles[j].cx.baseVal.value + " distX: " + distX)

		if (distX < (spacebetween + r*2) || distY < (spacebetween + r*2)) {
			overlapping = true
			d3.selectAll("svg")

		.append("ellipse")
		.attr("cx", cx)
		.attr("cy", 250)
		.attr("rx", r/2)
		.attr("ry", r/2)
		.style("fill", "red")
		} else {
			overlapping = false
		}

	}

	let myCircle = d3.selectAll("svg")

	.append("ellipse")
	.attr("cx", randomX)
	.attr("cy", 250)
	.attr("rx", r)
	.attr("ry", r)
	.style("fill", "white")
	

	if (overlapping === false) {
		d3.select("ellipse").style("fill", "white")
	    circles.push(myCircle.node())
	    console.log(circles.length)
	} else { 
		
		console.log("Hey there's an overlap here") 
	}
}




/*

while (circles.length <= 100 ) {
    var circle = {
      x: random(width-12)+4,
      y: random(height-12)+4,
      //grandezza cerchio
      r: 2
    }
    
    var overlapping = false;
    for (var j = 0; j < circles.length; j++) {
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < (circle.r+2) + (other.r+2)) {
        overlapping = true;
      }
    }
  
    if (!overlapping) {
      circles.push(circle);
    }
    

  }

  
   ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
    
  
  }
*/
