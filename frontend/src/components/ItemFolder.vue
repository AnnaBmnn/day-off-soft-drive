<template>
<div>
    <button :class="`item-folder ${openModal ? 'blur' : ''}`" @click="this.openModal = true">
        <img class="item-folder__icon" src="~@/assets/official/lovefolder.png">
        <div class="item-folder__title">Check the files</div>
    </button>
    <ComponentCard class="card" title="My soft drive" :openModal="openModal" @closeModalEvent="this.openModal = false">
        <div :class="`item-folder__card ${backgroundData}`">
            <div class="item-folder__text">
                Launching the unhardest hard disk on the market. An external HDD shaped as an extremely tender teddy bear, lovingly crafted in Tokyo, that comes fulfilled with ultra cheezy files:
            </div>
            <div class="item-folder__content">
                <div class="item-folder--inner" @mouseenter="backgroundData = 'hannaMontana'" >
                    <img class="item-folder__img" src="~@/assets/official/purple-heart.png">
                    <div class="item-folder__title">Hannah Montana all episodes</div>
                </div>
                <div class="item-folder--inner" @mouseenter="backgroundData = 'noteBook'" >
                    <img class="item-folder__img" src="~@/assets/official/yellow-heart.png">
                    <div class="item-folder__title">The Notebook (Full movie HD)</div>
                </div>
                <div class="item-folder--inner" @mouseenter="backgroundData = 'panda'" >
                    <img class="item-folder__img" src="~@/assets/official/green-heart.png">
                    <div class="item-folder__title">100 pictures of Baby Pandas</div>
                </div>
                <div class="item-folder--inner"  @mouseenter="backgroundData = 'paolo'" >
                    <img class="item-folder__img" src="~@/assets/official/purple-heart.png">
                    <div class="item-folder__title">Paulo Coelho's full bibliography in PDF</div>
                </div>
                <div class="item-folder--inner" @mouseenter="backgroundData = 'mom'" >
                    <img class="item-folder__img" src="~@/assets/official/yellow-heart.png">
                    <div class="item-folder__title">Zip with Mom sticker collections</div>
                </div>
                <div class="item-folder--inner" @mouseenter="backgroundData = 'animal'" >
                    <img class="item-folder__img" src="~@/assets/official/green-heart.png">
                    <div class="item-folder__title">Cutest Baby Animals; Video Compilation</div>
                </div>
                <div class="item-folder--inner" @mouseenter="backgroundData = 'rosalia'" >
                    <img class="item-folder__img" src="~@/assets/official/purple-heart.png">
                    <div class="item-folder__title">Rosalía and Rauw Alejandro’s engagement moment in loop</div>
                </div>
                <div class="item-folder--inner" @mouseenter="backgroundData = 'ed'" >
                    <img class="item-folder__img" src="~@/assets/official/yellow-heart.png">
                    <div class="item-folder__title">The best of Ed Sheeran in acoustic</div>
                </div>
                <div class="item-folder--inner" @mouseenter="backgroundData = 'shawn'" >
                    <img class="item-folder__img" src="~@/assets/official/green-heart.png">
                    <div class="item-folder__title">Zip containing Shawn Mendez's greatest hit</div>
                </div>
                <div class="item-folder--inner"  @mouseenter="backgroundData = 'cupcake'" >
                    <img class="item-folder__img" src="~@/assets/official/purple-heart.png">
                    <div class="item-folder__title">100 cupcake recipe</div>
                </div>
                <div class="item-folder--inner"  @mouseenter="backgroundData = 'rainbow'" >
                    <img class="item-folder__img" src="~@/assets/official/yellow-heart.png">
                    <div class="item-folder__title">Double rainbow pictures compilation</div>
                </div>
                <div class="item-folder--inner"  @mouseenter="backgroundData = ''" >
                </div>
            </div>
        </div>

    </ComponentCard>
</div>
</template>

<script>
import ComponentCard from './Card.vue';

export default {
  name: 'ItemFolder',
  data() {
    return {
      translateX: 0,
      openModal: false,
      backgroundData: null
    };
  },
  components: {
    ComponentCard,
  },
  props: {

  },
  computed: {
    cssProps() {
      return {
        '--translateX': (this.translateX ) + "px",
      }
    }
  },
  mounted() {
    this.translateX = Math.random() * window.innerWidth * 0.7

  },
  methods: {

  },
};
</script>

<style scoped>
.card {
    resize: both;
}
.item-folder {
    cursor: pointer;
    font-family: 'W95FA', Times, serif;
    font-size: 14px;
    text-transform: uppercase;
    width: 15vw;
    max-width: 15vw;
    min-width: 15vw;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    box-shadow: none;
    filter: blur(0px);
    transition: all 0.3s linear;
}
.item-folder.blur {
    filter: blur(5px);
}
.item-folder:hover {
    filter: blur(5px);
}
.item-folder__icon {
    width: 30%;
}
.item-folder__title {
    margin-top: 8px;
}

@media screen and (max-width: 1100px) {
    .item-folder {
        width: 20vw;
        max-width: 20vw;
        min-width: 20vw;
        
    }
}

@media screen and (max-width: 800px) {
    .item-folder{
        width: 25vw;
        max-width: 25vw;
        min-width: 25vw;

    }
}
@media screen and (max-width: 500px) {
    .item-folder{
        width: 33.333vw;
        max-width: 33.333vw;
        min-width: 33.333vw;

    }
}


.item-folder__card.hannaMontana {
    background-image: url('https://media.giphy.com/media/fDqGThpuG6vS/giphy.gif') ;

}
.item-folder__card.noteBook {
    background-image: url('https://media.giphy.com/media/iFKDPGLl3k5hu/giphy.gif');
}
.item-folder__card.panda {
    background-image: url('https://media.giphy.com/media/EatwJZRUIv41G/giphy.gif');
}
.item-folder__card.paolo {
    background-image: url('https://img1.picmix.com/output/pic/normal/0/3/5/2/4952530_b84a9.gif');
}
.item-folder__card.mom {
    background-image: url('https://media.giphy.com/media/zxdeRFhiE5BiU/giphy.gif');
}
.item-folder__card.animal {
    background-image: url('https://media.giphy.com/media/j5QdyFXZI5WvE8CjVT/giphy.gif');
}
.item-folder__card.rosalia {
    background-image: url('https://media.tenor.com/gDwSkPkI-EoAAAAd/rosalia-rauw-alejandro.gif');
}
.item-folder__card.ed {
    background-image: url('https://media.giphy.com/media/yMc2BCpIc7LFe/giphy.gif');
}
.item-folder__card.shawn {
    background-image: url('https://media.giphy.com/media/3o6fIVdqTFNp99MxUY/giphy.gif');
}
.item-folder__card.cupcake {
    background-image: url('https://img1.picmix.com/output/stamp/normal/0/9/4/3/1123490_95206.gif');
}
.item-folder__card.rainbow {
    background-image: url('https://media.giphy.com/media/6p26sp0YT2LAI/giphy.gif');
}
.item-folder__card {
    padding: 4px 8px;
    min-height: 450px;
    background-size: cover;
}

.item-folder__content {
    display: flex;
    align-items: self-start;
    justify-content: space-between;
    flex-wrap: wrap;
}
.item-folder__content::after {
  content: "";
  /* flex: auto; */
}
.item-folder--inner {
    flex-basis: 22%;
    min-width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.item-folder--inner .item-folder__title {
    max-width: 80%;
    color: white;
    font-size: 12px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 24px;
}

.item-folder__img {
    width: 36px;
}
.item-folder__icon {
    animation: rotate 10000ms ease-in-out infinite; 

}
.item-folder__text {
  font-family: W95FA;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.2em;
    text-align: justify;
    text-transform: uppercase;
    color: white;
    margin-bottom: 18px;
}

@keyframes rotate {
  0%{
    transform: rotateY(0deg);
  }
  100% {
    transform:  rotateY(360deg);
  }
}
</style>
