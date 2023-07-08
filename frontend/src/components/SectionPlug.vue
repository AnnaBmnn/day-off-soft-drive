<template>
<section  :style="cssProps"  class="section-plug">
    <div class="section-plug__intersection-observer">
        <img src="~@/assets/official/plug-yellow.png" alt="" class="section-plug__plug">
        <ComponentAdd @openModalEvent="$emit('openModalEvent')" class="add out add--7" rotateProps="-5" scaleProps="5" type="in-out" />
        <ComponentAdd @openModalEvent="$emit('openModalEvent')" class="add out add--11" rotateProps="5" scaleProps="0.5" type="in-out" />
        <ComponentAdd @openModalEvent="$emit('openModalEvent')" class="add out add--5" rotateProps="4" scaleProps="4" type="in-out" />
        <ComponentAdd @openModalEvent="$emit('openModalEvent')" class="add out add--2" rotateProps="-3" scaleProps="5" type="in-out" />
        <ComponentAdd @openModalEvent="$emit('openModalEvent')" class="add out add--1" rotateProps="5" scaleProps="1.3" type="in-out" />
        <ComponentAdd @openModalEvent="$emit('openModalEvent')" class="add out add--3" rotateProps="10" scaleProps="2" type="in-out" />
        <ComponentAdd @openModalEvent="$emit('openModalEvent')" class="add out add--4" rotateProps="-7" scaleProps="0.5" type="in-out" />
        <ComponentAdd @openModalEvent="$emit('openModalEvent')" class="add out add--6" rotateProps="-20" scaleProps="2" type="in-out" />
        <ComponentAdd @openModalEvent="$emit('openModalEvent')" class="add out add--8" rotateProps="-5" scaleProps="2" type="in-out" />
        <ComponentAdd @openModalEvent="$emit('openModalEvent')" class="add out add--9" rotateProps="5" scaleProps="1" type="in-out" />
        <ComponentAdd @openModalEvent="$emit('openModalEvent')" class="add out add--10" rotateProps="-7" scaleProps="4" type="in-out" />
        <ComponentAdd @openModalEvent="$emit('openModalEvent')" class="add out add--12" rotateProps="-7" scaleProps="0.8" type="in-out" />
    </div>
</section>
</template>

<script>
// import ItemFolder from './ItemFolder.vue';
import ComponentAdd from './Add.vue';


export default {
  name: 'SectionCTA',
  components: {
    ComponentAdd
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
    const threshold = []
    for(let i = 0; i < 20; i ++){
      threshold.push(i / 20)
    }
    let options = {
    //   threshold: [0, 0.8]
    //   threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.8, 0.85, 0.9, 0.95, 1],
    };
    let callback = (entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.remove('out')
            entry.target.classList.add('in')
        }else {
            entry.target.classList.remove('in')
            entry.target.classList.add('out')
        }
      });
    };
    let observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll(".add");
    targets.forEach((target) => {
        if(target){
            observer.observe(target)
        }   
    })
  },
  methods: {

  },
};
</script>

<style scoped>
.section-plug {
    position: relative;
    margin: 50vh 0 30vh;
    display: flex;
    align-items: flex-end;
    width: 100%;
    z-index: 1;
}
.section-plug__intersection-observer {
    position: relative;
}
.section-plug__plug {
    pointer-events: none;
    width: 60%;
    z-index: 20;
    position: relative;
    pointer-events: none;
    transform: translate(68%, 10px);
}

.add {
    position: absolute;
    top: unset;
    right: unset;
    left: unset;
    bottom: unset;
}
.add.out {
    transition: filter 0.1s linear, transform 0.3s  cubic-bezier(.34,1.56,.6,1.3);

    transform: scale(0);
}
.add.in {
    transition: filter 0.1s linear, transform 0.3s  cubic-bezier(.34,1.56,.6,1.3);

    /* opacity: 1; */
}
.add--1 {
    top: 2vh;
    left: 0vw;
}
.add--2 {
    top: 47vh;
    left: 21vw;
}
.add--3 {
    top: 15vh;
    left: 18vw;
}
.add--4 {
    top: 0vh;
    left: 25vw;
}
.add--5 {
    top: 20vh;
    left: 73vw;
}
.add--6 {

    top: 50vh;
    left: 30vw;
}
.add--7 {
    top: 96vh;
    left: 21vw;
}
.add--8 {
    top: 120vh;
    left: 50vw;
}
.add--9 {
    top: 14vh;
    left: 49vw;
}
.add--10 {
    top: 75vh;
    left: 66vw;
}
.add--11 {
    top: 20vh;
    right: -7vw;
}
.add--12 {
    top: 95vh;
    left: 35vw;
}
@media screen and (max-width: 800px) {
  .section-plug {
    z-index: 2;
  }
}
</style>
