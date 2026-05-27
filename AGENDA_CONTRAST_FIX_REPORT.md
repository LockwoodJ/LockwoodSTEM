# Agenda Contrast Fix Report

Updated the agenda page and shared embed CSS to address low-contrast text on dark hero backgrounds.

## Changes
- Added an `agenda-page` body class to `agenda.html`.
- Added a final agenda-specific contrast override block after shared CSS loads.
- Changed the agenda hero title accent from dark blue to high-contrast yellow on dark backgrounds.
- Improved subtitle, eyebrow, badge, button, select, and date field contrast.
- Added sitewide safeguards for nested hero title spans in `assets/google-sites-embed.css`.

## Result
The agenda header should no longer show dark blue text on a dark navy background.
