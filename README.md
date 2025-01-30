# daily-color

Provides a unique hex code each day

## Install

Install from [npmjs.com/package/daily-color](https://www.npmjs.com/package/daily-color):

```bash
npm install daily-color
```

## Use

In a JavaScript/TypeScript project, using NPM:

```javascript
import { getDailyColor } from "daily-color";

console.log("Today's color is:", getDailyColor());
console.log("Another day's color is:", getDailyColor(new Date("2024-11-09")));
```

Directly loading the bundled JavaScript, for static projects not using NPM:

```html
<script type="module">
  import { getDailyColor } from "https://www.aimeerivers.com/daily-color/dist/daily-color.js";

  console.log("Today's color is:", getDailyColor());
  console.log("Another day's color is:", getDailyColor(new Date("2024-11-09")));
</script>
```

Using the CLI:

```bash
dailycolor
```

Just want to see today's color?

There is a demo on [www.aimeerivers.com/daily-color](https://www.aimeerivers.com/daily-color/)

And if you want to see the coming colors for the next month you can see them on [www.aimeerivers.com/daily-color/month](https://www.aimeerivers.com/daily-color/month)

## Development

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm run test
```

Compile the dist code, for projects without NPM:

```bash
npm run webpack
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
