# Nuxt 3 Starter Template

[![Version](https://img.shields.io/github/v/release/templates-collective/starter-nuxt3?style=flat&label=%20&color=%230d0d0d)](https://github.com/templates-collective/starter-nuxt3/releases)

Nuxt 3 SSR & full-stack starter template, supports I18n, UnoCSS, Prisma, MySQL and provides better SEO.

- [Live Demo](https://starter-nuxt3.netlify.app/)
- [Play on Stackblitz](https://stackblitz.com/github/templates-collective/starter-nuxt3)
- [README for 简体中文](./README.zh-CN.md)

## Features

- [Nuxt 3](https://nuxt.com/) - SSR, File-based routing, components auto importing, modules, etc.
- Full-stack development with [Prisma](https://www.prisma.io/) and [MySQL](https://www.mysql.com/).
- State Management via [Pinia](https://github.com/vuejs/pinia), see [/app/stores/layout.ts](./app/stores/layout.ts).
- Provide good [SEO](https://nuxt.com/docs/getting-started/seo-meta) for your website with powerful head config, composables and components.
- Use [SVG icons](https://github.com/antfu/unocss/tree/main/packages/preset-icons) from any icon sets in Pure CSS, powered by [UnoCSS](https://github.com/unocss/unocss).
- [I18n](./locales) ready, and supports automatic import of translated files.
- Unit Testing with [Vitest](https://github.com/vitest-dev/vitest).
- Deploy on [Netlify](https://app.netlify.com/) with zero-config, supports other deployment methods as well.

## Preview

[![Preview Image](https://github.com/templates-collective/.github/blob/main/preview/starter-nuxt3.png)](https://starter-nuxt3.netlify.app/)

## Usage

[Create a repo](https://github.com/templates-collective/starter-nuxt3/generate) from this template on GitHub.

```bash
git clone <git remote url>
```

Install dependencies.

```bash
cd starter-nuxt3 # Or your project directory

pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

Just run and visit http://localhost:9865.

```bash
pnpm dev
```

To build the App, you can run:

```bash
pnpm build
```

You will then see the `dist` folder generated for publishing, which you can preview locally with the following command.

```bash
pnpm preview
```

## Clean Template

If you prefer to do it manually with the cleaner git history:

```bash
npx degit templates-collective/starter-nuxt3 starter-nuxt3

cd starter-nuxt3

pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

When you use this template, try follow the checklist to update your info properly:

- [ ] Change the app title in `app/locales/*.json` and `nuxt.config.ts`.
- [ ] Change the favicon in `public` and remove preview image.

## License

[MIT License](./LICENSE) © 2024 [Kieran Wang](https://github.com/kieranwv/)
