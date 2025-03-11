'use client';

import KiaImage from '@/assets/png/clubLogo/kia.png';

import Image from 'next/image';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { CLUBS } from '@/consts/text';
import { useRouter, useSearchParams } from 'next/navigation';
import pickClubInfo from '@/util/getPickClubInfo';
import * as S from './PickClub.css';

// 여기서 아무것도 안가지고 있다가 클럽을 선택하면 클럽에 맞는 색상이 context에 들어가야해.

function PickClub() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlClubName = searchParams.get('clubName');

  const moveToSelectClub = () => {
    router.push(`/selectplayer?clubName=${urlClubName}`);
  };

  const handleSelectClub = (value: string) => {
    router.push(`?clubName=${value}`);
  };

  const pickClubValue = pickClubInfo(urlClubName || 'kia');
  // 일단 없으면 기아ㅏ껄로 사용하기 나중에 없는 경우도 하나 만들어놓기.

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: pickClubValue?.color.logoBackground,
        width: '100%',
      }}
    >
      <div
        style={{
          minWidth: '320px',
          maxWidth: '450px',
          margin: '0 auto',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Image
          src={pickClubValue?.logo || KiaImage}
          alt="Logo"
          width={300}
          style={{
            display: 'block',
            margin: '0 auto',
          }}
        />
      </div>
      <div
        style={{
          height: '42.2%',
          backgroundColor: '#F2F3F6',
          marginTop: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minWidth: '320px',
            maxWidth: '450px',
            margin: '0 auto',
            padding: '55px 24px 24px 24px',
            boxSizing: 'border-box',
            gap: '50px',
          }}
        >
          <span style={{ fontSize: '16px', fontWeight: 700, color: '#27214D' }}>
            어떤 구단을 응원하시나요?
          </span>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button type="button" className={S.triggerWrapper} aria-label="Customise options">
                {pickClubValue?.value || '구단 선택'}
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className={S.triggerList} sideOffset={5}>
                {CLUBS.map(club => (
                  <DropdownMenu.Item
                    key={club.name}
                    className={S.triggerUnit}
                    onSelect={() => handleSelectClub(club.value)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      {club.name}
                    </div>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
          <button
            type="button"
            onClick={moveToSelectClub}
            style={{
              backgroundColor: pickClubValue?.color.main,
              color: 'white',
              fontSize: '14px',
              fontWeight: 700,
              padding: '16px 0',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              boxSizing: 'border-box',
              // '&:hover': {
              //   backgroundColor: '#2DB88D',
              // },
            }}
          >
            SELECT
          </button>
        </div>
      </div>
    </div>
  );
}

export default PickClub;
