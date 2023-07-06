<template>
  <div class="checkout" v-if="!paid" >
    <div class="">
      <h3 class="checkout__text--first checkout__big-title">EXTERNAL HDD SHAPED AS AN EXTREMELY TENDER TEDDY BEAR</h3>
      <p class="checkout__text--instruction checkout__text--first">
        Place the highest bid to get the softest hard drive on the market
      </p>

      <div class="checkout__content">
        <div class="left checkout__column">
          <img class="checkout__img" src="~@/assets/official/teddy_new.png" alt="">
          <ComponentPrice class="checkout__price" :priceValue="minAmount + 1" />

        </div>
        <div class="right checkout__column">
          <div class="checkout__text">
            <h3>
              Time left to bid : 
            </h3>
            <ComponentCountdown />

            <p class="checkout__date ">
              <span class="checkout__text--instruction">Bid end date : 10 june at 16:00</span>.
            </p>

            <p class="checkout__text--instruction">Highest bid : <span class="">{{minAmount}}.00</span> $</p>
            <div class="checkout__bid">
              
              <h3 class="checkout__input-title">Place a bid :</h3>
              <span>
                <input 
                  class="checkout__input"
                  type="number" 
                  :min="minAmount + 1"  
                  id="amount" 
                  name="amount"
                  :placeholder="minAmount + 1"
                  @input="onInput" 
                />
                €
                <span class="checkout__currency"></span>
              </span>
            </div>
              <div id="paypal-button-container" v-show="cartTotal > minAmount " class=""></div>
            
            <p class="checkout__text--instruction">
              After clicking on pay, you will redirected to the paypal plateforme.
            </p>
          </div>
        </div>
      </div>
      <p class="checkout__text--instruction">
        Disclaimer, if you bid more than once, you will see a withdrawal of each amount for each bid. We promise to cancel the lowest bids as soon as possible. If you have any questions, please feel free to contact us at lorep-ipsum@dolores.com.
      </p>



    </div>
  </div>
  <div v-else id="confirmation">Order complete!</div>
</template>

<script>
import ComponentCountdown from './Countdown.vue';
import ComponentPrice from './Price.vue';
import { loadScript } from '@paypal/paypal-js';

export default {
  name: 'Checkout-Payment',
  components: {
    ComponentPrice,
    ComponentCountdown
  },
  beforeCreate: function() {
    loadScript({ 'client-id': CLIENT_ID, 'intent': 'authorize' }).then((paypal) => {
      console.log(paypal)
      paypal
        .Buttons({
          style: {
          },
          createOrder: this.createOrder,
          onApprove: this.onApprove,
        })
        .render('#paypal-button-container');
    });
  },
  data() {
    return {
      paid: false,
      days: 8,
      hours: 5,
      minutes: 12,
      seconds: 32,
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

<style scoped>
h3 {
  font-weight: 600;
  font-size: 16px;
}
.checkout {
  padding: 8px;
  font-family: W95FA;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.2em;
  text-align: justify;
  text-transform: uppercase;
  height: 450px;
  overflow: scroll;
}

.highlight {
  filter: blur(0.1px);
  font-family: sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 32px;
  text-align: center;
  color: yellow;
  line-height: 22px;
  letter-spacing: 0.1px;
  -webkit-text-stroke: 1.5px rgb(84, 152, 255);
  text-stroke: 1.5px rgb(84, 152, 255);
}

.top {
  display: inline-block;
  transform: translateY(-16px);
  /* vertical-align: top; */
}
.line {
  position: relative;
  margin-bottom: 24px;
}
.line::after {
  content: '';
  position: absolute;
  background: black;
  width: calc(100% );
  height: 1px;
  left: 0;
  top: calc(100% + 8px);
}

.checkout__img {
  max-width: 110%;
  width: 80%;
  margin: 0 auto;
  position: absolute;
  left: 40%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;

}

.checkout__logo {
  width: 25%;
}
.checkout__date {
  margin: 0 0 10px;
}
.checkout__big-title {
  margin: 3px 0 12px;
  font-size: 1.8vw;
  line-height: 2.2vw;
  /* filter: blur(0.1px);
  font-family: sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  text-align: justify;
  color: #fea5d2;
  letter-spacing: 0.1px;
  -webkit-text-stroke: 1.5px yellow;
  text-stroke: 1.5px yellow; */
}
.checkout__content {
  display: flex;

}
.checkout__column.left {
  position: relative;
  min-width: 42%;
  max-width: 42%;
  width: 42%;
  flex-basis: 42%;
}
.checkout__column.right {
  padding-right: 20px ;
  flex-basis: 58%;
  min-width: 58%;
  max-width: 58%;
  width: 58%;
}
.checkout__text--first {
  width: 72%;
}
.checkout__date {
  
}
.checkout__text--instruction {
  text-transform: none;
  font-size: 12px;

}
.checkout .checkout__price {
  position: absolute!important;
  left: unset;
  right: -40px;
  top: 30%;
  z-index: -1;
  transform: scale(0.8) rotateY(20deg);
  animation: none!important;
}
#paypal-button-container {
  margin: 30px 0;
}
.checkout__bid {
  display: flex;
}
.checkout__input-title {
  text-align: left;
  white-space: nowrap;
}
.checkout__input {
  text-align: right;
  max-width: 50%;
  display: inline;
  filter: blur(0.5px);
  border: none;
  border-bottom: 1px solid black;
  background: transparent;
  font-family: sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 32px;
  color: yellow;
  line-height: 22px;
  letter-spacing: 0.1px;
  -webkit-text-stroke: 1.5px rgb(84, 152, 255);
  text-stroke: 1.5px rgb(84, 152, 255);
}
.checkout__input::placeholder {
  color: yellow;
  filter: blur(1px);

  opacity: 0.5;
}



#confirmation {
  color: green;
  margin-top: 1em;
  font-size: 2em;
}
</style>

<style >
.paypal-button-container  {
  display: flex!important;
}
</style>
