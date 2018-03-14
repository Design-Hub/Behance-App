<template>
  <div class="gd-main">
    <p>This is the graphic design page</p>
    <div class="header">
      <div class="gd-logo">
        <img src="../../images/logoWhite.png">
      </div>
      <div class="gd-head">
        <h1>Graphic Design</h1>
      </div>
      <div class="gd-bg">
        <img src="../../images/graphic-art-banner.png">
      </div>
      <router-link v-bind:to="theHome"><div class="contact">
        <a href="/contact">Profile</a>
      </div></router-link>
    </div>
  
  <div value="profile" v-for="designer in designers" v-bind:value="designer.user">
    <h1>{{ designer.first_name }}</h1>
    <h2>{{ designer.city }}</h2>
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

        this.$http.jsonp('https://api.behance.net/v2/users/akatre?api_key=htgPbzokEp6xie3Vjz3K0n4dttFREcq0')
        .then(response => {
          console.log('ok')
          this.usertwo = response.body.user;
          console.log(this.usertwo)
        });
        console.log (this.designerIds)
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
.gd-main {
  background-color: #FFF;
}

.header .gd-logo {
  position: absolute;
  left: 0;
}

.gd-logo img {
  width: 15vw;
  margin: 40px 0 0 30px;
}

.gd-title {
  font-family: 'Orbitron', sans-serif;
}

.gd-bg {
  width: 100vw;
  height: 200px;
}

.header {
  width: 100vw;
  height: 200px;
  background-size: 100%;
  margin-bottom: 50px;
}

.header .contact {
  position: absolute;
  right: 0;
  margin: -120px 80px 0 0;
  font-size: 0.8vw;
  font-family: 'Anonymous Pro', monospace;
  letter-spacing: 1px;
}

.gd-head h1 {
  position: absolute;
  margin-left: 40%;
  margin-top: 70px;
  font-family: 'Orbitron', sans-serif;
  font-size: 2vw;
  color: #fff;
}

.contact a {
  color: #FFF;
}

a:hover {
  text-decoration: none;
}

</style>
