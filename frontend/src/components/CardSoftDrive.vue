<template>
<div  @mousedown="onMouseDown"  :style="cssProps"  class="card wizz">
  <div class="card__container">
    <header class="card__header">
      <h2 class="card__title">***__**__ * SOFT DRIVE * __**__***</h2>
    </header>
    <div>
    <div class="card__main">
      <div class="card__img-container">
        <img
          class="item"
          src="~@/assets/peluche.png"
          alt="Gif of a red rose turning and text saying I love you"
        />  
      </div>
      <div class="card__infos">
        <div class="card__block">
          <p>Soft-drive, a hard drive with soft content</p>
        </div>
        <div class="card__block">
          <p>
            You want to fill your heart and your computer with softness, 
            days off has what you need.
            By making a bid, you get the change to win 
          </p>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Component-Card-Soft-Drive',
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
      e.preventDefault()
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
  width: 75vw;
  height: 90vh;
  min-width: 350px;
  border-radius: 5px;
  z-index: 20;
  /* resize: both; */
  will-change: transform;
  z-index: 30;
}
.card__container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: var(--percentage);
  backdrop-filter: blur(8px);
  overflow: hidden;
  background-color: rgba(71, 143, 200 , 0.8);
}
.card.wizz .card__container{
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both var(--delay) 2;
}
.card__container:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: inset -2px -2px 0px #262626, inset 2px 2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E, inset 4px 4px 0px #B1B1B1;
  border-radius: 5px;
  z-index: 13;
}
.card__container:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 5px;
  z-index: 0;
  background-size: contain;
  background: url('~@/assets/background/bg-ciel.jpg') repeat 30%;
  opacity: 0.3;
}

.card__header {
  margin: 0;
  font-family: 'Times New Roman', Times, serif;
  /* padding: 5px 4px 5px 8px; */
  background: #C4C4C4;
  position: relative;
  z-index: 12;
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

.card__main {
  padding: 15px;
  display: flex;
}

.card__img-container {
  position: relative;
  border-radius: 10px;
  /* box-shadow: 0px 4px 64px 100px #ffffff; */
  background-color: rgba(71, 143, 200 , 0.8);
  width: 50%;
  /* box-shadow: inset -4px -4px 0px #F0F0F0, inset 4px 4px 0px #F0F0F0, inset -4px -4px 0px #B1B1B1, inset 4px 4px 0px #B1B1B1; */
  /* background: url('~@/assets/background/bg-noise.png') repeat ; */
  /* border: 4px solid white; */
}
.card__img-container:before {
  content: '';
  position: absolute;
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  box-shadow: inset 4px 4px 13px #ebebeb; 
}

.card__img-container img {
  width: 100%;
}
.card__block {
  max-width: 350px;
  position: relative;
  margin: 0 40px 50px;
  padding: 10px 15px;
  border-radius: 15px;
  box-shadow: inset 4px 4px 10px #ebebeb; 
  backdrop-filter: blur(8px);
  color: white;
}
.card__block:before {
  /* content: ''; */
  position: absolute;
  top: -10px;
  left: -10px;
  bottom: -10px;
  right: -10px;
  box-shadow: inset 4px 4px 20px #ebebeb; 
  backdrop-filter: blur(8px);
  border-radius: 15px;
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
