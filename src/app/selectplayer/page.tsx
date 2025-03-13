'use client';

import pickClubInfo from '@/util/getPickClubInfo';
import { useSearchParams } from 'next/navigation';

import { useState } from 'react';
import PlayGroundField, { PickPosition, PlayerUnit } from '@/components/PlayGroundField';
import { EAGLES_PLAYER, POSITION_LIST } from '@/consts/text';
import * as S from './SelectPlayer.css';

// const SAMPLE_PLAYER_LIST: PlayerUnit[] = [
//   {
//     name: '김현수',
//     position: '외야수',
//     value: 'leftOutfield',
//     image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/76290.jpg',
//   },
//   {
//     name: '김현수',
//     position: '외야수',
//     value: 'rightOutfield',
//     image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/76290.jpg',
//   },
//   {
//     name: '김현수',
//     position: '외야수',
//     value: 'middleOutfield',
//     image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/76290.jpg',
//   },
//   {
//     name: '오스틴',
//     position: '내야수',
//     value: 'oneInfield',
//     image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/76290.jpg',
//   },
//   {
//     name: '오스틴',
//     position: '내야수',
//     value: 'twoInfield',
//     image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
//   },
//   {
//     name: '오스틴',
//     position: '내야수',
//     value: 'threeInfield',
//     image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
//   },
//   {
//     name: '오스틴',
//     position: '내야수',
//     value: 'shortstopInfield',
//     image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
//   },
//   {
//     name: '오스틴',
//     position: '투수',
//     value: 'pitcher',
//     image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
//   },
//   {
//     name: '오스틴',
//     position: '포수',
//     value: 'catcher',
//     image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
//   },
//   {
//     name: '오스틴',
//     position: '내야수',
//     value: 'dh',
//     image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
//   },
// ];

function SelectPlayer() {
  // const router = useRouter();
  const searchParams = useSearchParams();
  const urlClubName = searchParams.get('clubName');

  const pickClubValue = pickClubInfo(urlClubName || 'kia');

  const [pickPositionState, setPickPositionState] = useState(POSITION_LIST[0]);

  const [playerList, setPlayerList] = useState<PlayerUnit[]>([]);

  const moveToSelectClub = () => {
    console.log('playerList onClick:', playerList);
    // router.push('/pickclub');
  };

  console.log('playerList:', playerList);

  const pickMembersList = () => {
    if (
      pickPositionState.value === 'dh' &&
      (pickPositionState.totalValue as string[]).some(value =>
        ['infield', 'outfield'].includes(value),
      )
    ) {
      const first = EAGLES_PLAYER.filter(
        player => player.position === 'outfield' || player.position === 'infield',
      );

      const mergeList = first.reduce
        ? first.reduce(
            (acc, player) => {
              acc.position = 'infield, outfield'; // position 통합
              acc.playerList = [...acc.playerList, ...player.playerList]; // playerList 합치기
              return acc;
            },
            { position: '', playerList: [] }, // 초기값 설정
          )
        : { position: '', playerList: [] };

      return [mergeList];
    }

    return EAGLES_PLAYER.filter(player => player.position === pickPositionState.totalValue);
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
    // TODO: 이미 있는 포지션은 못들어가야해

    setPlayerList([...playerList, { ...value, value: pickPosition }]);
  };

  // console.log('playerList playerList playerList:', playerList);

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
      <PlayGroundField playerList={playerList} />
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
            padding: '0px 24px 24px 24px',
            boxSizing: 'border-box',
            justifyContent: 'space-between',
            maxHeight: '480px',
            height: '100%',
            minHeight: '250px',
            // minHeight: '350px',
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
                        pickPositionState === positionValue ? pickClubValue?.color.main : '#27214D',
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
                  // TODO: 여기서 이미 뽑힌 선수는 List에서 disable 시키기
                  // 만약 중견수에서 플로리얼을 뽑았으면 우익수에서는 플로리얼이 disable처리 되어야하고, 다시 중견수 섹션에서는 active처리 되어야함

                  // eslint-disable-next-line react/no-array-index-key
                  key={`${member}-${index}`}
                  type="button"
                  onClick={() => clickPlayer(member, pickPositionState.value as PickPosition)}
                  className={S.playerUnitButtonWrapper}
                >
                  <div className={S.playerUnit}>{member.name}</div>
                </button>
              ))}
            </div>
          </div>
          <button
            disabled={playerList.length !== 9}
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

export default SelectPlayer;
