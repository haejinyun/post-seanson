// import BottomSection from '@/components/club/BottomSection';
// import TopSection from '@/components/club/TopSection';
// import MainLayout from '@/components/Layout/mainLayout';

'use client';

import { useRouter } from 'next/navigation';

function Club() {
  const router = useRouter();

  const moveToSelectClub = () => {
    router.push('/pickclub');
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#39D69C',
        width: '100%',
      }}
    >
      <div
        style={{
          minWidth: '320px',
          maxWidth: '450px',
          margin: '0 auto',
        }}
      >
        아이콘
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
            내가 선택하는 라인업
          </span>
          <span style={{ fontSize: '14px', fontWeight: 500, color: '#27214D' }}>
            전력을 분석하고 라인업을 구성해봐요!
            <br />
            응원하는 구단의 라인업을 만들고 공유해봐요.
          </span>
          <button
            type="button"
            onClick={moveToSelectClub}
            style={{
              backgroundColor: '#39D69C',
              color: 'white',
              fontSize: '14px',
              fontWeight: 700,
              padding: '16px 0',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              // '&:hover': {
              //   backgroundColor: '#2DB88D',
              // },
            }}
          >
            START
          </button>
        </div>
      </div>
    </div>
  );
}

export default Club;
