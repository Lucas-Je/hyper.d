import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export function useIsPc() {
  const [isPc, setIsPc] = useState(false);
  const mobile = useMediaQuery({ query: '(min-width:767px)' });

  useEffect(() => {
    setIsPc(mobile);
  }, [mobile]);

  return isPc;
}
