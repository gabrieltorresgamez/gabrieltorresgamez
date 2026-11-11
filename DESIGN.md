---
name: TORRES OS
description: A personal portfolio presented as a small desktop in the browser.
colors:
  orange: "#ff4f00"
  link: "#c2410c"
  canvas: "#fffefb"
  canvas-soft: "#f8f4f0"
  ink: "#201515"
  body: "#605d52"
  hairline: "#c5c0b1"
  border: "#939084"
  selection: "#ffe3d5"
  term-bg: "#1a1210"
  term-soft: "#241c19"
  term-line: "#3a332d"
  term-ink: "#fffefb"
  term-mute: "#c5c0b1"
typography:
  display:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 12vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 650
    lineHeight: 1.3
  body:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  meta:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "ui-monospace, 'SF Mono', SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1
  terminal:
    fontFamily: "ui-monospace, 'SF Mono', SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  sm: "6px"
  md: "12px"
spacing:
  gutter: "clamp(1rem, 4vw, 2rem)"
  bar: "2.5rem"
  gap: "1.25rem"
  window: "1.5rem"
  terminal: "1rem"
components:
  menu-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    height: "{spacing.bar}"
  window:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.window}"
  window-bar:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.label}"
    height: "2.25rem"
  window-terminal:
    backgroundColor: "{colors.term-bg}"
    textColor: "{colors.term-ink}"
    typography: "{typography.terminal}"
    rounded: "{rounded.md}"
    padding: "{spacing.terminal}"
  window-terminal-bar:
    backgroundColor: "{colors.term-soft}"
    textColor: "{colors.term-mute}"
    typography: "{typography.label}"
    height: "2.25rem"
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
  file-icon:
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 0.25rem"
  file-icon-open:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
  window-close:
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    size: "2.25rem"
---

# Design System: TORRES OS

## Overview

**Creative North Star: "The Orange Desktop"**

The site is a small operating system, not a page. The wallpaper is flat electric orange. The content sits in cream windows with a thin dark outline, and each window is a file with its name in the title bar. One window, the terminal, is dark. On small or touch screens, and without JavaScript, the same windows stack into one readable column.

The system shares its tokens with a sister site (cream, coffee ink, orange, 12px corners, Bricolage Grotesque headings, system sans body). The difference is that orange is the ground here, not an accent. Everything else is quiet: flat fills, 1px lines, two soft shadows, and very little motion.

**Key Characteristics:**
- Flat orange ground, cream windows, one dark terminal.
- 1px lines and 12px corners. No gradients, no pills.
- Three type voices: Bricolage Grotesque for headings, system sans for reading, mono for filenames and the terminal.
- Two layouts from one HTML source: a desktop with draggable windows, and a stacked page.
- Motion is short and rare: one boot sequence, then quick window opens and closes.

## Colors

A warm set: one loud orange, a cream and coffee pair for reading, and a darker coffee set for the terminal.

### Primary
- **Electric Orange** (`orange`): the page ground. Also the primary button fill, the caret, the terminal prompt, terminal errors, the ASCII logo, and the focus ring inside the terminal.

### Secondary
- **Rust Link** (`link`): text links on cream, and the hover colour of the close button. It is the readable form of the orange (5.1:1 on cream).

### Neutral
- **Cream Canvas** (`canvas`): window bodies, the menu bar, icon fills, and the title bar of a window that is not in front.
- **Soft Canvas** (`canvas-soft`): the title bar of a light window.
- **Coffee Ink** (`ink`): text, the window outline, the menu bar rule, icon strokes, and the focus ring.
- **Warm Grey** (`body`): secondary text such as dates, places, the clock, and title bar names.
- **Hairline** (`hairline`): dividers inside a window.
- **Stone** (`border`): list markers and scrollbar thumbs only. Despite the name it is not used for borders.
- **Peach Selection** (`selection`): text selection on light surfaces.

### Terminal
- **Terminal Ground** (`term-bg`): the terminal body, the boot screen, and the terminal title bar when not in front.
- **Terminal Bar** (`term-soft`): the terminal title bar.
- **Terminal Rule** (`term-line`): the rule under the terminal title bar and its scrollbar.
- **Terminal Ink** (`term-ink`): terminal output. Same value as Cream Canvas.
- **Terminal Mute** (`term-mute`): echoed commands and the title bar name. Same value as Hairline.

- **Terminal Amber** (`#ffc46b`): key terms and command names in terminal output.
- **Terminal Green** (`#a9d18e`): the word "now" on current roles.
- **Terminal Blue** (`#8ecae6`): organisation names and URLs.

### Highlights
- In the cream windows, key terms carry a marker: Selection Tint (`#ffe3d5`) behind Coffee Ink. Organisation names are Coffee Ink at weight 600, and "now" on a current role is Rust Link at 600.
- In the terminal, the same markup maps to the three terminal colours above, with entry titles in orange. Each colour has one meaning; none is decoration.

### Named Rules
**The Orange Ground Rule.** Orange is the wallpaper. On cream it appears only as the one button fill and as an underline colour.

**The No Orange Text On Cream Rule.** Orange on cream is 3.3:1, too low for text. Text on cream uses Rust Link or Coffee Ink. Orange text is allowed on the terminal ground (5.6:1). Text on orange is always Coffee Ink (5.4:1).

**The One Dark Window Rule.** Only the terminal and the boot screen use the terminal colours, including amber, green and blue. Everything else is cream.

## Typography

**Display Font:** Bricolage Grotesque Variable, self-hosted, weights 200 to 800 (with system-ui fallback)
**Body Font:** the system sans stack
**Label/Mono Font:** the system mono stack

**Character:** A friendly, slightly quirky grotesque for names and titles, and the visitor's own system fonts for everything else. The mono voice marks what belongs to the machine.

### Hierarchy
- **Display** (700, `clamp(2.75rem, 12vw, 5rem)`, 0.92, -0.03em): the name on the wallpaper. On the desktop it grows with the viewport to at most 6rem (`clamp(3rem, min(6.6vw, 10vh), 6rem)`) and wraps at 8ch.
- **Headline** (700, 1.75rem, 1.1, -0.02em): the title inside a window. The greeting in `about.md` is 2rem.
- **Title** (650, 1.125rem, 1.3): an entry heading, such as a job or a project.
- **Body** (400, 1.0625rem, 1.6): paragraphs. Lines stop at 68ch. The line under the name is 1.125rem at weight 500.
- **Body small** (400, 0.9375rem): lists and descriptions inside entries.
- **Meta** (400, 0.875rem, Warm Grey): place and date lines, menu bar text. Menu bar links are weight 600.
- **Label** (mono 500, 0.8125rem): the filename in a title bar. File icon labels are 0.75rem.
- **Terminal** (mono 400, 0.875rem, 1.55): terminal output and the boot log. On the stacked page the prompt line is 1rem, so phones do not zoom on focus.

### Named Rules
**The Three Voices Rule.** Bricolage Grotesque is for the name, window titles, entry titles and the "TORRES OS" brand. Mono is for filenames, the terminal and the boot log. Everything else is system sans.

**The Tabular Numbers Rule.** The clock and the year column use tabular figures so they do not shift.

## Layout

There are two layouts. A script that runs before first paint picks one.

**Desktop** applies when the viewport is at least 900px wide and 560px tall and the pointer is fine (a mouse or trackpad). The page does not scroll. A fixed 2.5rem menu bar sits on top and the rest is the desk:
- File icons sit top left in a grid of two 8.25rem columns.
- The name sits bottom left, 2rem from the edge.
- Windows are absolutely placed, at most the desk height minus 2rem, and scroll inside.
- `about.md` opens top right (30rem wide, 2rem from the top and right edges). The other files open on the right as a cascade, each 1.5rem lower and further left than the last, 32rem to 40rem wide.
- From 90rem wide, the terminal opens at start in its own column at the bottom (21rem tall), between the name and `about.md`, so the two never overlap. Below 90rem only `about.md` opens at start and the terminal opens on request over the lower left (`min(32rem, 100% - 4rem)` wide).
- Windows drag by the title bar. A window cannot go above the menu bar, and at least 96px of it stays on screen at each side.

**Stacked** applies everywhere else, including without JavaScript. It is one column, at most 44rem wide, with a sticky menu bar, the name first, then the icons as a wrapping grid (7rem minimum per icon), then every window in order with a 1.25rem gap. Icons are plain anchor links. Close buttons are hidden. Without JavaScript the terminal and its icon are hidden.

When the viewport changes from one layout to the other, dragged windows return to their start positions. Below 30rem the clock is hidden.

Spacing uses a small set of values: 1.25rem for most gaps, 1.5rem for window padding, 1rem for terminal padding, and a page gutter of `clamp(1rem, 4vw, 2rem)`.

## Elevation & Depth

The stacked page is flat: windows have a 1px ink outline and no shadow. Shadows exist only on the desktop, where windows overlap, and they are soft and tinted with the ink colour.

### Shadow Vocabulary
- **Window at rest** (`box-shadow: 0 8px 20px -12px rgb(32 21 21 / 0.45)`): an open window that is not in front.
- **Window in front** (`box-shadow: 0 22px 44px -16px rgb(32 21 21 / 0.6)`): the active window.

### Named Rules
**The Front Window Rule.** The active window is shown in three ways at once: the deeper shadow, a tinted title bar (Soft Canvas, or Terminal Bar), and a title in full ink. Windows behind it have a title bar in their body colour and a muted title.

**The Shadows Mean Stacking Rule.** A shadow says that one thing lies on top of another. Nothing on the stacked page, the menu bar or the buttons has one.

## Shapes

Corners are gently rounded and consistent. Windows, the primary button and the portrait use 12px. Small controls (file icons, the close button) use 6px. The highlight behind an icon label uses 4px. Nothing is fully round.

Lines are always 1px: Coffee Ink for the outline of a window, the portrait and the menu bar rule, and Hairline for dividers inside a window.

Icons are small drawings made for this site: a 40px grid, 1.5px ink strokes with round joins, and a cream fill. The terminal icon is the inverse (ink fill, cream strokes). The close icon is a 12px cross in the current text colour.

## Components

### Window
The main container. Every piece of content lives in one.
- **Shape:** Cream Canvas, 1px Coffee Ink outline, 12px corners, content clipped to the corners.
- **Title bar:** at least 2.25rem high, Soft Canvas, a Hairline rule below, the filename in mono on the left, the close button on the right.
- **Body:** 1.5rem padding. On the desktop it scrolls inside with a thin scrollbar.
- **Entries:** repeated items inside a window are separated by a Hairline rule with 1.75rem above and 1.5rem below it. There are no cards inside windows.
- **Desktop behaviour:** drag by the title bar (grab cursor), click to bring to front, Escape or the close button to close. Closing returns focus to the icon and brings the next window to the front.

### Terminal window
The one dark window. Same shape as a window, with the terminal colours and mono type.
- **Body:** 1rem padding, at least 16rem high when stacked, text cursor everywhere. A click anywhere focuses the prompt unless text is selected.
- **Prompt:** orange label, a bare input with no border, an orange block caret.
- **Output:** echoed commands in Terminal Mute with 0.75rem above, errors in orange, the ASCII logo in orange scaled to the window width.
- **Focus ring and selection:** orange instead of ink.

### File icon
- **Style:** a 40px drawing above a mono label (0.75rem, weight 500), centred, in ink on the orange ground.
- **Hover and open:** the label gets an ink background with cream text and 4px corners. An open file keeps this state.
- **Press:** the icon scales to 0.97.

### Primary button
One per page: the main call to action.
- **Shape:** 12px corners, `0.75rem 1.25rem` padding, 1.0625rem at weight 600.
- **Colour:** orange fill, ink text. On hover: ink fill, cream text.
- **Press:** scales to 0.97.

### Links
- **In a window:** Rust Link, 1px underline offset by 0.2em. Ink on hover.
- **Entry titles that link:** ink, underlined.

### Menu bar
- **Style:** 2.5rem high, Cream Canvas, 1px ink rule below. The brand in Bricolage Grotesque 700 on the left, then three ink links at weight 600 and the clock in Warm Grey on the right.
- **Hover:** a 2px orange underline.

### Close button
- **Style:** a 2.25rem square target with a 12px cross and 6px corners. Rust Link on hover (orange in the terminal). Scales to 0.9 on press. Desktop only.

### Focus
Every focusable control shows a 2px ink outline, offset by 2px (orange inside the terminal).

### Motion
- **Boot:** a dark full-screen log that plays once per browser session, on first load only. Four lines appear at 200, 420, 640 and 900ms, each instantly. The screen fades out over 240ms from 1250ms. Any click or key skips it. It runs in CSS, so it ends even if the script fails.
- **Open:** a window fades in and scales from 0.96 to 1 in 180ms with the ease-out curve `cubic-bezier(0.23, 1, 0.32, 1)`. A window opened from an icon grows from that icon.
- **Close:** a window fades out and scales to 0.97 in 120ms.
- **Start:** on wide desktops the terminal opens first and `about.md` follows 120ms later.
- **Press and hover:** press scale takes 140ms with the same curve. The button colour change takes 160ms.
- **Reduced motion:** no boot sequence, no scaling, no press transitions, no smooth scrolling. Windows still fade.
- Hover styles apply only on devices that hover with a fine pointer.

## Do's and Don'ts

### Do:
- **Do** keep orange as the ground and put content in cream windows.
- **Do** put Coffee Ink on orange for all text and icons on the wallpaper.
- **Do** give every new piece of content its own window with a filename, a file icon and an entry in the terminal, read from the same HTML.
- **Do** use 1px lines: ink for outlines, Hairline for dividers inside a window.
- **Do** keep hover styles inside `(hover: hover) and (pointer: fine)`.
- **Do** make sure new content also works on the stacked page and without JavaScript.
- **Do** keep window motion at 180ms to open and 120ms to close, with a reduced-motion version that only fades.

### Don't:
- **Don't** use orange for text on cream. Use Rust Link.
- **Don't** add a second dark surface. The terminal and the boot screen are the only ones.
- **Don't** use gradients, pills or fully round corners.
- **Don't** add shadows on the stacked page, or to buttons and the menu bar.
- **Don't** use mono type outside filenames, the terminal and the boot log.
- **Don't** add scroll animations, looping animations or a second intro. The boot sequence is the only staged motion.
- **Don't** put cards inside windows. Separate entries with a Hairline rule.
