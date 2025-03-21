/* eslint-disable react/no-array-index-key */
/* eslint-disable @next/next/no-img-element */

'use client';

import html2canvas from 'html2canvas';
import pickClubInfo from '@/util/getPickClubInfo';
import { useSearchParams } from 'next/navigation';
import { PlayerUnit } from '@/components/PlayGroundField';
import DraggableItem from '@/components/DragAbleUnit';
import { Suspense, useCallback, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import * as HTML5toTouch from 'react-dnd-multi-backend'; // or any other pipeline
import { HTML5Backend } from 'react-dnd-html5-backend';
import PlayerListUnit from '@/components/lineup/PlayerListUnit';
import * as S from './Share.css';

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

  const handleDownload = async () => {
    if (!divRef.current) return;

    try {
      const canvas = await html2canvas(divRef.current, { scale: 2, useCORS: true });

      // iOS에서 정상적으로 작동하도록 Data URL 방식 사용
      const imageData = canvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = imageData;
      link.download = `${pickClubValue?.value}.png`;

      // iOS에서는 document.body.appendChild를 하지 않고 click() 호출해야 함
      document.body.appendChild(link);
      link.setAttribute('target', '_blank');
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error capturing and downloading image:', error);
    }
  };

  const imageSrc =
    typeof pickClubValue?.backLogo === 'string'
      ? pickClubValue?.backLogo
      : pickClubValue?.backLogo.src;

  return (
    <Suspense>
      <div className={S.container}>
        <div className={S.downloadWrapper} ref={divRef}>
          <div className={S.header} style={{ backgroundColor: pickClubValue?.color.main }}>
            Line up
          </div>
          <div className={S.containerWrapper}>
            <div className={S.backLogoWrapper}>
              <img alt={urlClubName || ''} src={imageSrc} width={300} />
            </div>
            <div className={S.listWrapper}>
              <DndProvider options={HTML5toTouch} backend={HTML5Backend}>
                {/* <div className={S.listWrapper}> */}
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
                        key={`${player.name}-${index}`}
                        id={player.name}
                        index={index}
                        moveCard={moveBatterPlayer}
                      >
                        <PlayerListUnit
                          index={index}
                          player={player}
                          urlClubName={urlClubName || 'kia'}
                          isShowIcon={false}
                        />
                      </DraggableItem>
                    );
                  })}
                </div>
                {/* </div> */}
              </DndProvider>
            </div>
          </div>
        </div>
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
            IMAGE DOWNLOAD
          </button>
        </div>
      </div>
    </Suspense>
  );
}

export default Share;
