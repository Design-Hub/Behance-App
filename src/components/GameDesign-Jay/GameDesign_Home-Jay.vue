<template>
  <div>
    <!-- Disco background-->
    <iframe class="disco-background" v-bind:src="discoBackground_iframeURL"> </iframe>
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

      <!-- Disco Ball-->
      <iframe class="disco-ball" v-bind:src="discoBall_iframeURL"></iframe>

      <!--Page intro-->
      <div class="page-intro">
        <h1>We are game if you are!</h1>
        <p>a fun loving creative team filled with a variety of skills</p>
      </div>

      <!-- Designers -->
      <div class="designers">
        <div v-for="designer in designers">
          <router-link v-bind:to="'/game-design-designer/' + designer.webID">
            <h1 v-on:mouseover="getDesignerProfilePicture" v-on:click="getDesigner" v-bind:id="designer.id">{{ designer.fullName }}</h1>
            <img v-on:mouseover="getDesignerProfilePicture" v-bind:src="designer.characterImage" v-on:click="getDesigner" v-bind:id="designer.id">
          </router-link>
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
      discoBall_iframeURL: 'https://jayabey.github.io/projects/DiscoBall/index.html',
      discoBackground_iframeURL: 'https://jayabey.github.io/projects/DiscoBackground/',
      designers: [
        {
          webID: "ducnguyenmai",
          id: 14056285,
          characterImage: require('../../images/jay/dustinNguyen.png'),
          fullName: 'Dustin Nguyen',
        },
        {
          webID: "atokaruk",
          id: 3949737,
          characterImage: require('../../images/jay/alexandraTokaryuk.png'),
          fullName: 'Alexandra Tokaryuk'
        },
        {
          webID: "Aleksey_Bazik",
          id: 9876953,
          characterImage: require('../../images/jay/alekseyBazik.png'),
          fullName: 'Aleksey Bazik'
        }
      ],

      behanceDesignerInfo: [],
      selectedDesigner: '',
      selectedDesignerID: '',
      hoveredDesigner: ''
    }
  },

  created: function() {
    for (var i = 0; i < this.designers.length; i++) {
      //Alternative API key: fBD5wQDeHCclck9MRpwifajnEDIz4KzA
      this.$http.jsonp('https://api.behance.net/v2/users/' + this.designers[i].webID + '?&api_key=gUWR7I82EI6YUyylsJ4UwaratHObuX6Y').then(response => {
        this.behanceDesignerInfo.push(response.body);
      });
    }
  },

  methods: {
    getDesigner: function(evt) {
      for (var i = 0; i < this.behanceDesignerInfo.length; i++) {
        if (this.behanceDesignerInfo[i].user.id == evt.target.id) {
          this.selectedDesigner = this.behanceDesignerInfo[i];
          this.selectedDesignerID = this.selectedDesigner.user.username;
        }
      }
    },

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

.contact a {
  color: #fff;
}

a:hover {
  text-decoration: none;
}


/*PAGE INTRO*/

.page-intro {
  margin-top: 7%;
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
  margin-top: 3%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-family: 'Anonymous Pro', monospace;
}

.designers div {
  padding: 0px 100px 0px 100px;
}

.designers h1 {
  font-size: 1.5vw;
  color: white;
}
.designers img {
  height: 500px;
  padding-top: 50px;
}


/*REPONSIVE DESIGN */

@media screen and (max-width:640px) {
  /*header*/
  .logo img {
    width: 50vw;
  }

  .header .contact {
    font-size: 2vw;
  }
  .contact:hover {
    font-size: 2.2vw;
  }
  /*disco ball*/
  .container .disco-ball {
    margin-top: 20%;
    margin-left: 4%;
  }
  /*page intro*/
  .page-intro {
    padding-left: 0px;
  }
  .page-intro h1 {
    font-size: 43px;
    text-align: center;
  }
  .page-intro p {
    font-size: 17px;
    text-align: center;
  }

  /*designers*/
  .designers div {
    padding: 40px 30px 0px 30px;
  }
  .designers img {
    height: 350px;
    padding-top: 30px;
  }
  .designers h1 {
    font-size: 3.5vw;
  }
}
</style>