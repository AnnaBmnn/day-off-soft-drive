<template>
<section  :style="cssProps"  class="section-cta">
  <img src="~@/assets/official/OSITO.png" alt="" class="section-cta__osito">
  <!-- <img src="~@/assets/official/heart1.png" alt="" class="section-cta__heart"> -->
  <img src="~@/assets/official/excla.png" alt="" class="section-cta__folder">

  <img src="~@/assets/official/soft-drive.png" alt="" class="section-cta__logo">
  
  <!-- <img src="~@/assets/official/plug-yellow.png" alt="" class="section-cta__plug"> -->
  <div class="section-cta__content">
    <slot></slot> 
  </div>

</section>
</template>

<script>
// import ItemFolder from './ItemFolder.vue';
// import ComponentAdd from './Add.vue';


export default {
  name: 'SectionCTA',
  components: {
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
.section-cta {
  width: 60%;
  right: 0;
  position: relative;
  z-index: 4;
  min-height: 100vh;
  padding: 64px 20px 20px;
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.section-cta__content {
  z-index: 2;
}
.section-cta__osito {
  position: absolute;
  width: auto;
  height: 60vh;
  bottom: 30vh;
  left: 35%;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none;
}

.section-cta__heart {
  position: absolute;
  width: 45vh;
  top: 15vh;
  left: 0%;
  z-index: 0;
  transform: rotateZ('30deg');
  pointer-events: none;
  filter: blur(4px);
  opacity: 0.6;
}
.section-cta__logo {
  pointer-events: none;
  z-index: 4;
  margin-top: 100vh;
  width: 100%;
}
.section-cta__folder {
  position: absolute;
  height: 31vh;
  bottom: 79vh;
  right: 3vw;
  z-index: 0;
  transform: rotate(10deg);
  pointer-events: none;
}
@media screen and (max-width: 1100px) {
  .section-cta__osito {
    height: 30vw;
    bottom: 17vw;
  }
  .section-cta__folder {
    height: 20vw;
    bottom: 42vw;
  }
}
@media screen and (max-width: 500px) {
  .section-cta {
    width: 90%;
    margin-top: 33vh;
  }
  .section-cta__content {
    display: none;
  }
  .section-cta__osito {
    bottom: 36vw;
  }
  .section-cta__folder {
    bottom: 50vw;
    height: 25vw;
    right: 10vw;
  }
}


@keyframes rotate {
  0%{
    transform: translate(-25%, -80%) rotateY(0deg);
  }
  100% {
    transform: translate(-25%, -80%) rotateY(-360deg);
  }
}
</style>
