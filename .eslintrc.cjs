/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  // 定义环境，指定代码运行的环境
  env: {
    browser: true, // 浏览器环境中的全局变量
    es2021: true, // 支持ES2021语法
    node: true, // Node.js 环境中的全局变量
    'vue/setup-compiler-macros': true // 支持 Vue 3 的编译器宏
  },
  // 扩展配置，继承一系列的规则集
  extends: [
    'eslint:recommended', // ESLint 推荐的基础规则
    'plugin:vue/vue3-recommended', // Vue 3 推荐规则
    '@electron-toolkit', // Electron 项目推荐规则
    '@vue/eslint-config-prettier', // 禁用所有与 Prettier 冲突的 ESLint 规则
    'prettier'
  ],
  // 解析器选项，指定解析 ECMAScript 的版本和模块类型
  parserOptions: {
    ecmaVersion: 2020, // 使用 ECMAScript 2020 语法
    sourceType: 'module' // 使用 ES 模块
  },
  // 自定义规则
  rules: {
    'prettier/prettier': 'error', // 强制 Prettier 格式化
    'vue/multi-word-component-names': 'off', // 允许单词组件名称
    'vue/require-default-prop': 'off', // 关闭要求 prop 提供默认值的规则
    indent: ['error', 2], // 强制使用两个空格缩进
    // semi: ['error', 'always'], // 强制使用分号
    quotes: ['error', 'single'], // 强制使用单引号
    // 'max-len': ['error', { code: 100 }], // 每行最多 100 个字符
    // 'comma-dangle': ['error', 'always-multiline'], // 多行时要求尾随逗号
    'no-multiple-empty-lines': ['error', { max: 1 }], // 不允许多个连续空行
    'no-unused-vars': ['error'], // 禁止未使用的变量
    'no-undef': ['error'], // 禁止未声明的变量
    eqeqeq: ['error', 'always'], // 强制使用全等 === 和 !==
    'no-console': ['warn'], // 警告使用 console
    'no-alert': ['error'], // 禁止使用 alert
    'vue/html-indent': ['error', 2], // 模板缩进使用两个空格
    'vue/require-prop-types': 'error', // 强制要求 prop 定义类型
    'vue/attributes-order': 'error', // 强制组件属性顺序
    'linebreak-style': ['error', 'unix']
  },
  // 解析设置，指定模块解析的方式
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'] // 支持的文件扩展名
      },
      alias: {
        map: [
          ['@', './src'], // 设置路径别名 @ 指向 ./src
          ['@electron-toolkit', './node_modules/@electron-toolkit'] // 设置路径别名 @electron-toolkit 指向 ./node_modules/@electron-toolkit
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'] // 支持的文件扩展名
      }
    }
  }
}
