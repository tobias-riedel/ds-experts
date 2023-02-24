import cleanHtml from 'sanitize-html';

export const sanitizeHtml = (dirty = '', opts?: cleanHtml.IOptions) => {
  const cleanText = cleanHtml(dirty, {
    allowedTags: opts?.allowedTags || ['b', 'i', 'u', 'em', 'strong', 'a'],
    allowedAttributes: opts?.allowedAttributes || {
      a: ['href'],
    },
  });
  const formattedText = cleanText.replace('\n', '<br />');

  return formattedText;
};
