import { useEffect, useState } from 'react';

type ReturnToastType = {
  id: string;
  isLoad: boolean;
};

export const useToastsPortal = (): ReturnToastType => {
  const [isLoad, setLoad] = useState(false);

  useEffect(() => {
    const div = document.createElement('div');

    div.id = 'toast';

    div.style.position = 'fixed';
    div.style.left = '0px';
    div.style.bottom = '0px';

    document.querySelector('body')?.appendChild(div);

    setLoad(true);

    return () => {
      document.querySelector('body')?.removeChild(div);
    };
  }, []);

  return { id: 'toast', isLoad };
};
