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
