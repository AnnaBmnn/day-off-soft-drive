<template>
  <div >
    <h1>Soft drive </h1>
    <Checkout-Item />
    <Checkout-Payment />
  </div>
</template>

<script>
import CheckoutPayment from './components/Checkout.vue';
import CheckoutItem from './components/Item.vue';
export default {
  name: 'App',
  components: {
    CheckoutPayment,
    CheckoutItem,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: auto;
  padding: 20px;
  position: relative;
  background: url('~@/assets/furry-texture.jpeg') repeat;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  font-size: 62px;
  font-weight: bold;
}
</style>
