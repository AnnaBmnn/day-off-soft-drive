<template>
<div v-show="openModalData" ref="card"  :style="cssProps"  class="card wizz">
  <div class="card__container">
    <header class="card__header" @mousedown="onMouseDown" @touchstart="onMouseDown" >
      <h2 class="card__title">{{title}} </h2>
      <button class="card__button" @click="onClick">
        <div class="card__button-container">
          <img
            class="card__button-icon"
            src="~@/assets/icons/icon-close.svg"
            alt="icon x for closing window"
          /> 
        </div>
      </button>
    </header>
    <div class="card__content">
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
      openModalData: false
    };
  },
  props: {
    openModal: Boolean,
    title: String
  },
  watch: {
    openModal(newValue, oldValue){
      if(newValue !== oldValue){
        this.openModalData = newValue
      }
    }
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
    this.openModalData = this.openModal
    this.percentage = (Math.random() * 40) + 20
    this.translateX = Math.random() * window.innerWidth * 0.7
    this.translateY = Math.random() * window.innerHeight * 0.8 + 100
    this.delay = Math.random() * 10
    window.addEventListener('mousemove', this.onDrag)
    window.addEventListener('touchmove', this.onDrag)
    window.addEventListener('mouseup', this.onMouseUp)
    window.addEventListener('touchend', this.onMouseUp)

  },
  methods: {
    onClick(){
      this.openModalData = false
    },
    onMouseDown(e){
      // e.preventDefault()

      if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
        const event = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
        const touch = event.touches[0] || event.changedTouches[0]

        const boundingClientRect = this.$refs.card.getBoundingClientRect()
        console.log(boundingClientRect)
        
        this.offsetX = touch.pageX - boundingClientRect.left
        this.offsetY = touch.pageY - boundingClientRect.top
      } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
        this.offsetX = e.offsetX
        this.offsetY = e.offsetY
      }
      this.isDrag = true

    },
    onMouseUp(){
      this.isDrag = false
    },
    onDrag(e){
      if(this.isDrag){
        if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
            const event = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
            const touch = event.touches[0] || event.changedTouches[0]
            this.translateX = touch.pageX - this.offsetX
            this.translateY = touch.pageY - this.offsetY

        } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
            this.translateX = e.x - this.offsetX
            this.translateY = e.y - this.offsetY
        }
        // console.log(e)
        // this.translateX = e.x - this.offsetX
        // this.translateY = e.y - this.offsetY
      }
    }
  },
};
</script>

<style scoped>
.card {
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translate(var(--translateX), var(--translateY));
  width: 47vw;
  min-width: 350px;
  min-height: 475px;
  border-radius: 5px;
  z-index: 15;
  resize: both;
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
.card__content {
  height: fit-content;
}
.card__header {
  cursor: move;
  margin: 0;
  font-family: 'Times New Roman', Times, serif;
  /* padding: 5px 4px 5px 8px; */
  background: #C4C4C4;
  position: relative;
  z-index: 12;
  display: flex;
  justify-content: space-between;
  padding: 2px;
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

.card__button {
  cursor: pointer;
  font-family: 'W95FA';
  width: 24px;
  height: 24px;
  margin-right: 4px;
  margin-top: 2px;
  padding: 2px;
  border-radius: 0;
  border: none;
  line-height: 21px;
  background: #C3C3C3;
  margin-left: 6px;
  box-shadow:  2px 2px 0px 0px #F0F0F0 inset, -2px -2px 0px 0px #262626 inset;
}

.card__button-container {
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 0px 0px #B1B1B1 inset, -2px -2px 0px 0px #7E7E7E inset;
}

.card__button-icon {
  height: 10px;
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
