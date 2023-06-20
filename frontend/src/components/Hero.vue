<template>
<section  :style="cssProps"  class="section-hero">
  <img src="~@/assets/official/soft-drive.png" alt="" class="section-hero__logo">
    <div class="section-hero__text">
      Launching the unhardest hard disk on the market. 
      An external HDD shaped as an extremely tender teddy bear, 
      lovingly crafted in Tokyo, that comes fulfilled with 
      ultra cheezy files:
    </div>
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
  width: 65%;
  margin-left: auto;
  /* animation: rotate 100000ms ease-in-out infinite; */
}

.section-hero__text {
  margin-top: 15px;
  text-transform: uppercase;
  color: white;
  width: 37%;
  margin-right: 9.5vw;
  font-size: 18px;
  text-align: justify;
  mix-blend-mode: difference;
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
