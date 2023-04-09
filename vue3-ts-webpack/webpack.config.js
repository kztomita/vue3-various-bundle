const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

module.exports = {
  //mode: 'production',
  mode: 'development',

  entry: './src/index.ts',
  //devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: __dirname + '/public'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        /*
         * appendTsSuffixToを指定することで、
         * .vueの<script>でlang="ts"を指定できるようになるが、
         * 今度は以下のエラーがでるようになる。
         *   TS7006: Parameter 'n' implicitly has an 'any' type.
         * [参考]
         * https://github.com/vuejs/vue-loader/issues/1915
         */
        /*
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
        */
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      /* .vue内で<style>タグを使うのに必要 */
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ],
  },
  resolve: {
    alias: {
      // runtime versionではなくテンプレートコンパイラを含む完全ビルドを使う
      // https://jp.vuejs.org/v2/guide/installation.html
      'vue$': 'vue/dist/vue.esm-bundler.js'
    },
    // importでの拡張子省略設定
    extensions: [
      '.ts', '.js',
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
  ],
};
