<template>
<section  :style="cssProps"  class="section-content">
    <ItemFolder />
    <ItemFolder />
    <ItemFolder />
    <ItemFolder />
    <ItemFolder />
    <ItemFolder />
    <ItemFolder />
    <ItemFolder />
    <ItemFolder />
    <ItemFolder />
    <ItemFolder />
    <ItemFolder />
    <ItemFolder />
    <ItemFolder />
    <ItemFolder />
    <ItemFolder />
    <ItemFolder />
    <ItemFolder />
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
</style>
