'use client';

import html2canvas from 'html2canvas';
import pickClubInfo from '@/util/getPickClubInfo';
import { useSearchParams } from 'next/navigation';
import { PlayerUnit } from '@/components/PlayGroundField';
// import { AlignJustify } from 'lucide-react';
import DraggableItem from '@/components/DragAbleUnit';
import { Suspense, useCallback, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import * as HTML5toTouch from 'react-dnd-multi-backend'; // or any other pipeline
import { HTML5Backend } from 'react-dnd-html5-backend';
import PlayerListUnit from '@/components/lineup/PlayerListUnit';
import saveAs from 'file-saver';
import * as S from './LineUp.css';

// useRouter

function Share() {
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
  console.log('groupedPlayers', groupedPlayers);

  console.log('parsedPlayerList:', parsedPlayerList);

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

  const handleDownload = async () => {
    console.log('divRef:', divRef);
    if (!divRef.current) return;

    try {
      const div = divRef.current;
      const canvas = await html2canvas(div, { scale: 2, useCORS: true });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      canvas.toBlob((blob: any) => {
        if (blob !== null) {
          saveAs(blob, 'result.png');
        }
      });
    } catch (error) {
      console.error('Error converting div to image:', error);
    }
  };

  return (
    <Suspense>
      <div className={S.container}>
        <div className={S.header} style={{ backgroundColor: pickClubValue?.color.main }}>
          Line up
        </div>
        <div className={S.containerWrapper}>
          {/* //나누기 */}
          <DndProvider options={HTML5toTouch} backend={HTML5Backend}>
            <div className={S.listWrapper} ref={divRef}>
              <div className={S.playerListWrapper}>
                <PlayerListUnit
                  index={0}
                  player={mainPitcher}
                  urlClubName={urlClubName || 'kia'}
                  isShowIcon={false}
                />
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <button
              type="button"
              onClick={handleDownload}
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
              IMAGE DOWNLOAD
            </button>
            <button
              type="button"
              onClick={handleDownload}
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
              SHARE
            </button>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Share;
