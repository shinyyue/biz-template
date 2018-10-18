# biz-template

> a base template project of my business

## 发布历史及说明

    示例： 「版本号：发布功能列表」

## flexible适配方案使用说明

-   当前使用 flexible.js 及 postcss-px2rem 做适配， 并以 750 \* 1334 为设计稿尺寸.

-   开发时完全按照设计稿的尺寸即可，编译后可自动将 px 换算为 rem.

    ```bash
    # 开发时
    .example {
        width: 200px;
        height: 200px;
    }

    # 编译后
    .example {
        width: 2.99999rem;
        height: 2.99999rem;
    }
    ```

-   字体不转化为 rem.

    ```bash
    # 开发时
    .example {
        // 属性后面加 「/* px */」注释，可使得该行属性避免被转换为rem。
        font-size: 24px; /* px */
    }

    # 编译后
    .example {
        font-size: 24px;
    }
    ```

## 项目目录

```bash
.
├── README.md
├── build
├── config
├── favicon.ico
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── App.vue                [入口vue文件]
│   ├── assets
│   ├── components
│   │   ├── biz                [业务组件]
│   │   └── common             [通用组件]
│   ├── config.js              [API配置文件]
│   ├── main.js                [入口js文件]
│   ├── page                   [前端页面]
│   ├── router                 [路由配置]
│   ├── utilities              [工具类文件]
│   │   └── custome-aixos.js   [axios的封装]
│   └── vuex                   [状态管理文件]
│       ├── homeStore.js       [某模块(页面)状态管理]
│       ├── mutation-types.js  [状态管理映射集]
│       └── store.js           [模块状态注册]
└── static                     [图片等静态资源文件]
```

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# built to simulate the production environment
npm run test

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

