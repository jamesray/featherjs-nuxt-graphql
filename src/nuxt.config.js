import { resolve } from 'path';
import webpack from 'webpack';

module.exports = {
  head: {
    title: 'Home', // Default title.
    titleTemplate: '%s - Right Mindfulness Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ideas Blog - An open source blog written by NuxtJS' }
    ]
  },
  router: {
    linkActiveClass: 'is-active',
    //exactActiveClass: 'is-active'
  },
//   css: [
//       { src: '~assets/global.styl', lang='stylus' }
//   ],
  build: {
    babel: {
      presets: ['es2015', 'stage-0'],
      plugins: ["transform-runtime"]
    },
    extend (config, { isClient }) {
      // Extend only webpack config for client-bundle
      
      // if (isClient) {
      //   config.devtool = 'eval-source-map'
      // }

      config.resolve.alias['~src'] = resolve(__dirname);
      config.resolve.alias['~client'] = resolve(__dirname, 'client');
      config.resolve.alias['~components'] = resolve(__dirname, 'client', 'components');
    },
    // loaders: [
    //     {
    //         test: /\.s[a|c]ss$/,
    //         loader: 'style!css!sass'
    //     }
    // ],
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery'
        //'_': 'lodash'
        // ...etc.
      })
    ],
    vendor: ['graphql-tag', 'apollo-client', 'jquery']
  },
  
  env: {
    baseUrl: 'http://localhost:3000'
  },

  loading: {
    color: 'purple'
  },
  plugins: [
    { src: '~plugins/bulma' },
    { src: '~plugins/font-awesome' },
    { src: '~plugins/apollo' }
  ]
};
