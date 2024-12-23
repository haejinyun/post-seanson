'use client';

import logo from '@/assets/png/Logo.png';
import Image from 'next/image';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import hanwha from '@/assets/png/hanwhaHeader.png';
import kia from '@/assets/png/kiaHeader.png';
import nc from '@/assets/png/ncHeader.png';
import bears from '@/assets/png/bearsHeader.png';

import * as S from './Header.css';

const HeaderImage = [
  {
    page: 'hanwha',
    src: hanwha,
  },
  {
    page: 'kia',
    src: kia,
  },
  {
    page: 'nc',
    src: nc,
  },
  {
    page: 'bears',
    src: bears,
  },
];

function Header() {
  return (
    <header className={S.container}>
      <a href="/" className={S.topHeader}>
        <Image className={S.topLogo} src={logo} alt="Logo" width={100} height={100} />
      </a>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className={S.dropDownTrigger} type="button" aria-label="Customise options">
            <span className={S.dropDownTriggerSpan}>+</span>
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className={S.dropdownMenuContent} sideOffset={5}>
          {HeaderImage.map(item => (
            <DropdownMenu.Item key={item.page} className={S.dropdownMenuItem}>
              <a href={`/${item.page}`} className={S.clubUnit}>
                <Image src={item.src} alt="Logo" width={189} height={95} />
              </a>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </header>
  );
}

export default Header;
