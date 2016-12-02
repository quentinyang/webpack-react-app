# `webpack-react`示例
`webpack-react-app`是为了演示将`webpack-react`用在项目里而创建的。`webpack-react`现在还处于开发状态，有很多问题还在解决种。要访问webpack-react请访问[webpack-react](https://github.com/quentinyang/webpack-react)。

# 使用步骤

1. 拉取代吗到本地`git clone https://github.com/quentinyang/webpack-react-app.git`
1. 进入`webpack-react-app`目录，然后安装依赖

    ```
    cd webpack-react-app
    npm install
    ```

1. 执行`npm start`编译文件
1. 访问本地`index.html`文件

# 应用目录分析

```
webpack-react-app/
├── app
│   ├── foo.app.js
│   └── indexApp.js
├── component
│   ├── index.css
│   └── index.js
├── index.html
├── package.json
└── tests
    ├── test-dir-app.js
    └── test-dir.js

```

1. `app`目录是`webpack-react`的默认构建入口。
1.  `package.json`里面的依赖跟`webpack-react`一致，并且多了一项`webpack-react`。
1. TODO
