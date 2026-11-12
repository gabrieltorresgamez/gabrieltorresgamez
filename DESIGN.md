---
name: TORRES OS
description: A personal portfolio presented as a small dark desktop in the browser.
colors:
  accent: "#ff4f00"
  link: "#ff4f00"
  on-accent: "#201515"
  canvas: "#1a1210"
  canvas-soft: "#241c19"
  surface-raised: "#241c19"
  ink: "#fffefb"
  body: "#c5c0b1"
  hairline: "#3a332d"
  border: "#807d72"
  selection: "#7c2d12"
  term-bg: "#120c0a"
  term-soft: "#1a1210"
  term-amber: "#ffc46b"
  term-green: "#a9d18e"
  term-blue: "#8ecae6"
  shadow-rest: "rgb(0 0 0 / 0.6)"
  shadow-front: "rgb(0 0 0 / 0.8)"
typography:
  display:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: "clamp(3rem, min(6.6vw, 10vh), 6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  prose-heading:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "0em"
  title:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
  brand:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
  meta:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "ui-monospace, 'SF Mono', SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1
  icon-label:
    fontFamily: "ui-monospace, 'SF Mono', SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.3
  terminal:
    fontFamily: "ui-monospace, 'SF Mono', SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
  prompt-stacked:
    fontFamily: "ui-monospace, 'SF Mono', SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  sm: "6px"
  md: "12px"
spacing:
  gutter: "clamp(1.25rem, 5vw, 2rem)"
  bar: "2.5rem"
  gap: "1.25rem"
  window: "1.5rem"
  terminal: "1rem"
components:
  menu-bar:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    height: "{spacing.bar}"
  window:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.window}"
  window-bar:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.body}"
    typography: "{typography.label}"
    height: "2.25rem"
  window-terminal:
    backgroundColor: "{colors.term-bg}"
    textColor: "{colors.ink}"
    typography: "{typography.terminal}"
    rounded: "{rounded.md}"
    padding: "{spacing.terminal}"
  window-terminal-bar:
    backgroundColor: "{colors.term-soft}"
    textColor: "{colors.body}"
    typography: "{typography.label}"
    height: "2.25rem"
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
  file-icon:
    textColor: "{colors.ink}"
    typography: "{typography.icon-label}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 0"
  file-icon-open:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
  file-icon-current:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  file-icon-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-accent}"
  window-button:
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    size: "2.25rem"
  window-button-hover:
    textColor: "{colors.link}"
  mark:
    backgroundColor: "{colors.selection}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
---

# Design System: TORRES OS

## Overview

**Creative North Star: "The Dark Desktop"**

The site is a small operating system, not a page. The wallpaper is flat dark coffee. The content sits in windows of a slightly lighter coffee with a thin outline, and each window is a file with its name in the title bar. Text is cream. Orange is the single accent. The terminal is the darkest window. On small or touch screens, and without JavaScript, the same windows stack into one readable column.

This site is the `dark` theme of **Torres**, the design system shared with fuet.ch and arc.fuet.ch (https://claude.ai/artifact/XnsorDXwN2bgYhrJtiUEJi). Torres is the source for tokens, type, spacing, elevation, states and motion; this file records how the site applies them. Everything is quiet: flat fills, 1px lines, two black shadows, and very little motion.

**Key Characteristics:**
- Dark coffee ground, lighter coffee windows, cream text, one orange accent.
- 1px lines and 12px corners. No gradients, no pills.
- Three type voices: Bricolage Grotesque for headings, system sans for reading, mono for filenames and the terminal.
- Two layouts from one HTML source: a desktop with draggable windows, and a stacked page.
- Motion is short and rare: one boot sequence, then quick window opens and closes.

## Colors

A warm dark set: three steps of coffee for surfaces, cream and sand for text, and one loud orange. Token names and values are the Torres `dark` theme. The page declares `color-scheme: dark`; there is no light theme and no theme select, because the site is dark by design. Under `prefers-contrast: more` it switches to Torres `hc-dark`: the accent and links become Light Orange `#ff8a50` with `#120c0a` text on it, the wallpaper `#120c0a`, windows `#1a1210`, Hairline `#807d72` and Stone `#a8a397`.

### Primary
- **Electric Orange** (`accent`): the name on the wallpaper, the full stop of the wordmark, the primary button fill, the label of the front window's icon, the focus ring, the caret, the terminal prompt, terminal entry titles, errors and ASCII logo, the boot log marks and cursor, and the hover underline in the menu bar and on entry titles.
- **Link** (`link`): the same Electric Orange in the dark theme. Text links inside windows, the word "now" on a current role, and the hover colour of window buttons.

### Neutral
- **Coffee Canvas** (`canvas`): the wallpaper and the page background, and the text on the button when hovered.
- **Soft Canvas** (`canvas-soft`, also `surface-raised`): windows and their title bars, the menu bar, the label of an open file's icon, inline code, and the fill of the file icons.
- **Cream Ink** (`ink`): text, icon strokes, the focus ring drawn inside a window button, and the hover fill of the button and icon labels.
- **Sand** (`body`): secondary text such as dates, places, the clock and title bar names.
- **Hairline** (`hairline`): window outlines, the menu bar rule, dividers inside a window, and the page scrollbar.
- **Stone** (`border`): the outline of the front window, list markers, and scrollbar thumbs inside windows.
- **Coffee On Orange** (`on-accent`): text on an orange fill, and on the cream hover fill of an icon label. It is used nowhere else.
- **Rust Mark** (`selection`): the marker behind key terms, and text selection. One value, two uses.
- **Shadow** (`shadow-rest`, `shadow-front`): pure black at 60% and 80%. Used only in the two window shadows.

### Terminal
- **Terminal Ground** (`term-bg`): the terminal body, the boot screen, the terminal title bar when not in front, and the fill of the terminal icon. It is the darkest surface.
- **Terminal Bar** (`term-soft`): the terminal title bar when in front. Same value as Coffee Canvas.
- The rule under the terminal title bar and its scrollbar are Hairline; output is Cream Ink and echoed commands are Sand.
- **Terminal Amber** (`term-amber`): key terms and command names in output.
- **Terminal Green** (`term-green`): the word "now" on current roles.
- **Terminal Blue** (`term-blue`): organisation names and URLs.

### Highlights
- In the windows, key terms carry a marker: Rust Mark behind Cream Ink (9.3:1). Organisation names are Cream Ink at weight 600, and "now" on a current role is `link` at 600.
- In the terminal, the same markup maps to amber, blue and green, with entry titles in orange. Each colour has one meaning; none is decoration.
- When marked text is selected, the selection turns orange with Coffee On Orange text, so it stays visible on the marker.

### Named Rules
**The One Accent Rule.** Orange is the only accent. It marks one thing of each kind: the name, the one button, the front window's icon, the prompt. Everything else is coffee, cream or sand.

**The Dark On Orange Rule.** Text on an orange fill is always Coffee On Orange (5.4:1). Cream on orange is 3.3:1 and is never used for text.

**The Darkest Window Rule.** Only the terminal and the boot screen use Terminal Ground, and only they use amber, green and blue.

## Typography

**Display Font:** Bricolage Grotesque Variable, self-hosted, weights 200 to 800 (with system-ui fallback)
**Body Font:** the system sans stack
**Label/Mono Font:** the system mono stack

**Character:** A friendly, slightly quirky grotesque for names and titles, and the visitor's own system fonts for everything else. The mono voice marks what belongs to the machine.

### Hierarchy
Each line names its Torres style.
- **Display** (`hero`: 700, `clamp(3rem, min(6.6vw, 10vh), 6rem)`, 0.92, -0.03em): the name on the wallpaper, in orange. On the desktop the name wraps at 8ch.
- **Headline** (`section`: 650, 1.75rem, 1.2, -0.01em): the title inside a window.
- **Title** (`heading-sm`: 600, 1.125rem, 1.3): an entry heading, such as a job or a project.
- **Body** (`body`: 400, 1.125rem, 1.6): paragraphs and the line under the name. Lines stop at 68ch.
- **Body small** (`excerpt`: 400, 1.0625rem, 1.5): lists and descriptions inside entries, and the certificates.
- **Meta** (`meta-small`: 400, 0.9375rem, 1.45): place and date lines in Sand, menu bar text, the contact links, the Privacy link. Menu bar links are weight 600.
- **Wordmark** (`wordmark`: 700, 1.25rem, -0.01em): "TORRES OS." in the menu bar, cream with an orange full stop; 1rem below 30rem.
- **Label** (mono 500, 0.8125rem): the filename in a title bar. File icon labels are 0.75rem.
- **Terminal** (mono 400, 0.875rem, 1.55): terminal output and the boot log.

One-off sizes. Each is used in exactly one place and is not a step to reuse:
- **1.375rem at 650**: section headings on the privacy page (Torres `title`, as a third-level heading).
- **1rem**: the terminal prompt on the stacked page, so phones do not zoom when it is focused.
- **Fluid logo sizes**: the ASCII logo scales with its container, `min(1.55vw, 0.8125rem)` on the boot screen and `min(1.5cqw, 0.75rem)` in the terminal. Inline code is 0.9em.

### Named Rules
**The Three Voices Rule.** Bricolage Grotesque is for the name, window titles, entry titles and the "TORRES OS." wordmark. Mono is for filenames, the terminal, the boot log and inline code. Everything else is system sans.

**The Tabular Numbers Rule.** The clock and the year column use tabular figures so they do not shift.

## Layout

There are two layouts. A script that runs before first paint picks one.

**Desktop** applies when the viewport is at least 900px wide and 560px tall and the pointer is fine (a mouse or trackpad). The page does not scroll. A fixed 2.5rem menu bar sits on top and the rest is the desk:
- File icons sit top left in a grid of two 8.25rem columns.
- The name sits bottom left, 2rem from the edges.
- The Privacy link sits bottom right, 1rem from the edge.
- Windows are absolutely placed, at most the desk height minus 2rem, and scroll inside.
- `about.md` opens top right (30rem wide, 2rem from the top and right edges). The other files open on the right as a cascade, each 1.5rem lower and further left than the last, 32rem to 40rem wide.
- From 90rem wide, the terminal opens at start in its own column at the bottom (21rem tall), between the name and `about.md`, so the two never overlap. Below 90rem only `about.md` opens at start and the terminal opens on request over the lower left (`min(32rem, 100% - 4rem)` wide).
- Windows drag by the title bar. A window cannot go above the menu bar, and at least 96px of it stays on screen at each side.
- A maximised window fills the desk with a 0.75rem margin (2rem at the bottom, so the Privacy link stays visible). Its text column stays at most 40rem wide; the terminal uses the full width.

**Stacked** applies everywhere else, including without JavaScript. It is one column, at most 44rem wide, with a sticky menu bar, the name first, then the icons as a wrapping grid (7rem minimum per icon), then every window in order with a 1.25rem gap, then the Privacy link, centred. Icons are plain anchor links. Window buttons are hidden. Without JavaScript the terminal and its icon are hidden. If the window script fails to load, the desktop falls back to this layout.

**The privacy page** always uses the stacked layout and loads no script. It is the menu bar (the brand links home, there is no clock) and one window, `privacy.md`, with no buttons.

When the viewport changes from one layout to the other, dragged windows return to their start positions. Below 30rem the clock is hidden and the menu bar gaps drop to 0.75rem.

Spacing comes from the Torres scale (0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3 and 4rem): 1.25rem for most gaps, 1.5rem for window padding, 1rem for terminal padding, and a page gutter of `clamp(1.25rem, 5vw, 2rem)`.

## Elevation & Depth

Depth comes first from tone: the wallpaper is Coffee Canvas and windows are one step lighter (Torres elevation 2 at rest, 3 in front). The stacked page is flat: windows have a 1px Hairline outline and no shadow. Shadows exist only on the desktop, where windows overlap. They are pure black, because a tinted shadow does not show on a dark ground.

### Shadow Vocabulary
- **Window at rest** (`elevation-2`: `0 8px 20px -12px rgb(0 0 0 / 0.6)`): an open window that is not in front.
- **Window in front** (`elevation-3`: `0 22px 44px -14px rgb(0 0 0 / 0.8)`): the active window.

### Named Rules
**The Front Window Rule.** The active window is shown in four ways at once: the deeper shadow, a lighter outline (Stone), a title in Cream Ink, and an orange label on its file icon. Windows behind it have a Hairline outline, a Sand title, and a Soft Canvas label on their icon. Title bars have the window's own tone; only the terminal's turns to Terminal Bar in front.

**The Shadows Mean Stacking Rule.** A shadow says that one thing lies on top of another. Nothing on the stacked page, the menu bar or the buttons has one.

## Shapes

Corners are gently rounded and consistent. Windows, the primary button and the portrait use 12px. Small things (file icons and their labels, window buttons, the marker, inline code) use 6px. The focus ring has 6px corners too. Nothing is fully round.

Lines are always 1px: Hairline for the outline of a window, the portrait, the menu bar rule and dividers inside a window; Stone for the outline of the front window.

Icons are small drawings made for this site: a 40px grid, 1.5px cream strokes with round joins, on a Soft Canvas fill. The terminal icon has a Terminal Ground fill, a cream outline and an orange prompt. The window button icons (maximise, restore, close) are 12px line drawings in the current text colour.

## Components

### Window
The main container. Every piece of content lives in one.
- **Shape:** Soft Canvas (`surface-raised`), 1px Hairline outline, 12px corners, content clipped to the corners.
- **Title bar:** at least 2.25rem high, a Hairline rule below, the filename in mono on the left, the maximise and close buttons on the right.
- **Body:** 1.5rem padding. On the desktop it scrolls inside with a thin scrollbar.
- **Entries:** repeated items inside a window are separated by a Hairline rule with 2rem above and 1.5rem below it. There are no cards inside windows.
- **Desktop behaviour:** drag by the title bar (grab cursor), click to bring to front, Escape or the close button to close. Closing returns focus to the icon and brings the next window to the front.
- **Maximise:** the square button, or a double-click on the title bar, fills the desk; the same again restores it. The button's icon and label change to "Restore". A maximised window cannot be dragged. Closing a window restores it.

### Terminal window
The darkest window. Same shape as a window, with the terminal colours and mono type.
- **Body:** 1rem padding, at least 16rem high when stacked, text cursor everywhere. A click anywhere focuses the prompt unless text is selected.
- **Prompt:** orange label, a bare input with no border, an orange block caret.
- **Output:** echoed commands in Sand with 0.75rem above, entry titles and errors in orange, the ASCII logo in orange scaled to the window width.
- **Selection:** orange with Coffee On Orange text.

### File icon
- **Style:** a 40px drawing 0.5rem above a mono label (0.75rem, weight 500), centred, in cream on the wallpaper.
- **Open:** the label of an open file gets a Soft Canvas background.
- **Front:** the label of the front window's file is orange with Coffee On Orange text. Only one icon is orange at a time.
- **Hover:** the label turns cream with Coffee On Orange text.
- **Press:** the icon scales to 0.97.

### Primary button
One per page: the main call to action.
- **Shape:** 12px corners, `0.75rem 1.25rem` padding, 1.0625rem at weight 600.
- **Colour:** orange fill, Coffee On Orange text. On hover the fill turns cream and the text Coffee Canvas.
- **Press:** scales to 0.97.

### Links
- **In a window:** `link`, 1px underline offset by 0.18em. The underline thickens to 2px on hover.
- **Entry titles that link:** cream, no underline at rest; a 2px orange underline on hover.
- **The Privacy link:** cream, underlined.

### Marker and inline code
- **Marker:** Rust Mark behind Cream Ink, 6px corners, for key terms in the files.
- **Inline code:** mono at 0.9em on Soft Canvas with a 1px Hairline outline, because the window around it has the same tone. 6px corners. Used on the privacy page.

### Menu bar
- **Style:** 2.5rem high, Soft Canvas, 1px Hairline rule below. The wordmark "TORRES OS." on the left, with its full stop in orange, then three cream links at weight 600 and the clock in Sand on the right.
- **Hover:** a 2px orange underline.

### Window buttons
- **Style:** maximise and close, each a 2.25rem square target with a 12px icon and 6px corners. Orange on hover. Scales to 0.95 on press. Desktop only.

### Focus
Every focusable control shows a 2px orange outline, 3px outside the element, with 6px corners. On window buttons the outline cannot sit outside, so it is cream and sits 4px inside the target.

### Motion
- **Boot:** a dark full-screen log that plays once per browser session, on first load only. Three log lines print at 400, 750 and 1200ms, and each `[ ok ]` arrives 200, 250 and 800ms after its line, so the rhythm is uneven on purpose. The welcome line prints at 2300ms. A block cursor blinks in steps on the line being worked on. The screen fades out in four steps over 240ms from 3000ms, and the windows start opening as the fade starts. Any click or key skips it. It runs in CSS, so it ends even if the script fails.
- **Pointer only:** windows animate when opened or closed with the mouse. Anything started from the keyboard (Enter on an icon, Escape, the terminal's `open` and `exit`) happens at once, with no transition.
- **Open:** a window fades in and scales from 0.96 to 1 in 180ms with the ease-out curve `cubic-bezier(0.23, 1, 0.32, 1)`. A window opened from an icon grows from that icon.
- **Close:** a window fades out and scales to 0.97 in 120ms.
- **Maximise and restore:** instant.
- **Start:** on wide desktops the terminal opens first and `about.md` follows 70ms later.
- **Press and hover:** press scale takes 140ms with the same curve. The button colour change takes 160ms.
- **Reduced motion:** no boot sequence, no scaling, no press transitions, no smooth scrolling. Windows still fade.
- Hover styles apply only on devices that hover with a fine pointer.

## Do's and Don'ts

### Do:
- **Do** keep the wallpaper dark coffee and put content in lighter coffee windows with cream text.
- **Do** keep orange as the single accent, and take every token from Torres by name.
- **Do** put Coffee On Orange text on every orange fill.
- **Do** give every new piece of content its own window with a filename, a file icon and an entry in the terminal, read from the same HTML.
- **Do** use 1px lines: Hairline for outlines and dividers, Stone for the front window.
- **Do** keep hover styles inside `(hover: hover) and (pointer: fine)`.
- **Do** make sure new content also works on the stacked page and without JavaScript.
- **Do** keep window motion at 180ms to open and 120ms to close, instant from the keyboard, with a reduced-motion version that only fades.

### Don't:
- **Don't** add a colour, a type size or a spacing value that Torres does not have.
- **Don't** put cream text on orange.
- **Don't** add a second accent colour. Amber, green and blue belong to the terminal only.
- **Don't** add a light surface or a light theme. Cream is for text, strokes and hover fills.
- **Don't** use gradients, pills or fully round corners.
- **Don't** add shadows on the stacked page, or to buttons and the menu bar.
- **Don't** use mono type outside filenames, the terminal, the boot log and inline code.
- **Don't** add scroll animations, looping animations or a second intro. The boot sequence is the only staged motion.
- **Don't** put cards inside windows. Separate entries with a Hairline rule.
