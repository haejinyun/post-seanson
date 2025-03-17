import { Suspense } from 'react';
import ShareComponent from '@/components/Share';

function LineUp() {
  return (
    <Suspense>
      <ShareComponent />
    </Suspense>
  );
}

export default LineUp;
