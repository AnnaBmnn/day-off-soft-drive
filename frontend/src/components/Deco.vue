<template>
<div class="">
    <img src="~@/assets/official/heart1.png" alt="" class="deco out deco--heart-2">
    <img src="~@/assets/official/heart1.png" alt="" class="deco out deco--heart-1">
    <img src="~@/assets/official/heart1.png" alt="" class="deco out deco--heart-3">
    <img src="~@/assets/official/yellow-heart.png" alt="" class="deco out deco--yellow-heart-1">
    <img src="~@/assets/official/blue_star.png" alt="" class="deco out deco--blue-star-1">
    <img src="~@/assets/official/blue_star.png" alt="" class="deco out deco--blue-star-2">
    <img src="~@/assets/official/lovefolder.png" alt="" class="deco out deco--folder">
    <img src="~@/assets/official/plug-it-or-hug-it.png" alt="" class="deco out deco--plug">

    <img src="~@/assets/official/star-red.png" alt="" class="deco out deco--star-1">
    <img src="~@/assets/official/star-pink.png" alt="" class="deco out deco--star-2">
    <img src="~@/assets/official/star-red.png" alt="" class="deco out deco--star-3">

    <img src="~@/assets/official/star-pink.png" alt="" class="deco out deco--star-4">
    <img src="~@/assets/official/star-pink.png" alt="" class="deco out deco--star-7">
    <img src="~@/assets/official/purple-heart.png" alt="" class="deco out deco--star-5">
    <img src="~@/assets/official/star-red.png" alt="" class="deco out deco--star-6">

    <img src="~@/assets/official/drive.webp" alt="" class="deco out deco--drive">

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
    const threshold = []
    for(let i = 0; i < 20; i ++){
      threshold.push(i / 20)
    }
    let options = {
      // threshold: [0.4, 0.9],
      rootMargin: "60px"
    //   threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.8, 0.85, 0.9, 0.95, 1],
    };
    let callback = (entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.remove('out')
            entry.target.classList.add('in')
        }else {
          if(!entry.isVisible){
            entry.target.classList.remove('in')
            entry.target.classList.add('out')
          }
        }
      });
    };
    let observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll(".deco");
    targets.forEach((target) => {
        if(target){
            observer.observe(target)
        }   
    })
  },
};
</script>

<style scoped>
.deco {
    position: fixed;
  transform: translate3d(0, 0, 2px);

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
    z-index: 4;
    filter: blur(1px);
      transform: translate3d(0, 0, 2px);

}

.deco--heart-1 {
    /* position: absolute; */
    left: 0vw;
    bottom: 9vh;
    width: 60vh;
    opacity: 0.8;
    filter: blur(12px);
    /* transform: rotate(-15deg); */
    z-index: 0;
    transition-delay: 0!important;
}
.deco--heart-2 {
    left: 20vw;
    top: 0vh;
    width: 60vh;
    opacity: 0.8;
    filter: blur(14px);
    z-index: 0;
    transform: rotate(20deg) translate3d(0, 0, 1px);
    /* z-index: 1; */
}
.deco--heart-3 {
    left: 22vw;
    bottom: 5vh;
    width: 30vh;
    opacity: 0.8;
    filter: blur(4px);
    z-index: 0;
    transform: rotate(30deg) translate3d(0, 0, 1px);
    /* z-index: 1; */
}
.deco--yellow-heart-1 {
    left: 4vw;
    top: 22vh;
    width: 6vh;
    transform: rotate(-35deg) translate3d(0, 0, 1px);
    filter: blur(1.5px);
    /* animation: scale 1200ms ease-in-out infinite alternate-reverse; */
}
.deco--blue-star-1 {
  /* position: absolute; */
    left: 11vw;
    top: 11vh;
    width: 6vh;
    animation: rotate 5200ms ease-in-out infinite;

    /* transform: rotate(12deg); */
    /* filter: blur(0.5px); */
}
.deco--blue-star-2 {
    /* position: absolute; */
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
    transition-delay: 0.3s!important;
    transition-duration: 0.6s!important;
    transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1)!important;
    /* animation: scale 600ms 00ms ease-in-out infinite alternate-reverse; */

}
.deco--star-2 {
    top: 25vh;
    left: 35vw;
    width: 5vw;
    transition-delay: 0.6s!important;
    transition-duration: 0.6s!important;
    transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1)!important;

    /* animation: scale 600ms 200ms ease-in-out infinite alternate-reverse; */
}
.deco--star-3 {
    top: 32.5vh;
    left: 32vw;
    width: 5vw;
    transition-delay: 0.8s!important;
    transition-duration: 0.6s!important;
    transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1)!important;
    /* animation: scale 600ms 400ms ease-in-out infinite alternate-reverse; */
}
.deco--star-4 {
    position: absolute;

    bottom: 8vh;
    left: 13.5vw;
    width: 5vw;
    /* animation: scale 600ms 00ms ease-in-out infinite alternate-reverse; */

}
.deco--star-5 {
    position: absolute;

    bottom: 15vh;
    left: 10vw;
    width: 5vw;
    /* animation: scale 600ms 200ms ease-in-out infinite alternate-reverse; */
}
.deco--star-6 {
    position: absolute;

    bottom: 22.5vh;
    left: 12vw;
    width: 5vw;
    /* animation: scale 600ms 400ms ease-in-out infinite alternate-reverse; */
}
.deco--star-7 {
    position: absolute;

    bottom: 29.5vh;
    left: 11vw;
    width: 5vw;
    /* animation: scale 600ms 400ms ease-in-out infinite alternate-reverse; */
}
.deco--drive {
  position: absolute;

  top: 15%;
  width: 30vw;
  left: 0;
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
    transform:  rotateY(0deg) translate3d(0, 0, 1px);  
  }
  100% {
    transform:  rotateY(360deg) translate3d(0, 0, 1px);
  }
}
@keyframes scale {
  0%{
    transform:  scale(1) translate3d(0, 0, 1px);
  }
  100% {
    transform:  scale(1.05) translate3d(0, 0, 1px);
  }
}
.deco.out {
  transition:  transform 0.3s  cubic-bezier(.34,1.56,.6,1.3) ;
  transform: scale(0) translate(0, 0, 1px);
}
.deco.in {
  transition:  transform 0.3s  cubic-bezier(.34,1.56,.6,1.3) 1s;
    /* opacity: 1; */
}
@media screen and (max-width: 1030px) {
  .deco--plug {
    width: 20vh;
  }
  .deco--heart-1 {
    display: none;
  }
  .deco--heart-3 {
    left: 5vw;
    bottom: 7vh;
    width: 30vh;
    filter: blur(6px);
  }
  .deco--folder {

    width: 14vh;
  }
  .deco--drive {
    top: 16%;
  }
}
@media screen and (max-width: 800px) {
  .deco--heart-2 {
    display: none;
  }
  .deco--drive {
    top: 22%;
    width: 54vw;
  }
  .deco__text {
    z-index: 5;
  }
  .deco--star-1 , .deco--star-2 , .deco--star-3 , .deco--star-4 , .deco--star-5 , .deco--star-6 {
    width: 10vw;
  }
}
@media screen and (max-width: 500px) {

  .deco--star-1 , .deco--star-2 , .deco--star-3 , .deco--star-4 , .deco--star-5 , .deco--star-6 {
    width: 20vw;
    transform: translateX(5vw);
  }

  .deco--star-1 , .deco--star-2 , .deco--star-3 {
    width: 20vw;
    transform: translateX(43vw) translateY(8vh);
  }
  .deco__text {
    bottom: unset;
    top: 76vh;
    left: 2vh;
    position: absolute;
  }
  .deco--drive {
    top: 24%;
    width: 90vw;
    z-index: 5;
  }
  .deco--plug {
    left: 2vw;
    top: 26vh;
    width: 30vh;
  }
}
</style>
