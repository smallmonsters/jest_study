### 使用ES6模块语句

1、安装：yarn add @babel/core@7.4.5 @babel/preset-env@7.4.5 --dev
2、创建 .babelrc

``` json
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

