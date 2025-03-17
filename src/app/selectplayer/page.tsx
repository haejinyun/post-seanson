import SelectPlayerComponent from '@/components/SelectPlayer';
import { Suspense } from 'react';

function SelectPlayer() {
  return (
    <Suspense>
      <SelectPlayerComponent />
    </Suspense>
  );
}

export default SelectPlayer;
