<template>
<div v-show="openModal" @mousedown="onMouseDown"  :style="cssProps"  class="card wizz">
  <div class="card__container">
    <header class="card__header">
      <h2 class="card__title">[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅] Place a bid [̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅] </h2>
      <button class="window95__button">
        <div class="window95__button-container">
          <img
            class="window95__button-icon"
            src="~@/assets/icons/icon-close.svg"
            alt="icon x for closing window"
          /> 
        </div>
      </button>
    </header>
    <div>
      <slot></slot> 
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Component-Card',
  data() {
    return {
      translateX: 0,
      translateY: 0,
      percentage: 0,
      delay: 0,
      isDrag: false,
    };
  },
  props: {
    openModal: Boolean
  },
  computed: {
    cssProps() {
      return {
        '--translateX': (this.translateX ) + "px",
        '--translateY': this.translateY + "px",
        '--percentage': this.percentage + "%",
        '--delay': this.delay + "s",
      }
    }
  },
  mounted() {
    this.percentage = (Math.random() * 40) + 20
    this.translateX = Math.random() * window.innerWidth * 0.7
    this.translateY = Math.random() * window.innerHeight * 0.7
    this.delay = Math.random() * 10
    window.addEventListener('mousemove', this.onDrag)
    window.addEventListener('mouseup', this.onMouseUp)

  },
  methods: {
    onMouseDown(e){
      // e.preventDefault()
      this.offsetX = e.offsetX
      this.offsetY = e.offsetY
      this.isDrag = true
    },
    onMouseUp(){
      this.isDrag = false
    },
    onDrag(e){
      if(this.isDrag){
        this.translateX = e.x - this.offsetX
        this.translateY = e.y - this.offsetY
      }
    }
  },
};
</script>

<style scoped>
.card {
  cursor: move;
  position: fixed;
  top: 0%;
  left: 0%;
  transform: translate(var(--translateX), var(--translateY));
  width: 40vw;
  aspect-ratio: 16/12;
  min-width: 350px;
  border-radius: 5px;
  z-index: 22;
  /* resize: both; */
  will-change: transform;
}
.card__container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background:  url(https://media.giphy.com/media/x8Jmfuz6xbVCM/giphy.gif); */
  /* background: url('~@/assets/logo-mask.svg') ; */
  background-size: var(--percentage);
  backdrop-filter: blur(10px);
  overflow: hidden;
}
.card.wizz .card__container{
  /* animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both var(--delay) 2; */
}
.card__container:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: inset -2px -2px 0px #262626, inset 2px 2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E, inset 4px 4px 0px #B1B1B1;
  /* border-radius: 5px; */
  z-index: 13;
  pointer-events: none;
}

.card__header {
  margin: 0;
  font-family: 'Times New Roman', Times, serif;
  /* padding: 5px 4px 5px 8px; */
  background: #C4C4C4;
  position: relative;
  z-index: 12;
  display: flex;
  justify-content: space-between;
}
.card__title {
  margin: 0;
  padding: 5px 4px 5px 8px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 30px;
  font-size: 14px;
  font-style: italic;
  text-align: left;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-2px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(4px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-8px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(8px, 0, 0);
  }
}
</style>
