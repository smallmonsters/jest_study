## 入门

##### 一、安装jest

> yarn add jest --dev

##### 二、创建lesson.js

``` JavaScript
// src/lesson.js
function add(a, b) {
    return a + b
}
module.exports = {
    add
}
```

##### 三、创建lesson.test.js

``` JavaScript
// test/lesson1.js
const math = require("../src/lesson1.js")
const {
    add
} = math

test("测试1+1", () => {
    expect(add(1, 1)).toBe(2)
})
```

##### 四、运行测试用例

1、修改package.json

``` json
"scripts": {
    "test": "jest"
  },
```

2、控制台输入：
yarn test

3、jest cmd的一些参数

> --watchAll 监听所有测试文件   

