# Timber Docs

This repository is used to build the documentation pages for [Timber](http://github.com/timber/timber). The documentation is generated using the static site generator [Eleventy](https://www.11ty.io/).

<!-- TOC -->

- [Overview](#overview)
- [Writing docs](#writing-docs)
    - [Sections](#sections)
- [Building the docs](#building-the-docs)
    - [Requirements](#requirements)
    - [CLI](#cli)
    - [Build the documentation](#build-the-documentation)
    - [Publish](#publish)
    - [Files and folders](#files-and-folders)
    - [Assets](#assets)
- [Versions](#versions)
- [Redirects](#redirects)
- [Search](#search)

<!-- /TOC -->

## Overview

The documentation consists of:

- **Content pages** imported from the [`docs`](https://github.com/timber/timber/tree/master/docs/) folder of the Timber repository.
- **Reference pages** for Timber’s PHP classes, which is generated directly from the inline DocBlock documentation of the PHP class files. This is handled by the **generate-docs.sh** file, which uses [Teak](https://github.com/timber/teak) to generate the reference.

If you want to **contribute content** to the documentation, you can create a pull request in the [Timber repository](https://github.com/timber/timber/).

## Writing docs

Each page for the documentation needs to be written in Markdown. Each page needs some meta data so that it will be linked in the right location in the docs. This is called [*Front Matter*](https://www.11ty.io/docs/data-frontmatter/) and comes in YAML style.

```yaml
---
title: "Cheatsheet"
order: "1500"
---
```

- `title` – The display title of the page.
- `order` – Defines the sort order. The pages in each section will be ordered by the sort order.

### Sections

The docs have different sections. Each section needs a JSON file which has the same name as its folder. In that JSON file, we define the title of the section as well as the layout. Here’s an example for guides.

```json
{
  "title": "Guides",
  "layout": "page"
}
```

The layout tells Eleventy that it should take the **_includes/page.njk** file to display the contents of that page. Each section is also listed in the **_data/nav.js** file as a navigation menu item.

## Building the docs

### Requirements

If you want to work on the documentation website itself, you need to consider the following requirements:

1. This repository needs to be on the same folder level as the [Timber repository](https://github.com/timber/timber).
2. You need to have [Composer](https://getcomposer.org/) installed.

To build the documentation, you’ll run

```bash
npm run build
```

### CLI

All the relevant commands can be found in the `scripts` section of the **package.json** file

- `npm run build` - Builds the documentation.
- `npm run generate-docs` - Builds the documentation content (all the Markdown files).
- `npm run watch` – Watches for relevant file changes. When the development server is running, then changed styles and scripts will be automatically inserted into the website.
- `npm run develop` – Builds assets for development environment.
- `npm run production` - Builds assets for production environment.

### Build the documentation

The following command pulls all relevant Markdown files into the repository and builds the documentation pages:

```bash
npm run build
```

To work on the HTML and styling of the documentation site, you can start a development server with the following command:

```bash
npm run watch
```

The development server watches all the files and spits out an URL (usually <http://localhost:8080/>), under which you can start checking the documentation in your browsers.

### Publish

1. Make sure your Timber repository is checked out on the correct branch (usually `master`).
2. If you’ve got changed asset files, run `npm run production`.
3. Run `npm run build`.
4. Commit and push all changes to the `master` branch.

### Files and folders

The documentation repository comes with a set of predefined folders and files:

- **.eleventy.js** – This is the configuration file that Eleventy to build the static site.
- **_data** - Options and definitions for the documentation site. Think of it as a configuration folder.
- **_includes** - [Nunjucks](https://mozilla.github.io/nunjucks/) template files that are used to build the HTML for the documentation. The Nunjucks syntax is so close to Twig you’ll know how to write it right away.
- **assets** - Frontend JavaScript, images and stylesheets.
- **build** - Compiled/processed assets that will actually be used for the documentation site. Never work on these files directly, because they will be overwritten when you run an NPM script.
- **content** – The contents of the documentation. All of the files inside this folder will be overwritten when you run `npm run build`.
- **docs** – The generated documentation site.
- **lib** - Script files to extend Eleventy’s functionality.

### Assets

Eleventy doesn’t come with a defined workflow to process JavaScript and CSS files. We use [Laravel Mix](https://github.com/JeffreyWay/laravel-mix/) to do this. It can be configured in `webpack.mix.js` and `webpack.mix.config.js`.

## Versions

Available versions are defined in **_data/site.js**. The first version listed in the `versions` array will be the current version. The documentation pages for the current version will live directly inside the **content** folder. The current version will then always be available with the same link. On the same level, you have the subfolders for older versions.

If you want to release a new version, you can copy the files of the current version to a new subfolder named `vX`. Say you want to release version 3. You would then move the files in **content/** to **content/v3**.

You will also have to update the folder preparation in **generate-docs.sh**. Check the section that says *Move current version to current level*.

Eleventy will automatically set the right links in the navigation, but it won’t update the links you use inside of your documentation pages. Carefully check your links before you release a new version.

This means that all versions will be built with the current HTML and styles for the documentation. If there are updates to the Front Matter, you might have to update front matter in lower versions as well. We will maybe find a way around that in the future.

## Redirects

Redirects are handled through the **redirect.njk** file that contains a list of redirects that should be applied. Heres an example for how to define a redirect:

```json
{
  "from": "/guides/acf-cookbook/",
  "to": "/integrations/advanced-custom-fields/"
}
```

Make sure that you include leading and trailing slashes for the values.

## Search

Search functionality is integrated with [Algolia Docsearch](https://docsearch.algolia.com/). There’s a [**timber.json**](https://github.com/algolia/docsearch-configs/blob/master/configs/timber.json) file with all the configuration for Algolia to build a search index. If something isn’t working, you should make a pull request for updating that file.