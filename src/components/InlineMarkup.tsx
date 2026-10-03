import { Fragment } from 'react';

const TOKEN = /(==[^=]+==|\*\*[^*]+\*\*)/g;

interface InlineMarkupProps {
  text: string | null | undefined;
  /** Element used for ==highlighted== text. */
  highlightAs?: 'span' | 'strong';
  highlightClassName?: string;
  boldClassName?: string;
}

/**
 * Renders CMS text with two tiny inline markers:
 * `==text==` → highlighted (brand blue by default), `**text**` → bold.
 */
export default function InlineMarkup({
  text,
  highlightAs: Highlight = 'span',
  highlightClassName = 'text-primary-500',
  boldClassName,
}: InlineMarkupProps) {
  if (!text) return null;

  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (part.length > 4 && part.startsWith('==') && part.endsWith('==')) {
          return (
            <Highlight key={i} className={highlightClassName}>
              {part.slice(2, -2)}
            </Highlight>
          );
        }
        if (part.length > 4 && part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className={boldClassName}>
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
