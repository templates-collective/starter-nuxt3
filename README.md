# Nuxt 3 Starter Template

[![Version](https://img.shields.io/github/v/release/templates-collective/starter-nuxt3?style=flat&label=%20&color=%230d0d0d)](https://github.com/templates-collective/starter-nuxt3/releases)

Nuxt 3 SSR & full-stack starter template, supports I18n, UnoCSS, Prisma, MySQL and provides better SEO.

## Preview

[![Preview Image](https://github.com/templates-collective/.github/blob/main/preview/starter-nuxt3.png)](https://starter-nuxt3.netlify.app/)

## Usage

[Create a repo](https://github.com/templates-collective/starter-nuxt3/generate) from this template on GitHub.

```bash
git clone <git remote url>
```

Install npm dependencies.

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

- [ ] Change the author name in `LICENSE`.
- [ ] Change the title in `locales/*.json` and `VITE_APP_NAME` env.
- [ ] Change the favicon in `public` and remove preview image.
- [ ] Remove the `.github` folder which contains the funding info.

## License

[MIT License](./LICENSE) © 2024 [Kieran Wong](https://github.com/kieranwong9865/)
