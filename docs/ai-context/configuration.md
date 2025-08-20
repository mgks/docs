---
title: "Configuration File Reference"
description: "A detailed reference for the aicontext.json file, explaining all available keys and settings for customizing your project context."
---

The `aicontext.json` file is the heart of the tool, ensuring reproducible context generation. All CLI flags that modify the configuration will update this file.

```json
{
  "excludePaths": [
    ".DS_Store",
    ".env",
    ".git/",
    "LICENSE",
    "build/",
    "dist/",
    "node_modules"
  ],
  "includeExtensions": [
    ".css",
    ".js",
    ".json",
    ".md",
    ".ts"
  ],
  "maxFileSizeKB": 500,
  "outputFile": "context.md",
  "useGitignore": true,
  "presets": [
    "nodejs"
  ]
}
```

::: callout info Configuration Management
This file is designed to be checked into version control. This allows your entire team (and your CI/CD pipelines) to generate the exact same context for the project at any given commit.
:::

**Configuration Keys:**

- `excludePaths`: An array of file names, directory names, or glob patterns to exclude.
- `includeExtensions`: An array of file extensions to include in the context.
- `maxFileSizeKB`: The maximum size (in kilobytes) for any single file to be included.
- `outputFile`: The name of the markdown file to be generated.
- `useGitignore`: A boolean (`true` or `false`) that determines whether to read your project's `.gitignore` file and add its patterns to the exclusion list. Defaults to `false`.
- `presets`: An array of strings listing the presets that have been applied to this configuration.