## react中jest配置

``` json
{
  "roots": [
    "<rootDir>/src"
  ],
  // 代码测试率需要分析的文件
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts"
  ],
  // 在测试代码运行前需要的依赖
  "setupFiles": [
    "react-app-polyfill/jsdom"
  ],
  // 测试环境准备完成后，去执行某些文件
  "setupFilesAfterEnv": [
    "<rootDir>/src/setupTests.js"
  ],
  // 需要测试的文件
  "testMatch": [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  // 测试环境
  "testEnvironment": "jest-environment-jsdom-fourteen",
  // 生命要使用什么文件来转化对相应的文件
  "transform": {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  // 忽略不需要转化的文件
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  // 设置引入模块默认路径，默认先从node_modules下查找
  "modulePaths": [],
  "moduleNameMapper": {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  // 引入模块默认以什么后缀
  "moduleFileExtensions": [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  // 配置测试运行时watch插件
  "watchPlugins": [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
}
```
[更多配置信息](https://jestjs.io/docs/en/configuration)

