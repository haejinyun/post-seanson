'use client';

import pickClubInfo from '@/util/getPickClubInfo';
import { useRouter, useSearchParams } from 'next/navigation';
import { PlayerUnit } from '@/components/PlayGroundField';
// import { AlignJustify } from 'lucide-react';
import DraggableItem from '@/components/DragAbleUnit';
import { Suspense, useCallback, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PlayerListUnit from '@/components/lineup/PlayerListUnit';
import * as S from './LineUp.css';

// useRouter

function LineUp() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const urlClubName = searchParams.get('clubName');
  const pickClubValue = pickClubInfo(urlClubName || 'kia');
  const playerList = localStorage.getItem('playerList');
  const parsedPlayerList: PlayerUnit[] = playerList ? JSON.parse(playerList) : [];

  const [groupedPlayers, setGroupedPlayers] = useState(() => {
    return parsedPlayerList.reduce(
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
  });

  const mainPitcher = groupedPlayers.pitcher.player[0];

  const moveBatterPlayer = useCallback((dragIndex: number, hoverIndex: number) => {
    setGroupedPlayers(prevState => {
      const newBatterPlayers = [...prevState.batter.player]; // 기존 배열 복사

      // 요소 이동 (dragIndex 요소를 잘라서 hoverIndex 위치에 삽입)
      const [movedItem] = newBatterPlayers.splice(dragIndex, 1);
      newBatterPlayers.splice(hoverIndex, 0, movedItem);

      return {
        ...prevState,
        batter: {
          ...prevState.batter,
          player: newBatterPlayers, // 변경된 배열 적용
        },
      };
    });
  }, []);

  console.log('groupedPlayers:', groupedPlayers);

  const divRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    router.push(`/share?clubName=${urlClubName}`);
    // console.log('divRef:', divRef);
    // if (!divRef.current) return;
    // try {
    //   const div = divRef.current;
    //   const canvas = await html2canvas(div, { scale: 2, useCORS: true });
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   canvas.toBlob((blob: any) => {
    //     if (blob !== null) {
    //       saveAs(blob, 'result.png');
    //     }
    //   });
    // } catch (error) {
    //   console.error('Error converting div to image:', error);
    // }
  };

  return (
    <Suspense>
      <div className={S.container}>
        <div className={S.header} style={{ backgroundColor: pickClubValue?.color.main }}>
          Line up
        </div>
        <div className={S.containerWrapper}>
          {/* //나누기 */}
          <DndProvider backend={HTML5Backend}>
            <div
              className={S.listWrapper}
              style={{ backgroundColor: pickClubValue?.color.bright }}
              ref={divRef}
            >
              <div className={S.playerListWrapper}>
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
                {groupedPlayers.batter.player.map((player, index) => {
                  return (
                    <DraggableItem
                      // eslint-disable-next-line react/no-array-index-key
                      key={`${player.name}-${index}`}
                      id={player.name}
                      index={index}
                      moveCard={moveBatterPlayer}
                    >
                      <PlayerListUnit
                        index={index}
                        player={player}
                        urlClubName={urlClubName || 'kia'}
                      />
                    </DraggableItem>
                  );
                })}
              </div>
            </div>
          </DndProvider>
          {/* //나누기 */}
          <button
            type="button"
            // onClick={() => {
            //   console.log('playerList:', playerList);
            //   handleDownload();
            //   // moveToSelectClub();
            // }}
            onClick={handleDownload}
            style={{
              backgroundColor: pickClubValue?.color.main,
              color: 'white',
              fontSize: '14px',
              fontWeight: 700,
              padding: '16px 24px',

              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              boxSizing: 'border-box',
              // padding: '55px 24px 24px 24px',
              // '&:hover': {
              //   backgroundColor: '#2DB88D',
              // },
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </Suspense>
  );
}

export default LineUp;
