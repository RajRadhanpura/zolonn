/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

const SITE_NAME = 'Zolon Hardware';

function setMetaTag(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export default function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    setMetaTag('description', description);
    setMetaTag('og:title', fullTitle, 'property');
    setMetaTag('og:description', description, 'property');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
  }, [title, description]);

  return null;
}
