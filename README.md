# YO! Welcome to the "Steam" developer portfolio template

Steam is a starter template designed to help you land more interviews. Below we'll walk through exactly how you can customize this template to make it your own.

Before we go too far, note that I've provided a video walkthrough of the entire project [HERE](https://youtu.be/hu-XLI3bFX8).

You can also find a live version of this project deployed at [https://steam-portfolio-demo.vercel.app/](https://steam-portfolio-demo.vercel.app/).

## Let's get things running

This template is built on top of [NextJS](https://nextjs.org/), a full stack development framework built on top of React.

We won't take time here going over exactly how NextJS works on a deep level (to be fair, this project doesn't use Next at a deep level), but if you're interested in learning, their docs are [here](https://nextjs.org/docs/getting-started).

At the root of your project, you'll see a `package.json` file defining our dependencies.

Most of this is boilerplate, but I will call out the following three dependencies:

- `animejs` -> A javascript animation library, used for the grid animation inside of DotGrid.tsx
- `framer-motion` -> A react based animation library, used in a hand full of places (anywhere you see `<motion.el />` style components)
- `sass` -> All styling uses plain CSS and sass modules for this project

Now that's out of the way, you can get your project running by first installing dependencies.

From your terminal, run:

```
npm install
# or
yarn install
```

This will take a minute or two, but once that's done, you should be able to run the following command:

```
npm run dev
# or
yarn dev
```

This will start your project on `localhost:3000`

## The file structure

Because this is a NextJS project, we follow the standard NextJS pattern for organizing this project.

Inside of the `pages/` directly you'll find 3 files:

- `_app.tsx` -> A file which wraps around every page in our app. Here we import the Poppins font and include it in our page. You can change to use whatever font you'd like here ([docs](https://nextjs.org/docs/basic-features/font-optimization)).
- `_document.tsx` -> Essentially the NextJS version of your base "HTML document". Nothing fancy here.
- `_index.tsx` -> This represents our home route. We include 1 single component here called `<Home />`. Click into this component to begin exploring.

To add MORE routes to your project, see [this doc](https://nextjs.org/docs/basic-features/pages).

Inside of the `styles/` directly you'll find find a global CSS file. This just includes a basic reset, as well as a couple of classes we use throughout the project.

Inside of the `components/` directory you'll find all of the good stuff. The `components/home/` directory houses the majority of what you'll like want to edit

## Styling

Global styling (colors mainly) are defined using CSS variables in the `styles/globals.css` file.

```
  --background: rgb(17, 17, 17);
  --bg-opaque: rgb(17, 17, 17, 0.25);
  --background-light: rgb(35, 35, 35);
  --background-dark: rgb(8, 8, 8);

  --text: rgb(235, 236, 243);
  --brand: rgb(10, 255, 157);

  --text-xs: 1.6rem;
  --text-sm: 1.8rem;
  --text-md: 2.2rem;
  --text-lg: 3.6rem;
  --text-xl: 5.6rem;
  --text-2xl: 9.6rem;
```

The first six variables are the colors for the app. The last six are font sizes. Play around with these a bit to start making it your own.

## More info

That's the basics! If you're comfortable digging in yourself, then you should be set.

Want a deeper walkthrough??

[WATCH THE TUTORIAL VIDEO](https://youtu.be/hu-XLI3bFX8)
