import { ReactNode } from 'react';
import * as S from './Layout.css';

function Layout({ children }: { children: ReactNode }) {
  return <div className={S.container}>{children}</div>;
}

export default Layout;
