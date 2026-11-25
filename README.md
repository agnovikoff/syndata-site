# Syndata

A small editorial site about enterprise analytics, business insight and AI agents.

## Run locally

```sh
npm install
npm run dev
```

Create English articles in `src/content/insights/en/`. Each article has a stable `translationKey`; when a Russian version is ready, add a matching file under `src/content/insights/ru/` with the same key. The Russian index can show translated titles and summaries before full translations exist, and points readers to the English original.

## Build and preview

```sh
npm run build
npm run preview
```

The GitHub Actions workflow builds and deploys to GitHub Pages. It uses `/syndata-site` as the base path for the repository preview. For the custom domain, the workflow sets `SITE_URL` to `https://syndata.io`, and Astro switches to the root path. In the repository, open **Settings → Pages** and set **Custom domain** to `syndata.io`. Because this site is deployed by a custom GitHub Actions workflow, a `CNAME` file is not required. Configure DNS separately at Dynadot; existing non-web records should be preserved.

## Content policy

The first three Insights pages are short editorial summaries grounded in Andrey's LinkedIn posts. They link to the originals and do not invent additional claims or present themselves as expanded versions of the posts.
