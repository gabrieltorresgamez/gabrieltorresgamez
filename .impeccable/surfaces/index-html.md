---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: index.html (TORRES OS desktop)

Scope: the whole site, one page. Mode: Experience.

Audience and job: recruiters and peers, equally. They look around the desktop, open the CV files, and connect on LinkedIn. Content comes from the CV; address, phone, birthdate and referees stay out. Static, no build, no third-party requests.

Memorable moment: the page boots, and the CV is files on a dark desktop with orange lettering.

Build path: code-led (no image generation in this session).

## Direction contract

THESIS: The portfolio is an operating system you use, not a page you scroll. It refuses the hero-plus-card-grid portfolio. (Revised 2026-11-11: the owner tried a dark version, said "this looks much cooler! please change it", and dark replaced the orange wallpaper.)

OWN-WORLD: The wallpaper is flat dark coffee `#1a1210`. The one orange `#ff4f00` is the accent: the name lettering, the primary button, the front window's icon label, the prompt and links. Windows are a lighter coffee with a quiet hairline and 12px corners, each with a title bar carrying its filename in mono; the front window gets a lighter border. The terminal is the darkest window. Headings (name, window titles, entry titles) in Bricolage Grotesque, body in the system sans, mono only for filenames, terminal and boot log. Icons are authored line drawings in cream on a dark fill. No pills, no gradients.

STORY: The visitor sees a desktop that has just booted, understands that the files are the CV, opens them in one click, notices the terminal runs the same content, and connects on LinkedIn.

FIRST VIEWPORT: A 40px coffee menu bar: "TORRES OS" left, LinkedIn, GitHub, Mail and a clock right. On the dark desktop: six file icons top left in a 2x3 grid (a single column would run into the name on short screens); the name "Gabriel Torres Gamez" as wallpaper lettering bottom left, up to 6rem, orange on dark; `about.md` open top right with portrait, short bio and the orange "Connect on LinkedIn" button; from 1440px wide, the dark terminal open bottom centre with `whoami` already run, in its own column so the two never overlap. Below 1440px only `about.md` opens and the terminal waits behind its icon.

SIGNATURE INTERACTION: Files open from their icon and windows drag by the title bar; `open work` in the terminal opens the same window. Motion grammar: one boot sequence, then short ease-out opens (180ms), faster closes, nothing else moves.

FORM: seed: none (pinned). "i love your desktop idea"; "i use this for my other pages, especially for the electric orange color"; "where it makes sense design technically, you can decide"; "if possible, keep the site static".

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
