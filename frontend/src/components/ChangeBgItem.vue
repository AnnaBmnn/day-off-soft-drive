<template>
<li>
  <button @click="onClick" class="changeBgItem" >{{title}}</button>
</li>
</template>

<script>

export default {
  name: 'Component-Change-Background-Item',
  data() {
    return {
    };
  },
  props: [
    'src',
    'percentage',
    'title'
  ]
  ,
  computed: {

  },
  mounted() {
    console.log(
      `
        _______
        |.-----.|
        ||x . x||
        ||_.-._||
        '--)-(--'
       __[=== o]___
      |:::::::::::|\
      '-=========-'()
      `
    )
  },
  methods: {
    onClick(e){
      e.preventDefault()
      console.log()
      this.$emit('onBgChange', {src: this.src, percentage: this.percentage})
    },

  },
};
</script>

<style scoped>

</style>
