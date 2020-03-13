## jest简单配置

* 生成jest配置文件

> npx jest --init

更具具体情况选择配置

![image](https://github.com/smallmonsters/jest_study/blob/master/asset/1.jpg)

* 生成代码覆盖率文件

> npx jest --coverage

##### 代码测试覆盖率

什么是代码覆盖率，当我们测试下面代码时

``` JavaScript
function fn(arg) {
    if (arg) {
        return 1
    } else {
        return 2
    }
}
```
我们需要些两个测试用例才能做到覆盖率100%，既当arg=true和arg=false.

> Statements: 语句覆盖率，执行到每个语句；

> Branches: 分支覆盖率，执行到每个if代码块；

> Functions: 函数覆盖率，调用到程式中的每一个函数；

> Lines: 行覆盖率, 执行到程序中的每一行。

