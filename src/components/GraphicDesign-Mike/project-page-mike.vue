<template>
    <div class="projectPage">
      <div class="header">
        <h5>project page</h5>
      <router-link v-bind:to="Home"><div class="gd-logo">
        <img src="../../images/logoWhite.png">
      </div></router-link>
      <div class="gd-head">
        <h1>Graphic Design</h1>
      </div>
      <div class="gd-bg">
        <img src="../../images/gd-example4.png">
      </div>
      <router-link v-bind:to="GDHome"><div class="contact">
        <a href="/">Back</a>
      </div></router-link>
    </div>
    
    <div class="project-container">
        <div class="project-viewer">
                <!-- <img class="project-covers" v-bind:src="work.covers[404]"> -->
        </div>
    </div>

    </div>
    </template>

    <script>

export default {
  name: 'projectPage',
  props: ['id'],
  data() {
    return {
      GDHome: "/GraphicDesign",
      Home: "/",
      designers: [],
      designer: '',
      works: [],
      work: ''
    }
  },
  // FUNCTION TO GET USER INFO //

  methods: {
    userProfile: function(username) {
     this.$http.jsonp('https://api.behance.net/v2/users/'+username+'?api_key=htgPbzokEp6xie3Vjz3K0n4dttFREcq0')
        .then(response => {
          console.log('info')
          this.designers.push(response.body.user);
          console.log(this.designers)
        });
    },

// FUNCTION TO GET USER PROFILE IMAGES //

     userProjects: function(username) {
    this.$http.jsonp('https://api.behance.net/v2/users/'+username+'/projects?api_key=htgPbzokEp6xie3Vjz3K0n4dttFREcq0')
        .then(response => {
          console.log('project')
          this.works=response.body.projects;
          console.log(this.works)
        });
     }
},
  // },
    created: 
    function() {
      // console.log(this.username)
    this.userProfile(this.username);
    this.userProjects(this.username);
  },
  //   function() {
  //   console.log("work" + this.works);
  // this.userProjects(this.username);
  //   }
}

  </script>

  <style scoped>

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
  margin: -290px 80px 0 0;
  font-size: 1.2vw;
  font-family: 'Anonymous Pro', monospace;
  letter-spacing: 1px;
}

.gd-head h1 {
  position: absolute;
  margin-left: 37%;
  margin-top: 140px;
  font-family: 'Orbitron', sans-serif;
  font-size: 3vw;
  text-align: center;
  color: #fff;
}

.gd-head h2 {
  position: absolute;
  margin-left: 31%;
  margin-top: 250px;
  font-family: 'Anonymous Pro', monospace;
  font-size: 1.5vw;
  text-align: center;
  color: #fff;
}

.contact a {
  color: #FFF;
}

a:hover {
  text-decoration: none;
}

.projectPage {
  width: 100vw;
  height: auto;
  background-color: #252525;
}

.project-container {
  width: 1600px;
  height: auto;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.project-viewer {
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
}
  </style>