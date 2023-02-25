import { defineComponent } from 'vue'

// Componentとしては意味がないがTypeScriptのトランスパイルが通るか
// 確認するためのTypeScript code。
const something: string = 'foo';

export default defineComponent({
  data: function () {
    return {
      counter: 0
    }
  }
});
