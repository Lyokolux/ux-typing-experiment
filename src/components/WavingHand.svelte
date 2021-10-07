<div class="d-flex justify-content-center">
  <span class="waving-hand">👋</span>
</div>

<style>
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(16deg);
    }
    20% {
      transform: rotate(-6deg);
    }
    30% {
      transform: rotate(16deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(16deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .waving-hand {
    display: inline-block;
    font-size: 5em;
    animation: wave 2.1s 0.6s infinite;
    transform-origin: 75% 75%;
  }
</style>