window.onscroll = function() {myFunction()};

function scrollright(scrollDuration) {
  document.getElementById('bag').className = "baganimation";
  document.getElementById('floatingbag').className = "floatingbagopacityanimation";
  document.getElementById('floatingbagmovement').className = "floatingbaganimation";
  document.getElementById('rightarrow').style.opacity = 0;
  console.log(document.getElementById('floatingbag').className);
  console.log(scrollDuration);
  // document.getElementById('birdthoughtbubble').style.opacity = 1;
  document.getElementById('birdthoughtbubble').className = "birdthoughtbubbleanimation";
  document.getElementById('seagull').className = "seagullanimation";
  document.getElementById('seagullspin').className = "seagullspinanimation"
  document.getElementById('birdwords').className = "birdwordsanimation";
  document.getElementById('birdnextarrow').className = "birdnextarrowanimation";

  var scrollStep = window.innerWidth / (3000 / 20);

  // var scrollStep = 7;
  var scrollInterval = setInterval(function(){
        if ( window.scrollX < window.innerWidth ) {

            window.scrollBy( scrollStep, 0 );

        }
        else{
          clearInterval(scrollInterval);
        }
    },15);
}

function bagtomouse() {
  document.getElementById('floatingbag').style.opacity = 0;
  // document.getElementById('bee').style.opacity = 1;
    document.body.style.cursor= "url('images/cursorbag.png')";
}

// setting the animations at different levels

let dolphinrun = 0;
let bagsrun = 0;
let turtlerun = 0;

function myFunction() {
  document.getElementById('depthmeter').innerHTML = "Depth: " + (document.documentElement.scrollTop - 377) + "m";

  if(document.documentElement.scrollTop > 1400 && turtlerun ===0){
    // for the turtle animation and thought bubble pop up
    document.getElementById('turtle').className = "turtleanimation";
    document.getElementById('turtlethoughtbubble').className = "turtlethoughtbubbleanimation";
    document.getElementById('turtlewords').className = "turtlewordsanimation";
    setTimeout(function(){ document.getElementById('turtlewords').innerHTML = "Ooh look a yummy jellyfish" }, 2000);
    setTimeout(function(){ document.getElementById('turtlewords').style.opacity = 1 }, 500);
    setTimeout(function(){ document.getElementById('turtlethoughtbubble').style.opacity = 1 }, 500);
    setTimeout(function(){ document.getElementById('jellyfish').className = "jellyfishanimation" }, 3000);
    setTimeout(function(){ document.getElementById('turtlewords').innerHTML = "CHOMP" }, 6000);
    setTimeout(function(){ document.getElementById('eatenbag').style.opacity = 0; }, 6300);
    setTimeout(function(){ document.getElementById('turtle').src = "images/turtleclosedmouth.png"; }, 6300);
    setTimeout(function(){ document.getElementById('turtlewords').innerHTML = "Ugh, that jellyfish was weird. I feel kind of sick" }, 8500);
    setTimeout(function(){ document.getElementById('turtlewords').style.opacity = 0 }, 14000);
    setTimeout(function(){ document.getElementById('turtlethoughtbubble').style.opacity = 0 }, 14000);
    setTimeout(function(){ document.getElementById('shrimpthoughtbubble').style.opacity = 1 }, 15000);
    setTimeout(function(){ document.getElementById('shrimpwords').style.opacity = 1 }, 15000);
    setTimeout(function(){ document.getElementById('shrimpwords').innerHTML = "This is why those humans shouldn't throw trash in the ocean" }, 20000);
    setTimeout(function(){ document.getElementById('shrimpwords').innerHTML = "Sometimes we mistake it for food!" }, 25000);
    setTimeout(function(){ document.getElementById('shrimpthoughtbubble').style.opacity = 0 }, 30000);
    setTimeout(function(){ document.getElementById('shrimpwords').style.opacity = 0 }, 30000);
    setTimeout(function(){ document.getElementById('turtle').style.left = "2250px"}, 31000);
    setTimeout(function(){ document.getElementById('turtle').className = "turtleswimaway"}, 31000);
    turtlerun = 1;

    // document.getElementById("turtle").classList.remove('turtleanimation');
    // setTimeout(function(){ document.getElementById("turtleaway").className = "turtleswimaway"; }, 12000);


    // Take away ability to scroll to make the watch the part and then change it back
    // have down arrow that tells people to continue scrolling once the animals are done speaking


  }
  else if(document.documentElement.scrollTop > 850 && bagsrun === 0){
    document.getElementById('youngbag').className = "youngbaganimation";
    document.getElementById('oldbag').className = "oldbaganimation";
    setTimeout(function(){document.getElementById('youngbagthoughtbubble').style.opacity = 1}, 14000);
    setTimeout(function(){document.getElementById('youngbagwords').style.opacity = 1}, 14000);
    setTimeout(function(){document.getElementById('youngbagthoughtbubble').style.opacity = 0}, 18000);
    setTimeout(function(){document.getElementById('youngbagwords').style.opacity = 0}, 18000);
    setTimeout(function(){document.getElementById('oldbagthoughtbubble').style.opacity = 1}, 18500);
    setTimeout(function(){document.getElementById('oldbagwords').style.opacity = 1}, 18500);
    setTimeout(function(){document.getElementById('oldbagthoughtbubble').style.opacity = 0}, 22500);
    setTimeout(function(){document.getElementById('oldbagwords').style.opacity = 0}, 22500);
    setTimeout(function(){document.getElementById('youngbagwords').innerHTML = "Wow! Are you from France?"}, 22500);
    setTimeout(function(){document.getElementById('youngbagthoughtbubble').style.opacity = 1}, 23000);
    setTimeout(function(){document.getElementById('youngbagwords').style.opacity = 1}, 23000);
    setTimeout(function(){document.getElementById('youngbagthoughtbubble').style.opacity = 0}, 27000);
    setTimeout(function(){document.getElementById('youngbagwords').style.opacity = 0}, 27000);
    setTimeout(function(){document.getElementById('oldbagwords').innerHTML = "I was thrown away in America 60 years ago,"}, 27000);
    setTimeout(function(){document.getElementById('oldbagthoughtbubble').style.opacity = 1}, 27500);
    setTimeout(function(){document.getElementById('oldbagwords').style.opacity = 1}, 27500);
    setTimeout(function(){document.getElementById('oldbagwords').innerHTML = "but I just spent 10 years in Europe."}, 31500);
    setTimeout(function(){document.getElementById('oldbagwords').innerHTML = "Everyone here seems so much younger now!"}, 35500);
    setTimeout(function(){document.getElementById('oldbagthoughtbubble').style.opacity = 0}, 39500);
    setTimeout(function(){document.getElementById('oldbagwords').style.opacity = 0}, 39500);
    setTimeout(function(){document.getElementById('youngbagwords').innerHTML = "I was only thrown away 5 years ago"}, 39500);
    setTimeout(function(){document.getElementById('youngbagthoughtbubble').style.opacity = 1}, 40000);
    setTimeout(function(){document.getElementById('youngbagwords').style.opacity = 1}, 40000);
    setTimeout(function(){document.getElementById('youngbagwords').innerHTML = "I can't wait until I'm old enough to travel the world!"}, 44000);
    setTimeout(function(){document.getElementById('youngbagthoughtbubble').style.opacity = 0}, 48000);
    setTimeout(function(){document.getElementById('youngbagwords').style.opacity = 0}, 48000);
    setTimeout(function(){document.getElementById('oldbagwords').innerHTML = "Don't worry,"}, 48000);
    setTimeout(function(){document.getElementById('oldbagthoughtbubble').style.opacity = 1}, 48500);
    setTimeout(function(){document.getElementById('oldbagwords').style.opacity = 1}, 48500);
    setTimeout(function(){document.getElementById('oldbagwords').innerHTML = "You'll have the next 300 years of your life to explore!"}, 55000);
    setTimeout(function(){document.getElementById('oldbagthoughtbubble').style.opacity = 0}, 59000);
    setTimeout(function(){document.getElementById('oldbagwords').style.opacity = 0}, 59000);
    setTimeout(function(){document.getElementById('youngbagwords').innerHTML = "It was nice to meet you Prince Louis,"}, 59000);
    setTimeout(function(){document.getElementById('youngbagwords').style.opacity = 1}, 59500);
    setTimeout(function(){document.getElementById('youngbagthoughtbubble').style.opacity = 1}, 59500);
    setTimeout(function(){document.getElementById('youngbagwords').innerHTML = "Hopefully I'll see you floating around some time!"}, 63500);
    setTimeout(function(){document.getElementById('youngbagwords').style.opacity = 0}, 67500);
    setTimeout(function(){document.getElementById('youngbagthoughtbubble').style.opacity = 0}, 67500);
    setTimeout(function(){document.getElementById('youngbag').style.left = "1730px"}, 68000);
    setTimeout(function(){document.getElementById('youngbag').className = "youngbagswimaway"}, 68000);
    setTimeout(function(){document.getElementById('oldbag').style.left = "2350px"}, 68000);
    setTimeout(function(){document.getElementById('oldbag').style.top = "1180px"}, 68000);
    setTimeout(function(){document.getElementById('oldbag').className = "oldbagswimawayanimation"}, 68000);
    bagsrun = 1;
  }
  else if(document.documentElement.scrollTop > 377){
    // show anchor
    document.getElementById('depthmeter').style.opacity = 1;
    document.getElementById('rope').style.opacity = 1;
    document.getElementById('anchor').style.opacity = 1;
    document.getElementById('eastereggbox').style.opacity = .8;
    document.getElementById('eggbehind').style.opacity = .4;
    console.log(document.documentElement.scrollTop);

  }
  else if(document.documentElement.scrollTop > 227 && dolphinrun === 0){
    // for the dolphin animation and thought bubble pop up
    document.getElementById('dolphin').style.opacity = 1;
    document.getElementById('dolphin').className = "fish1animation";
    setTimeout(function(){document.getElementById('fishthoughtbubble').style.opacity = 1}, 4000);
    setTimeout(function(){document.getElementById('dolphinwords').style.opacity = 1}, 4000);
    setTimeout(function(){ document.getElementById('dolphinwords').innerHTML = "There's a lot of trash in the ocean, I don't like it" }, 8000);
    setTimeout(function(){ document.getElementById('dolphinwords').innerHTML = "Sometimes I get caught in fishing nets and it hurts" }, 14000);
    setTimeout(function(){ document.getElementById('dolphinwords').innerHTML = "There should really be less trash!" }, 19000);
    setTimeout(function(){document.getElementById('dolphinwords').style.opacity = 0}, 24000);
    setTimeout(function(){document.getElementById('fishthoughtbubble').style.opacity = 0}, 24000);
    setTimeout(function(){ document.getElementById('dolphin').style.left = "1680px"}, 25000);
    setTimeout(function(){document.getElementById('dolphin').className = "dolphinswimaway"}, 25000);

    dolphinrun = 1;

  }
  else if(document.documentElement.scrollTop > 227){
    // hide anchor above water
    document.getElementById('depthmeter').style.opacity = 0;
    document.getElementById('rope').style.opacity = 0;
    document.getElementById('anchor').style.opacity = 0;
    document.getElementById('eastereggbox').style.opacity = 0;
    document.getElementById('eggbehind').style.opacity = 0;
  }
}

// seagull speaking

var n = 0;
function plusBirdSlides()  {
  var sentences = ["Hi there!", "Help Trashley meet some new friends", "It's a bonus if you can help clean up some garbage!", "Click on Trashley and start by scrolling down slowly"];
  if(n<3){
  n = n+1;
  document.getElementById('birdwords').innerHTML = sentences[n];
  console.log(sentences[n])
  }
  else {
    document.getElementById('birdnextarrowopacity').style.opacity = 0;
    document.getElementById('birdwordsopacity').style.opacity = 0;
    document.getElementById('birdthoughtbubbleopacity').style.opacity = 0;
  }
}

function whalefact() {
  document.getElementById('eggpopupwords').innerHTML = "Whales feel sick because you can find hosepipes, plastic pots and disposable bags in their stomachs";
  document.getElementById('eggpopup').style.opacity = .8;
  document.getElementById('eggpopupwords').style.opacity = 1;
  document.getElementById('eggwhale').style.opacity = 1;
  setTimeout(function(){document.getElementById('eggpopup').style.opacity = 0}, 7000)

}
