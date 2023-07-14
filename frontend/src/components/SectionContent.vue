<template>
<section  :style="cssProps"  class="section-content">
    <ItemFolder class="section-content__item-folder" />
    <ItemFolder class="section-content__item-folder" />
    <ItemFolder class="section-content__item-folder" />
    <ItemFolder class="section-content__item-folder" />
    <ItemFolder class="section-content__item-folder" />
    <ItemFolder class="section-content__item-folder" />
    <ItemFolder class="section-content__item-folder" />
    <ItemFolder class="section-content__item-folder" />
    <ItemFolder class="section-content__item-folder" />
    <ItemFolder class="section-content__item-folder" />
    <ItemFolder class="section-content__item-folder" />
    <ItemFolder class="section-content__item-folder" />
    <ItemFolder class="section-content__item-folder" />
    <ItemFolder class="section-content__item-folder" />
    <ItemFolder class="section-content__item-folder" />
    <ItemFolder class="section-content__item-folder" />
    <ItemFolder class="section-content__item-folder" />
    <ItemFolder class="section-content__item-folder" />
</section>
</template>

<script>
import ItemFolder from './ItemFolder.vue';


export default {
  name: 'SectionContent',
  components: {
      ItemFolder
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
        '--translateX': (this.translateX ) + "px",

      }
    }
  },
  mounted() {
    this.translateX = Math.random() * window.innerWidth * 0.7

  },
  methods: {

  },
};
</script>

<style scoped>
.section-content {
    position: relative;
    /* z-index: 2; */
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

}
@media screen and (max-width: 1100px) {

  .section-content__item-folder:nth-last-child(-n+3) {
      display: none;
  }
}
@media screen and (max-width: 800px) {
  .section-content {
    z-index: 2;
    backdrop-filter: blur(5px);

  }
  .section-content__item-folder:nth-last-child(-n+3) {
      display: block;
  }
  .section-content__item-folder:nth-last-child(-n+2) {
      display: none;
  }
}
@media screen and (max-width: 500px) {
  .section-content {
    z-index: 2;
    backdrop-filter: blur(5px);

  }
  .section-content__item-folder:nth-last-child(-n+3) {
    display: none;
  }

}
@media not all and (min-resolution:.001dpcm) { 
  @media {
    .section-content {
      backdrop-filter: none;
    }
  }
}
</style>
