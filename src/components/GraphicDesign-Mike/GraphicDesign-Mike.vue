<template>
  <div class="gd-main">
    <div class="header">
      <div class="gd-logo">
        <img src="../../images/logoWhite.png">
      </div>
      <div class="gd-head">
        <h1>Graphic Design</h1>
      </div>
      <div class="gd-bg">
        <img src="../../images/gd-example4.png">
      </div>
      <router-link v-bind:to="theHome"><div class="contact">
        <a href="/contact">Profile</a>
      </div></router-link>
    </div>
  
  <div class="profiles-container">
    <div class="owner-container">
      <div class="project-cover" v-for="designer in designers" v-bind:value="designer.user">
        <img class="owner-image" v-bind:src="designer.images[276]">
        <h3 class="owner-name">{{ designer.first_name }} {{ designer.last_name }}</h3>
        <p class="owner-location">{{ designer.occupation }}</p>
      </div>
    </div>
  
  </div>
  </div>
</template>

<script>
// import VueMasonry
// import Vue from 'vue'
// import VueMasonry from 'vue-masonry-css'

// Vue.use(VueMasonry);

export default {
  name: 'graphicDesign',
  data() {
    return {
      theHome: "/profilePage",
      designers: [],
      designer: ''
    }
  },

  methods: {
    userProfile: function() {
     this.$http.jsonp('https://api.behance.net/v2/users/arnd?api_key=htgPbzokEp6xie3Vjz3K0n4dttFREcq0')
        .then(response => {
          console.log('ok')
          this.designers.push(response.body.user);
          console.log(this.designers)
        });

     this.$http.jsonp('https://api.behance.net/v2/users/tyodi?api_key=htgPbzokEp6xie3Vjz3K0n4dttFREcq0')
        .then(response => {
          console.log('ok')
          this.designers.push(response.body.user);
          console.log(this.designers)
        });

    this.$http.jsonp('https://api.behance.net/v2/users/alexandrepietra?api_key=htgPbzokEp6xie3Vjz3K0n4dttFREcq0')
        .then(response => {
          console.log('ok')
          this.designers.push(response.body.user);
          console.log(this.designers)
        });

    this.$http.jsonp('https://api.behance.net/v2/users/craniodsgn?api_key=htgPbzokEp6xie3Vjz3K0n4dttFREcq0')
        .then(response => {
          console.log('ok')
          this.designers.push(response.body.user);
          console.log(this.designers)
        });

    this.$http.jsonp('https://api.behance.net/v2/users/oberhaeuser?api_key=htgPbzokEp6xie3Vjz3K0n4dttFREcq0')
        .then(response => {
          console.log('ok')
          this.designers.push(response.body.user);
          console.log(this.designers)
        });

    this.$http.jsonp('https://api.behance.net/v2/users/adobedesignjimoto?api_key=htgPbzokEp6xie3Vjz3K0n4dttFREcq0')
        .then(response => {
          console.log('ok')
          this.designers.push(response.body.user);
          console.log(this.designers)
        });
        
  },
 
},
created: function() {

    this.userProfile();
  }
// created: function() {

//       this.userIds();
//     }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/*CUSTOM CSS FROM HERE*/

.gd-main {
  background-color: #252525;
  height: auto;
}

.header .gd-logo {
  position: absolute;
  left: 0;
}

.gd-logo img {
  width: 20vw;
  margin: 60px 0 0 30px;
}

.gd-title {
  font-family: 'Orbitron', sans-serif;
}

.gd-bg {
  width: 100vw;
  height: 400px;
}

.header {
  width: 100vw;
  height: 400px;
  background-size: 100%;
  margin-bottom: 50px;
}

.header .contact {
  position: absolute;
  right: 0;
  margin: -300px 80px 0 0;
  font-size: 1.2vw;
  font-family: 'Anonymous Pro', monospace;
  letter-spacing: 1px;
}

.gd-head h1 {
  position: absolute;
  margin-left: 37%;
  margin-top: 170px;
  font-family: 'Orbitron', sans-serif;
  font-size: 3vw;
  color: #fff;
}

.contact a {
  color: #FFF;
}

a:hover {
  text-decoration: none;
}

.profiles-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}

.owner-container {
  /* flex: 1 */
}

.project-cover {
    border-radius: 6px 6px 3px 3px;
    box-sizing: border-box;
    color: #191919;
    float: left;
    margin: 0px 20px 20px 60px;
    min-height: 400px;
    position: relative;
    text-align: left;
    width: 300px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(25,25,25,0.2);
    cursor: pointer;
    display: flex;
    flex-direction: column;
}

.owner-image {
    width: 100%;
    height: 250px;
}
.owner-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #191919;
    display: inline-block;
    max-width: 100%;
    position: relative;
    top: -1px;
    vertical-align: middle;
    text-align: center;
}

.owner-location {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #191919;
    display: inline-block;
    max-width: 100%;
    position: relative;
    top: -1px;
    vertical-align: middle;
    text-align: center;
}
</style>
