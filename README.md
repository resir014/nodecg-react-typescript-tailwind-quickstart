# nodecg-react-typescript-tailwind-quickstart

> Get started creating NodeCG bundles with React + TypeScript + TailwindCSS in seconds.

## Getting started

### Install NodeCG

Follow [this guide](https://www.nodecg.dev/docs/installing) to install and run NodeCG locally.

In summary:

```bash
# Install nodecg + dependencies
npm install --global nodecg-cli
mkdir nodecg
cd nodecg
nodecg setup
```

### Setup the bundle

On your root NodeCG bundle, install the bundle via the NodeCG CLI

```bash
cd bundles
git clone https://github.com/resir014/nodecg-react-typescript-tailwind-quickstart.git my-bundle-name
```

Then, update the bundle's `package.json` to match the new bundle name.

```json
{
  "name": "my-bundle-name"
}
```

### Start developing

On one terminal window, run a local server for development.

```bash
yarn watch
```

On another terminal window, navigate to the NodeCG root folder, and start the server.

```bash
# Run nodecg locally
nodecg start
```

## Creating bundle files

The Webpack config is set up so you can easily create multiple dashboard/graphics files and will be bundled separately.

As long as you follow these naming conventions, all files are automatically generated in the main `dashboard`/`graphics` folders.

```
my-bundle/
├─ package.json
├─ webpack.config.js
└─ src/
   ├─ dashboard/
   │  ├─ [name].dashboard.html
   │  ├─ [name].dashboard.tsx
   │  └─ [name].dashboard.css
   └─ graphics/
      ├─ [name].graphics.html
      ├─ [name].graphics.tsx
      └─ [name].graphics.css
```

Then, you can manually add these into your bundle config on the `package.json` file.

```json
{
  "nodecg": {
    "dashboardPanels": [
      {
        "name": "index",
        "title": "Index",
        "width": 6,
        "file": "index.html",
        "headerColor": "#68717b"
      },
      {
        "name": "second",
        "title": "Second Panel",
        "width": 4,
        "file": "second.html",
        "headerColor": "#0070f3"
      }
    ],
    "graphics": [
      {
        "file": "index.html",
        "width": 1920,
        "height": 1080
      },
      {
        "file": "other-graphic.html",
        "width": 1920,
        "height": 1080
      }
    ]
  }
}
```
