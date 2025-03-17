// import BottomSection from '@/components/club/BottomSection';
// import TopSection from '@/components/club/TopSection';
// import MainLayout from '@/components/Layout/mainLayout';

import { Suspense } from 'react';
import ClubComponent from '@/components/Club';

function Club() {
  return (
    <Suspense>
      <ClubComponent />
    </Suspense>
  );
}

export default Club;
