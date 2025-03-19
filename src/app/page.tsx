'use client';

import logo from '@/assets/png/iconLogo.png';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/club'); // 1초 후 /home으로 리다이렉트
    }, 1000); // 1초 동안 스플래시 화면을 보여줌

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      style={{
        backgroundColor: '#F2F3F6',
      }}
    >
      <div
        style={{
          maxWidth: '450px',
          width: '100%',
          height: '100vh',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            backgroundColor: '#F2F3F6',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '280px 0 30px 0',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}
          >
            <div style={{ width: '200px', height: '200px', margin: '0 auto' }}>
              <Image
                src={logo}
                alt="Logo"
                width={200}
                height={200}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <span style={{ fontSize: '20px', fontWeight: '700', color: '#27214D' }}>
              POST SEASON
            </span>
          </div>
          <span style={{ fontSize: '12px', fontWeight: '500', color: '#7A7A7A' }}>
            ⓒ2025. POST SEASON. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
}
