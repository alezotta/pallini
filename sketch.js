var circles = [];


function setup() {
  
  createCanvas(1024, 7000);
  background('#fefefe');
  
  var protection = 0;
  
  /*
  totale 29148
  totale gender 2887
  male 2417
  female 470
  unknown gender 26261 
  */
  
  while (circles.length <= 29148 ) {
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
    
    //limite cerchietti FF
    /*protection++;
    if (protection == 29148) {
    break;
    }*/
  }

  
  for (var i = 0; i < circles.length; i++) {
    
   if (i>0 & i<470) { fill('#00ff00');} 
   else if (i>=470 & i<2417) { fill('#ff0000');}
   else { fill('#0000ff')}
   
   noStroke();
   ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
    
   /* 
   '#fdc64f' giallo
   '#2e2d2c' nero
   '#fcf9ef' bianco
   '#575756' grigio
   */
   
  
  }

}
function draw() {
  
}