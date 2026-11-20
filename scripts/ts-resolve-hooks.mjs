import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith('.') && !/\.[a-z]+$/i.test(specifier)) {
    try {
      return await nextResolve(`${specifier}.ts`, context);
    } catch {
      // fall through to the default resolver below
    }
  }
  if (specifier.startsWith('@/')) {
    const root = new URL('../', import.meta.url);
    const candidate = new URL(`${specifier.slice(2)}.ts`, root);
    if (existsSync(fileURLToPath(candidate))) return { url: candidate.href, shortCircuit: true };
  }
  return nextResolve(specifier, context);
}
