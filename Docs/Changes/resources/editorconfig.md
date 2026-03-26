# EditorConfig

**Used in:** changesV3 group 9

---

## What it is

`.editorconfig` is a plain text file placed at the root of a project. Editors that support it (VS Code, JetBrains, Sublime Text, Vim, and many others) automatically apply its formatting rules when you open any file in that project. No plugins, no CLI tools, and no build step are required.

It solves the problem of mixed indentation, trailing spaces, and different line endings that occur when more than one person (or more than one machine) edits the same code.

---

## When to use it

- Any project with more than one contributor.
- Any project where you switch between editors or operating systems.
- Any project where you notice mixed tabs/spaces or CRLF/LF diffs in git.

---

## How to implement it

### Create `.editorconfig` at the project root

```ini
# Tell EditorConfig this is the top-most config file
root = true

# Defaults for all files
[*]
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

# Specific rules for web files
[*.{html,css,js,md}]
indent_style = space
indent_size = 4
charset = utf-8
```

Save the file as `.editorconfig` (note the leading dot) in the same folder as your HTML files.

### What each setting does

| Setting | What it does |
|---|---|
| `root = true` | Stops EditorConfig looking in parent directories for more config files |
| `indent_style = space` | Use spaces for indentation (not tabs) |
| `indent_size = 4` | Each indent level = 4 spaces |
| `charset = utf-8` | Save files as UTF-8 encoding |
| `end_of_line = lf` | Use Unix-style line endings (LF, `\n`), not Windows-style (CRLF, `\r\n`) |
| `insert_final_newline = true` | Every file ends with a newline character |
| `trim_trailing_whitespace = true` | Remove invisible spaces at end of lines on save |

### Why `end_of_line = lf` matters

Windows uses CRLF (`\r\n`) line endings; Unix/Mac use LF (`\n`). If different contributors use different OS defaults, git shows entire files as changed when only line endings differ. Setting `lf` uniformly avoids this.

### Verifying it works in VS Code

1. Open VS Code.
2. Open any `.html` file in the project.
3. Check the status bar in the bottom-right of the window — it should show `Spaces: 4` and `UTF-8`.
4. The EditorConfig extension is built into VS Code — no separate install needed.

---

## Common mistakes

- Placing `.editorconfig` in a subfolder instead of the project root — it only affects files in that folder and below.
- Setting `indent_size` without `indent_style` — indent_size is ignored if style is not specified.
- Expecting `.editorconfig` to retroactively reformat existing files — it only applies to future saves. Use a formatter (Prettier) to fix existing files.

---

## Learn more

| Resource | URL |
|---|---|
| EditorConfig official site | https://editorconfig.org |
| VS Code — EditorConfig support | https://code.visualstudio.com/docs/getstarted/settings |
| EditorConfig — full property list | https://editorconfig.org/#supported-properties |
| YouTube — Search "EditorConfig setup tutorial VS Code" (coding2go, Traversy Media) | https://www.youtube.com/results?search_query=editorconfig+setup+tutorial+vscode |

---

## Quick practice exercise

1. Create a project with one HTML file indented with tabs.
2. Add a `.editorconfig` file setting `indent_style = space` and `indent_size = 4`.
3. Open the HTML file in VS Code — check the status bar shows Spaces: 4.
4. Save the file: VS Code should apply the EditorConfig rules and convert indentation automatically (if the EditorConfig extension is active).
