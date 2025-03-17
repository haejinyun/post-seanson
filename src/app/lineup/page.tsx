import { Suspense } from 'react';
import LineUpComponent from '@/components/lineup';

function LineUp() {
  return (
    <Suspense>
      <LineUpComponent />
    </Suspense>
  );
}

export default LineUp;
