<template>
  <div>
    <ComponentChangeBackground v-on:onBgChange="onBgChange" />
    <Checkout-Item />

    <!-- <div class="mask"></div> -->
    <ComponentCard :openModal="openModal">
      <Checkout-Payment :minAmount="bid" v-on:onHigherBid="updateBidAmount"  />
    </ComponentCard>
    <ComponentWindow95 >
      <ComponentPrice :priceValue="bid" />
      <ComponentAdd @openModalEvent="this.openModal = true" />
      <ComponentPrice :priceValue="bid" />
      <ComponentAdd @openModalEvent="this.openModal = true" />
      <ComponentPrice :priceValue="bid" />
      <ComponentAdd @openModalEvent="this.openModal = true" />
      <ComponentPrice :priceValue="bid" />
      <ComponentAdd @openModalEvent="this.openModal = true" />
      <ComponentPrice :priceValue="bid" />
      <ComponentAdd @openModalEvent="this.openModal = true" />
      <ComponentPrice :priceValue="bid" />
      <ComponentPrice :priceValue="bid" />
      <ComponentPrice :priceValue="bid" />
      <ComponentPrice :priceValue="bid" />
      <ComponentAdd @openModalEvent="this.openModal = true" />
      <ComponentPrice :priceValue="bid" />
      <ComponentAdd @openModalEvent="this.openModal = true" />
      <ComponentAdd @openModalEvent="this.openModal = true" />
      <ComponentAdd @openModalEvent="this.openModal = true" />
      <ComponentAdd @openModalEvent="this.openModal = true" />

      <ComponentMarquee  /> 
      <ComponentMarquee  /> 
      <ComponentAddBig  />

      <AddBigPlug  />
      <img
        class="window95__img"
        src="~@/assets/peluche.png"
        alt="Gif of a red rose turning and text saying I love you"
      />
    </ComponentWindow95>
    <!-- <ComponentCardSoftDrive /> -->
  </div>
</template>

<script>
import CheckoutPayment from './components/Checkout.vue';
import CheckoutItem from './components/Item.vue';
import ComponentCard from './components/Card.vue';
import ComponentChangeBackground from './components/ChangeBg.vue';
//import ComponentThreejs from './components/ComponentThreejs.vue';
import ComponentWindow95 from './components/Window95.vue';
import ComponentPrice from './components/Price.vue';
import ComponentAdd from './components/Add.vue';
import ComponentAddBig from './components/AddBig.vue';
import AddBigPlug from './components/AddBigPlug.vue';
import ComponentMarquee from './components/Marquee.vue';

import gql from "graphql-tag";


export default {
  name: 'App',
  components: {
    CheckoutPayment,
    CheckoutItem,
    //ComponentThreejs,
    ComponentCard,
    ComponentChangeBackground,
    ComponentWindow95,
    ComponentPrice,
    ComponentAdd,
    ComponentAddBig,
    AddBigPlug,
    ComponentMarquee
    // ComponentCardSoftDrive
  },
  computed: {
  },
  data() {
    return {
      bid: 0,
      homepage: [],
      openModal: false
    };
  },
  watch: {
    bid(newValue, oldValue){
      if(newValue !== oldValue){
        console.log('new bid has been made')
      }
    }
  },
  apollo: {
    // homepage: gql`
    //   query Homepage {
    //     homepage {
    //       data {
    //         id
    //         attributes {
    //           Bid
    //         }
    //       }
    //     }
    //   }
    // `,
  },
  mounted(){
    console.log('mounted')
    this.getBidAmount()
    window.setInterval(()=> {
      this.getBidAmount()
    }, 60000)
  },
  methods: {
    getBidAmount() {
      // Call to the graphql mutation
      this.$apollo.mutate({
        // Query
        mutation: gql`    
          query Homepage {
            homepage {
              data {
                id
                attributes {
                  Bid
                }
              }
            }
          }
        `
      ,
      }).then((data) => {
        // Result
        this.bid = parseFloat(data.data?.homepage?.data?.attributes?.Bid)

      }).catch((error) => {
        // Error
        console.error(error)
        // We restore the initial user input
      })
    },
    updateBidAmount(e) {
      const amount = parseFloat(e.amount)
      // We save the user input in case of an error

      // Call to the graphql mutation
      this.$apollo.mutate({
        // Query
        mutation: gql`    
        
        mutation ($Bid: Float) {
          updateHomepage( data: { Bid: $Bid}) {
            data {
              id
              attributes {
                Bid
              }
            }
          }
        }`
      ,
        // Parameters
        variables: {
          Bid: amount,
        },
        // Update the cache with the result
        // The query will be updated with the optimistic response
        // and then with the real result of the mutation
        update: () => {

          console.log('upadte')
        },
      }).then(() => {
        // Result
        this.bid = amount
      }).catch((error) => {
        // Error
        console.error(error)
        // We restore the initial user input
      })
    },
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
  box-sizing: border-box;
}
div {
  box-sizing: border-box;
}
.presentation {
  position: relative;
  z-index: 1;
  height: 65vh;
}
.presentation h1 {
  margin: 10px 0 23px;
  text-transform: uppercase;
  font-size: 20vw;
  color: #62ff19;
  text-shadow: 2px 2px 0px black, -2px -2px 0px black, 0 0 24px white;
}
#app {
  font-family: 'W95FA', Times, serif;
  height: 100vh;
  max-height: 100vh;
  margin: 0;
  padding: 0;
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

.window95__img {
  pointer-events: none;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
}

</style>
