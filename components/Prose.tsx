/* ═══════════════════════════════════════════════════════════════
   PROSE
   Renders the blog's content blocks. A block may open with "## " for
   a heading; inside a block, lines starting with "- " become a list,
   lines starting with "1. " become a numbered list, and **bold** is
   honoured inline. Deliberately small: the content is ours, so this
   does not need to be a general Markdown parser.
   ═══════════════════════════════════════════════════════════════ */

import type { ReactNode } from 'react';

function inline(text: string, keyPrefix: string): ReactNode[] {
  // Split on **bold** and keep the delimiters.
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={`${keyPrefix}-b-${i}`} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={`${keyPrefix}-t-${i}`}>{part}</span>;
  });
}

function renderLines(lines: string[], keyPrefix: string): ReactNode[] {
  const out: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2));
        i += 1;
      }
      out.push(
        <ul key={`${keyPrefix}-ul-${i}`} className="my-6 space-y-3 pl-5">
          {items.map((item, n) => (
            <li key={n} className="list-disc text-[1.05rem] leading-relaxed text-gray-700 marker:text-gold">
              {inline(item, `${keyPrefix}-ul-${i}-${n}`)}
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ''));
        i += 1;
      }
      out.push(
        <ol key={`${keyPrefix}-ol-${i}`} className="my-6 space-y-3 pl-5">
          {items.map((item, n) => (
            <li key={n} className="list-decimal text-[1.05rem] leading-relaxed text-gray-700 marker:font-semibold marker:text-gold">
              {inline(item, `${keyPrefix}-ol-${i}-${n}`)}
            </li>
          ))}
        </ol>,
      );
      continue;
    }

    out.push(
      <p key={`${keyPrefix}-p-${i}`} className="my-5 text-[1.08rem] leading-[1.75] text-gray-700">
        {inline(line, `${keyPrefix}-p-${i}`)}
      </p>,
    );
    i += 1;
  }

  return out;
}

export function Prose({ blocks }: { blocks: string[] }) {
  return (
    <div className="font-geist">
      {blocks.map((block, bi) => {
        const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
        if (lines.length === 0) return null;

        if (lines[0].startsWith('## ')) {
          return (
            <section key={bi} className="mt-12 first:mt-0">
              <h2 className="text-2xl font-semibold leading-[1.15] tracking-[-0.025em] text-ink sm:text-3xl">
                {lines[0].slice(3)}
              </h2>
              {renderLines(lines.slice(1), `b${bi}`)}
            </section>
          );
        }

        return (
          <div key={bi} className="mt-8 first:mt-0">
            {renderLines(lines, `b${bi}`)}
          </div>
        );
      })}
    </div>
  );
}
