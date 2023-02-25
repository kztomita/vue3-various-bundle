# このリポジトリは...

Vue3のSFC(Single File Component)をBundleする色々な例。<br />
JavaScriptだけのケース、TypeScriptを使うケース。<br />
rollupでバンドルするケース、webpackでバンドルするケースなど。

## vue3-js-rollup

JavaScriptのコンポーネントをrollupでバンドルする例。<br />
できるだけシンプルにするために、babel等は使っていない。

備考:

- rollupを使う場合はpackage.jsonに"type": "module"の指定が必要。

## vue3-ts-rollup

vue3-js-rollupに加えてTypeScriptのコンポーネントもバンドルする例。

備考:

- rollup.config.jsでは@rollup/plugin-typescriptではなくrollup-plugin-typescript2を使っている。@rollup/plugin-typescriptだと.vueファイルの&lt;script lang="ts"&gt;内のコードがJavaScriptとして扱われてしまいエラーとなる。

## vue3-js-webpack

JavaScriptのコンポーネントをwebpackでバンドルする例。

## vue3-ts-webpack

vue3-js-webpackに加えてTypeScriptのコンポーネントもバンドルする例。

備考:

- TypeScriptのコンポーネント(src/components/counter-component-ts.vue)の&lt;script&gt;タグでlang="ts"属性の指定があると、"export 'render' (imported as 'render') was not found"の警告がでるため、lang="ts"の指定は削除している。

## vue3-ts-vite

TypeScriptのコンポーネントをviteでバンドルする例。
