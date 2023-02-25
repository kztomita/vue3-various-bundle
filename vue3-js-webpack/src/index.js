import { createApp } from 'vue';
import CounterComponent from './components/counter-component.vue';

window.onload = function () {
  const app = createApp({
    data() {
      return {
        message: 'This is vue3-js-webpack.',
      }
    }
  });

  app.component('counter-component', CounterComponent);
  app.mount('#app');
}

