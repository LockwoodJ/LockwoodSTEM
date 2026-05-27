# Lockwood STEM Readability Final Pass

This pass fixes the specific issue of light text appearing on light cards/panels, especially panels nested inside dark hero sections.

Changes made:

- Added `assets/lockwood-readability-final.css` and loaded it last on all HTML pages.
- Added a small inline fallback readability block to every page.
- Forced light surfaces such as `.visual-panel`, `.card`, `.resource-card`, `.feature-panel`, `.info-card`, `.dashboard-card`, `.tile`, and `.panel` to use dark text.
- Preserved white/yellow text treatment only for confirmed dark sections and card headers.
- Fixed the common IED hero visual panel issue where white text appeared over a white/light background.
- Kept footer and dark section contrast safeguards.

Important note: This patch intentionally prioritizes readability over preserving every local decorative text color. It should stop the light-on-light and dark-on-dark visibility failures across the site.
