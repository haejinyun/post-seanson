'use client';

import KiaImage from '@/assets/png/clubLogo/kia.png';
import EaglesImage from '@/assets/png/clubLogo/eglse.png';
import KiwoomImage from '@/assets/png/clubLogo/kiwoom.png';

import { colors } from '@/styles/colors';
import Image from 'next/image';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
// import { useClub } from '@/provider/clubProviders';
import { CLUBS } from '@/consts/text';
import { useRouter, useSearchParams } from 'next/navigation';
import * as S from './PickClub.css';

// 여기서 아무것도 안가지고 있다가 클럽을 선택하면 클럽에 맞는 색상이 context에 들어가야해.

function PickClub() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlClubName = searchParams.get('clubName');

  const moveToSelectClub = () => {
    console.log('moveToSelectClub');
    router.push(`/selectplayer?clubName=${urlClubName}`);
  };

  const pickClubInfo = (pick: string) => {
    if (pick === 'kia') {
      return {
        value: '기아 타이거즈',
        logo: KiaImage,
        color: colors.kiaColor,
      };
    }
    if (pick === 'eagles') {
      return {
        value: '한화 이글스',
        logo: EaglesImage,
        color: colors.hanwhaColor,
      };
    }
    if (pick === 'kiwoom') {
      return {
        value: '키움 히어로즈',
        logo: KiwoomImage,
        color: colors.kiwoomColor,
      };
    }
    return null;
  };
  // 여기서 클럽에 대한 정보를 가져와야함.

  // const sample = colors.kiaColor;
  console.log('clubName 매번 바뀌여서 리렌더링 안일어나기?', urlClubName);

  const handleSelectClub = (value: string) => {
    router.push(`?clubName=${value}`);
  };

  const sample = pickClubInfo(urlClubName || 'kia');
  // 일단 없으면 기아ㅏ껄로 사용하기 나중에 없는 경우도 하나 만들어놓기.

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: sample?.color.logoBackground,
        // 위 컬러 등등은 계속 바뀌어야함.
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
          src={
            sample?.logo || KiaImage
            // 사진도 계속 바뀌어야히ㅐ
          }
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
                {sample?.value || '구단 선택'}
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
              backgroundColor: sample?.color.main,
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
