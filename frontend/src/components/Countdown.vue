<template>
  <p class="checkout__text--instruction">
    <span class="highlight">{{days}} </span> <span class="top">days </span> 
    <span class="highlight"> {{hours}} </span>  <span class="top">hours </span> 
    <span class="highlight"> {{minutes}} </span>  <span class="top">minutes </span> 
    <span class="highlight"> {{seconds}} </span>  <span class="top">seconds </span> 
  </p>
</template>

<script>
export default {
  name: 'ComponentCountdown',
  data() {
    return {
      countdownDate: '2023-07-18:00:00Z', // Replace with your desired countdown date
      countdownInterval: null,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },
  mounted() {
    this.startCountdown();
  },
  beforeUnmount() {
    this.stopCountdown();
  },
  methods: {
    startCountdown() {
      this.countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = new Date(this.countdownDate).getTime() - now;

        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
          this.stopCountdown();
          // Countdown has ended, perform any desired action
        }
      }, 1000);
    },
    stopCountdown() {
      clearInterval(this.countdownInterval);
    }
  }
};
</script>

<style scoped>
.top {
  display: inline-block;
  transform: translateY(-16px);
  /* vertical-align: top; */
}
.checkout__text--instruction {
  text-transform: none;
  font-size: 12px;
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
</style>
