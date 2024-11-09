# daily-color

Provides a unique hex code each day

## Install

```bash
npm install daily-color
```

## Use

In a JavaScript/TypeScript project:

```javascript
const getDailyColor = require("daily-color");

console.log("Today's color is: ", getDailyColor());
```

Using the CLI:

```bash
dailycolor
```

## Development

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm run test
```

The project uses ESLint and Prettier to ensure consistent coding standards.

```bash
npm run lint
npm run format
npm run package:lint
```

- `lint` will check for errors and fix formatting in `.ts` and `.js` files.
- `format` will apply format rules to all possible files.
- `package:lint` will warn of any inconsistencies in the `package.json` file.
