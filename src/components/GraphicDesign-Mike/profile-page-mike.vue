<template>
    <div class="profilePage">
      <div class="header">
      <router-link v-bind:to="Home"><div class="gd-logo">
        <img src="../../images/logoWhite.png">
      </div></router-link>
      <div class="gd-head">
        <h1>Graphic Design</h1>
      </div>
      <div class="gd-bg">
        <img src="../../images/mike/gd-example4.png">
      </div>
    </div>
     <router-link v-bind:to="GDHome"><div class="contact">
        <a href="/"><i class="fas fa-arrow-left"></i> Back</a>
      </div></router-link>

    <div class="profiles-container">
      <div class="images-container">
     
        <masonry
          :cols="{default: 3, 1600: 2, 1000: 1, 700: 1}"
          :gutter="{default: '15px', 700: '15px'}"
          >
          <div class="projects-masonry" v-for="work in works" v-bind:value="work.projects">
            <router-link v-bind:to="'project-details/' + work.id">
            <img class="project-covers" v-bind:src="work.covers[404]">
            </router-link>
          </div>
          
        </masonry>

      </div>
      
      <div class="user-info" v-for="designer in designers" v-bind:value="designer.user">
        <img class="user-image" v-bind:src="designer.images[276]">
        <h3 class="user-name">{{ designer.first_name }} {{ designer.last_name }}</h3>
        <p class="user-features">{{ designer.location }}</p>
        <p class="user-occupation">{{ designer.occupation }}</p>
        <p class="user-stats"><i class="fas fa-thumbs-up"></i> Likes {{ designer.stats.appreciations }}</p>
        <p class="user-stats"><i class="fas fa-star"></i> Followers {{ designer.stats.followers }}</p>
        <p class="user-stats"><i class="fas fa-eye"></i> Views {{ designer.stats.views }}</p>
        <a v-bind:href="'' + designer.url" class="user-behance" target="_blank">{{ designer.url }}</a>
        <a v-bind:href="'http://' + designer.website" class="user-website" target="_blank">{{ designer.website }}</a>
        <div class="user-sociallinks"></div>
      </div>
    </div>

      </div>

</template>

<script>

export default {
  name: 'profilePage',
  props: ['username'],
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
          console.log('profile')
          this.works=response.body.projects;
          console.log(this.works)
        });
     },

     // FUNCTION TO GET USER PROJECT //

     userProjects: function(id) {
    this.$http.jsonp('https://api.behance.net/v2/users/'+id+'/projects?api_key=htgPbzokEp6xie3Vjz3K0n4dttFREcq0')
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
    this.userProfile(this.username);
    this.userProjects(this.username);
  },
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
  float: right;
  margin-right: 50px;
  margin-bottom: 20px;
  color: #FFF;
}

a:hover {
  text-decoration: none;
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

.user-image {
    width: 100%;
    height: 250px;
}
.user-name {
    font-family: 'Patua One', cursive;
    font-size: 1.2vw;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 10px;
    white-space: nowrap;
    color: #191919;
    display: inline-block;
    max-width: 100%;
    position: relative;
    top: -1px;
    vertical-align: middle;
    text-align: center;
}

.user-occupation {
    font-family: 'Anonymous Pro', monospace;
    font-size: 0.7vw;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 20px;
    white-space: nowrap;
    color: #191919;
    display: inline-block;
    max-width: 100%;
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-left: 10px;
    text-align: center;
}

.user-stats {
    font-family: 'Patua One', cursive;
    font-size: 0.8vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
    color: #191919;
    display: inline-block;
    max-width: 100%;
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-left: 20px;
}

.user-behance {
  margin-top: 10px;
  margin-bottom: 20px;
  cursor: pointer;
}

.user-website {
  cursor: pointer;
}

.profilePage {
  width: 100vw;
  height: auto;
  background-color: #252525;
}

.projects-masonry {
 
}

.profiles-container {
  width: 1600px;
  height: auto;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.user-info {
  width: 350px;
  height: auto;
  border-left-style: solid;
  border-width: 1px;
  border-color: #000;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
}

.images-container {
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
}

.link {
  color: black;
}
</style>
