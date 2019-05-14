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
  document.body.style.overflowY = "visible";
  document.body.style.overflowX = "hidden";
  document.getElementById('floatingbagopacity').style.opacity = 0;
  // console.log(url(/images/cursorbag.png));
  document.body.style.cursor= "url(images/cursorbag.png), auto";

  console.log(document.body.style.cursor);
}

// setting the animations at different levels

let dolphinrun = 0;
let bagsrun = 0;
let turtlerun = 0;
let whalerun = 0;

function myFunction() {
  document.getElementById('depthmeter').innerHTML = "Depth: " + (document.documentElement.scrollTop - 377) + "m";
  document.getElementById('scrolldown').style.opacity = 0;

  if(document.documentElement.scrollTop > 1800 && whalerun === 0) {
    // document.body.style.overflowY = "hidden";
    // setTimeout(function(){document.body.style.overflowY = "visible"}, 15000)
  }
  if(document.documentElement.scrollTop > 1350 && turtlerun ===0){
    // for the turtle animation and thought bubble pop up
    // document.body.style.overflowY = "hidden";

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
    setTimeout(function(){ document.getElementById('turtle').style.left = "2900px"}, 14000);
    setTimeout(function(){ document.getElementById('turtle').style.transform.scaleX = -1}, 14500);
    setTimeout(function(){ document.getElementById('turtle').className = "turtleswimaway"}, 14500);
    setTimeout(function(){ document.getElementById('shrimpthoughtbubble').style.opacity = 1 }, 15000);
    setTimeout(function(){ document.getElementById('shrimpwords').style.opacity = 1 }, 15000);
    setTimeout(function(){ document.getElementById('shrimpwords').innerHTML = "This is why those humans shouldn't throw trash in the ocean" }, 20000);
    setTimeout(function(){ document.getElementById('shrimpwords').innerHTML = "Sometimes we mistake it for food!" }, 25000);
    setTimeout(function(){ document.getElementById('shrimpthoughtbubble').style.opacity = 0 }, 30000);
    setTimeout(function(){ document.getElementById('shrimpwords').style.opacity = 0 }, 30000);

    // setTimeout(function(){ document.body.style.overflowY = "visible"}, 40000);
    setTimeout(function(){document.getElementById('scrolldown').style.opacity = 1}, 40000);
    turtlerun = 1;
  }


  if(document.documentElement.scrollTop > 850 && bagsrun === 0){
    // document.body.style.overflowY = "hidden";
    document.getElementById('youngbag').className = "youngbaganimation";
    document.getElementById('oldbag').className = "oldbaganimation";
    setTimeout(function(){document.getElementById('youngbagthoughtbubble').style.opacity = 1}, 5000);
    setTimeout(function(){document.getElementById('youngbagwords').style.opacity = 1}, 5000);
    setTimeout(function(){document.getElementById('youngbagthoughtbubble').style.opacity = 0}, 9000);
    setTimeout(function(){document.getElementById('youngbagwords').style.opacity = 0}, 9000);
    setTimeout(function(){document.getElementById('oldbagthoughtbubble').style.opacity = 1}, 9500);
    setTimeout(function(){document.getElementById('oldbagwords').style.opacity = 1}, 9500);
    setTimeout(function(){document.getElementById('oldbagthoughtbubble').style.opacity = 0}, 13500);
    setTimeout(function(){document.getElementById('oldbagwords').style.opacity = 0}, 13500);
    setTimeout(function(){document.getElementById('youngbagwords').innerHTML = "Wow! Are you from France?"}, 13500);
    setTimeout(function(){document.getElementById('youngbagthoughtbubble').style.opacity = 1}, 14000);
    setTimeout(function(){document.getElementById('youngbagwords').style.opacity = 1}, 14000);
    setTimeout(function(){document.getElementById('youngbagthoughtbubble').style.opacity = 0}, 18000);
    setTimeout(function(){document.getElementById('youngbagwords').style.opacity = 0}, 18000);
    setTimeout(function(){document.getElementById('oldbagwords').innerHTML = "I was thrown away in America 60 years ago,"}, 18000);
    setTimeout(function(){document.getElementById('oldbagthoughtbubble').style.opacity = 1}, 18500);
    setTimeout(function(){document.getElementById('oldbagwords').style.opacity = 1}, 18500);
    setTimeout(function(){document.getElementById('oldbagwords').innerHTML = "but I just spent 10 years in Europe."}, 22500);
    setTimeout(function(){document.getElementById('oldbagwords').innerHTML = "Everyone here seems so much younger now!"}, 26500);
    setTimeout(function(){document.getElementById('oldbagthoughtbubble').style.opacity = 0}, 30500);
    setTimeout(function(){document.getElementById('oldbagwords').style.opacity = 0}, 30500);
    setTimeout(function(){document.getElementById('youngbagwords').innerHTML = "I was only thrown away 5 years ago"}, 30500);
    setTimeout(function(){document.getElementById('youngbagthoughtbubble').style.opacity = 1}, 31000);
    setTimeout(function(){document.getElementById('youngbagwords').style.opacity = 1}, 31000);
    setTimeout(function(){document.getElementById('youngbagwords').innerHTML = "I can't wait until I'm old enough to travel the world!"}, 35000);
    setTimeout(function(){document.getElementById('youngbagthoughtbubble').style.opacity = 0}, 39000);
    setTimeout(function(){document.getElementById('youngbagwords').style.opacity = 0}, 39000);
    setTimeout(function(){document.getElementById('oldbagwords').innerHTML = "Don't worry,"}, 39000);
    setTimeout(function(){document.getElementById('oldbagthoughtbubble').style.opacity = 1}, 39500);
    setTimeout(function(){document.getElementById('oldbagwords').style.opacity = 1}, 39500);
    setTimeout(function(){document.getElementById('oldbagwords').innerHTML = "You'll have the next 300 years of your life to explore!"}, 43000);
    setTimeout(function(){document.getElementById('oldbagthoughtbubble').style.opacity = 0}, 47000);
    setTimeout(function(){document.getElementById('oldbagwords').style.opacity = 0}, 47000);
    setTimeout(function(){document.getElementById('youngbagwords').innerHTML = "It was nice to meet you Prince Louis,"}, 47000);
    setTimeout(function(){document.getElementById('youngbagwords').style.opacity = 1}, 47500);
    setTimeout(function(){document.getElementById('youngbagthoughtbubble').style.opacity = 1}, 47500);
    setTimeout(function(){document.getElementById('youngbagwords').innerHTML = "Hopefully I'll see you floating around some time!"}, 51500);
    setTimeout(function(){document.getElementById('youngbagwords').style.opacity = 0}, 55500);
    setTimeout(function(){document.getElementById('youngbagthoughtbubble').style.opacity = 0}, 55500);
    setTimeout(function(){document.getElementById('youngbag').style.left = "1730px"}, 56000);
    setTimeout(function(){document.getElementById('youngbag').className = "youngbagswimaway"}, 56000);
    setTimeout(function(){document.getElementById('oldbag').style.left = "2350px"}, 56000);
    setTimeout(function(){document.getElementById('oldbag').style.top = "1180px"}, 56000);
    setTimeout(function(){document.getElementById('oldbag').className = "oldbagswimawayanimation"}, 56000);
    // setTimeout(function(){document.body.style.overflowY = "visible"}, 66000);
    setTimeout(function(){document.getElementById('scrolldown').style.opacity = 1;}, 66000);
    bagsrun = 1;
  }
  if(document.documentElement.scrollTop > 377){
    // show anchor
    document.getElementById('depthmeter').style.opacity = 1;
    document.getElementById('rope').style.opacity = 1;
    document.getElementById('anchor').style.opacity = 1;
    document.getElementById('eastereggbox').style.opacity = .8;
    document.getElementById('eggbehind').style.opacity = .4;
    console.log(document.documentElement.scrollTop);

  }
  if(document.documentElement.scrollTop > 370 && dolphinrun === 0){
    console.log("HEY");
    // for the dolphin animation and thought bubble pop up
    // document.body.style.overflowY = "hidden";
    document.getElementById('narratorshrimpspeechbubble').style.opacity = 1;
    document.getElementById('narratorshrimpwords').style.opacity = 1;
    document.getElementById('narratorshrimp').style.opacity = 1;

    setTimeout(function(){document.getElementById('narratorshrimpwords').innerHTML = "See the things in the box next to me? Those are called easter eggs."}, 3000);
    setTimeout(function(){document.getElementById('narratorshrimpwords').innerHTML = "They are all somewhere in this ocean, can you help me look for them?"}, 7000);
    setTimeout(function(){document.getElementById('narratorshrimpwords').innerHTML = "Try and find all of them to get a prize!"}, 11000);
    setTimeout(function(){document.getElementById('narratorshrimpwords').style.opacity = 0}, 15000);
    setTimeout(function(){document.getElementById('narratorshrimpspeechbubble').style.opacity = 0}, 15000);
    setTimeout(function(){document.getElementById('narratorshrimp').className = "narratorshrimpfadeaway"}, 15000);
    setTimeout(function(){document.getElementById('dolphin').style.opacity = 1}, 16000);
    setTimeout(function(){document.getElementById('dolphin').className = "fish1animation"}, 16000);
    setTimeout(function(){document.getElementById('fishthoughtbubble').style.opacity = 1}, 20000);
    setTimeout(function(){document.getElementById('dolphinwords').style.opacity = 1}, 20000);
    setTimeout(function(){document.getElementById('dolphinwords').innerHTML = "There's a lot of trash in the ocean, I don't like it" }, 24000);
    setTimeout(function(){document.getElementById('dolphinwords').innerHTML = "Sometimes I get caught in fishing nets and it hurts" }, 30000);
    setTimeout(function(){document.getElementById('dolphinwords').innerHTML = "There should really be less trash!" }, 34000);
    setTimeout(function(){document.getElementById('dolphinwords').style.opacity = 0}, 38000);
    setTimeout(function(){document.getElementById('fishthoughtbubble').style.opacity = 0}, 38000);
    setTimeout(function(){document.getElementById('dolphin').style.left = "1680px"}, 39000);
    setTimeout(function(){document.getElementById('dolphin').className = "dolphinswimaway"}, 39000);
    setTimeout(function(){document.getElementById('fishfish').style.opacity = .7;}, 40000);
    setTimeout(function(){document.getElementById('narratorshrimp').style.opacity = 1}, 45000);
    setTimeout(function(){document.getElementById('narratorshrimpwords').innerHTML = "Don't forget to look for the easter eggs! I see a few floating around"}, 45000);
    setTimeout(function(){document.getElementById('narratorshrimpwords').style.opacity = 1}, 45000);
    setTimeout(function(){document.getElementById('narratorshrimpspeechbubble').style.opacity = 1;}, 45000);
    setTimeout(function(){document.getElementById('specialbag').className = "specialbagfloat"}, 48000);
    setTimeout(function(){document.getElementById('narratorshrimpwords').style.opacity = 0}, 52000);
    setTimeout(function(){document.getElementById('narratorshrimpspeechbubble').style.opacity = 0}, 52000);

    // setTimeout(function(){document.body.style.overflowY = "visible"}, 70000);
    setTimeout(function(){document.getElementById('scrolldown').style.opacity = 1;}, 70000);

    dolphinrun = 1;

  }
  if(document.documentElement.scrollTop < 377){
    // hide anchor above water
    document.getElementById('depthmeter').style.opacity = 0;
    document.getElementById('rope').style.opacity = 0;
    document.getElementById('anchor').style.opacity = 0;
    document.getElementById('eastereggbox').style.opacity = 0;
    document.getElementById('eggbehind').style.opacity = 0;
    document.getElementById('bagcheck').style.opacity = 0;
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

var eggsfound = 0;

function whalefact() {
  document.getElementById('whale').className = "whaleanimation";
  document.getElementById('eggpopupwords').innerHTML = "Whales feel sick because you can find hosepipes, plastic pots and disposable bags in their stomachs";
  document.getElementById('eggpopup').style.opacity = .8;
  document.getElementById('eggpopupwords').style.opacity = 1;
  document.getElementById('eggwhale').style.opacity = 1;
  document.getElementById('whalecheck').style.opacity = 1;
  setTimeout(function(){document.getElementById('eggpopup').style.opacity = 0}, 7000);
  eggsfound = eggsfound + 1;
}

function subwayfact() {
  document.getElementById('eggpopupwords').innerHTML = "When trash flows out in currents, they collect together and create garbage patches";
    // needs to be changed to fact about the subway
    document.getElementById('eggpopup').style.opacity = .8;
    document.getElementById('eggpopupwords').style.opacity = 1;
    document.getElementById('eggsubwaycar').style.opacity = 1;
    document.getElementById('subwaycarcheck').style.opacity = 1;
    setTimeout(function(){document.getElementById('eggpopup').style.opacity = 0}, 7000);
    eggsfound = eggsfound + 1;
}

function fishfact() {
  document.getElementById('eggpopupwords').innerHTML = "Sometimes plastic in the ocean, called microplastic, is so small you can’t even see it!";
  document.getElementById('eggpopup').style.opacity = .8;
  document.getElementById('eggpopupwords').style.opacity = 1;
  document.getElementById('eggfish').style.opacity = 1;
  document.getElementById('fishcheck').style.opacity = 1;
  setTimeout(function(){document.getElementById('eggpopupwords').innerHTML = "When fishes eat the plastic, it goes up the food chain and we humans end up eating it too!"}, 7000);
  setTimeout(function(){document.getElementById('eggpopup').style.opacity = 0}, 14000);
  eggsfound = eggsfound + 1;
}

function shrimpfact() {
  document.getElementById('eggpopupwords').innerHTML = "If we don’t do anything, most seafood could be wiped out in less than 40 years";
  document.getElementById('eggpopup').style.opacity = .8;
  document.getElementById('eggpopupwords').style.opacity = 1;
  document.getElementById('eggshrimp').style.opacity = 1;
  document.getElementById('shrimpcheck').style.opacity = 1;
  setTimeout(function(){document.getElementById('eggpopupwords').innerHTML = "In 100 years, jellyfish may be the only wild seafood left!"}, 7000);
  setTimeout(function(){document.getElementById('eggpopup').style.opacity = 0}, 14000);
  eggsfound = eggsfound + 1;
}

function bottlefact() {
  document.getElementById('eggpopupwords').innerHTML = "The ocean’s currents move all around the world";
  document.getElementById('eggpopup').style.opacity = .8;
  document.getElementById('eggpopupwords').style.opacity = 1;;
  document.getElementById('eggbottle').style.opacity = 1;
  document.getElementById('bottlecheck').style.opacity = 1;
  setTimeout(function(){document.getElementById('eggpopupwords').innerHTML = "One current circles between New york and the Northwest coast of Africa often bringing trash with it."}, 5000);
  setTimeout(function(){document.getElementById('eggpopup').style.opacity = 0}, 12000);
  eggsfound = eggsfound + 1;
}

function bagfact() {
  document.getElementById('eggpopupwords').innerHTML = "New York City uses more than 10 billion single-use plastic bags a year!";
  document.getElementById('eggpopup').style.opacity = .8;
  document.getElementById('eggpopupwords').style.opacity = 1;
  document.getElementById('eggbag').style.opacity = 1;
  document.getElementById('bagcheck').style.opacity = 1;
  setTimeout(function(){document.getElementById('eggpopup').style.opacity = 0}, 7000);
  eggsfound = eggsfound + 1;
}
