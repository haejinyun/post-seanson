'use client';

import pickClubInfo from '@/util/getPickClubInfo';
import { useRouter, useSearchParams } from 'next/navigation';

import { useState } from 'react';
import PlayGroundField, { PlayerUnit } from '@/components/PlayGroundField';
import * as S from './SelectPlayer.css';

const POSITION_LIST = [
  '선발투수',
  '포수',
  '1루수',
  '2루수',
  '유격수',
  '3루수',
  '좌익수',
  '중견수',
  '우익수',
  '지명타자',
];

const SAMPLE_PLAYER_LIST: PlayerUnit[] = [
  {
    name: '김현수',
    position: '외야수',
    value: 'leftOutfield',
    image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/76290.jpg',
  },
  {
    name: '김현수',
    position: '외야수',
    value: 'rightOutfield',
    image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/76290.jpg',
  },
  {
    name: '김현수',
    position: '외야수',
    value: 'middleOutfield',
    image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/76290.jpg',
  },
  {
    name: '오스틴',
    position: '내야수',
    value: 'oneInfield',
    image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/76290.jpg',
  },
  {
    name: '오스틴',
    position: '내야수',
    value: 'twoInfield',
    image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
  },
  {
    name: '오스틴',
    position: '내야수',
    value: 'threeInfield',
    image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
  },
  {
    name: '오스틴',
    position: '내야수',
    value: 'shortstopInfield',
    image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
  },
  {
    name: '오스틴',
    position: '투수',
    value: 'pitcher',
    image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
  },
  {
    name: '오스틴',
    position: '포수',
    value: 'catcher',
    image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
  },
  {
    name: '오스틴',
    position: '내야수',
    value: 'dh',
    image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
  },
];

function SelectPlayer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlClubName = searchParams.get('clubName');

  const pickClubValue = pickClubInfo(urlClubName || 'kia');

  const [position, setPosition] = useState(POSITION_LIST[0]);

  const moveToSelectClub = () => {
    router.push('/pickclub');
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: pickClubValue?.color.bright,
        width: '100%',
      }}
    >
      <PlayGroundField playerList={SAMPLE_PLAYER_LIST} />
      <div
        style={{
          backgroundColor: '#fff',
          padding: ' 0 0 24px 0',
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
            boxSizing: 'border-box',
            justifyContent: 'space-between',
            height: '480px',
          }}
        >
          <div className={S.positionListWrapper}>
            {POSITION_LIST.map((positionValue, index) => (
              <button key={positionValue} type="button" onClick={() => setPosition(positionValue)}>
                <span
                  style={{
                    display: 'inline-block',
                    minWidth: 'fit-content',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: position === positionValue ? pickClubValue?.color.main : '#27214D',
                    padding: '0px 16px',
                    borderRight: index < 9 ? `1px solid #F3F3F3` : 'none',
                  }}
                >
                  {positionValue}
                </span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={moveToSelectClub}
            // className={S.moveButton}
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

export default SelectPlayer;
