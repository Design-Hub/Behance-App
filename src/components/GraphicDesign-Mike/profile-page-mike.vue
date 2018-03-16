<template>
    <div class="profilePage">
      <p>This is the profile page</p>
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
        <a href="/">Back</a>
      </div></router-link>
    </div>

    <div class="profiles-container">
      <div class="projects-masonry">

      </div>

      <div class="user-info" v-for="designer in designers" v-bind:value="designer.user">
        <img class="user-image" v-bind:src="designer.images[276]">
        <h3 class="user-name">{{ designer.first_name }} {{ designer.last_name }}</h3>
        <p class="user-features">{{ designer.location }}</p>
        <p class="user-occupation">{{ designer.occupation }}</p>
        <p class="user-stats"><i class="fas fa-thumbs-up"></i> Likes {{ designer.stats.appreciations }}</p>
        <p class="user-stats"><i class="fas fa-star"></i> Followers {{ designer.stats.followers }}</p>
        <p class="user-stats"><i class="fas fa-eye"></i> Views {{ designer.stats.views }}</p>
        <p class="user-website">{{ designer.website }}</p>
      </div>
    </div>

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
      theHome: "/GraphicDesign",
      designers: [],
      designer: ''
      // works: [],
      // work: ''
    }
  },

  methods: {
    userProfile: function(username) {
     this.$http.jsonp('https://api.behance.net/v2/users/'+username+'?api_key=htgPbzokEp6xie3Vjz3K0n4dttFREcq0')
        .then(response => {
          console.log('ok')
          this.designers.push(response.body.user);
          console.log(this.designers)
        });
    //  userProjects: function() {
    // this.$http.jsonp('https://api.behance.net/v2/users/adobedesignjimoto/projects?api_key=htgPbzokEp6xie3Vjz3K0n4dttFREcq0')
    //     .then(response => {
    //       console.log('ok')
    //       this.works.push(response.body.user);
    //       console.log(this.works)
    //     });
  
},
  },
    created: function() {
      // console.log(this.username)
    this.userProfile(this.username);
  },

  // created: function() {

  // this.userProjects();
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

.owner-container {
   /*flex: 1 */
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

.user-location {
    font-family: 'Anonymous Pro', monospace;
    font-size: 0.7vw;
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
    /*text-align: center;*/
}

.profilePage {
  width: 100vw;
  height: 100vh;
  background-color: #252525;
}

.projects-container {
  width: 20vw;
  height: auto;
  border-left-style: solid;
  border-width: 1px;
  border-color: #000;
}

.projects-masonry {
  width: 80vw;
  height: auto;
}

.profiles-container {
  width: 1600px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
}

.user-info {
  width: 20vw;
  height: 100vh;
  border-left-style: solid;
  border-width: 1px;
  border-color: #000;
  display: flex;
  flex-direction: column;
}
</style>
