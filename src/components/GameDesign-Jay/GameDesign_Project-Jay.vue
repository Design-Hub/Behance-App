<template>
  <div>

    <!-- Disco background-->
    <iframe class="disco-background" v-bind:src="discoBackground_iframeURL"> </iframe>

    <div class="container">
      <!-- Header -->
      <div class="header">
        <div class="logo">
          <img src="../../images/logoWhite.png">
        </div>
        <div class="contact">
          <a href="/contact">CONTACT</a>
        </div>
      </div>

      <!-- Disco Ball-->
      <iframe v-bind:src="discoBall_iframeURL"></iframe>

      <!--Back button-->
      <div class="back-button">
        <a href="/game-design-designer">
          <!--fontawsome back button icon - copyright to "http://fontawesome.io/icon/chevron-left/"-->
          <i class="fa fa-chevron-left" aria-hidden="true"></i>&nbsp; back
        </a>
      </div>

      <!--Designer details-->
      <div class="selected-designer" v-for="info in selectedProject.owners">
        <div class="selected-designer-info">
          {{ info.display_name }}
        </div>
        <div class="selected-designer-character" v-bind="getCharacterImage(info)">
          <img v-bind:src="featuredDesigner.characterImage">
        </div>
      </div>

      <!-- Selected Project details-->
      <div class="selected-project">
        <h1> {{ selectedProject.name }} </h1>
        <div> {{ selectedProject.description }} </div>
        <br/>
        <div class="projectStats">
          <div><img src="../../images/jay/behanceViewsIcon.png"> {{ selectedProject.stats.views}} </div>
          <div><img src="../../images/jay/behanceLikesIcon.png"> {{ selectedProject.stats.appreciations }} </div>
          <div><img src="../../images/jay/behanceCommentsIcon.png"> {{ selectedProject.stats.comments}} </div>
        </div>

        <div v-for="module in selectedProject.modules">
          <br/>
          <h2>{{ module.text_plain }}</h2>
          <img v-bind:src="module.src">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'gameDesignProject',
  props: ['selectedProjectID'],
  data() {
    return {
      discoBall_iframeURL: 'https://jayabey.github.io/projects/DiscoBall/index.html',
      discoBackground_iframeURL: 'https://jayabey.github.io/projects/DiscoBackground/',
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

      selectedProject: [],
      featuredDesigner: ''
    }
  },

  created: function() {
    console.log("Now on the selected project page");
    console.log(this.selectedProjectID);
    this.$http.jsonp('https://api.behance.net/v2/projects/' + this.selectedProjectID + '?&api_key=fBD5wQDeHCclck9MRpwifajnEDIz4KzA').then(response => {
      this.selectedProject = response.body.project;
    });
  },

  methods: {
    getCharacterImage: function(info) {
      for (var i = 0; i < this.designers.length; i++) {
        if (info.display_name == this.designers[i].fullName) {
          this.featuredDesigner = this.designers[i];
        }
      }
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



/*DISCO BACKGROUND*/

.disco-background {
  z-index: -1;
  position: absolute;
  left: 0;
  width: 100vw;
  height: 100vh;
}



/*CONTAINER*/

.container {
  /*overflow: scroll;*/
  z-index: 999;
  position: absolute;
  width: 100vw;
  height: 100vh;
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
  color: white;
}

a:hover {
  text-decoration: none;
}



/*BACK button*/

.back-button {
  position: absolute;
  left: 20%;
  margin-top: 6%;
  font-size: 1vw;
}

.back-button a:hover {
  font-size: 1.5vw;
}



/*DESIGNER*/

.selected-designer {
  position: absolute;
  margin-left: 5%;
  color: white;
  font-size: 25px;
  font-family: 'Anonymous Pro', monospace;
}

.selected-designer .selected-designer-info {
  margin-top: 90%;
}

.selected-designer .selected-designer-character {
  margin-top: 30%;
}

.selected-designer-character img {
  height: 400px;
}



/*PROJECT*/

.selected-project {
  position: absolute;
  top: 30%;
  left: 30%;
  font-family: 'Anonymous Pro', monospace;
  color: white;
  font-size: 20px;

  overflow: auto;
  overflow-x: hidden;
  height: 670px;
  width: 1000px;
}

.selected-project::-webkit-scrollbar {
  display: none;
}

.selected-project h1 {
  font-size: 40px;
}

.projectStats {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.projectStats div {
  padding-right: 30px;
}

.projectStats img {
  width: 50px;
}
</style>