# AgeDateCalc

Free date and time tools website. Jekyll site, hosted on GitHub Pages.

## Deploy (3 steps)

1. Create a new GitHub repository and upload all files in this folder to it.
2. In the repository, go to Settings > Pages and enable GitHub Pages from the main branch.
3. After buying agedatecalc.com: add the domain under Settings > Pages > Custom domain,
   then set `url: "https://agedatecalc.com"` in `_config.yml` and commit.

## Structure

- `_layouts/` - page layouts (default)
- `_includes/` - head, header, footer
- `assets/css/style.css` - full design system (teal + amber)
- `assets/js/main.js` - age calculator + world clocks
- `index.md` - home page
- `about.md`, `contact.md`, `privacy-policy.md`, `terms.md` - trust pages
- Tool pages and `_posts/` articles are added in later phases.

## Local preview

Install Jekyll, then run `bundle exec jekyll serve` in this folder.
