import { cpSync, mkdirSync, rmSync } from 'node:fs';
const output = new URL('./public/', import.meta.url);
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
for (const name of ["index.html", "styles.css", "readability.css", "typography.css", "appearance.css", "app.js", "assets"]) {
  cpSync(new URL(name, import.meta.url), new URL(name, output), { recursive: true });
}
