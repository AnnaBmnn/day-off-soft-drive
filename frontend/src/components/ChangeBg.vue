<template>
<div class="change-bg" :style="cssProps" >
  <ComponentChangeBackgroundItem 
    v-for="item in imgs" 
    :key="item.name" 
    :title="item.name" 
    :percentage="item.percentage" 
    :src="item.src" 
    v-on:onBgChange="onBgChange" 
  />
</div>
</template>

<script>
import ComponentChangeBackgroundItem from './ChangeBgItem.vue';

export default {
  name: 'Component-Change-Background',
  components: {
    ComponentChangeBackgroundItem
  },
  data() {
    return {
      imgs: [
        {
          name: "Bear",
          src: "url('../background/texture.jpg')",
          percentage: "100%"
        },
        {
          name: "ciel",
          src: "url('../background/bg-ciel.jpg')",
          percentage: "120%"
        },
        {
          name: "jean",
          src: "url('../background/bg-jean.jpg')",
          percentage: "50%"
        },
        {
          name: "paillettes",
          src: "url('../background/bg-paillettes.webp')",
          percentage: "50%"
        },
      ]
    };
  },
  props: {
  },
  computed: {
    cssProps() {
      return {
        // '--backgroungUrl': 'url(' (this.src ) + ')',
      }
    }
  },
  mounted() {
  },
  methods: {
    onBgChange(data){
      this.$emit('onBgChange', data)
    },

  },
};
</script>

<style>
.change-bg {
  z-index: 10;
  position: fixed;
  bottom: 20px;
}
</style>
