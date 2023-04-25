<template>
  <div class="checkout" v-if="!paid" >
    <div class="">
      <h3>The soft drive</h3>
      <div class="checkout__text">
        <p class="checkout__text--first">
          This sale is an auction. Place the highest bid for a chance to win the softest hard drive on the market.
        </p>
        <p class="checkout__text--instruction">
          Disclaimer, if you bid more than once, you will see a withdrawal of each amount for each bid. We promise to cancel the lowest bids as soon as possible. If you have any questions, please feel free to contact us at lorep-ipsum@dolores.com.
        </p>
        <p>
        </p>
        <p>
          After clicking on pay, you pill redirected to the paypal plateforme.
        </p>
      </div>
      <div>
        The current highest bid is at {{minAmount}}€.
      </div>
      <ComponentPrice class="checkout__price" :priceValue="minAmount + 1" />

      <input 
        type="number" 
        :min="minAmount"  
        id="amount" 
        name="amount"
        :placeholder="minAmount + 1"
        @input="onInput" 
      />
    </div>
    <div id="paypal-button-container" v-show="cartTotal > minAmount " class=""></div>
  </div>
  <div v-else id="confirmation">Order complete!</div>
</template>

<script>
import ComponentPrice from './Price.vue';
import { loadScript } from '@paypal/paypal-js';

export default {
  name: 'Checkout-Payment',
  components: {
    ComponentPrice
  },
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
      cartTotal: {
        type: Number,
        default: 0.01,
      },
    };
  },
  props: {
    minAmount: {
      type: Number,
      default: 0.01,
    },
  },
  methods: {

    onInput: function(event) {
      event.stopPropagation()
      this.cartTotal = event.target.value
    },
    createOrder: function(data, actions) {
      console.log('Creating order...');
      if(this.cartTotal > this.minAmount ){
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
      } else {
        return false
      }
    },
    onApprove: function(data, actions) {
      console.log(actions)
      // Authorize the transaction
      return actions.order.authorize()
      .then((response) => {
          console.log(response)
          this.paid = true

          this.$emit('onHigherBid', {amount: this.cartTotal})
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
.checkout {
  padding: 8px;
  font-family: W95FA;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.2em;
  text-align: justify;
  text-transform: uppercase;
}

.checkout h3 {
  margin: 10px 0 23px;
  font-size: 3vw;
  color: #62ff19;
  /* filter: blur(5px); */
  text-shadow: 2px 2px 0px black, -2px -2px 0px black;
}
.checkout__text--first {
  width: 72%;

}
.checkout__text--instruction {
  text-transform: none;
  font-size: 12px;

}
.checkout .checkout__price {
  position: absolute;
  left: unset;
  right: -20px;
  top: -30px;
  width: 40%;
  transform: rotateY(20deg);
}
#paypal-button-container {
  margin: 30px 0;
}

#confirmation {
  color: green;
  margin-top: 1em;
  font-size: 2em;
}
</style>
