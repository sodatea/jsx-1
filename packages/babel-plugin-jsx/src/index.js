const syntaxJsx = require('@babel/plugin-syntax-jsx').default;
const tranformVueJSX = require('./transform-vue-jsx');
const sugarVModel = require('./sugar-v-model');
const sugarFragment = require('./sugar-fragment');

module.exports = ({ types: t }) => ({
  name: 'babel-plugin-jsx',
  inherits: syntaxJsx,
  visitor: {
    ...sugarVModel(t),
    ...tranformVueJSX(t),
    ...sugarFragment(t),
  },
});
