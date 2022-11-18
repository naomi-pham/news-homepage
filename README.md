Table of content: 
1. [Overview](#overview)
2. [Reusable component](#reusable-component)
3. [File structure](#file-structure)
4. [Shorten Tailwind](#shorten-tailwind)
5. [Head tag in Next.js best practices](#head-tag-in-nextjs-best-practices)
6. [Layout for all pages](#layout-for-all-pages)

## Overview

This project is completed as part of [Frontend Mentor](https://www.frontendmentor.io/) challenge. It is coded with Next.js framework for React and TailwindCSS. You can view a demo [here](https://news-homepage-challenge.vercel.app/). Below is a summary of my learning after coding the project. I'm trying to make reusable components in case the project is expanded with more pages. Also, I applied some strategies to write shorter and prettier code with Tailwind. Any feedback is so welcome!

## Reusable component

### Example: 

`CardBody.js`

Create a Card component which takes **data** (from [Data.js](https://github.com/naomi-pham/news-homepage/blob/main/data/Data.js) file) as a parameter. Deconstruct objects of data `title`, `body`, etc. and place them within the Card elements. 

```jsx
import Link from "next/link";

const CardBody = ({ data }) => {
  const { title, body } = data;

  return (
    <div className="stack stack-xs">
      <Link href="/">
        <h5 className="text-base sm:text-xl">{title}</h5>
      </Link>
      <p className="text-sm sm:text-base opacity-70">{body}</p>
    </div>
  );
};

export default CardBody;
```

### Usage: 

`Home/New.js`

Import `CardBody` to a component that uses it. Pass in the data. Either import directly from Data.js file or pass it as props from [index.js](https://github.com/naomi-pham/news-homepage/blob/main/pages/index.js). This example uses the second option. 

```jsx
import { CardBody } from "../Card";

const New = ({ data }) => {
  return (
    <div className="stack bg-dark p-6 text-light">
      <h2 className="text-primary">New</h2>
      <div className="stack">
        {data.map((data) => (
          <div
            className="border-b border-b-light/40 pb-8 last:border-0"
            key={data.id}
          >
            <CardBody data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;
```

## File structure 

`Components/Card` folder contains 3 files: 
* CardBody.js
* CardWithImage.js
* index.js

`index.js` will export by default `CardBody` and `CardWithImage`

```jsx
export { default as CardBody } from "./CardBody";
export { default as CardWithImage } from "./CardWithImage";
```

Then when import Card components to other file, we can use: 

```jsx
import { CardBody } from "./components/Card" // if only use CardBody
import { CardBody, CardWithImage } from "./components/Card" // if use both CardBody and CardWithImage
```

## Shorten Tailwind

### Practice 1: CUBE CSS ([by Andy Bell](https://cube.fyi/))

CUBE CSS stands for Composition, Utility, Block, and Exception: 
* Composition is the layout or skeleton of a page or component. For example, flex and grid are used to make up the skeleton of a page. 
* Utility is the classs that does one job and does it well. For example, `.wrapper` is used to set padding for components. 
* Block is a group of rules applied to a type of structure. For example, a card block of css contains CSS code for card-title, card img, card-footer, etc.
* Exception is the deviation from a block rule. For example, a reverse card. 

In this project, I used the [Stack](https://every-layout.dev/layouts/stack/) layout (composition). This allows me to avoid writing `flex flex-col gap-8` repeatedly for components that requires a vertical align and spacing between elements. 

Here's the CSS code for `.stack`:

```css
.stack {
  display: flex;
  flex-direction: column;
  gap: var(--col-space, 2rem);
}

.stack-xl {
  --col-space: 4rem;
}

.stack-sm {
  --col-space: 1rem;
}

.stack-xs {
  --col-space: 0.5rem;
}
```

The default gap between elements is 2rem. It will change to 4rem, 1rem, or 0.5rem if the utility class `stack-xl`, `stack-sm`, `stack-xs` is added. 

### Some use case: 

***Spacing between title and body***

```jsx
<div className="stack stack-xs">
  <Link href="/">
    <h5 className="text-base sm:text-xl">{title}</h5>
  </Link>
  <p className="text-sm sm:text-base opacity-70">{body}</p>
</div>
```

***Align elements vertically***

```jsx
<div className="stack bg-dark text-light p-6">
  <h2 className="text-primary">Title</h2>
  <div className="stack">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
  </div>
</div>
```

***Caveat:*** 
* This approach does not work well if you try to combine with inline responsive design. For example, you can't use `stack lg:flex-row`. Instead, you have to write `flex flex-col gap-8 lg:flex-row`. 
* The spacing `sm`, `lg`, `xl` works fine if I set them to lower-level components. However, if I set them on a higher-level components, it tends to affect the spacing of the components below. 

## Add `lang="en"` in Next.js 

Next.js doesn't have a index.html file. To include `lang="en"` inside <html> tag you need to add the following to `next.config.js`:

```jsx
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
```

## Head tag in Next.js best practices

### Common Head tag for all pages

`pages/_app.js`

```jsx
import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
```

### Head tag for individual pages 

`index.js`

```jsx
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>News | Home</title>
        <meta name="description" content="News homepage" />
      </Head>

      <section className="grid grid-cols-1 gap-14 lg:grid-cols-3">
        {your code...}
      </section>
    </>
  );
}
```

## Layout for all pages

Suppose you want to add `Nav` and `Footer` components to all pages. Create a Layout.js component and include it in the `_app.js` file.

`Layout.js`

```jsx
import Nav from "./Nav";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="flex flex-col gap-20 sm:my-6 lg:px-24">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
```

`_app.js`

```jsx
import "../styles/globals.css";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```
