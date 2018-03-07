<template>
  <div class="outer" v-bind:style="getbackground()">
    <div class="window">
    </div>
  </div>
</template>

<script>
export default {
  name: 'gameDesign',
  data() {
    return {
      initialRight: 0,
      initialBottom: 0,

      size: [60,20],
      margin: [30,17],
      color: ['#E9008D','#F5BFE1'],
      opacity: [0.13,0.1],
      blur: [20,15],
      spread: [2,3],
      positionLeeway: [10,6],
      opacityLeeway: '0.15',
      name: ['purple','pink']
    }
  },

  methods: {
    getbackground: function() {
      const blackboardHeight = $(".blackboard").height();
      const blackboardWidth = $(".blackboard").width();

      var blackboardArea = blackboardHeight * blackboardWidth,
      viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      expandedWidth = viewportWidth * 1.1,
      viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
      expandedHeight = viewportHeight * 1.1,
      viewportArea = viewportWidth * viewportHeight,
      expandedArea = expandedWidth * expandedHeight;

      var lsCellSide = this.size + (this.margin * 2),
        lsRows = Math.floor(this.expandedHeight / this.lsCellSide),
        lsColumns = Math.floor(this.expandedWidth / this.lsCellSide),
        lsQuantity = this.lsRows * this.lsColumns;
      console.log(this.name + " rows=" + this.lsRows);
      console.log(this.name + " columns=" + this.lsColumns);
      console.log(this.name + " quantity=" + this.lsQuantity);

      var paneHTML = '<div id="' + this.name + '-1" class=" ' + this.name + '-pane pane" style="top: 0; left: 0;' +
        ' width:' + (this.lsColumns * this.lsCellSide) + 'px; height:' + (this.lsRows * this.lsCellSide) + 'px;"></div>';
      $('.window').append(this.paneHTML);

      var columnBlock = Math.floor(this.lsColumns / 3);
      var columnBlockRemainder = this.lsColumns % 3;

      console.log("columnBlock = " + this.columnBlock);
      console.log("columnBlockRemainder = " + this.columnBlockRemainder);

      for (var i = 0; i < this.lsQuantity; i++) {

        var thisRow = Math.floor(this.i / this.lsColumns) + 1;
        var thisCol = (this.i % this.lsColumns) + 1;

        var thisColBlock = 0;

        if (this.thisCol <= this.columnBlock) {
          this.thisColBlock = 1;
        } else if (this.thisCol <= this.columnBlock * 2) {
          this.thisColBlock = 2;
        } else if (this.thisCol <= this.columnBlock * 3 + this.columnBlockRemainder) {
          this.thisColBlock = 3;
        }

        var initTranslateX = this.thisCol * this.lsCellSide;
        var initTranslateY = this.thisRow * this.lsCellSide;

        var randomRight = Math.floor(Math.random() * (this.positionLeeway + 1)),
          randomRight = this.randomRight *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

        var randomBottom = Math.floor(Math.random() * (this.positionLeeway + 1)),
          randomBottom = this.randomBottom *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

        var randomOpacity = Math.random() * this.opacityLeeway,
          randomOpacity = this.randomOpacity *= Math.floor(Math.random() * 2) == 1 ? 1 : -1,
          randomOpacity = this.opacity + this.randomOpacity;

        var lsHTML = '<div class="ls-' + this.name + ' ls-col-' + this.thisColBlock + '" style="' +
          'height:' + this.size + "px; " +
          'width:' + this.size + "px;" +
          'left:' + (this.initialRight + this.randomRight - (this.margin + this.size) + this.initTranslateX) + 'px;' + //LOOK HERE FOR INITIAL POSITIONING
          'top:' + (this.initialBottom + this.randomBottom - (this.margin + this.size) + this.initTranslateY) + 'px;' +
          'background-color:' + this.color + ';' +
          'opacity:' + this.randomOpacity + ';' +
          'box-shadow: 0 0 ' + this.blur + 'px ' + this.spread + 'px ' + this.color + ';' +
          '"></div>';

        $('#' + this.name + '-1').append(this.lsHTML);

      }

      for (var i = 2; i < 3; i++) {
        var leftPosition = ((this.i - 1) * (this.lsColumns * this.lsCellSide));
        $('#' + this.name + '-1').clone().attr("id", this.name + "-" + i).css("left", this.leftPosition).appendTo('.window');
      }
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.relative {
  position: relative;
}

.outer {
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: translate3d(0, 0, 0);
}

.window {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  transform: translate3d(0, 0, 0);
}

.window>.purple-pane.pane {
  -webkit-animation-name: pane;
  -webkit-animation-duration: 14s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-name: pane;
  -moz-animation-duration: 14s;
  -moz-animation-timing-function: linear;
  -moz-animation-iteration-count: infinite;
  animation-name: pane;
  animation-duration: 14s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.window>.pink-pane.pane {
  -webkit-animation-name: pane;
  -webkit-animation-duration: 10s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-name: pane;
  -moz-animation-duration: 10s;
  -moz-animation-timing-function: linear;
  -moz-animation-iteration-count: infinite;
  animation-name: pane;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.window>.purple-pane.duplicate-pane {
  -webkit-animation-name: duplicate;
  -webkit-animation-duration: 14s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-name: duplicate;
  -moz-animation-duration: 14s;
  -moz-animation-timing-function: linear;
  -moz-animation-iteration-count: infinite;
  animation-name: duplicate;
  animation-duration: 14s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.window>.pink-pane.duplicate-pane {
  -webkit-animation-name: duplicate;
  -webkit-animation-duration: 10s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-name: duplicate;
  -moz-animation-duration: 10s;
  -moz-animation-timing-function: linear;
  -moz-animation-iteration-count: infinite;
  animation-name: duplicate;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.pane {
  position: absolute;
  -webkit-transform: translate3d(0, 0, 0);
}

.window div {
  display: inline-block;
  position: absolute;
  border-radius: 100%;
  -webkit-transform: translate3d(0, 0, 0);
}

@-webkit-keyframes pane {
  0% {
    -webkit-transform: translateX(0%);
  }
  100% {
    -webkit-transform: translateX(-100%);
  }
}

@-moz-keyframes pane {
  0% {
    -moz-transform: translateX(0%);
  }
  100% {
    -moz-transform: translateX(-100%);
  }
}

@keyframes pane {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>