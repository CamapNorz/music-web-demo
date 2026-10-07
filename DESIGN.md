---
name: Between
description: Quiet abstract audiovisual exhibition, expressed through proximity and tension.
colors:
  background-a: "#111321"
  background-b: "#17111f"
  paper: "#eee9e1"
  soft: "#b5b6cb"
  line: "#45465e"
  accent: "#b3a1ec"
  peach: "#e6ad98"
typography:
  display:
    fontFamily: "Noto Serif TC, serif"
    fontSize: "clamp(34px, 3.6vw, 57px)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.04em"
  body:
    fontFamily: "system-ui, sans-serif"
    fontSize: "15px"
    lineHeight: 1.65
components:
  button-primary:
    backgroundColor: "{colors.paper}"
    textColor: "#212033"
    padding: "14px 26px"
---

## Overview

The artwork leads; the interface stays quiet. Dark, spacious fields hold delicate breathing rings or linked geometric shapes. Warm paper text, lavender, and restrained peach distinguish the work without adding visual noise. All imagery is drawn in Canvas; no photography or generated composition is required.

## Colors

Lavender carries selection, focus, and fine visual accents. Paper carries prominent text and the entry action. Soft text and subdued rules structure supporting information. A uses a cool midnight field; B uses a warmer plum field. Peach appears within the abstract artwork. Green is prohibited by the user's explicit preference.

## Typography

Traditional Chinese serif display text establishes an exhibition voice. System sans serif handles controls and practical information. The English wordmark uses italic Georgia. Mobile display text reduces to 35px; supporting text remains compact and clearly subordinate.

## Layout

Desktop entrance places the invitation and two adjacent choices on the left, with the artwork occupying the right. Wide margins and unused space are deliberate. The experience expands the artwork to the viewport, with a slim control row above and a temporary instruction below.

At 700px and below, entrance padding becomes 24px and controls wrap as needed. Entrance content can scroll vertically on short screens. The experience remains a fixed canvas. Preserve readable controls when artwork overlaps the mobile entrance.

## Elevation & Depth

Depth comes from translucent radial light, repeated outlines, and sparse particles. Controls are flat. Pause and ending states use a translucent dark full-screen veil; do not introduce floating card stacks or heavy shadows.

## Shapes

Interface actions are rectangular and unrounded. Thin rules divide the two choices. A uses irregular concentric rings; B uses circles, squares, and triangles connected by flexible lines. Geometry is the subject, rather than decorative chrome.

## Components

The entry action uses a paper fill with dark text. Selected direction uses a lavender bottom rule and a slight tonal background. Unselected directions are quieter but remain legible. Focus is an explicit lavender outline. Audio level and reduced motion use native inputs.

Experience navigation provides pause, mute, and return. Pause and ending overlays expose clear continuation actions. Motion remains continuous and gentle; reduced motion lowers movement amplitude and speed. Ending differences belong to the audiovisual work, with neutral completion copy.

## Do's and Don'ts

Keep the artwork dominant, supporting copy short, and interaction instructions practical. Preserve desktop-first usability and mobile access to every control. Keep visible keyboard focus and labeled inputs. Avoid green, ornamental dashboards, extra cards, prominent scores, psychological claims, or public labels that reveal the hidden endings.
