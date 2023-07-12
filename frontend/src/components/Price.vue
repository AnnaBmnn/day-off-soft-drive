<template>
  <div 
    class="price" 
    :class="classChange" 
    ref="price" 
    :style="cssProps">
    <div class="price__text">
      <div class="price__subtext">now for</div>
      {{priceValue}}.00<sup>€</sup>
    </div>
    <div class="price__shape">
      <img src="~@/assets/shape/shape-star.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Component-Price',
  data() {
    return {
      translateX: 0,
      translateY: 0,
      duration: 10,
      scale: 1,
      classChange: 'fixed'
    };
  },
  props: {
    priceValue: String,
    position: String
  },
  computed: {
    cssProps() {
      return {
        '--translateX': this.translateX + "px",
        '--translateY': this.translateY + "px",
        '--duration': this.duration + "s",
        '--scale': this.scale
      }
    }
  },
  mounted() {
    if(this.position !== 'fixed'){
      let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      )
      this.translateX = Math.random() * window.innerWidth
      this.duration = Math.random() * 7 + 1
      this.scale = Math.random() * 1 + 1


      if(Math.round(Math.random() * 10 ) % 2  === 0){
        this.translateY = Math.random() * window.innerHeight 

        this.classChange = 'fixed'
      } else {
        this.translateY = Math.random() * scrollHeight 
        this.classChange = null

      }

      window.setInterval(()=> {

        this.scale = 0
        window.setTimeout(() => {
        // this.translateX = Math.random() * window.innerWidth 
        this.translateY = Math.random() * scrollHeight
        }, 350)
        window.setTimeout(() => {
          this.scale = Math.random() * 1 + 1
          if(Math.round(Math.random() * 10 )  %  2 == 0){
            this.translateY = Math.random() * window.innerHeight 
            this.classChange = 'fixed'
          } else {
            this.translateY = Math.random() * scrollHeight 
            this.classChange = null

          }
        }, 650)

      }, Math.random() * 20000 + 8000)
    }else {
      this.classChange = 'positionned'
      this.scale = 1.3
      if(window.innerWidth){
        this.scale = 0.8
      }
      

    }
  },
};
</script>

<style scoped>
.price {
  position: absolute;
  left: var(--translateX);
  top: var(--translateY);
  width: 250px;
  height: 234px;
  animation: rotate var(--duration) ease-in-out infinite;
  pointer-events: none;
  /* transform: translate(var(--translateX), var(--translateY)) rotate(var(--rotate)); */
}
.price.fixed {
  position: fixed;
}
.price.positionned {
  position: fixed;
  left: 26vw;
  bottom: 8vh;
  top: unset;
  z-index: 12;
}
@media screen and (max-width: 800px) {
  .price.positionned {
    left: unset;
    right: 5vw;
    bottom: -2vh;
  }
}
@media screen and (max-width: 500px) {
  .price.positionned {
    left: unset;
    right: -2vw;
    bottom: -5vh;
    z-index: 0;
  }
}
.price__text {
  position: absolute;
  top: 52%;
  left: 51%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: black;
  font-size: 200%;
  text-shadow: 0px 0px #ffffff;
}
.price__subtext {
  position: absolute;
  bottom: calc(100% - 1px);
  left: 0%;
  /* transform: translate(-50%, -50%); */
  font-size: 35%;
  text-shadow: none;
}
sup {
  font-size: 40%;
}
.price__shape {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
}
img {
  width: 100%;
  height: 100%;

}

@keyframes rotate {
  0%{
    transform: scale(var(--scale)) rotateY(0deg) translate3d(0, 0, 2px);
  }
  100% {
    transform: scale(var(--scale)) rotateY(360deg) translate3d(0, 0, 2px);
  }
}
</style>
