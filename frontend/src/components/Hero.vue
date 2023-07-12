<template>
<section  :style="cssProps"  class="section-hero">
  <img src="~@/assets/official/soft-drive.png" alt="" class="section-hero__logo">
  <div class="section-hero__text">
    <img src="~@/assets/official/pink_star.png" alt="" class="section-hero__deco--1">

    Launching the ☻ unhardest hard disk  ☻  on the market. 
    An external HDD shaped as an extremely tender teddy bear, 
    lovingly crafted in Tokyo, that comes fulfilled with 
    ultra cheezy files:
    <img src="~@/assets/official/stars.png" alt="" class="section-hero__deco--2">

  </div>
  <ComponentAdd @openModalEvent="this.openModal = true" />

  <ComponentPrice class="checkout__price" :priceValue="minAmount + 1" />
</section>
</template>

<script>
// import ItemFolder from './ItemFolder.vue';


export default {
  name: 'SectionContent',
  components: {
      // ItemFolder
  },
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

      }
    }
  },
  mounted() {

  },
  methods: {

  },
};
</script>

<style scoped>
.section-hero {
  width: 60%;
  right: 0;
  position: relative;
  z-index: 4;
  /* height: 100vh; */
  padding: 64px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.section-hero__logo {
  /* position: absolute; */
  width: 100%;
  margin-left: auto;
  
}

.section-hero__text {
  position: relative;
  margin-top: 20vh;
  margin-bottom: 30vh;
  text-transform: uppercase;
  color: white;
  width: 80%;
  margin-right: 10%;
  font-size: 22px;
  line-height: 30px;
  text-align: justify;
  mix-blend-mode: difference;
}

.section-hero__deco--1 {
  position: absolute;
  width: 7vw;
  top: 0%;
  left: 100%;
  transform: translate(-25%, -80%);
  animation: rotate 10000ms ease-in-out infinite;
}

.section-hero__deco--2 {
  position: absolute;
  width: 7vw;
  bottom: 0%;
  right: 100%;
  transform: translate(0%, 80%) scaleY(1.3);

}

@keyframes rotate {
  0%{
    transform: translate(-25%, -80%) rotateY(0deg);
  }
  100% {
    transform: translate(-25%, -80%) rotateY(-360deg);
  }
}

@media screen and (max-width: 1030px) {
  .section-hero {
    width: 50%;
  }
  .section-hero__logo {
    margin-top: 20vh;
  }
  .section-hero__text {
    margin-top: 32vh;
  }
}
@media screen and (max-width: 800px) {
  .section-hero {
    width: 65%;
  }
  .section-hero__logo {
    margin-top: 0;
    width: 90%;
    transform: translateX(-3%);
    margin-top: 0vh;

  }
  .section-hero__text {
    margin-top: 70vh;
  }
}
@media screen and (max-width: 500px) {
  .section-hero {
    width: 100%;
  }
  .section-hero__logo {
    width: 80%;
    transform: translateX(-7.5%);

  }
}
</style>
