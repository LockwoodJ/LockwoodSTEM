# Contrast Hotfix Report

Updated the site-wide contrast rules and Unit 0–2 IED pages to correct dark text appearing on dark gradient callout panels.

## Changes Made

- Added a final contrast hotfix to `assets/lockwood-action-contrast-fix.css`.
- Marked dark Unit 0–2 callout panels with `class="callout dark"` so global readability rules no longer treat them as light cards.
- Preserved light/yellow callouts with dark text for readability.
- Added stronger rules for dark `.callout`, `.callout.blue`, `.callout.navy`, and `.ls-callout.blue` panels.
- Kept buttons, tags, pills, and eyebrow labels readable on dark panels.

## Primary Issue Fixed

Dark headings and muted paragraph text were being forced onto navy/blue gradient callout backgrounds by broad readability safeguards. The new rules explicitly restore white text on dark callouts while preserving dark text on light callouts.
