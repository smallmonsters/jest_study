- [jest环境搭建](#jest环境搭建)
  - [使用jest](#使用jest)
    - [安装 jest](#安装-jest)
    - [一个简单的测试用例](#一个简单的测试用例)
  - [使用ES6模块语句](#使用es6模块语句)
  - [指定测试目录](#指定测试目录)

# jest环境搭建

## 使用jest

### 安装 jest

> yarn add jest --dev

### 一个简单的测试用例

``` JavaScript
// index.js
function add(a, b) {
    return a + b
}
module.exports = {
    add
}

// test/index.test.js
const math = require("../index")
const {
  add
} = math

test("测试1+1", () => {
  expect(add(1, 1)).toBe(2)
})

```

package.json

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

## 使用ES6模块语句

> yarn add babel-jest @babel/core @babel/preset-env --dev

``` json
.babelrc
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
```

可以同时使用ES6和CommonJs模块语句

## 指定测试目录

1、运行：jest ./src/Home
2、修改jest.config.js

```JavaScript
...
rootDir: "./src/Home",
...
OR
roots: [
    "./src/Home",
  ],
OR
rootDir: "./src",
roots: [
    "Home",
  ],
```
