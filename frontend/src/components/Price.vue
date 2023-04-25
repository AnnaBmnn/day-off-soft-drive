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
    this.translateY = Math.random() * window.innerHeight * 0.90 + 5
    this.translateX = Math.random() * window.innerWidth * 0.8
    this.duration = Math.random() * 5
  },
};
</script>

<style scoped>
.price {
  position: fixed;
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
