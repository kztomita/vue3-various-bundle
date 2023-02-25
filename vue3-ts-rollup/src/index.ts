import { createApp } from 'vue';
import CounterComponent from './components/counter-component.vue';
import CounterComponentTs from './components/counter-component-ts.vue';

function onInitialize() {
  const app = createApp({
    data() {
      return {
        message: 'This is vue3-ts-rollup.',
      }
    }
  });

  app.component('counter-component', CounterComponent);
  app.component('counter-component-ts', CounterComponentTs);
  app.mount('#app');
}

document.addEventListener('DOMContentLoaded', onInitialize);
