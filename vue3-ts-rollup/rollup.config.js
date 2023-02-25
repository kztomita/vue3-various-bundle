import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import typescript2 from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';
import alias from '@rollup/plugin-alias';
import vue from 'rollup-plugin-vue'; // .vueファイルimport用
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: {
    format: 'iife',
    sourcemap: true,
    file: 'public/main.js'
  },
  plugins: [
    nodeResolve({browser: true}),
    alias({
      entries: [
        {find: 'vue', replacement: './node_modules/vue/dist/vue.esm-bundler.js'},
      ]
    }),
    // for importing vue
    // https://v2.ja.vuejs.org/v2/guide/installation.html
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify('production'),
    }),
    // .vue内の<script>タグ内をtsとして扱うにはrollup-plugin-typescript2を
    // 使う必要がある。@rollup/plugin-typescriptだとなぜかjsとして
    // 扱われてしまう。
    //typescript(),
    typescript2(),
    vue(),
    // .vue内で<style>タグを使うための設定。
    postcss(),
  ]
};
