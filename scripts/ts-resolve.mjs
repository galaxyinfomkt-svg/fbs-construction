/**
 * Lets `node scripts/*.ts` resolve the extensionless relative imports that
 * Next.js and TypeScript use (`./cities` → `./cities.ts`). Node's own type
 * stripping does the rest; nothing is compiled to disk.
 */
import { register } from 'node:module';

register(new URL('./ts-resolve-hooks.mjs', import.meta.url));
