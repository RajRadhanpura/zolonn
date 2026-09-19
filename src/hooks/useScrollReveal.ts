/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DURATION = 1000;
const STAGGER = 130;
const MAX_STAGGER_STEPS = 6;
const DISTANCE = 48;
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';

const isDecor = (el: Element) => {
  const cls = el.className?.toString() ?? '';
  return /\babsolute\b|\bfixed\b|pointer-events-none/.test(cls) || el.getAttribute('aria-hidden') === 'true';
};
const isGrid = (el: Element) => /(^|\s)(grid|flex-wrap)(\s|$)/.test(el.className?.toString() ?? '');

// Picks the blocks of a section that should fade in one after another.
function collectUnits(root: Element): Element[] {
  const kids = Array.from(root.children).filter((k) => !isDecor(k));
  if (isGrid(root) && kids.length > 1) return kids;
  if (kids.length === 1 && kids[0].tagName === 'DIV' && !kids[0].id) return collectUnits(kids[0]);
  return kids.flatMap((kid) => {
    const inner = Array.from(kid.children).filter((k) => !isDecor(k));
    return isGrid(kid) && inner.length > 1 ? inner : [kid];
  });
}

/** Fades every section of the page in (bottom to top, staggered) as it scrolls into view. */
export function useScrollReveal() {
  const { pathname } = useLocation();

  // A new page must start at the top; otherwise it opens at the old scroll position
  // and the smooth-scroll rule on <html> visibly glides up while sections are revealing.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const roots = Array.from(document.querySelectorAll('section, footer')).filter(
      (s) => s.id !== 'hero' && !/min-h-\[/.test(s.className.toString())
    );
    const units = new Set<HTMLElement>();
    roots.forEach((root) => collectUnits(root).forEach((u) => units.add(u as HTMLElement)));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) =>
            a.target.compareDocumentPosition(b.target) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
          );
        visible.forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          el.style.removeProperty('opacity');
          el.animate(
            [
              { opacity: 0, transform: `translateY(${DISTANCE}px)` },
              { opacity: 1, transform: 'translateY(0)' }
            ],
            {
              duration: DURATION,
              delay: Math.min(i, MAX_STAGGER_STEPS) * STAGGER,
              easing: EASING,
              fill: 'backwards'
            }
          );
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    units.forEach((el) => {
      el.style.opacity = '0';
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      units.forEach((el) => el.style.removeProperty('opacity'));
    };
  }, [pathname]);
}
