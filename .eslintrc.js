module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "globals": {
    "__DEV__": false,
    "__dirname": false,
    "window": true,
    "define": true,
    "history": true,
    "location": true,
    "$": true,
    "process": true,
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "no-dupe-args": 2,
    // 不允许多个空行
    "no-multiple-empty-lines": [2, {
      "max": 2
    }],
    // 禁止对象字面量中出现重复的 key
    "no-dupe-keys": 2,
    // 禁止重复的 case 标签
    "no-duplicate-case": 2,
    // 禁止空语句块
    "no-empty": 2,
    // 禁止对 catch 子句的参数重新赋值
    "no-ex-assign": 2,
    // 禁止不必要的布尔转换
    "no-extra-boolean-cast": 2,
    // 禁止不必要的括号 //(a * b) + c;//报错
    "no-extra-parens": 0,
    "react/jsx-uses-react": 2,
    // 禁止使用一元操作符 ++ 和 --
    "no-plusplus": 0,
    "curly": [2, "all"],
    // 禁止 catch 子句的参数与外层作用域中的变量同名
    "no-catch-shadow": 0,
    // 不允许标签与变量同名
    "no-label-var": 2,
    // 禁用特定的全局变量
    "no-restricted-globals": 2,
    // 禁止 var 声明 与外层作用域的变量同名
    "no-shadow": 0,
    // 禁止覆盖受限制的标识符
    "no-shadow-restricted-names": 2,
    // 禁止将变量初始化为 undefined
    "no-undef-init": 2,
    // 禁止将 undefined 作为标识符
    "no-undefined": 0,
    // 不允许在变量定义之前使用它们
    "no-use-before-define": 0,
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    //使用JSX时防止丢失React
    "react/react-in-jsx-scope": 2,
    "react/no-array-index-key": 0,
    "react/no-deprecated": 2,
    // 禁止未使用的变量
    "no-unused-vars": 0,
  }
};