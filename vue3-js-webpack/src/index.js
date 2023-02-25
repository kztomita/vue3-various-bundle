import { createApp } from 'vue';
import CounterComponent from './components/counter-component.vue';

function onInitialize() {
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

document.addEventListener('DOMContentLoaded', onInitialize);

