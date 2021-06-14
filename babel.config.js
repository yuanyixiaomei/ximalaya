/*
 * @Author: your name
 * @Date: 2021-06-06 11:34:43
 * @LastEditTime: 2021-06-06 20:48:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \AwesomeTSProject\babel.config.js
 */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins:[
    ['module-resolver',{
      root:['./src'],
      alias: {
        '@/utils': './src/utils',
        '@/pages': './src/pages',
        '@/navigator': './src/navigator',
        '@/models': './src/models',
        '@/config': './src/config',
        '@/components': './src/components',
        '@/assets': './src/assets',
      }
    }]
  ]
};
