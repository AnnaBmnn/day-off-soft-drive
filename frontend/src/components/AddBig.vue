<template>
  <div ref="container"  :style="cssProps" class="add-big" @scroll="onScroll">
    <div class="add-big__text">
        Bid on it !
    </div>
  </div>
</template>

<script>
export default {
  name: 'Component-Add-Big',
  data() {
    return {
      ratio: 0
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
    for(let i = 0; i < 1001; i ++){
      threshold.push(i / 1000)
    }
    console.log(document.querySelector(".window95"))
    let options = {
      root: document.querySelector(".window95__content-container"),
      rootMargin: "0px",
      threshold: threshold,
    };
    let callback = (entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        this.ratio = entry.intersectionRatio * 3.3
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
    let target = document.querySelector(".add-big");
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
  /* overflow: hidden; */
  /* top: 0; */
  /* position: sticky;  */
  /* padding-top: 100vh; */
  color: transparent;
  height: 140vh;
  width: 100%;
  z-index: -1;
}
.add-big__text {
  /* top: 0vh; */
  /* position: sticky; */
  font-size: 26.3vw;
  text-transform: uppercase;
  letter-spacing: -0.8vw;
  transform-origin: top;
  text-shadow: 0px 0px 10px white;
  line-height: 0.86;
  will-change: transform;
  transform: scaleY(var(--scale));
  /* filter: blur(2px); */
  /* background-color: black; */
  transition: transform 0.02s linear;
}
</style>
