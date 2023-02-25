import { nodeResolve } from '@rollup/plugin-node-resolve'; // for third party module
import replace from '@rollup/plugin-replace';
import alias from '@rollup/plugin-alias';
import vue from 'rollup-plugin-vue'; // .vueファイルimport用
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'iife',
      sourcemap: true,
      file: 'public/main.js',
    },
  ],
  plugins: [
    nodeResolve(),
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
    vue(),
    // .vue内で<style>タグを使うための設定。
    // <style src="">で外部ファイルを読むなら不要。
    postcss(),
  ]
};
