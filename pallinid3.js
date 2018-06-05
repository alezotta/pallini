let width = window.innerWidth
let height = 7000
let margin = 16
let innerMargin = 4

let svg = d3.selectAll("body")
.append("svg")
.attr("width", width - margin)
.attr("height", height - margin)
.style("background", "#000000")

let randomX = d3.randomUniform(innerMargin + margin, width - margin - innerMargin*2)
let randomY = d3.randomUniform(innerMargin + margin, height - margin - innerMargin*2)

let pallini = 29148

for (let i = 1; i <= pallini; i++) {

	d3.selectAll("svg")
	.append("ellipse")
	.attr("cx", randomX)
	.attr("cy", randomY)
	.attr("rx", 2)
	.attr("ry", 2)
	.style("fill", function() {
		if (i>0 & i<500) { 
			return "#ffffff"
		} else if (i>=500 & i<2000) { 
			return "#dddddd"
		} else { 
			return "#555555"
		}
	})
}