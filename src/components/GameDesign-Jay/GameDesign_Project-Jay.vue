<template>
  <div class="container">

    <div class="header">
      <div class="logo">
        <img src="../../images/logoWhite.png">
      </div>
      <div class="contact">
        <a href="/contact">CONTACT</a>
      </div>
    </div>

    <!-- Disco ball -->
    <div class="hanger"></div>
    <div class="discoBallLight"></div>
    <div class="discoBall">
      <div class="discoBallMiddle"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'gameDesign',
  data() {
    return {

    }
  },

  // methods: {
    mounted: function(){
/*DISCO BALL*/
// discoball from https://codepen.io/msaetre/pen/fDuzC
var t = 1;
var radius = 50;
var squareSize = 6.5;
var prec = 19.55;
var fuzzy = 0.001;
var inc = (Math.PI-this.fuzzy)/this.prec;
var discoBall = document.querySelector(".discoBall");

for(this.t=this.fuzzy; this.t<Math.PI; this.t+= this.inc) {
  var z = this.radius * Math.cos(this.t);
  var currentRadius = Math.abs((this.radius * Math.cos(0) * Math.sin(this.t)) - (this.radius * Math.cos(Math.PI) * Math.sin(this.t))) / 2.5;
  var circumference = Math.abs(2 * Math.PI * this.currentRadius);
  var squaresThatFit = Math.floor(this.circumference / this.squareSize);
  var angleInc = (Math.PI*2- this.fuzzy) / this.squaresThatFit;
  for(var i= this.angleInc/2+ this.fuzzy; i<(Math.PI*2); i+= this.angleInc) {
    var square = document.createElement("div");
    var squareTile = document.createElement("div");
    this.squareTile.style.width = squareSize + "px";
    this.squareTile.style.height = squareSize + "px";
    this.squareTile.style.transformOrigin = "0 0 0";
    this.squareTile.style.webkitTransformOrigin = "0 0 0";
    this.squareTile.style.webkitTransform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
    this.squareTile.style.transform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
    if((this.t>1.3 && this.t<1.9) || (this.t<-1.3 && this.t>-1.9)) {
      this.squareTile.style.backgroundColor = randomColor("bright");
    } else {
      this.squareTile.style.backgroundColor = randomColor("any");
    }
    this.square.appendChild(this.squareTile);
    this.square.className = "square";
    this.squareTile.style.webkitAnimation = "reflect 2s linear infinite";
    this.squareTile.style.webkitAnimationDelay = String(randomNumber(0,20)/10) + "s";
    this.squareTile.style.animation = "reflect 2s linear infinite";
    this.squareTile.style.animationDelay = String(randomNumber(0,20)/10) + "s";
    this.squareTile.style.backfaceVisibility = "hidden";
    var x = this.radius * Math.cos(i) * Math.sin(this.t);
    var y = this.radius * Math.sin(i) * Math.sin(this.t);
    this.square.style.webkitTransform = "translateX(" + Math.ceil(x) + "px) translateY(" + y + "px) translateZ(" + z + "px)";
    this.square.style.transform = "translateX(" + x + "px) translateY(" + y + "px) translateZ(" + z + "px)";
    this.discoBall.appendChild(this.square);
  }
}

function randomColor(type) {
  var c;
  if(type == "bright") {
    c = randomNumber(130, 255);
  } else {
    c = randomNumber(110, 190);
  }
  return "rgb(" + 255 + "," + 205 + "," + 30 + ")";
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  }

}
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*Css Reset*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block
}

body {
  line-height: 1
}

ol,
ul {
  list-style: none
}

blockquote,
q {
  quotes: none
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none
}

table {
  border-collapse: collapse;
  border-spacing: 0
}




/*CONTAINER*/

.container {
  /*background: url("../../images/homeBackground.png") no-repeat fixed center;*/
  width: 100vw;
  height: 100vh;
  background-size: 100%;

  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate3d(0, 0, 0);
}



/*HEADER*/

.header .logo {
  position: absolute;
  left: 0;
}

.logo img {
  width: 25vw;
  margin: 30px 0 0 30px;
}

.header .contact {
  position: absolute;
  right: 0;
  margin: 80px 80px 0 0;
  font-size: 1vw;
  font-family: 'Anonymous Pro', monospace;
  letter-spacing: 1px;
}

.contact:hover {
  font-size: 1.1vw;
}

a {
  color: #fff;
}

a:hover {
  text-decoration: none;
}


/*DISCO BALL*/
/*Hanger*/
.hanger {
  background: #eee;
  width: 1px;
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
  height: 100px;
  position: absolute;
  top: 0;
  left: 50%;
}

@-webkit-keyframes rotateDiscoBall {
    0% {-webkit-transform: rotateX(90deg) rotateZ(0deg) rotate(0deg); }
    100% {-webkit-transform: rotateX(90deg) rotateZ(360deg) rotate(0deg); }
}

@keyframes rotateDiscoBall {
    0% {transform: rotateX(90deg) rotateZ(0deg) rotate(0deg); }
    100% {transform: rotateX(90deg) rotateZ(360deg) rotate(0deg); }
}

@-webkit-keyframes rotateDiscoBallMiddle {
    0% {-webkit-transform: rotateX(90deg) rotateY(0deg) rotate(0deg); }
    100% {-webkit-transform: rotateX(90deg) rotateY(-360deg) rotate(0deg); }
}

@keyframes rotateDiscoBallMiddle {
    0% {transform: rotateX(90deg) rotateY(0deg) rotate(0deg); }
    100% {transform: rotateX(90deg) rotateY(-360deg) rotate(0deg); }
}

@-webkit-keyframes reflect {
    0% {-webkit-filter: brightness(60%); -webkit-filter: hue-rotate(0);}
    50% {-webkit-filter: brightness(120%);}  
    100% {-webkit-filter: brightness(90%); -webkit-filter: hue-rotate(360deg);}  
}

@keyframes reflect {
    0% {opacity: 1; -webkit-filter: hue-rotate(0);}
    50% {opacity: 0.4;}  
    100% {opacity: 1; -webkit-filter: hue-rotate(360deg);}  
}
.discoBall {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 100px;
  left: 50%;
  margin-left: -50px;
  -webkit-animation: rotateDiscoBall 18s linear infinite;
  animation: rotateDiscoBall 18s linear infinite;
  color: #fff;
}
.discoBallLight {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 100px;
  left: 50%;
  margin-left: -50px; 
  border-radius: 100%;
  background-color: #feffb2; 
  opacity: 0.6;
  -webkit-filter: blur(40px);
}
.square {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;	
  position: absolute;
  top: 100px;
  left: 50px;
  width: 6px;
  height: 6px;
  position: absolute;
  transform: rotateX(90deg) rotateY(0deg) translateZ(0px);
}
.discoBallMiddle { 
  height: 100%;
  border-radius: 100%;
  background-color: #111;
  position: absolute;
  background: -webkit-linear-gradient(top, #111, #333);
  background: -moz-linear-gradient(top, #111, #333);
  background: linear-gradient(top, #111, #333);
  -webkit-animation: rotateDiscoBallMiddle 18s linear infinite;
  animation: rotateDiscoBallMiddle 18s linear infinite;
}
</style>