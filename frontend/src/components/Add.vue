<template>
  <span class="add" @click="$emit('openModalEvent')" :style="cssProps">
    <div class="add__top">
      <span>
        Bid on it !
      </span>
      </div>
    <div class="add__bottom">
      <span class="add__bottom--1">open</span>
      <span class="add__bottom--2">  until</span>
      <span class="add__bottom--3">14 may</span>
    </div>
  </span>
</template>

<script>
export default {
  name: 'Component-Add',
  data() {
    return {
      translateX: 0,
      translateY: 0,
      scale: 1
    };
  },
  props: {
  },
  computed: {
    cssProps() {
      return {
        '--translateX': this.translateX + "%",
        '--translateY': this.translateY + "%",
        '--rotate': this.rotate + "deg",
        '--scale': this.scale
      }
    }
  },
  mounted() {
    // const scrollContent = window


    this.translateX = Math.random() * window.innerWidth
    this.translateY = Math.random() * window.innerHeight 
    this.rotate = Math.random() * 50 - 25
    this.scale = Math.random() * 3.0 

    window.setInterval(()=> {

      this.scale = 0
      window.setTimeout(() => {
      this.translateX = Math.random() * window.innerWidth 
      this.translateY = Math.random() * window.innerHeight  
      }, 350)
      window.setTimeout(() => {
        this.scale = Math.random() * 3.0
      }, 650)

    }, Math.random() * 8000 + 5000)
  },
};
</script>

<style scoped>
.add {
  position: fixed;
  cursor: help;
  /* position: relative; */
  /* z-index: 10; */
  width: 300px;
  font-family: sans-serif;
  text-transform: uppercase;
  transform: translate(var(--translateX), var(--translateY)) rotate(var(--rotate)) scale(var(--scale));
  filter: blur(1px);
  transition: filter 0.1s linear, transform 0.3s  cubic-bezier(.34,1.56,.6,1.3);
}
/* 
.add:hover {
  filter: blur(2px);

} */
.add__top {
  cursor: help;
  width: fit-content;
  font-size: 36px;
  /* font-style: italic; */
  font-weight: 800;
  color: #fea5d2;
  background-color: #ffed77;
  letter-spacing: -3px;
  transform: scaleY(2.5);
}
.add__top span {
  cursor: help;
  line-height: 0.791;
  display: block;
  /* background-color: yellow; */
  transform: translateX(-3px);
  /* transform: skewX(331deg); */
  
}
.add__bottom {
  height: 44px;
  width: 157px;
  /* width: fit-content; */
  overflow: hidden;
  display: flex;
  font-size: 18px;
  font-weight: 600;
  position: relative;
  z-index: 2;
  /* color: yellow; */
  font-style: italic;
  /* background-color: red; */
  background-color: #fea5d2;
  color: #ffed77;
  align-items: baseline;
  transform: translateY(15px);
}
.add__bottom--2 {
  line-height: 3;
  display: block;
  font-size: 14px;
  font-weight: 400;
  height: 44px;
  transform: scaleY(4.4);
}
.add__bottom--1 {
  transform: scaleY(3.2) translate(-2px, -0.5px);
  display: block;
  line-height: 3;
  height: 55px;
}
.add__bottom--3 {
  transform: scaleY(3.2) translate(-2px, -0.5px);
  display: block;
  line-height: 3;
  height: 55px;
}


</style>
