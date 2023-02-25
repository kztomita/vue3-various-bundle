<style scoped>
.title {color: red;}
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
    <p class="title">TS Component</p>
    <p>Counter: {{ counter }}</p>
    <button v-on:click="counter++">Increment</button>
  </div>
</template>

<!-- lang="ts"の指定があるとなぜか以下の警告が出る。
     export 'render' (imported as 'render') was not found
-->
<script src="./counter-component-ts.ts"></script>
