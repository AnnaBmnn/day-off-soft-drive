<template>
<div   :style="cssProps"  class="window95 wizz">
  <div class="window95__container">
    <header class="window95__header">
      <div>
        <h2 class="window95__title">[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅] The soft drive [̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]</h2>
      </div>
      <div class="window95__buttons">
        <button class="window95__button">
          <div class="window95__button-container">
            <img
              class="window95__button-icon"
              src="~@/assets/icons/icon-reduce.svg"
              alt="icon x for closing window"
            /> 
          </div>
        </button>
        <button class="window95__button">
          <div class="window95__button-container">
            <img
              class="window95__button-icon"
              src="~@/assets/icons/icon-full-screen.svg"
              alt="icon x for closing window"
            /> 
          </div>
        </button>
        <button class="window95__button">
          <div class="window95__button-container">
            <img
              class="window95__button-icon"
              src="~@/assets/icons/icon-close.svg"
              alt="icon x for closing window"
            /> 
          </div>
        </button>
      </div>
    </header>
    <div @scroll="onScroll"  class="window95__content-container">    
      <div class="window95__content">
        <slot>
        </slot> 
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Component-Window95',
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
    this.percentage = 100
    this.delay = Math.random() * 10
    // window.addEventListener('mousemove', this.onDrag)

  },
  methods: {
    onScroll() {
      // console.log(e)
    }
  },
};
</script>

<style scoped>
.window95 {
  font-family: 'W95FA';
  position: fixed;
  top: 0px;
  left: 0px;
  transform: translate(var(--translateX), var(--translateY));
  width: calc(100vw - 15px);
  height: calc(100vh - 10px);
  z-index: 20;
  padding: 2px;
  resize: both; 
  will-change: transform;
  background-color: #C3C3C3;
  box-shadow:  2px 2px 0px 0px #F0F0F0 inset, -2px -2px 0px 0px #262626 inset;
}

.window95__container {
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  height: 100%;
  width: 100%;
  box-shadow: 2px 2px 0px 0px #B1B1B1 inset, -2px -2px 0px 0px #7E7E7E inset;
}


.window95.wizz {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both var(--delay) 2;
}

.window95__header {
  padding: 5px;
  /* height: 42px; */
  background-color: #02007F;
  margin: 1px 1px 1px 1px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.window95__title {
  box-sizing: border-box;
  margin: 2px 0;
  font-family: 'W95FA';
  font-style: normal;
  font-weight: 100;
  font-size: 18px;
  line-height: 16px;
  color: #FFFFFF;
}

.window95__button {
  font-family: 'W95FA';
  width: 24px;
  height: 24px;
  padding: 2px;
  border-radius: 0;
  border: none;
  line-height: 21px;
  background: #C3C3C3;
  margin-left: 6px;
  box-shadow:  2px 2px 0px 0px #F0F0F0 inset, -2px -2px 0px 0px #262626 inset;
}

.window95__button-container {
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 0px 0px #B1B1B1 inset, -2px -2px 0px 0px #7E7E7E inset;
}

.window95__button-icon {
  height: 10px;
}

.window95__content-container {
  background: url('~@/assets/background/bg-ciel.jpg');
  background-size: 120%;
  position: relative;
  height: calc(100% - 80px);
  overflow: scroll;
  margin: 25px 2px;
  padding: 2px;
  box-shadow: -2px -2px 0px 0px #F0F0F0 inset, 2px 2px 0px 0px #262626 inset;
}
.window95__content-container:before {
  content: '';
  position: fixed;
  height: 2px;
  /* top: calc(100% - 2px); */
  bottom: 24px;
  left: 8px;
  right: 8px;
  background: #F0F0F0;
  z-index: 10;
  pointer-events: none;
}
.window95__content-container:after {
  content: '';
  position: fixed;
  top: 66px;
  left: 8px;
  right: 8px;
  bottom: 26px;
  box-shadow: -2px -2px 0px 0px #FFFFFF inset, 2px 2px 0px 0px #7E7E7E inset;
  pointer-events: none;
}

.window95__content {
  /* background-color: white; */
  /* max-height: 100%; */
  height: 600vh;
  /* overflow: scroll; */
  padding: 10px 8px;
  /* box-shadow: -2px -2px 0px 0px #F0F0F0 inset, 2px 2px 0px 0px #7E7E7E inset; */
  /* height: calc(100% - 40px); */
}

.window95__img {
  height: calc(100% - 89px);
  position: fixed;
  pointer-events: none;
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
