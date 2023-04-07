<template>
  <div >
    <!-- <ComponentThreejs /> -->
    <Checkout-Item />
    <Checkout-Payment />
    <!-- <div class="mask"></div> -->
    <ComponentCard />
    <ComponentCard />
    <ComponentCard />
    <ComponentCard />

  </div>
</template>

<script>
import CheckoutPayment from './components/Checkout.vue';
import CheckoutItem from './components/Item.vue';
import ComponentCard from './components/Card.vue';
import ComponentThreejs from './components/ComponentThreejs.vue';
export default {
  name: 'App',
  components: {
    CheckoutPayment,
    CheckoutItem,
    ComponentThreejs,
    ComponentCard
  },
};
</script>

<style >
body {
  margin: 0;
  padding: 0;
}
#app {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: auto;
  padding: 20px;
  position: relative;
  background:  url(https://media.giphy.com/media/x8Jmfuz6xbVCM/giphy.gif)  ;
  background-size:  30%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
</style>
