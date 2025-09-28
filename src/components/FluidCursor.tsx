'use client';
import { useEffect } from 'react';

import fluidCursor from '@/hooks/use-FluidCursor';

const FluidCursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);

  return (
    <div className="fixed top-0 left-0 -z-10 pointer-events-none">
      <canvas id="fluid" className="h-screen w-screen pointer-events-none" />
    </div>
  );
};
export default FluidCursor;
