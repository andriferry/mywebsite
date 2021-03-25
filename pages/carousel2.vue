<template>
  <div class="container2">
    <div class="carouselContainer">
      <div class="carouselImgs slide1">
        <h1>Slide1</h1>
      </div>
      <div class="carouselImgs slide2">
        <h1>Slide2</h1>
      </div>
      <div class="carouselImgs slide3">
        <h1>Slide3</h1>
      </div>
      <div class="carouselImgs slide4">
        <h1>Slide4</h1>
      </div>
      <span class="prev" id="prev" v-text="'<'"></span>
      <span class="next" id="next"> > </span>
    </div>
  </div>
</template>

<script>
export default {
    layout: "secondLayout"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font-family: "Source Sans Pro", sans-serif;
}

h1 {
  font-size: 3rem;
}

.container2 {
  width: 100%;
  height: 200vh;
  background-color: #4a9e961f;
  display: flex;
  align-items: center;
  justify-items: center;
}

.carouselContainer {
  width: 60%;
  height: 90%;
  margin: 0 auto;
  position: relative;
  background-color: #fff;
  border-radius: 1.5rem;
  overflow: hidden;
}

.carouselImgs {
  width: 100%;
  height: 100%;
  animation: fade 1.5s;
  padding: 20px;
  text-align: center;
  align-items: center;
  justify-items: center;
  justify-content: center;
}

.prev,
.next {
  position: absolute;
  top: 49%;
  cursor: pointer;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

.slide1 {
  background-color: #d8e2dc;
}

.slide2 {
  background-color: #577399;
}

.slide3 {
  background-color: #bdd5ea;
}

.slide4 {
  background-color: #f7f7ff;
}
</style>
