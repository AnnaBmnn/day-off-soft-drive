<template>
  <div ref="container"  :style="cssProps" class="add-big" @scroll="onScroll">
    <img src="~@/assets/official/soft-drive.png" alt="" class="add-big__logo">

  </div>
</template>

<script>
export default {
  name: 'Component-Add-Big',
  data() {
    return {
      ratio: 1
    };
  },
  props: {
  },
  computed: {
    cssProps() {
      return {
        '--scale': (this.ratio ),
      }
    }
  },
  mounted() {
    const threshold = []
    for(let i = 0; i < 201; i ++){
      threshold.push(i / 200)
    }
    let options = {
      rootMargin: "0px",
      threshold: threshold,
    };
    let callback = (entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        this.ratio = 1 + entry.intersectionRatio * 1.8

        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time
      });
    };
    let observer = new IntersectionObserver(callback, options);
    let target = document.querySelector(".add-big__logo");
    observer.observe(target);
  },
  methods: {
    onScroll(e) {
      console.log(e)
    }
  },
};
</script>

<style scoped>
.add-big {
  pointer-events: none;
  position: relative;
  /* overflow: scroll; */
  top: 0;
  position: sticky; 
  padding-top: 64px;
  height: 200vh;
  width: 100%;
  /* z-index: -1; */
}
.add-big__text {

}
.add-big__logo {
  /* top: 0vh; */
  /* position: sticky; */
  transform-origin: top;
  width: 100vw;
  /* height: 100vh; */
  will-change: transform;
  transform: scaleY(var(--scale));
}
</style>
