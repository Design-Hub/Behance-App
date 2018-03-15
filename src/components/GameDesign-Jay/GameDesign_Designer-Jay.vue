<template>
  <div class="container">

    <!-- Header -->
    <div class="header">
      <div class="logo">
        <a href="/"><img src="../../images/logoWhite.png"></a>
      </div>
      <div class="contact">
        <a href="/contact">CONTACT</a>
      </div>
    </div>

    <!--Back button-->
    <div class="back-button">
      <a href="/gameDesignHome">
        <!--fontawsome back button icon - copyright to "http://fontawesome.io/icon/chevron-left/"-->
        <i class="fa fa-chevron-left" aria-hidden="true"></i>&nbsp; back
      </a>
    </div>

    <!--Designer details-->
    <div class="selected-designer">
      <div class="selected-designer-info">

      </div>
      <div class="selected-designer-character">
        <img src="">
      </div>
    </div>

    <!--Designer's list of projects-->
    <div class="designer-project-list">
      <div v-for="project in projects">
        <a href="/gameDesignProjects">
          <h1>{{ project.name }}</h1>
          <img v-bind:src="project.covers[202]">
        </a>
      </div>
    </div>

  </div>
</template>

<script>
// import GameDesignHome from './gameDesignHome'

export default {
  name: 'gameDesignDesigner',
  props: ['selectedDesignerprojects'],
  data() {
    return {
      projects: [],
    }
  },

  // components: {
  //   GameDesignHome
  // },

  created: function() {
    console.log("selected designer page");
    alert(this.selectedDesignerprojects);
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











/*BACK button*/

.back-button {
  position: absolute;
  left: 12%;
  margin-top: 17%;
  font-size: 1vw;
}

.back-button a:hover {
  font-size: 1.5vw;
}







/*PROJECTS*/

.designer-project-list {
  display: flex;
  /*align-items: flex-end;*/
  justify-content: center;
  font-family: 'Anonymous Pro', monospace;
  color: white;
  font-size: 30px;
  top: 40%;
  left: 40%;
  position: absolute;
  width: 60vw;
  height: 70vh;
  padding: 0 30px 0 0;
}
</style>