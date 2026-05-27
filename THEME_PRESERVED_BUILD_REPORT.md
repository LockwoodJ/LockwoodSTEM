# Theme-Preserved Unified Site Report

This build starts from the original `stem4-main` files and preserves their existing CSS, body classes, page structure, colors, and Lockwood STEM formatting.

The FabLab Certification Hub was moved into `/fablab-certification/` while preserving its original `assets/style.css` and `assets/script.js` files.

## What changed
- Added a Certifications link to the existing Lockwood STEM global navigation without replacing the full navigation block.
- Updated main-site Certification Hub links to point to `fablab-certification/index.html`.
- Updated FabLab quick links and Certification buttons through href replacement only.
- Added a preserved-style redirect page at `fablab-certification.html` for old links.
- Added main-site return links to Certification Hub pages while keeping the original Certification Hub CSS and layout.
- Added `.nojekyll` for reliable GitHub Pages static asset serving.

## Link audit
Local href/src links checked: 1777
Missing local href/src links: 0

No missing local href/src links were found.