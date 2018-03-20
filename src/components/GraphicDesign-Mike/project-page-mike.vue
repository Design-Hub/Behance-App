<template>
    <div class="projectPage">
      <div class="header">
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
                <img class="" v-bind:src="work.covers.original">
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