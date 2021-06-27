/*
 * @Author: your name
 * @Date: 2021-06-06 11:34:43
 * @LastEditTime: 2021-06-26 19:37:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\.prettierrc.js
 */
module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  'prettier/prettier': ['error', {
     singleQuote: true, parser: 'flow',
     endOfLine:"auto" }],

  singleQuote: true,
  parser: 'flow',
  usePrettierrc: false,

  // 格式化不加分号
  semi: true,
  arrowParens: 'avoid',
};
