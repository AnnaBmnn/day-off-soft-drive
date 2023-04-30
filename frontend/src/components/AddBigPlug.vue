<template>
  <div ref="container"  :style="cssProps" class="add-big-plus" @scroll="onScroll">
    <div class="add-big__text">
        Plug it or hug it
    </div>
  </div>
</template>

<script>
export default {
  name: 'Component-Add-Big-Plug',
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
    let options = {
      root: document.querySelector(".window95__content-container"),
      rootMargin: "0px",
      threshold: threshold,
    };
    let callback = (entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        this.ratio = entry.intersectionRatio * 2.0
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
    let target = document.querySelector(".add-big-plus");
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
.add-big-plus {
  overflow: hidden;
  /* top: 0;
  position: sticky; */
  color: transparent;
  height: 150vh;
  width: 100%;
}
.add-big__text {
  /* top: 710px; */
  top: 20vh;
  position: sticky;
  font-size: 26.3vw;
  text-transform: uppercase;
  letter-spacing: -0.8vw;
  transform-origin: top;
  text-shadow: 0px 0px 10px white;

  /* text-shadow: 2px 2px 0 white, 6px 6px 8px white; */
  line-height: 0.86;
  will-change: transform;
  transform: scaleY(var(--scale));
  filter: blur(2px);
  /* background-color: black; */
  transition: transform 0.02s linear;
}
</style>
