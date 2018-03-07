<template>
  <div class="container">
    <div class="header">
      <div class="logo">
        <img src="../../images/logoWhite.png">
      </div>
      <div class="contact">
        <a href="/contact">CONTACT</a>
      </div>
    </div>

    <div class="description">
      <h1>We are a perfect blend of Creativity,</h1>
      <p>energy and communication working together since 2002.</p>
      <p>This is a showcase of talent of our passionate designers.</p>
    </div>

    <div class="designCategories">
      <div class="photography">
        <h1>Photography</h1>
      </div>
      <div class="gameDesign">
        <h1>Game Design</h1>
      </div>
      <div class="graphicDesign">
        <h1>Graphic Design</h1>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home',

  data() {
    return {
    }
  },
  methods: {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background: url("../../images/homeBackground.png") no-repeat fixed center;
  width: 100vw;
  height: 100vh;
  color: white;
}

.header .logo {
  position: absolute;
  left: 0;
}

.logo img {
  width: 250px;
}

.header .contact {
  position: absolute;
  right: 0;
  font-family: 'Orbitron', sans-serif;
}

.designCategories {
  position: absolute;
  top: 40%;
  right: 0;
  font-family: 'Patua One', cursive;
}

.description {
  position: absolute;
  top: 40%;
  left: 0;
  font-family: 'Open Sans', sans-serif;
}
</style>