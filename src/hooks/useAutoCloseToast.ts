import { useEffect } from 'react';

type PropsType = {
  closeToast: () => void;
};

const DELAY_TIME = 3000;

export const useAutoCloseToast = ({ closeToast }: PropsType): void => {
  useEffect(() => {
    const id = setTimeout(closeToast, DELAY_TIME);

    return () => {
      clearTimeout(id);
    };
  }, [closeToast]);
};
