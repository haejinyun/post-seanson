import Image from 'next/image';
import baseballPark from '@/assets/png/baseballPark.png';
import pickClubInfo from '@/util/getPickClubInfo';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
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
}

function PlayGroundField({ playerList }: PlayGroundFieldProps) {
  // console.log(playerList);

  const searchParams = useSearchParams();
  const urlClubName = searchParams.get('clubName');

  const pickClubValue = pickClubInfo(urlClubName || 'kia');

  return (
    <Suspense>
      <div className={S.container}>
        <Image src={baseballPark} alt="Logo" className={S.parkImage} />
        <div className={S.positionListWrapper}>
          {playerList.map((player, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={`${player.name}-${index}`}
              className={S.playerPosition({ position: player.value })}
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
