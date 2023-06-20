<template>
<div>
  <div class="marquee__container">
    <div class="marquee__moving marquee__moving--1">
      <span class="marquee marquee--1">
        Plug it or hug it!         Plug it or hug it!
      </span>
      <span class="marquee marquee--1">
        Plug it or hug it!        Plug it or hug it!
      </span>
    </div>
  </div>
  
  <div class="marquee__container">
    <div class="marquee__moving marquee__moving--2">
      <span class="marquee marquee--2">
        Plug it or hug it! 
      </span>
      <span class="marquee marquee--2">
        Plug it or hug it!
      </span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Component-Marquee',
};
</script>

<style scoped>
.marquee__container {
  /* opacity: 0; */
  height: 100px;
  overflow: hidden;
  width: 100vw;
}
.marquee__moving {
  width: 200%;

  position: absolute;
  overflow: hidden;

  animation: marquee 7s linear infinite;
}
.marquee__moving--1 {
  animation: marquee 4s linear infinite;
}
.marquee {
  width: 100vw;
}
.marquee--1 {
  float: left;
  width: 50%;
  z-index: -1;
  font-size: 5vw;
  color: white;
  filter: blur(2px);
  /* text-shadow: 0px 0px 7px #ffffff; */
}
.marquee--2 {
  float: left;
  width: 50%;
  z-index: -1;
  font-size: 5vw;
  color: #62ff19;
  /* filter: blur(5px); */
  text-shadow: 2px 2px 0px black, -2px -2px 0px black;
}
@keyframes marquee {
  0% { left: 0; }
  100% { left: -100%; }
}
</style>
