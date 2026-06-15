# Site-Wide Contrast Hotfix Report

Updated 175 HTML files with a final contrast hotfix style block.

## Fixes Applied

- Forced `.btn-primary`, `.button-primary`, `.primary`, `.cta`, and `.ls-global-cta` text to white on blue/purple gradient buttons.
- Added visited-state protection so linked buttons do not become dark after being clicked.
- Forced nested spans/icons inside primary buttons to remain white.
- Reinforced white text on dark callouts, hero panels, and key idea panels.
- Preserved dark text on white secondary buttons and yellow/green buttons.

## Reason

Several pages defined `.btn-primary` before `.btn`, which allowed the later `.btn` rule to override the text color and create dark text on dark blue/purple button backgrounds. This hotfix is placed at the end of the `<head>` so it wins over older page-level CSS.
