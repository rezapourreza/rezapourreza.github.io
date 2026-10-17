# Reza Pourreza — personal homepage

Private working draft for `rezapourreza.github.io`. Public release has not been requested.

## Website

- `index.html`: biography, location, U.S. work experience, profile photo, top social links, and seven selected papers with original paper figures and short summaries.
- `publications.html`: scholarly papers grouped by publication year. Patents, duplicate preprints, standalone supplementary material, and corrections are excluded.
- `assets/`: portrait, extracted figures, shared styles, and the theme/figure viewer script.
- `assets/publications.json`: bibliographic metadata for reference when updating the pages.

The visual style follows the clean academic layout of Litian Liu's homepage; the implementation is independent. All pages are static HTML and work without a build step. The default theme is dark, with Qualcomm blue accents and brand-colored profile icons. JavaScript adds optional theme switching and enlarged figure previews.

## Source material

The biography uses the supplied CV, the public LinkedIn profile, and recent Google Scholar work. The CV file is reference material only: never commit it or add a download link. The profile photo was supplied for use on the homepage. Selected paper figures are extracted from the linked original papers, and each figure links back to its source paper.

Publication years follow the final venue or journal year rather than a later arXiv upload date. QIVD is a benchmark paper, so its dataset overview is shown instead of an unavailable method block diagram. Older paper links may point to their Google Scholar records.

## Preview and release

Open `index.html` directly in a browser, or serve this folder with a local static server. Before release, review the biography, work experience, publication metadata, and contact details.

Only after the owner requests public release, make the repository public if required by the account's Pages plan, then enable GitHub Pages from `main` and the repository root. The intended address is `https://rezapourreza.github.io/`. `.nojekyll` serves the files directly.
