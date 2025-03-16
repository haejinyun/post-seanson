'use client';

import pickClubInfo from '@/util/getPickClubInfo';
import { useSearchParams } from 'next/navigation';
import { PlayerUnit } from '@/components/PlayGroundField';
import { AlignJustify } from 'lucide-react';
import * as S from './LineUp.css';

// useRouter

function LineUp() {
  const searchParams = useSearchParams();
  const urlClubName = searchParams.get('clubName');
  const pickClubValue = pickClubInfo(urlClubName || 'kia');
  const playerList = localStorage.getItem('playerList');
  const parsedPlayerList: PlayerUnit[] = playerList ? JSON.parse(playerList) : [];

  const groupedPlayers = parsedPlayerList.reduce(
    (acc, player) => {
      if (player.totalPosition === 'pitcher') {
        acc.pitcher.player.push(player);
      } else {
        acc.batter.player.push(player);
      }
      return acc;
    },
    { pitcher: { player: [] }, batter: { player: [] } } as {
      pitcher: { player: PlayerUnit[] };
      batter: { player: PlayerUnit[] };
    },
  );

  const mainPitcher = groupedPlayers.pitcher.player[0];
  console.log('groupedPlayers', groupedPlayers);

  console.log('parsedPlayerList:', parsedPlayerList);

  return (
    <div className={S.container} style={{ backgroundColor: pickClubValue?.color.bright }}>
      <div className={S.header} style={{ backgroundColor: pickClubValue?.color.main }}>
        Line up
      </div>

      <div className={S.listWrapper}>
        <div className={S.playerUnit} style={{ borderColor: pickClubValue?.color.main }}>
          <div className={S.playerInfoSection}>
            <span className={S.playerName} style={{ color: pickClubValue?.color.main }}>
              선발투수
            </span>
            <img src={mainPitcher.image} alt={mainPitcher.name} style={{ width: '40px' }} />
            <span className={S.playerName}>{mainPitcher.value}</span>
            <span className={S.playerName}>|</span>
            <span className={S.playerName}>{mainPitcher.name}</span>
          </div>
        </div>
        {groupedPlayers.batter.player.map((player, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={`${player.name}-${index}`}
            className={S.playerUnit}
            style={{ borderColor: pickClubValue?.color.main }}
          >
            <div className={S.playerInfoSection}>
              <span className={S.playerName} style={{ color: pickClubValue?.color.main }}>
                {index + 1}.
              </span>
              <img src={player.image} alt={player.name} style={{ width: '40px' }} />
              <span className={S.playerName}>{player.value}</span>
              <span className={S.playerName}>|</span>
              <span className={S.playerName}>{player.name}</span>
            </div>
            <AlignJustify
              style={{
                marginLeft: 'auto',
                cursor: 'pointer',
                color: pickClubValue?.color.main,
                width: '24px',
              }}
            />
          </div>
        ))}
        <button
          // disabled={playerList.length !== 10}
          type="button"
          onClick={() => {
            console.log('playerList:', playerList);
            // moveToSelectClub();
          }}
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
  );
}

export default LineUp;
