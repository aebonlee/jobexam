import { useEffect } from 'react';
import { SITE } from '../config/site';

export default function SEOHead({ title, description }: { title?: string; description?: string }) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE.name}` : `${SITE.name} | ${SITE.title}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description || SITE.description);
  }, [title, description]);

  return null;
}
