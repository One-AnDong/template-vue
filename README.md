# vue 项目模版

## 技术栈

```vim
webpack4 + vue + vue - router + vuex + axios + es6 + pug + stylus
```

## 运行

```vim
git clone https://github.com/One-AnDong/template-vue
cd template-vue
npm install 或 yarn(推荐)
//开发
npm run start 或 yarn start
//生产打包
npm run build 或 yarn build
```

## 目录结构

```vim
── build
│   ├── webpack.base.conf.js  //weboack 基础配置
│   ├── webpack.dev.conf.js  //webpack 开发环境配置
│   └── webpack.prod.conf.js  //webpack 生产环境配置
├── config
│   └── index.js  //配置webpack文件
├── src
│   ├── assets
│   │   ├── image
│   │   │   └── logo.png
│   │   └── stylus
│   │       └── reset.styl
│   ├── components
│   │   └── Start.vue
│   ├── main.js
│   ├── pages
│   ├── router
│   │   ├── index.js //路由文件
│   │   └── routes.js //路由配置文件
│   ├── store
│   │   ├── index.js //vuex文件
│   │   └── modules
│   │       └── index.js
│   └── utils
│       └── axios.js //二次封装axios
│   ├── App.vue
├── index.html
├── package.json
├── postcss.config.js
└── yarn.lock
```
