# Lockwood STEM Contrast Audit and Visibility Fix

## Scope

- HTML pages checked: 79
- Local links/assets checked after the update: 2476
- Missing local links/assets found: 0

## Contrast updates applied

A final contrast guard was added across the site and loaded last on every HTML page. This targets the areas most likely to create visibility issues:

- Dark hero/page-title sections
- Agenda hero/title text
- Course/project hero sections
- FabLab Certification pages
- Card headers
- Yellow callouts and badges
- Footer text and footer links
- Navigation active states and call-to-action buttons
- Form controls embedded inside dark hero areas
- Number/icon circles and workflow markers
- Keyboard focus outlines

## Files added or updated

- `assets/lockwood-contrast-final.css`
- Every HTML page now includes the contrast guard inline at the end of the `<head>` as a fallback.

The inline fallback is intentional: it prevents contrast fixes from failing if GitHub Pages, Google Sites embeds, browser caching, or CSS load order causes an external stylesheet to be skipped or overridden.

## Contrast design rules used

- Dark sections use white or near-white text.
- Accent words on dark headers use Lockwood yellow.
- Yellow sections use dark navy/black text.
- Blue/navy buttons use white text.
- Light cards use dark navy/charcoal body text instead of pale gray.
- Footer text and footer links are forced to light colors.

## Notes

This pass is designed to prevent the dark-text-on-dark-background issue you identified, while preserving the Lockwood STEM theme and standardized navigation.
