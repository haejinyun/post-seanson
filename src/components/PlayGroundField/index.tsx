import Image from 'next/image';
import baseballPark from '@/assets/png/baseballPark.png';
import pickClubInfo from '@/util/getPickClubInfo';
import { useSearchParams } from 'next/navigation';
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
  name: string;
  position: string;
  value: PickPosition;
  image: string;
}

interface PlayGroundFieldProps {
  playerList: PlayerUnit[];
}

function PlayGroundField({ playerList }: PlayGroundFieldProps) {
  console.log(playerList);
  const searchParams = useSearchParams();
  const urlClubName = searchParams.get('clubName');

  const pickClubValue = pickClubInfo(urlClubName || 'kia');

  return (
    <div className={S.container}>
      <Image src={baseballPark} alt="Logo" className={S.parkImage} />
      <div className={S.positionListWrapper}>
        {playerList.map(player => (
          <div
            key={player.name}
            className={S.playerPosition({ position: player.value })}
            style={{ borderColor: pickClubValue?.color.main }}
          >
            <Image src={player.image} fill alt={player.name} className={S.playerImage} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayGroundField;
