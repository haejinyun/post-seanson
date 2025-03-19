import { AlignJustify } from 'lucide-react';
import { PlayerUnit } from '@/components/PlayGroundField';
import pickClubInfo from '@/util/getPickClubInfo';
import * as S from './PlayerListUnit.css';

interface PlayerListUnitProps {
  index: number;
  player: PlayerUnit;
  urlClubName: string;
  // eslint-disable-next-line react/require-default-props
  isShowIcon?: boolean;
}

function PlayerListUnit({ index, player, urlClubName, isShowIcon = true }: PlayerListUnitProps) {
  const pickClubValue = pickClubInfo(urlClubName);

  return (
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
      {isShowIcon && (
        <AlignJustify
          style={{
            marginLeft: 'auto',
            cursor: 'pointer',
            color: pickClubValue?.color.main,
            width: '24px',
          }}
        />
      )}
    </div>
  );
}

export default PlayerListUnit;
