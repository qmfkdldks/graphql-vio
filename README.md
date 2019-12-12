# Objective
Developer should be able to implement required features

- Each Configuration should describe it's meaning
- 
- Iteratively inspect and improve documentation quality
- Docs should be under doc  

# Best Practices
- Each files should have objective and description
- New feature
- Find the point where interface can be used. And list alternatives which can leverage interface.

# Tech Stack
- GraphQL
- Apollo Server

# Build

# Lint
- objective: check the source code for "programmatic" as well as "stylistic" errors. Make code consistent also help to improve general code quality.
- key result:
master branch should contain 0 linting errors.

Before creating new pull request you should solve lint issue. You can lint code under `/src` folder using one of next ways.
- `$ make lint`

Continuous Integration will evaluate lint isssue for every pull requests.

### VScode Editor
- eslint extension will alarm issues in PROBLEMS panel.
- .vscode/setting.json is configured to automatically fix lint issue on save.

# Dependencies Update
How to deal with dependencies version upgrade.

# Doc
When and how to document code.
In build process typescript compiler excludes any comments under `/src` folder.

We force to implement and split a logic in to multiple functions as many as possible.

We want to leverage JSDoc and IntelliSence feature. So you need to understand [JSDoc syntax](https://devhints.io/jsdoc).

Example
```typescript
/**
 * Plays a song
 * @param {Song} song - The to be played
 */

function play (song: string) {
}
```

## What

- shared functions
- tests
- render
- api

## When

## 

# Test
What to test


## Coverage
- 

# Log
We use [Piano](https://github.com/pinojs/pino) to log. In development mode, we use [piano-pretty](https://github.com/pinojs/pino-pretty). Sending, alert triggering, reformatting and all forms of log processing is conducted in a separate process.

- fatal when the process crashes or exits.
- error when catch errors
- warn when too many memory usage, too long third party api response time
- info when start or connect to other services
- trace when need to check params, third party responses

Logging system is complete when is integrated with third party logging service.

### Rules
- When catch error, log 

# Performance
Mistakes

# QA

# Tools

# ENV
you should update and credentials to .env.example file. And next run next command to run GraphQL server in development mode.
`cp .env.example .env.development` 

# Templates
- objective: make all kind of articles template 

- pull request
- issue
- documentation
