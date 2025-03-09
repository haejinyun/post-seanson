'use client';

import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

interface ClubContextInfoType {
  name: string;
  value: string;
}
// 공유할 데이터의 타입 정의 (예: 클럽 정보)
interface ClubContextType {
  clubName: ClubContextInfoType | undefined;
  setClubName: (test: ClubContextInfoType) => void;
}

// 초기 값 설정 (기본값 제공)
const ClubContext = createContext<ClubContextType | undefined>(undefined);

// Provider 컴포넌트 구현
export function ClubProvider({ children }: { children: ReactNode }) {
  const [clubName, setClubName] = useState<ClubContextInfoType | undefined>(undefined);
  const value = useMemo(() => ({ clubName, setClubName }), [clubName?.name, clubName?.value]);

  return <ClubContext.Provider value={value}>{children}</ClubContext.Provider>;
}

// 커스텀 Hook으로 사용하기 쉽게 만들기
export function useClub() {
  const context = useContext(ClubContext);
  if (!context) {
    throw new Error('useClub must be used within a ClubProvider');
  }
  return context;
}
