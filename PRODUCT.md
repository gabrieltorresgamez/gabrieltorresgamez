# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two groups, weighted equally (confirmed 2026-11-11):

- Recruiters and hiring managers who arrive from a CV or LinkedIn link and want Gabriel's background quickly, without typing anything.
- Fellow engineers and Gabriel's FHNW students, who enjoy the playful OS and the terminal.

## Product Purpose

torres.swiss is Gabriel Torres Gamez's personal portfolio. It presents his work experience, education, projects and certificates as "TORRES OS", a small desktop in the browser. Success means a visitor can reach every part of the CV in one click, remembers the page, and connects on LinkedIn.

## Positioning

A portfolio you operate instead of scroll: the CV is files on a desktop, and the same content is reachable from a working terminal.

## Operating Context

- Static site in the `gabrieltorresgamez/gabrieltorresgamez` repo, served by GitHub Pages at torres.swiss (see `CNAME`). The repo's `README.md` is also the GitHub profile README.
- Content is taken from Gabriel's CV. It lives in `index.html`; the terminal reads it from the page, so there is one source.

## Capabilities and Constraints

- Fully static: plain HTML, CSS and JavaScript, no build step, no server, no framework (confirmed 2026-11-11).
- No third-party requests: fonts, images and scripts are self-hosted.
- The content is readable without JavaScript, as a stacked page. Phones and touch devices get the stacked page too.
- Never published: home address, phone number, birthdate, and the referees' names and contact details from the CV.
- Interface language is English.

## Brand Commitments

- Name: TORRES OS, at torres.swiss. Sister sites: fuet.ch and arc.fuet.ch; they should look related.
- Visual starting point is the Zapier-derived DESIGN.md used on fuet.ch, applied "where it makes sense" (Gabriel's words): the orange `#ff4f00` is the fixed part, the rest is at the designer's discretion.
- Headings in Bricolage Grotesque Variable, self-hosted, as on fuet.ch.
- The terminal stays, including the joke redirect on `sudo`, `su` and `rm`.

## Evidence on Hand

- CV dated 2026-10-07 (not in the repo) as the source for work, education and certificates.
- Portrait at `src/assets/me.jpg`.
- Five study projects with public GitHub organisations.
- No testimonials, metrics or client logos exist. Do not invent any.

## Product Principles

1. Everything on the CV is one click away; nothing requires typing.
2. The terminal is a bonus, never the only way in.
3. One source for the content.
4. Static and self-contained: no build, no trackers, no external requests.
