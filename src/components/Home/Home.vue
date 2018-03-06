<template>
  <div>
    <div class="yoobeeMap" :id="mapCanvas"></div>
    <div id="programmesList">
      <Tilly v-if="seen"></Tilly>
    </div>
  </div>
</template>

<script>
import Tilly from '../Tilly/Tilly'
import { db } from '../../firebase'

export default {
  name: 'yoobeeMap',
  props: ['name'],

  data: function() {
    return {
      mapCanvas: this.name + "-map",

      campuses: [{
        name: "Auckland",
        latitude: -36.856864,
        longitude: 174.764417,
        description:"Inspiration is everywhere at ACG Yoobee Auckland, our flagship campus. It’s where brilliant ideas and technical prowess collide and flourish. With 11 labs, 4 theory rooms and a 3D graphics suite, the campus also has a green screen room (for video and gaming post-production special effects) and a fully equipped sound studio.  Plus there’s dedicated exhibition space to showcase our students’ artistry. With over 400 students and up to 16 classes running at any one time, it’s a playground for creativity."
      },
      {
        name: "Christchurch",
        latitude: -43.520430,
        longitude: 172.567893,
        description:"Unlock your imagination at Yoobee Christchurch, based in the Ōtākaro building at the University of Canterbury’s Dovedale Ave Campus. Set amongst inspiring grounds, it has a café, common room and parking. With big bright spaces, 5 computer labs, a green screen room and sound booth, our Christchurch Campus is a creative cluster for young artists, designers and developers."
      },
      {
        name: "Wellington",
        latitude: -41.279016,
        longitude: 174.780304,
        description:"Expand the frontiers of your digital world at our Wellington Campus. This dynamic hub was a finalist in the Creative category for the 2014 Wellington Gold Awards. It features 9 computer labs, three theory rooms, a large A/V Studio featuring a green screen and sound booth with the latest equipment, and a flatbed and pull down screen for photography.  Film and Animation are the superstars here and Wellywood’s growing film and animation industry means there are plenty of opportunities to immerse yourself in this area. Wellington is also a thriving creative capital with strong demand for design and web programmes producing high quality designers and thinkers."
      }],

      map: null,
      bounds: null,
      markers: [],
      seen:false
    }
  },

  firebase: {
    yoobeeCampusesArray: db.ref('Campuses'),
    yoobeeCampusesObject: {
      source: db.ref('Campuses'),
      cancelCallback(err) {
        console.log(err);
      }
    }
  },

  components: {
    Tilly
  },

  mounted: function() {


    this.bounds = new google.maps.LatLngBounds();

    const element = document.getElementById(this.mapCanvas)
    const mapCentre = this.campuses[0]
    const config = {
      zoom: 12,
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude),
      styles: [
        {
          "featureType": "all",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#ff6800"
            },
            {
              "saturation": "20"
            },
            {
              "lightness": "-8"
            },
            {
              "gamma": "1.00"
            },
            {
              "weight": "1.12"
            }
          ]
        }
      ]
    }
    this.map = new google.maps.Map(element, config);

    this.campuses.forEach((coord) => {
      let self = this
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({
        position,
        map: this.map,
      });

      this.markers.push(marker)
      this.map.fitBounds(this.bounds.extend(position))

      const infoWindowContent = coord.description;

      const infowindow = new google.maps.InfoWindow({
        content: infoWindowContent
      });
      marker.addListener('click', function() {
        infowindow.open(this.map, marker);
        self.seen = true
      });

    });
  },

  methods: {
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yoobeeMap {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}

.click {
  margin-top: 20%;
  color: red;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>