# Nuxt 3 启动模板

[![版本](https://img.shields.io/github/v/release/templates-collective/starter-nuxt3?style=flat&label=%20&color=%230d0d0d)](https://github.com/templates-collective/starter-nuxt3/releases)

Nuxt 3 服务端渲染 & 全栈应用的初始化模板，支持国际化、UnoCSS、Prisma、MySQL，同时提供更好的 SEO。

- [在线演示](https://starter-nuxt3.netlify.app/)
- [在 Stackblitz 上试用](https://stackblitz.com/github/templates-collective/starter-nuxt3)

## 特性

- [Nuxt 3](https://nuxt.com/) - SSR、基于文件的路由、组件自动导入、模块等。
- 使用 [Prisma](https://www.prisma.io/) 和 [MySQL](https://www.mysql.com/) 进行全栈开发。
- 通过 [Pinia](https://github.com/vuejs/pinia) 进行状态管理，参见 [/app/stores/layout.ts](./app/stores/layout.ts)。
- 提供良好的 [SEO](https://nuxt.com/docs/getting-started/seo-meta) 支持，拥有强大的头部配置、组合函数和组件。
- 使用 [SVG 图标](https://github.com/antfu/unocss/tree/main/packages/preset-icons) 来自任意图标集，采用纯 CSS，基于 [UnoCSS](https://github.com/unocss/unocss)。
- [I18n](./locales) 就绪，支持自动导入翻译文件。
- 使用 [Vitest](https://github.com/vitest-dev/vitest) 进行单元测试。
- 在 [Netlify](https://app.netlify.com/) 上零配置部署，也支持其他部署方式。

## 预览

[![预览图像](https://github.com/templates-collective/.github/blob/main/preview/starter-nuxt3.png)](https://starter-nuxt3.netlify.app/)

## 使用方法

[在 GitHub 上创建一个仓库](https://github.com/templates-collective/starter-nuxt3/generate)来使用此模板。

```bash
git clone <git remote url>
```

安装依赖。

```bash
cd starter-nuxt3 # 或者你的项目目录

pnpm i # 如果你没有安装 pnpm，运行：npm install -g pnpm
```

运行项目并访问 http://localhost:9865。

```bash
pnpm dev
```

要构建应用程序，可以运行：

```bash
pnpm build
```

然后你会看到生成的 `dist` 文件夹用于发布，你可以使用以下命令在本地预览。

```bash
pnpm preview
```

## 清理模板

如果你更喜欢保持更清晰的 git 历史记录：

```bash
npx degit templates-collective/starter-nuxt3 starter-nuxt3

cd starter-nuxt3

pnpm i # 如果你没有安装 pnpm，运行：npm install -g pnpm
```

使用此模板时，请按照以下检查列表正确更新信息：

- [ ] 更改 `LICENSE` 中的作者姓名。
- [ ] 更改 `locales/*.json` 和 `VITE_APP_NAME` 环境变量中的标题。
- [ ] 更改 `public` 中的 favicon。

## 许可

[MIT 许可](./LICENSE) © 2024 [Kieran Wong](https://github.com/kieranwong9865/)
