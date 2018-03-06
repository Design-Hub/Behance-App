<template>
  <div class='bookslist'>

    <ul style="width:1300px;">
      <li v-for="Program in Programmes">
        <div id="hex" class="hexagon-wrapper" value="Programmes">
          <div class="text text2">
            <p v-on:click="showProgramDescription">{{ Program.Name }}</p>
          </div>
          <div id="color1" class="hexagon"></div>
        </div>
    <div id="courseDescription"></div>
      </li>
    </ul>
  </div>

</template>

<script>
import { db } from '../../firebase'
export default {
  name: 'tilly',
  data() {
    return {
    }
  },

  firebase: {
    Programmes: {
      source: db.ref('Campuses/2/Programmes'),
      cancelCallback(err) {
        console.log(err);
      }
    }
  },

  methods: {
showProgramDescription: function(){
document.getElementById('courseDescription').innerHTML = '<div> Course Description. Click here to browse through our library <a href="/library">Library</a> </div>'
}
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
  position: absolute;
  z-index: 1000;
  width: 90%;
  text-align: center;
  padding-left: 5px;
  color: white;
  font-size: 10px;
}

.text2 {
  padding-top: 30px;
}

.text1 {
  padding-top: 40px;
}

#color1 {
  background-color: #ec7a08;
}

#color2 {
  background-color: #0cc6de;
}

#color3 {
  background-color: #7ab800;
}

#color4 {
  background-color: #fecb00;
}

#color5 {
  background-color: #7d5cc6;
}

#color6 {
  background-color: #994179;
}

.hexagon-wrapper {
  text-align: center;
  margin: 20px;
  position: relative;
  display: inline-block;
  width: 100px;
  height: 100px;
}

.hexagon {
  height: 100%;
  width: calc(100% * 0.57735);
  display: inline-block;
}

.hexagon:before {
  position: absolute;
  top: 0;
  right: calc((100% / 2) - ((100% * 0.57735) / 2));
  background-color: inherit;
  height: inherit;
  width: inherit;
  content: '';
  transform: rotateZ(60deg);
}

.hexagon:after {
  position: absolute;
  top: 0;
  right: calc((100% / 2) - ((100% * 0.57735) / 2));
  background-color: inherit;
  height: inherit;
  width: inherit;
  content: '';
  transform: rotateZ(-60deg);
}

#courseDescription{
  display:block;
  position:absolute;
}
.bookslist li{
  display:inline;
}
</style>
