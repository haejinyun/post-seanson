/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import baseballPark from '@/assets/png/baseballPark.png';
import pickClubInfo from '@/util/getPickClubInfo';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { POSITION_LIST } from '@/consts/text';
import * as S from './PlayGroundField.css';

export type PickPosition =
  | 'middleOutfield'
  | 'leftOutfield'
  | 'rightOutfield'
  | 'oneInfield'
  | 'twoInfield'
  | 'shortstopInfield'
  | 'threeInfield'
  | 'pitcher'
  | 'catcher'
  | 'dh';

export interface PlayerUnit {
  name: string; // 류현진, 채은성
  position: string; // 투수, 포수, 내야수, 외야수
  totalPosition: string; // pitcher, catcher, infield, outfield
  value: PickPosition; // 클릭된 위치에 따라서 추가적으로 들어갈 부분 "pitcher" | "catcher" | "oneInfield" | "twoInfield" | "shortstopInfield" | "threeInfield" | "leftOutfield" | "middleOutfield" | "rightOutfield" | "dh"
  image: string;
}

interface PlayGroundFieldProps {
  playerList: PlayerUnit[];
  pickPositionState:
    | {
        name: string;
        totalValue: string;
        value: string;
      }
    | {
        name: string;
        totalValue: string[];
        value: string;
      };
  setPickPositionState: (
    // 진짜 정리해야함,,,
    value:
      | {
          name: string;
          totalValue: string;
          value: string;
        }
      | {
          name: string;
          totalValue: string[];
          value: string;
        },
  ) => void;
}

function PlayGroundField({
  playerList,
  pickPositionState,
  setPickPositionState,
}: PlayGroundFieldProps) {
  const searchParams = useSearchParams();
  const urlClubName = searchParams.get('clubName');

  const pickClubValue = pickClubInfo(urlClubName || 'kia');

  return (
    <Suspense>
      <div className={S.container}>
        <Image src={baseballPark} alt="Logo" className={S.parkImage} />
        <div className={S.positionListWrapper}>
          {POSITION_LIST.map((player, index) => (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              onClick={() => setPickPositionState(player)}
              type="button"
              key={`${player.value}-${index}`}
            >
              <div
                className={S.playerPosition({ position: player.value as PickPosition })}
                style={
                  player.value === pickPositionState.value
                    ? {
                        borderColor: pickClubValue?.color.main,
                        backgroundColor: pickClubValue?.color.hoverColor,
                      }
                    : {
                        borderColor: pickClubValue?.color.main,
                        backgroundColor: pickClubValue?.color.background,
                      }
                }
              />
            </button>
          ))}
        </div>
        <div className={S.positionListWrapper}>
          {playerList.map((player, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={`${player.name}-${index}`}
              className={S.playerPositionPlayerImage({ position: player.value })}
              style={{ borderColor: pickClubValue?.color.main }}
            >
              <Image src={player.image} fill alt={player.name} className={S.playerImage} />
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}

export default PlayGroundField;
