<template>
  <div v-if="!paid" id="paypal-button-container"></div>
  <div v-else id="confirmation">Order complete!</div>
</template>

<script>
import { loadScript } from '@paypal/paypal-js';

export default {
  name: 'Checkout-Payment',
  beforeCreate: function() {
    loadScript({ 'client-id': CLIENT_ID, 'intent': 'authorize' }).then((paypal) => {
      console.log(paypal)
      paypal
        .Buttons({
          createOrder: this.createOrder,
          onApprove: this.onApprove,
        })
        .render('#paypal-button-container');
    });
  },
  data() {
    return {
      paid: false,
    };
  },
  props: {
    cartTotal: {
      type: Number,
      default: 0.01,
    },
  },
  methods: {
    createOrder: function(data, actions) {
      console.log(actions)
      console.log('Creating order...');
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: this.cartTotal,
              currency: 'EUR'
            },
          },
        ],
      });
    },
    onApprove: function(data, actions) {
      console.log(actions)
      // Authorize the transaction
      return actions.order.authorize()
      .then((response) => {
          console.log(response)
          this.paid = true
          // Get the authorization id from your payload
          //const authorizationID = authorizePayload.authorizationID;
          // Optional message given to purchaser
          /*
          alert(`
            You have authorized this transaction.
            Order ID: ${data.orderID}
            Authorization ID: ${authorizationID}
          `);
          */

          // Later you can use your server to validate and capture the transaction
      });
         
    }
  },
};
const CLIENT_ID = 'AW58-_beMRQuBpj3JGJNkxiqhbDOFIfPqvjThTrVIzk3ChmWVfzU8jX3wLKf2Xg1U2W-9xDgFC35rYqa';
</script>

<style>
#paypal-button-container {
  margin: 30px 0;
}

#confirmation {
  color: green;
  margin-top: 1em;
  font-size: 2em;
}
</style>
