<template>
  <div class="outer">
    <div class="window">
    </div>
  </div>
</template>

<script>
export default {
  name: 'gameDesign',
  data() {
    return {
    }
  },

  methods: {
    getbackground: function() {
      var blackboardHeight = $(".blackboard").height(),
        blackboardWidth = $(".blackboard").width(),
        blackboardArea = blackboardHeight * blackboardWidth,
        viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        expandedWidth = viewportWidth * 1.1,
        viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        expandedHeight = viewportHeight * 1.1,
        viewportArea = viewportWidth * viewportHeight,
        expandedArea = expandedWidth * expandedHeight,
        initialRight = 0,
        initialBottom = 0;

      function circleMaker(size, margin, color, opacity, blur, spread, positionLeeway, opacityLeeway, name) {

        var lsCellSide = size + (margin * 2),
          lsRows = Math.floor(expandedHeight / lsCellSide),
          lsColumns = Math.floor(expandedWidth / lsCellSide),
          lsQuantity = lsRows * lsColumns;
        console.log(name + " rows=" + lsRows);
        console.log(name + " columns=" + lsColumns);
        console.log(name + " quantity=" + lsQuantity);

        var paneHTML = '<div id="' + name + '-1" class=" ' + name + '-pane pane" style="top: 0; left: 0;' +
          ' width:' + (lsColumns * lsCellSide) + 'px; height:' + (lsRows * lsCellSide) + 'px;"></div>';
        $('.window').append(paneHTML);

        var columnBlock = Math.floor(lsColumns / 3);
        var columnBlockRemainder = lsColumns % 3;

        console.log("columnBlock = " + columnBlock);
        console.log("columnBlockRemainder = " + columnBlockRemainder);

        for (var i = 0; i < lsQuantity; i++) {

          var thisRow = Math.floor(i / lsColumns) + 1;
          var thisCol = (i % lsColumns) + 1;

          var thisColBlock = 0;

          if (thisCol <= columnBlock) {
            thisColBlock = 1;
          } else if (thisCol <= columnBlock * 2) {
            thisColBlock = 2;
          } else if (thisCol <= columnBlock * 3 + columnBlockRemainder) {
            thisColBlock = 3;
          }

          var initTranslateX = thisCol * lsCellSide;
          var initTranslateY = thisRow * lsCellSide;

          var randomRight = Math.floor(Math.random() * (positionLeeway + 1)),
            randomRight = randomRight *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

          var randomBottom = Math.floor(Math.random() * (positionLeeway + 1)),
            randomBottom = randomBottom *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

          var randomOpacity = Math.random() * opacityLeeway,
            randomOpacity = randomOpacity *= Math.floor(Math.random() * 2) == 1 ? 1 : -1,
            randomOpacity = opacity + randomOpacity;

          var lsHTML = '<div class="ls-' + name + ' ls-col-' + thisColBlock + '" style="' +
            'height:' + size + "px; " +
            'width:' + size + "px;" +
            'left:' + (initialRight + randomRight - (margin + size) + initTranslateX) + 'px;' + //LOOK HERE FOR INITIAL POSITIONING
            'top:' + (initialBottom + randomBottom - (margin + size) + initTranslateY) + 'px;' +
            'background-color:' + color + ';' +
            'opacity:' + randomOpacity + ';' +
            'box-shadow: 0 0 ' + blur + 'px ' + spread + 'px ' + color + ';' +
            '"></div>';

          $('#' + name + '-1').append(lsHTML);

        }

        for (var i = 2; i < 3; i++) {
          var leftPosition = ((i - 1) * (lsColumns * lsCellSide));
          $('#' + name + '-1').clone().attr("id", name + "-" + i).css("left", leftPosition).appendTo('.window');
          //$('#' + name + '-1').clone().attr("id", name + "-duplicate-" + i).removeClass("pane").addClass("duplicate-pane").css("left", leftPosition).appendTo('.window');
        }
      }

      circleMaker(60, 30, "#E9008D", 0.13, 20, 2, 10, 0.15, "purple");
      circleMaker(20, 17, "#F5BFE1", 0.1, 15, 3, 6, 0.15, "pink");
      //circleMaker(5, 80, "#FFFFFF", 0.1, 30, 3, 20, 0.1, "white");
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