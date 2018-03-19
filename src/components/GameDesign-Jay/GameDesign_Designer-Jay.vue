<template>
  <div class="container">

    <!--Header -->
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
      <a href="/game-design-home">
        <!--fontawsome back button icon - copyright to "http://fontawesome.io/icon/chevron-left/"-->
        <i class="fa fa-chevron-left" aria-hidden="true"></i>&nbsp; back
      </a>
    </div>

    <!--Designer details-->
    <div class="selected-designer">
      <div class="selected-designer-info">
        {{ featuredDesigner.fullName}}
      </div>
      <div class="selected-designer-character">
        <img v-bind:src="featuredDesigner.characterImage">
      </div>
    </div>

    <!--Designer's list of projects-->
    <div class="designer-project-list">
      <div v-for="project in projects">
        <router-link v-bind:to="'/game-design-projects/' + project.id">
        <h1>{{ project.name }}</h1>
        <img v-bind:src="project.covers[202]">
               </router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'gameDesignDesigner',
  props: ['selectedDesignerID'],
  data() {
    return {
      designers: [
        {
          webID: "ducnguyenmai",
          id: 14056285,
          characterImage: require('../../images/jay/jamesGordon.png'),
          fullName: 'Dustin Nguyen',
        },
        {
          webID: "atokaruk",
          id: 3949737,
          characterImage: require('../../images/jay/lisaSmith.png'),
          fullName: 'Alexandra Tokaryuk'
        },
        {
          webID: "Aleksey_Bazik",
          id: 9876953,
          characterImage: require('../../images/jay/derekShephard.png'),
          fullName: 'Aleksey Bazik'
        }
      ],

      projects: [],
      featuredDesigner: ''
    }
  },

  created: function() {
    console.log("Now on the selected designer page");
    console.log(this.selectedDesignerID);

    this.$http.jsonp('https://api.behance.net/v2/users/' + this.selectedDesignerID + '/projects?&api_key=fBD5wQDeHCclck9MRpwifajnEDIz4KzA').then(response => {
      // this.projects.push(response.body);
      this.projects = response.body.projects;
    });

    for (var i = 0; i < this.designers.length; i++) {
      if (this.selectedDesignerID == this.designers[i].webID) {
        this.featuredDesigner = this.designers[i];
      }
    }
  },

  methods: {

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
*{
  box-sizing:border-box;
}

/*CONTAINER*/

.container {
  /*background: url("../../images/homeBackground.png") no-repeat fixed center;*/
  width: 100vw;
  height: 100vw;
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

/*DESIGNER*/

.selected-designer-info {
    margin-top: 240%;
}

.selected-designer {
  position: absolute;
  margin-left: 5%;
  color: white;
  font-size: 25px;
  font-family: 'Anonymous Pro', monospace;
}

.selected-designer .selected-designer-character {
  margin-top: 30%;
}

.selected-designer-character img {
  height: 400px;
}

/*PROJECTS*/

.designer-project-list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: 'Anonymous Pro', monospace;
  color: white;
  font-size: 20px;
  top: 40%;
  left: 30%;
  position: absolute;
  height: 60vw;
}
</style>