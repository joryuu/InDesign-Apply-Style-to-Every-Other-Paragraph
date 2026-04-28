# Apply Style to Every Other Paragraph

## Overview
When formatting one-off stories, sidebars, or grid layouts with a predictable alternating structure, manually clicking through paragraphs to assign styles is slow and error-prone. Setting up a Next Style chain works for repeatable templates but is more infrastructure than a single-use layout warrants.

This script applies a selected paragraph style to every other paragraph in a selected story. It also includes an option to skip the first paragraph, allowing for a title or header to sit above the alternating pattern without being affected.

## Features

* Reads all paragraph styles from the active document, including styles nested inside style groups.
* Presents a dropdown of all available styles and a checkbox to skip the first paragraph.
* Two alternating patterns supported:
   * **Default:** applies the selected style starting from the first paragraph — Header / Body / Header / Body
   * **Skip first:** leaves the first paragraph untouched and begins alternating from the second — Title / Header / Body / Header / Body
* Applies the style to the full parent story of the selected text frame.
* Confirms completion with an alert when finished.

## How to Use

1. In InDesign, select the text frame containing the story you want to format.
2. Open the Scripts panel: **Window → Utilities → Scripts**.
3. Double-click **Apply_Style_to_Every_Other_Paragraph.jsx** to run it.
4. In the dialog, select the paragraph style you want to apply from the dropdown.
5. Check **Skip first paragraph** if your story opens with a title or header that should not be included in the alternating pattern.
6. Click **OK**. The script applies the style and confirms when complete.

## Adding to the InDesign Scripts Panel

1. Download the `.jsx` file.
2. Move it into InDesign's Scripts Panel folder:
   * **Mac:** `Applications/Adobe InDesign [version]/Scripts/Scripts Panel`
   * **Windows:** `Program Files/Adobe/Adobe InDesign [version]/Scripts/Scripts Panel`
3. Open the Scripts panel in InDesign: **Window → Utilities → Scripts**.
4. The script appears immediately — no restart required.
5. Double-click to run.

## Requirements

* Adobe InDesign (tested on version 20.x).
* An active document with at least one paragraph style defined.
* A text frame selected on the canvas before running the script.

## Why This Script?

Next Style is the right tool for repeatable templates where structure is consistent and content is typed directly into InDesign. It is not well suited for placed or pasted copy, where the chain never fires, or for one-off layouts where configuring chained styles adds overhead that outlasts the job.

This script uses styles already in your document, requires no configuration between uses, and leaves nothing behind when the job is done.
