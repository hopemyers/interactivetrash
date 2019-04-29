function openchest(scrollDuration) {
  document.getElementById('treasurechest').src = "images/openchest.png";
  document.getElementById('bubble1').className = "bubbleone";
  document.getElementById('bubble2').className = "bubbletwo";
  document.getElementById('bubble3').className = "bubblethree"
  var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval);
    },15);
}

window.onscroll = function() {myFunction()};

function myFunction() {
  document.getElementById('depthmeter').innerHTML = "Depth: " + (document.documentElement.scrollTop - 377) + "m";
  // console.log(document.documentElement.scrollTop)
  // if (document.body.scrollLeft > 600 || document.documentElement.scrollLeft > 600) {
  //   document.getElementById('rightarrow').style.opacity = 0;
  // }
  // if (document.body.scrollLeft > 1400 || document.documentElement.scrollLeft > 1400){
  //   document.getElementById('thebody').style.overflowY = "visible";
  // }
  // if( > 150 document.body.scrollTop > 100 || 150 > document.documentElement.scrollTop > 100){
  //   document.getElementById('downarrow').style.opacity = 0;
  //   document.getElementById('thebody').style.overflowX = "hidden"
  // }
  if(document.documentElement.scrollTop === 377){
    document.getElementById('depthmeter').style.opacity = 1;
    document.getElementById('rope').style.opacity = 1;
    document.getElementById('anchor').style.opacity = 1;
    console.log(document.documentElement.scrollTop);
    // document.getElementById('downarrow').style.opacity = 0;
    document.getElementById('fish1').className = "fish1animation";
    document.getElementById('fishthoughtbubble').className = "fishThoughtBubbleAnimation";
    // console.log(document.getElementById('fish1').className);
  }
  else {
    document.getElementById('depthmeter').style.opacity = 0;
    document.getElementById('rope').style.opacity = 0;
    document.getElementById('anchor').style.opacity = 0;
  }
}

function scrollright(scrollDuration) {
  document.getElementById('bag').className = "baganimation";
  document.getElementById('floatingbag').className = "floatingbaganimation";
  document.getElementById('rightarrow').style.opacity = 0;
  console.log(document.getElementById('floatingbag').className);
  console.log(scrollDuration);
  document.getElementById('birdthoughtbubble').style.opacity = 1;
  document.getElementById('birdthoughtbubble').className = "birdthoughtbubbleanimation";
  // make the window slowly scroll over
//   window.scrollBy({
//   top: 0,
//   left: 1440,
//   behavior: "smooth"
// });
}

function bagtomouse() {
  document.getElementById('floatingbag').style.opacity = 0;
  // document.getElementById('bee').style.opacity = 1;
    document.body.style.cursor= "url('images/cursorbag.png')";
}

// window.onmousemove = function() {bagfollow()};
// function bagfollow() {
//   var Xpos = event.clientX;
//   var Ypos = event.clientY;
//   console.log(Xpos);
//   console.log(Ypos);
//   document.getElementById('mousebag').style.left = Xpos + "px";
//   document.getElementById('mousebag').style.top = Ypos + "px";
// }

// var bee = document.getElementById("bee");
// 		document.addEventListener("mousemove", getMouse);
// 		var beeposX = 0;
//     var beeposY = 0;
// 		setInterval(followMouse, 50);
// 		var mouseX = 0;
//     var mouseY = 0; //mouse.x, mouse.y
// 		var dir = "right";
// 		function getMouse(e){
// 			mouseX = event.clientX;
// 			MouseY = event.clientY;
//         //Checking directional change
//         if(mouseX > beeposX){
//           dir = "right";
//         } else {
//           dir = "left";
//         }
// 		}
// 		function followMouse(){
// 			//1. find distance X , distance Y
// 			var distX = mouseX - beeposX;
// 			var distY = mouseY - beeposY;
// 			//Easing motion
//        //Progressive reduction of distance
// 			beeposX += distX/5;
// 			beeposY += distY/2;
// 			document.getElementById('bee').style.left = beeposX + "px";
// 			document.getElementById('bee').style.top = beeposY + "px";
//         //Apply css class
//         if (dir == "right"){
//           document.getElementById('bee').setAttribute("class", "right");
//         } else {
//           document.getElementById('bee').setAttribute("class", "left");
//         }
// 		}
