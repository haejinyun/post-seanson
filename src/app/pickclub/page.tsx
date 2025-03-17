import { Suspense } from 'react';
import PickClubComponent from '@/components/PickClub';

// 여기서 아무것도 안가지고 있다가 클럽을 선택하면 클럽에 맞는 색상이 context에 들어가야해.

function PickClub() {
  return (
    <Suspense>
      <PickClubComponent />
    </Suspense>
  );
}

export default PickClub;
