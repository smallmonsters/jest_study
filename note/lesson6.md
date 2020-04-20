## 使用enzyme测试react

##### 安装

> yarn add enzyme enzyme-adapter-react-16 --dev

[更多版本](https://github.com/enzymejs/enzyme/tree/master/docs/installation)

##### 使用

``` JavaScript
// src/utils/testSetUp.js
import {

    configure

} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({

    adapter: new Adapter()

});
```

安装[jest-enzyme](https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme)对jest断言进行扩展

> yarn add jest-enzyme --dev

在命令行中运行yarn eject，修改jest.config.js

``` JavaScript
// 测试环境准备完成后，去执行某些文件
"setupFilesAfterEnv": [
    './node_modules/jest-enzyme/lib/index.js',
    './src/utils/testSetUp.js'
],
```

