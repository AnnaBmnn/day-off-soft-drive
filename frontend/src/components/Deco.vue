<template>
<div class="">
    <img src="~@/assets/official/heart1.png" alt="" class="deco deco--heart-2">
    <img src="~@/assets/official/heart1.png" alt="" class="deco deco--heart-1">
    <img src="~@/assets/official/heart1.png" alt="" class="deco deco--heart-3">
    <img src="~@/assets/official/yellow-heart.png" alt="" class="deco deco--yellow-heart-1">
    <img src="~@/assets/official/blue_star.png" alt="" class="deco deco--blue-star-1">
    <img src="~@/assets/official/blue_star.png" alt="" class="deco deco--blue-star-2">
    <img src="~@/assets/official/lovefolder.png" alt="" class="deco deco--folder">
    <img src="~@/assets/official/plug-it-or-hug-it.png" alt="" class="deco deco--plug">

    <img src="~@/assets/official/star-red.png" alt="" class="deco deco--star-1">
    <img src="~@/assets/official/star-pink.png" alt="" class="deco deco--star-2">
    <img src="~@/assets/official/star-red.png" alt="" class="deco deco--star-3">

    <p class="deco__text">Launching <br> the unhardest hard disk <br> on the market!!!</p>
</div>
</template>

<script>
export default {
  name: 'Component-Deco',
  data() {
    return {
      translateX: 0,
    };
  },
  props: {
  },
  computed: {
    cssProps() {
      return {
        '--translateX': this.translateX + "px",
      }
    }
  },
  mounted() {



  },
};
</script>

<style scoped>
.deco {
    position: fixed;
}

.deco--plug {
    left: 4vw;
    top: 24vh;
    width: 30vh;
    /* z-index: 2; */
    animation: scale 1200ms ease-in-out infinite alternate-reverse;

}
.deco--folder {
    position: absolute;
    left: 2vw;
    top: 50vh;
    width: 18vh;
    /* z-index: 2; */
    filter: blur(1px);

}

.deco--heart-1 {
    /* position: absolute; */
    left: 0vw;
    bottom: 9vh;
    width: 60vh;
    opacity: 0.8;
    filter: blur(12px);
    /* transform: rotate(-15deg); */
    /* z-index: 1; */
}
.deco--heart-2 {
    left: 20vw;
    top: 0vh;
    width: 60vh;
    opacity: 0.8;
    filter: blur(14px);
    transform: rotate(20deg);
    /* z-index: 1; */
}
.deco--heart-3 {
    left: 22vw;
    bottom: 5vh;
    width: 30vh;
    opacity: 0.8;
    filter: blur(4px);
    transform: rotate(30deg);
    /* z-index: 1; */
}
.deco--yellow-heart-1 {
    left: 4vw;
    top: 22vh;
    width: 6vh;
    transform: rotate(-35deg);
    filter: blur(1.5px);
    /* animation: scale 1200ms ease-in-out infinite alternate-reverse; */
}
.deco--blue-star-1 {
    left: 11vw;
    top: 11vh;
    width: 6vh;
    animation: rotate 5200ms ease-in-out infinite;

    /* transform: rotate(12deg); */
    /* filter: blur(0.5px); */
}
.deco--blue-star-2 {
    left: 8vw;
    top: 16vh;
    width: 8vh;
    animation: rotate 5000ms ease-in-out infinite;

    /* transform: rotate(12deg); */
    /* filter: blur(0.5px); */
}
.deco--star-1 {
    top: 18vh;
    left: 33.5vw;
    width: 5vw;
    /* animation: scale 600ms 00ms ease-in-out infinite alternate-reverse; */

}
.deco--star-2 {
    top: 25vh;
    left: 35vw;
    width: 5vw;
    /* animation: scale 600ms 200ms ease-in-out infinite alternate-reverse; */
}
.deco--star-3 {
    top: 32.5vh;
    left: 32vw;
    width: 5vw;
    /* animation: scale 600ms 400ms ease-in-out infinite alternate-reverse; */
}
.deco__text {
    backdrop-filter: blur(2px);
    position: fixed;
    bottom: 7vh;
    left: 5vh;
    z-index: 2;
    transform: rotateZ(-3deg);
    font-family: sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 24px;
    text-align: center;
    color: yellow;
    line-height: 22px;
    -webkit-text-stroke: 1.5px rgb(84, 152, 255);
    text-stroke: 1.5px rgb(84, 152, 255);
}
@keyframes rotate {
  0%{
    transform:  rotateY(0deg);
  }
  100% {
    transform:  rotateY(360deg);
  }
}
@keyframes scale {
  0%{
    transform:  scale(1);
  }
  100% {
    transform:  scale(1.05);
  }
}
</style>
