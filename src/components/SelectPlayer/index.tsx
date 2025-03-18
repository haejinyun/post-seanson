'use client';

import pickClubInfo from '@/util/getPickClubInfo';
import { useSearchParams, useRouter } from 'next/navigation';

import { Suspense, useState } from 'react';
import PlayGroundField, { PickPosition, PlayerUnit } from '@/components/PlayGroundField';
import { EAGLES_PLAYER, KIA_PLAYER, KIWOOM_PLAYER, POSITION_LIST } from '@/consts/text';
import * as S from './SelectPlayer.css';

function SelectPlayer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlClubName = searchParams.get('clubName');

  const pickClubValue = pickClubInfo(urlClubName || 'kia');

  const [pickPositionState, setPickPositionState] = useState(POSITION_LIST[0]);

  const [playerList, setPlayerList] = useState<PlayerUnit[]>([]);

  const moveToSelectClub = () => {
    localStorage.setItem('playerList', JSON.stringify(playerList));
    router.push(`/lineup?clubName=${urlClubName}`);
  };

  const clubMembersList = (pickClubValueInClubMembersList: string) => {
    if (pickClubValueInClubMembersList === 'eagles') {
      return EAGLES_PLAYER;
    }
    if (pickClubValueInClubMembersList === 'kiwoom') {
      return KIWOOM_PLAYER;
    }
    if (pickClubValueInClubMembersList === 'kia') {
      return KIA_PLAYER;
    }

    return EAGLES_PLAYER;
  };

  const PLAYER_LIST = clubMembersList(urlClubName || 'kia');

  const pickMembersList = () => {
    if (
      pickPositionState.value === 'dh' &&
      (pickPositionState.totalValue as string[]).some(value =>
        ['infielder', 'outfielder'].includes(value),
      )
    ) {
      const first = PLAYER_LIST.filter(
        player => player.position === 'outfielder' || player.position === 'infield',
      );

      const mergeList = first.reduce
        ? first.reduce(
            (acc, player) => {
              acc.position = 'infielder, outfielder'; // position 통합
              acc.playerList = [...acc.playerList, ...player.playerList]; // playerList 합치기
              return acc;
            },
            { position: '', playerList: [] }, // 초기값 설정
          )
        : { position: '', playerList: [] };

      return [mergeList];
    }

    return PLAYER_LIST.filter(player => player.position === pickPositionState.totalValue);
  };

  const membersList = pickMembersList();

  // TODO: 타입 분리하기
  const clickPlayer = (
    value: {
      name: string;
      position: string;
      image: string;
      totalPosition: string;
    },
    pickPosition: PickPosition,
  ) => {
    if (playerList.some(player => player.name === value.name)) {
      // 제외하기
      const filteredPlayerList = playerList.filter(player => player.name !== value.name);
      setPlayerList(filteredPlayerList);
    } else {
      const isExist = playerList.some(player => player.value === pickPosition);

      if (isExist) {
        const filteredPlayerList = playerList.filter(player => player.value !== pickPosition);
        setPlayerList([...filteredPlayerList, { ...value, value: pickPosition }]);
      } else {
        setPlayerList([...playerList, { ...value, value: pickPosition }]);
      }
    }
  };

  const checkDuplicate = (tt: {
    value: {
      name: string;
      position: string;
      image: string;
      totalPosition: string;
    };
    pickPosition: PickPosition;
  }) => {
    if (playerList.length === 0) {
      return false;
    }
    return playerList.some(player => player.name === tt.value.name);
  };

  return (
    <Suspense>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: pickClubValue?.color.bright,
          width: '100%',
        }}
      >
        <PlayGroundField playerList={playerList} />
        <div
          style={{
            backgroundColor: '#fff',
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
              padding: '0px 24px 24px 24px',
              boxSizing: 'border-box',
              justifyContent: 'space-between',
              maxHeight: '480px',
              height: '100%',
              minHeight: '250px',
            }}
          >
            <div>
              <div className={S.positionListWrapper}>
                {POSITION_LIST.map((positionValue, index) => (
                  <button
                    key={positionValue.name}
                    type="button"
                    onClick={() => setPickPositionState(positionValue)}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        minWidth: 'fit-content',
                        fontSize: '14px',
                        fontWeight: 600,
                        color:
                          pickPositionState === positionValue
                            ? pickClubValue?.color.main
                            : '#27214D',
                        padding: '0px 16px',
                        borderRight: index < 9 ? `1px solid #F3F3F3` : 'none',
                      }}
                    >
                      {positionValue.name}
                    </span>
                  </button>
                ))}
              </div>
              <div className={S.playerListWrapper}>
                {membersList[0]?.playerList.map((member, index) => (
                  <button
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${member}-${index}`}
                    type="button"
                    onClick={() => clickPlayer(member, pickPositionState.value as PickPosition)}
                    className={S.playerUnitButtonWrapper}
                    style={
                      checkDuplicate({
                        value: member,
                        pickPosition: pickPositionState.value as PickPosition,
                      })
                        ? { backgroundColor: '#F3F3F3', color: 'darkGray' }
                        : { backgroundColor: '#FFF', color: 'black' }
                    }
                  >
                    <div className={S.playerUnit}>{member.name}</div>
                  </button>
                ))}
              </div>
            </div>
            <button
              disabled={playerList.length !== 10}
              type="button"
              onClick={() => {
                moveToSelectClub();
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
      </div>
    </Suspense>
  );
}

export default SelectPlayer;
