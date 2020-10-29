# storybook-less-loader

Add less loader with storybook

1. Install: `npm i storybook-less-loader less-loader less --save-dev`
2. Open `.storybook/main.js`, add
  ```JavaScript
    const useLessLoader = require('storybook-less-loader')
    module.exports = {
      ...,
      webpackFinal: async (config) => {
        const includeLessConfig = useLessLoader(config)
        return includeLessConfig
      }
    }
  ```