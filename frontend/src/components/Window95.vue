<template>
<div>
  <header :style="cssProps" class="window95__header ">
    <div>
      <h2 class="window95__title">[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅] The soft drive [̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]</h2>
    </div>
    <div class="window95__buttons">
      <button class="window95__button window95__button--reduce ">
        <div class="window95__button-container">
          <img
            class="window95__button-icon"
            src="~@/assets/icons/icon-reduce.svg"
            alt="icon x for closing window"
          /> 
        </div>
      </button>
      <button class="window95__button window95__button--full-screen">
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

  <div class="bar bar--top"></div>
  <div class="bar bar--left"></div>
  <div class="bar bar--right"></div>
  <div class="bar bar--bottom"></div>
  <div class="window95__bg wizz">

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
      percentageBg: 100,
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
        '--percentageBg': this.percentageBg + "%",
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

.window95__bg {
  background: var(--backgroundUrl);
  background-size:  var(--percentage);
}
</style>
<style scoped >
.window95.wizz {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both var(--delay) 2;
}

.window95__header {
  transform: translate3d(0, 0, 2px);
  position: fixed;
  top: -2px;
  left: 0;
  right: 0;
  z-index: 120;
  padding: 5px 10px 5px 5px;
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

body {
  font-family: 'W95FA';
  z-index: 20;
  /* padding: 2px; */
}

.bar--top {
  transform: translate3d(0, 0, 2px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 54px;
  z-index: 119;
  background-color: #C3C3C3;
  /* box-shadow:  2px 2px 0px 0px #F0F0F0 inset, -2px -2px 0px 0px #262626 inset; */
}
.bar--top::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 6px;
  right: 8px;
  height: 2px;
  background: rgba(38, 38, 38, 1);
}
.bar--top::after {
  content: '';
  position: absolute;
  top: calc(100% + 2px);
  left: 8px;
  right: 10px;
  height: 2px;
  background: rgba(126, 126, 126, 1);
}
.bar--bottom {
  transform: translate3d(0, 0, 2px);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 16px;
  z-index: 119;
  background-color: #C3C3C3;
  /* box-shadow:  2px 2px 0px 0px #F0F0F0 inset, -2px -2px 0px 0px #262626 inset; */
}
.bar--bottom::before {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 6px;
  right: 8px;
  height: 2px;
  background: rgba(38, 38, 38, 1);
}
.bar--bottom::after {
  content: '';
  position: absolute;
  bottom: calc(100% + 2px);
  left: 8px;
  right: 10px;
  height: 2px;
  background: rgba(126, 126, 126, 1);
}

.bar--left {
  position: fixed;
  top: 54px;
  bottom: 0;
  left: 0;
  width: 4px;
  z-index: 119;
  background-color: #C3C3C3;
  transform: translate3d(0, 0, 2px);

  /* box-shadow:  2px 2px 0px 0px #F0F0F0 inset, -2px -2px 0px 0px #262626 inset; */
}
.bar--left::before {
  content: '';
  position: absolute;
  left: 100%;
  top: 0;
  bottom: 16px;
  /* left: 8px; */
  /* right: 8px; */
  width: 2px;
  background: rgba(38, 38, 38, 1);
}
.bar--left::after {
  content: '';
  position: absolute;
  left: calc(100% + 2px);
  top: 2px;
  bottom: 16px;
  /* left: 8px; */
  /* right: 8px; */
  width: 2px;
  background: rgba(126, 126, 126, 1);
}

.bar--right {
  position: fixed;
  top: 54px;
  bottom: 0;
  right: 0;
  width: 8px;
  z-index: 119;
  background-color: #C3C3C3;
  transform: translate3d(0, 0, 2px);
  /* box-shadow:  2px 2px 0px 0px #F0F0F0 inset, -2px -2px 0px 0px #262626 inset; */
}
.bar--right::before {
  content: '';
  position: absolute;
  right: 100%;
  top: 0;
  bottom: 16px;
  /* left: 8px; */
  /* right: 8px; */
  width: 2px;
  background: rgba(38, 38, 38, 1);
}
.bar--right::after {
  content: '';
  position: absolute;
  right: calc(100% + 2px);
  top: 2px;
  bottom: 16px;
  /* left: 8px; */
  /* right: 8px; */
  width: 2px;
  background: rgba(126, 126, 126, 1);
}

.window95__bg {
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--backgroundUrl);
  background-size:  120%;
}

@media screen and (max-width: 500px) {
  .window95__button--full-screen, .window95__button--reduce {
    display: none;
  }
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
