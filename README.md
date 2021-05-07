# ![6thcolum](./assets/6thcolumn_banner.png)

This is the repository of the [the 6th column project](https://6thcolumnproject.com/) website.

# Contribution Guide

### Index

- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Making Changes](#making-changes)
- [Building](#building)
- [Deploying](#deploying)

## Getting Started

The generated website is served out of the `gh-pages` branch of this repository.

- `src/pages/index.tsx` is the entry point.


## Dependencies

This Website is generated with [Gatsby](https://www.gatsbyjs.com/).
[Gatsby](https://www.gatsbyjs.com/) is written in [JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript) and uses [React](https://reactjs.org/) and [GraphQL](https://graphql.org/).

To [set up your system](https://www.gatsbyjs.com/docs/tutorial/part-zero/) you will need to install [node](https://nodejs.org/en/about/).

Once node is installed, install [Gatsby](https://www.gatsbyjs.com/) (globally).

```bash
npm install -g gatsby-cli
```

You will also need the `gh-pages` module installed before you can make any changes.<br/>
(:warning: Do the following command from the root directory of this project)

``` bash
npm install gh-pages
```

## Making Changes

* Clone this repository (be sure you have the dependencies :point_up:. Particularly `gh-pages`)
* Make changes to the files under the `src/pages/` directory.
* You may make changes to the sytlesheets in the `src/css/` directory.

Launch an http server on [localhost](http://localhost:8000).<br/>
Using the following command you will launch a gatsby's node.js http server. It will update as you `develop` :wink: the site.<br/>
(:warning: Do the following command from the root directory of this project)

``` bash
gatsby develop
```

once the server starts up


``` bash
mgf@serenity:[The6thColumnProject.github.io]:[main$✓]:[89228]> gatsby develop
success open and validate gatsby-configs - 0.026s
success load plugins - 1.272s
success onPreInit - 0.008s
success initialize cache - 0.013s
success copy gatsby files - 0.057s
success onPreBootstrap - 0.008s
success createSchemaCustomization - 0.026s
success source and transform nodes - 0.133s
success building schema - 0.297s
success createPages - 0.038s
success createPagesStatefully - 0.060s
success onPreExtractQueries - 0.004s
success update schema - 0.026s
success extract queries from components - 0.284s
success write out requires - 0.033s
success write out redirect data - 0.002s
success Build manifest and related icons - 0.002s
success onPostBootstrap - 0.019s
⠀
info bootstrap finished - 7.124 s
⠀
success run queries - 0.188s - 8/8 42.49/s
warn Browserslist: caniuse-lite is outdated. Please run next command `npm update`
⠀
You can now view The 6th Column Project in the browser.
⠀
  http://localhost:8000/
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
  http://localhost:8000/___graphql
⠀
Note that the development build is not optimized.
To create a production build, use gatsby build
⠀
success Building development bundle - 5.856s

```

Then point your browser to `http://localhost:8000` to view the rendered site.

## Building

You may build (generate) the site explicitly by running...

``` bash
gatsby build
```

When you are satisfied with your changes and want to publish the changes to the live, external site run...

## Deploying

``` bash
npm run deploy
```

This will generate and push the site to this project's `gh-pages` branch for it to be served.

## What's inside?

-   [ ] Gatsby 2.0 (alpha)
    -   [x] sharp
    -   [x] offline support
    -   [ ] google analytics
    -   [x] manifest
    -   [x] typescript
    -   [x] blog in markdown
-   [x] Best practices tools
    -   [x] [Jest](https://facebook.github.io/jest/) / [Enzyme](http://airbnb.io/enzyme/)
    -   [x] [Storybook](https://storybooks.js.org/)
    -   [x] [Typescript](https://www.typescriptlang.org/) / [tslint](https://palantir.github.io/tslint/)
    -   [x] [xo linter](https://github.com/sindresorhus/xo)
    -   [x] [Remark-lint](https://github.com/wooorm/remark-lint)
    -   [x] [Husky](https://github.com/typicode/husky) & [lint-staged](https://github.com/okonet/lint-staged) for autofix each commit
    -   [x] Travis/AppVeyor config (unix-osx-windows CI)
    -   [x] Code climate config
-   [x] SEO
    -   [x] [Helmet](https://github.com/nfl/react-helmet)
-   [x] [Semantic-ui](http://react.semantic-ui.com) for styling
-   [x] Lazyboy tools
    -   [x] [plop](https://github.com/amwmedia/plop) templates -> `npm run generate`

## Files structure

     .
     ├── data                          // website data (included into graphQL)
     │   ├── author.json               // list of blog authors
     │   ├── avatars                   // authors avatars
     │   └── blog                      // all blog data (posts, images)
     ├── gatsby-config.js              // gatsby configuration
     ├── gatsby-node.js                // gatsby node hooks
     ├── generators                    // generators (`npm run generate`)
     │   ├── blog-post-generator.js    // `blog post` generator
     │   ├── component-generator.js    // `component` generator
     │   ├── page-generator.js         // `page` generator
     │   ├── plopfile.js               // generators entry
     │   ├── templates                 // all templates (handlebar notation)
     │   └── utils.js                  // utils scripts for generators
     ├── package.json
     ├── public                        // output folder (in .gitignore)
     ├── README.md                     // this file
     ├── src                           // sources
     │   ├── components                // all react components
     │   ├── css                       // styles
     │   ├── declarations.d.ts         // declarations for no typescript modules/files
     │   ├── graphql-types.d.ts        // graphql types (`npm run graphql-types`)
     │   ├── html.tsx                  // main html (required)
     │   ├── layouts                   // layouts
     │   │   └── default.tsx           // default layout (required)
     │   ├── pages                     // all pages
     │   └── templates                 // all templates (used for procedural page creation, see `gatsby-node.js`)
     ├── tools                         // miscs tools for dev
     │   └── update-post-date.js       // update post date hook
     ├── tsconfig.json                 // typescript configuration
     ├── tslint.json                   // tslint configuration
     └── package-lock.json             // npm lock file

## Plop generators - `npm run generate`

To avoid any boring copy/paste, this starter-kit have many generators to permit
simple bootstrap of current file pattern (eg. components/pages/blog posts). e.g. to add a new blog post first add the authors to data/authors.json and add authors' images to the data/avatars folder. Next execute 'npm run generate' and select 'Blog post'. Follow the prompts for a new post. Each blog post requires an image be added to the /data/blog/<your new post> folder prior to running 'gatsby develop'.

You can add/delete/modify any generators into `/generators` folder.

Be lazy and have fun!

# Legal Information

Copyright © 2012-2021 The 6th Column Group, LLC <info@6thcolumn.org>
