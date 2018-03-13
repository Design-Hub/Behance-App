<template>
  <div class="container">

    <div class="header">
      <div class="logo">
        <a href="/"><img src="../../images/logoWhite.png"></a>
      </div>
      <div class="contact">
        <a href="/contact">CONTACT</a>
      </div>
    </div>

    <!--Page intro-->
    <div class="page-intro">
      <h1>We are game if you are!</h1>
      <p>a fun loving creative team filled with a variety of skills</p>
    </div>

    <!-- Designers -->
    <div class="designers">
      <div v-for="designer in designers" class="designer">
        <h1>
          <a href="/gameDesignDesigner">{{ designer.name }}</a>
        </h1>
        <div class="designer-character">
          <a href="/gameDesignDesigner">
            <img v-bind:src="designer.imageSrc">
          </a>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'gameDesignHome',
  data() {
    return {
      designers: [{
        name: "James Gordon",
        imageSrc: "../../images/jay/jamesGordon.png"
      },
      {
        name: "Lisa Smith",
        imageSrc: "../../images/jay/lisaSmith.png"
      },
      {
        name: "Derek Shephard",
        imageSrc: "../../images/jay/derekShephard.png"
    }]

    }
  }

}
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












/*PAGE INTRO*/

.page-intro {
  margin-top: 15%;
  color: white;
  text-align: left;
  padding-left: 50px;
  font-family: 'Anonymous Pro', monospace;
}

.page-intro h1 {
  font-size: 65px;
}

.page-intro p {
  font-size: 25px;
}






/*DESIGNERS*/

.designers {
  margin-top: 8%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-family: 'Anonymous Pro', monospace;
}

.designers h1 {
  padding-left: 200px;
  padding-bottom: 40px;
  font-size: 1.5vw;
}

.designers h1:hover {
  font-size: 2vw;
}

.designers img {
  height: 400px;
}
</style>