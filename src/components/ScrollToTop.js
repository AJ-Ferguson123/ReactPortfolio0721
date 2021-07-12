import { useEffect } from 'react';
import {useLocation as reactRouter} from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = reactRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}