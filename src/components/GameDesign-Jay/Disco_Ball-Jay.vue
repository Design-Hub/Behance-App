<template>
    <div>
        <!-- <div id="discoBallLight"></div> -->
        <div class="gameDesignDiscoBall" :id="discoBall">
            <div id="discoBallMiddle"></div>
        </div>
        <!-- <div class="light"></div> -->
    </div>
</template>

<script>
export default {
    name: 'gameDesignDiscoBall',
    // props: ['name'],

    data() {
        return {
            discoBall: this.name + "-ball",
        }
    },
    mounted: function() {
        // discoball from https://codepen.io/msaetre/pen/fDuzC
        var t = 1;
        var radius = 50;
        var squareSize = 6.5;
        var prec = 19.55;
        var fuzzy = 0.001;
        var inc = (Math.PI - fuzzy) / prec;
        const discoBallElement = document.getElementById(this.discoBall);

        for (var t = fuzzy; t < Math.PI; t += inc) {
            var z = radius * Math.cos(t);
            var currentRadius = Math.abs((radius * Math.cos(0) * Math.sin(t)) - (radius * Math.cos(Math.PI) * Math.sin(t))) / 2.5;
            var circumference = Math.abs(2 * Math.PI * currentRadius);
            var squaresThatFit = Math.floor(circumference / squareSize);
            var angleInc = (Math.PI * 2 - fuzzy) / squaresThatFit;
            for (var i = angleInc / 2 + fuzzy; i < (Math.PI * 2); i += angleInc) {
                var square = document.createElement("div");
                var squareTile = document.createElement("div");
                squareTile.style.width = squareSize + "px";
                squareTile.style.height = squareSize + "px";
                squareTile.style.transformOrigin = "0 0 0";
                squareTile.style.webkitTransformOrigin = "0 0 0";
                squareTile.style.webkitTransform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
                squareTile.style.transform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
                if ((t > 1.3 && t < 1.9) || (t < -1.3 && t > -1.9)) {
                    squareTile.style.backgroundColor = this.getRandomColor("bright");
                } else {
                    squareTile.style.backgroundColor = this.getRandomColor("any");
                }
                square.appendChild(squareTile);
                square.className = "square";
                squareTile.style.webkitAnimation = "reflect 2s linear infinite";
                squareTile.style.webkitAnimationDelay = String(this.getRandomNumber(0, 20) / 10) + "s";
                squareTile.style.animation = "reflect 2s linear infinite";
                squareTile.style.animationDelay = String(this.getRandomNumber(0, 20) / 10) + "s";
                squareTile.style.backfaceVisibility = "hidden";
                var x = radius * Math.cos(i) * Math.sin(t);
                var y = radius * Math.sin(i) * Math.sin(t);
                square.style.webkitTransform = "translateX(" + Math.ceil(x) + "px) translateY(" + y + "px) translateZ(" + z + "px)";
                square.style.transform = "translateX(" + x + "px) translateY(" + y + "px) translateZ(" + z + "px)";
                discoBallElement.appendChild(square);
            }
        }
    },

    methods: {
        getRandomColor: function(type) {
            var c;
            if (type == "bright") {
                c = this.getRandomNumber(130, 255);
            } else {
                c = this.getRandomNumber(110, 190);
            }
            return "rgb(" + 255 + "," + 205 + "," + 30 + ")";
        },

        getRandomNumber: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*DISCO BALL*/

@-webkit-keyframes rotateDiscoBall {
    0% {
        -webkit-transform: rotateX(90deg) rotateZ(0deg) rotate(0deg);
    }
    100% {
        -webkit-transform: rotateX(90deg) rotateZ(360deg) rotate(0deg);
    }
}

@keyframes rotateDiscoBall {
    0% {
        transform: rotateX(90deg) rotateZ(0deg) rotate(0deg);
    }
    100% {
        transform: rotateX(90deg) rotateZ(360deg) rotate(0deg);
    }
}

@-webkit-keyframes rotateDiscoBallMiddle {
    0% {
        -webkit-transform: rotateX(90deg) rotateY(0deg) rotate(0deg);
    }
    100% {
        -webkit-transform: rotateX(90deg) rotateY(-360deg) rotate(0deg);
    }
}

@keyframes rotateDiscoBallMiddle {
    0% {
        transform: rotateX(90deg) rotateY(0deg) rotate(0deg);
    }
    100% {
        transform: rotateX(90deg) rotateY(-360deg) rotate(0deg);
    }
}

@-webkit-keyframes reflect {
    0% {
        -webkit-filter: brightness(60%);
        -webkit-filter: hue-rotate(0);
    }
    50% {
        -webkit-filter: brightness(120%);
    }
    100% {
        -webkit-filter: brightness(90%);
        -webkit-filter: hue-rotate(360deg);
    }
}

@keyframes reflect {
    0% {
        opacity: 1;
        -webkit-filter: hue-rotate(0);
    }
    50% {
        opacity: 0.4;
    }
    100% {
        opacity: 1;
        -webkit-filter: hue-rotate(360deg);
    }
}

#discoBall {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50px;
    left: 50%;
    margin-left: -50px;
    -webkit-animation: rotateDiscoBall 18s linear infinite;
    animation: rotateDiscoBall 18s linear infinite;
    color: #fff;
}

#discoBallLight {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50px;
    left: 50%;
    margin-left: -50px;
    border-radius: 100%;
    background-color: #feffb2;
    opacity: 0.6;
    -webkit-filter: blur(40px);
}

.square {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    position: absolute;
    top: 50px;
    left: 50px;
    width: 6px;
    height: 6px;
    position: absolute;
    transform: rotateX(90deg) rotateY(0deg) translateZ(0px);
}

.gameDesignDiscoBall #discoBallMiddle {
    height: 100%;
    border-radius: 100%;
    background-color: #111;
    position: absolute;
    background: -webkit-linear-gradient(top, #111, #333);
    background: -moz-linear-gradient(top, #111, #333);
    background: linear-gradient(top, #111, #333);
    -webkit-animation: rotateDiscoBallMiddle 18s linear infinite;
    animation: rotateDiscoBallMiddle 18s linear infinite;
}

/* .light {
    width: 10px;
    height: 10px;
    color: #ebf2dd;
    background-color: currentColor;
    border-radius: 50%;
    box-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor,
    0 0 25px currentColor, 0 0 35px currentColor, 0 0 65px currentColor;
} */
</style>