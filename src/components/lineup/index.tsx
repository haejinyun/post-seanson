'use client';

import pickClubInfo from '@/util/getPickClubInfo';
import { useRouter, useSearchParams } from 'next/navigation';
import { PlayerUnit } from '@/components/PlayGroundField';
// import { AlignJustify } from 'lucide-react';
import DraggableItem from '@/components/DragAbleUnit';
import { Suspense, useCallback, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import Image from 'next/image';
// import { DndProvider } from 'react-dnd-multi-backend';
// import { HTML5Backend } from 'react-dnd-html5-backend';
import PlayerListUnit from '@/components/lineup/PlayerListUnit';
// import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
// import * as HTML5toTouch from 'react-dnd-multi-backend'; // or any other pipeline
// import { HTML5toTouch } from 'react-dnd-multi-backend';
// /dist/esm/HTML5toTouch';

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

  const divRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    router.push(`/share?clubName=${urlClubName}`);
  };

  return (
    <Suspense>
      <div className={S.container}>
        <div className={S.header} style={{ backgroundColor: pickClubValue?.color.main }}>
          Line up
        </div>
        <div className={S.containerWrapper}>
          {/* //나누기 */}
          <div className={S.backLogoWrapper}>
            <Image alt={urlClubName || ''} src={pickClubValue?.backLogo || ''} width={300} />
          </div>
          <DndProvider backend={TouchBackend}>
            {/* backend={HTML5Backend} */}
            <div
              className={S.listWrapper}
              // style={{ backgroundColor: pickClubValue?.color.bright }}
              ref={divRef}
            >
              <div className={S.playerListWrapper}>
                <PlayerListUnit
                  index={0}
                  player={mainPitcher}
                  urlClubName={urlClubName || 'kia'}
                  isShowIcon={false}
                  isPitcher
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
          <div className={S.buttonContainerWrapper} style={{ gap: '20px' }}>
            <button
              type="button"
              onClick={handleDownload}
              className={S.buttonTest}
              style={
                {
                  '--button-hover-bg': pickClubValue?.color.hoverColor,
                  '--button-bg': pickClubValue?.color.main,
                } as React.CSSProperties
              }
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default LineUp;
