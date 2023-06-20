<template>
  <div class="price" :style="cssProps">
    <div class="price__text">
      <div class="price__subtext">now for</div>
      {{priceValue}}<sup>€</sup>
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
      duration: 10
    };
  },
  props: {
    priceValue: String,
  },
  computed: {
    cssProps() {
      return {
        '--translateX': this.translateX + "px",
        '--translateY': this.translateY + "px",
        '--duration': this.duration + "s",
      }
    }
  },
  mounted() {
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    )
    this.translateY = Math.random() * scrollHeight 
    this.translateX = Math.random() * window.innerWidth
    this.duration = Math.random() * 3 + 1

    window.setInterval(()=> {

      this.scale = 0
      window.setTimeout(() => {
      this.translateX = Math.random() * window.innerWidth 
      this.translateY = Math.random() * scrollHeight
      }, 350)
      window.setTimeout(() => {
        this.scale = Math.random() * 3.0
      }, 650)

    }, Math.random() * 8000 + 8000)
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
    transform: rotateY(0deg);
  }
  100% {
    transform:  rotateY(360deg);
  }
}
</style>
