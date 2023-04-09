<template>
  <div >
    <ComponentChangeBackground v-on:onBgChange="onBgChange" />
    <Checkout-Item />
    <!-- <div class="mask"></div> -->
    <ComponentCard >
      <ComponentThreejs />
    </ComponentCard>
    <ComponentCard>
      <Checkout-Payment />
    </ComponentCard >
    <ComponentCardSoftDrive />
    <ComponentCard >
      <img
        class="item"
        src="~@/assets/image8-removebg-preview.png"
        alt="Gif of a red rose turning and text saying I love you"
      />
    </ComponentCard >
  </div>
</template>

<script>
import CheckoutPayment from './components/Checkout.vue';
import CheckoutItem from './components/Item.vue';
import ComponentCard from './components/Card.vue';
import ComponentChangeBackground from './components/ChangeBg.vue';
import ComponentThreejs from './components/ComponentThreejs.vue';
import ComponentCardSoftDrive from './components/CardSoftDrive.vue';

export default {
  name: 'App',
  components: {
    CheckoutPayment,
    CheckoutItem,
    ComponentThreejs,
    ComponentCard,
    ComponentChangeBackground,
    ComponentCardSoftDrive
  },
  methods: {
    onBgChange(data){
      const r = document.querySelector(':root');
      r.style.setProperty('--backgroundUrl', data.src) ;
      r.style.setProperty('--percentage', data.percentage) ;

    },
  }
};
</script>

<style >
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Times New Roman', Times, serif;
  min-height: 300vh;
  margin: 0;
  padding: 0;
  margin: auto;
  padding: 20px;
  position: relative;
  background: var(--backgroundUrl);
  background-size:  var(--percentage);
  /* filter: contrast(1.5); */

  /* text-align: center; */
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
  background: url('~@/assets/logo-mask.svg') ;
  background-size: 33.3%;
  pointer-events: none;
}
h1 {
  font-size: 62px;
  font-weight: bold;
}
:root {
  --backgroundUrl: url('~@/assets/background/bg-paillettes.webp') ;
  --percentage: 30%;
}

</style>
