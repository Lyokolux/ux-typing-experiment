[`UX Typing experience`](https://ux-typing-experiment-five.vercel.app)
[`UX Typing experience - Results`](https://ux-typing-experiment-five.vercel.app/results)


# first run
```
yarn install
yarn dev
```


# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### eslint

#### eslint-disable

Do not use `eslint-disable` for another reason mentionned below:

- `no-multiple-empty-lines` can be disabled in a svelte component that has both `script` (ts and module) due to a bug
- `no-use-before-define` can be disabled in some weird occasion 


## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
