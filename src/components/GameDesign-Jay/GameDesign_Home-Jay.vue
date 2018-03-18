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
      <div v-for="designer in designers">
        <router-link v-bind:to="'/gameDesignDesigner/' + selectedDesignerprojects">
          <h1 v-on:click="getDesignerProjects" v-bind:id="designer.id">{{ designer.fullName }}</h1>
          <img v-bind:src="designer.characterImage" v-on:click="getDesignerProjects" v-bind:id="designer.id">
        </router-link>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  name: 'gameDesignHome',
  props: ['selectedDesignerprojects'],

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

      behanceDesignerInfo: [],
      selectedDesigner: '',
      selectedDesignerprojects: [],
    }
  },

  created: function() {
    for (var i = 0; i < this.designers.length; i++) {
      this.$http.jsonp('https://api.behance.net/v2/users/' + this.designers[i].webID + '?&api_key=fBD5wQDeHCclck9MRpwifajnEDIz4KzA').then(response => {
        this.behanceDesignerInfo.push(response.body);
      });
    }
  },

  methods: {
    getDesignerProjects: function(evt) {
      for (var i = 0; i < this.behanceDesignerInfo.length; i++) {
        if (this.behanceDesignerInfo[i].user.id == evt.target.id) {
          this.selectedDesigner = this.behanceDesignerInfo[i];
          console.log("yes!");
        }
      }
      this.$http.jsonp('https://api.behance.net/v2/users/' + this.selectedDesigner.user.username + '/projects?&api_key=fBD5wQDeHCclck9MRpwifajnEDIz4KzA').then(response => {
        this.selectedDesignerprojects.push(response.body);
      });
      // this.$emit('getDesignerProjects', evt.target.id);
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
  font-size: 1.5vw;
  color: white;
  padding-left: 150px;
  padding-bottom: 40px;
}

.designers h1:hover {
  font-size: 2vw;
}

.designers img {
  height: 400px;
}
</style>