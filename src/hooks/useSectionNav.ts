/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLocation, useNavigate } from 'react-router-dom';

export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (sectionId: string) => {
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTarget: sectionId } });
    }
  };
}
