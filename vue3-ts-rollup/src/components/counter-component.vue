<style scoped>
.title {color: blue;}
button {
  color: black;
  border-radius: 2px;
  border: 1px solid gray;
  background: linear-gradient(to bottom, #fcfcfc, #ddd);
  padding: 5px 10px;
}
button:hover {
  background: linear-gradient(to bottom, #fcfcfc, #fcfcfc);
}
button:active {
  background: linear-gradient(to bottom, #eee, #ccc);
}

</style>

<template>
  <div class="container">
    <p class="title">JS Component</p>
    <p>Counter: {{ counter }}</p>
    <button v-on:click="counter++">Increment</button>
  </div>
</template>

<script src="./counter-component.js"></script>
