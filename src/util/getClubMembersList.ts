import {
  DOOSAN_PLAYER,
  EAGLES_PLAYER,
  KIA_PLAYER,
  KIWOOM_PLAYER,
  LIONS_PLAYER,
  SSG_PLAYER,
} from '@/consts/text';

function getClubMembersList(pickClubValueInClubMembersList: string) {
  if (pickClubValueInClubMembersList === 'eagles') {
    return EAGLES_PLAYER;
  }
  if (pickClubValueInClubMembersList === 'kiwoom') {
    return KIWOOM_PLAYER;
  }
  if (pickClubValueInClubMembersList === 'kia') {
    return KIA_PLAYER;
  }
  if (pickClubValueInClubMembersList === 'doosan') {
    return DOOSAN_PLAYER;
  }
  if (pickClubValueInClubMembersList === 'lions') {
    return LIONS_PLAYER;
  }
  if (pickClubValueInClubMembersList === 'ssg') {
    return SSG_PLAYER;
  }

  return EAGLES_PLAYER;
}

export default getClubMembersList;
